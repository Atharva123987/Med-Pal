import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileImage } from "react-icons/fa";
import tempImg from '../assets/badge.png'
import {GrSelect} from 'react-icons/gr'
import './reports.css'
import { TbReportMedical } from "react-icons/tb";
const Reports = () => {
	const [reports, setReports] = useState([]);
	const { user } = useAuthContext();
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFileSelected, setIsFileSelected] = useState(false);
	const [fileUrl, setFileUrl] = useState(null);
	const [currentFile, setCurrentFile] = useState(null);
	const [extension, setExtension] = useState(null);

	useEffect(() => {
		const fetchReports = async () => {
			try {
				const response = await axios.get("https://medpal-backend.onrender.com/api/reportsStore", {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				});
				setReports(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchReports();
	}, [user.token, fileUrl]);

	const handleFileSelect = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFileSelected(true);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (selectedFile.size > 2 * 1024 * 1024) {
			alert("File size should be less than 2MB");
			return;
		}

		try {
			const formData = new FormData();
			formData.append("file", selectedFile);
			const response = await axios.post("https://medpal-backend.onrender.com/api/reportsStore", formData, {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "multipart/form-data",
				},
			});

			setFileUrl(response.data.fileUrl);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDownloadReport = async (report) => {
		try {
			const response = await axios.get(report.reportResourceURL, {
				responseType: "blob",
			});
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", report.reportName);
			document.body.appendChild(link);
			link.click();
		} catch (error) {
			console.error(error);
		}
	};

	const getFileTypeIcon = (fileName) => {
		const extension = fileName.split(".").pop();
		switch (extension) {
			case "pdf":
				return <FaFilePdf />;
			case "png":
			case "jpg":
			case "jpeg":
				return <FaFileImage />;
			case "doc":
			case "docx":
				return <FaFileWord />;
			case "xls":
			case "xlsx":
				return <FaFileExcel />;
			default:
				return null;
		}
	};

	return (
		<>
			<Navbar buttons='true' />
			<div className="my-4" id="reports-page-container">
				<div>

				</div>

				<div id="reports-container">
				<div>
				<h3 className="charts-heading">
					My Reports <TbReportMedical style={{ fontSize: "30px" }} />
				</h3>
			</div>
					<h2>My Reports</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicFile">
							<Form.Label>Upload a file</Form.Label>
							<Form.Control type="file" placeholder="Choose a file" onChange={handleFileSelect} />
							<Form.Text className="text-muted">
								The file <b>should not exceed 2MB</b> in size.
							</Form.Text>
							<Button type="submit" disabled={!isFileSelected}>
								Upload
							</Button>
						</Form.Group>
					</Form>
					<h4 className="my-3">All reports</h4>
					<ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
						{reports.map((report) => (
							<li key={report._id}>
								<div className="d-flex justify-content-between my-3">
									<Button id="reports-button" onClick={() => {
										setCurrentFile(report);
										setExtension(report.reportResourceURL.split(".").pop());
									}}>
										<span className="mx-2">{report.reportName.length <= 20 ? report.reportName : report.reportName.slice(0, 20) + "..."}</span>
									</Button>

								</div>
							</li>
						))}
					</ul>
				</div>
				{currentFile ?
					(
						<div id="viewer-container" style={{backgroundColor:"rgb(23,29,61)",color:"white"}} >
							<div className="d-flex justify-content-between" >
								<h3>Reports viewer</h3>


								<Button variant="success" id="download-button" onClick={() => handleDownloadReport(currentFile)}>
									Download {getFileTypeIcon(currentFile.reportName)}
								</Button>

							</div>
							<div id="viewer">
							{(extension === "pdf" ? (
								<embed
									src={`https://docs.google.com/gview?url=${currentFile?.reportResourceURL}&embedded=true`}
									id="viewer-embed"
									type="application/pdf"
								/>
							) : (
								<img
									src={currentFile.reportResourceURL}
									
									id="viewer-image"
									alt="report image"
								/>
							))}
							</div>
						</div>)
					:
					(
						<div id="viewer-container" style={{backgroundColor:"rgb(23,29,61)", color:"white"}}>
							<div className="d-flex justify-content-between" >
								<h3>Reports viewer</h3>
								

							</div>
							<div className="d-flex justify-content-center align-items-center" style={{backgroundColor:"rgb(147,148,150,0.3)", width:'100%', height:"90%"}}>
									<span style={{fontSize:"1.2rem"}}><GrSelect />Select a file to view</span>
									</div>

						</div>
					)
				}

			</div>
		</>
	);

}

export default Reports;