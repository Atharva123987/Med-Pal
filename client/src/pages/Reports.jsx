import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import { Button, Toast } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileImage } from "react-icons/fa";
import tempImg from '../assets/badge.png'
import { GrSelect } from 'react-icons/gr'
import './reports.css'
import { TbReportMedical } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import Sidenav from '../components/Sidenav'
import Footer from '../components/Footer'

const Reports = () => {
	const [reports, setReports] = useState([]);
	const { user } = useAuthContext();
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFileSelected, setIsFileSelected] = useState(false);
	const [fileUrl, setFileUrl] = useState(null);
	const [currentFile, setCurrentFile] = useState(null);
	const [extension, setExtension] = useState(null);
	const[showSuccess, setShowSuccess] = useState(false);

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
		console.log(selectedFile.name);
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
			setShowSuccess(true);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDelete = async(id) =>{
		const axios = require("axios");

		let config = {
			method: "delete",
			maxBodyLength: Infinity,
			url:
				"https://medpal-backend.onrender.com/api/reportsStore/" + id,
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};

		axios
			.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log(error);
			});

	}

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
			<div style={{position:"relative"}}>
			<Toast
					onClose={() => {
						setShowSuccess(false);
					}}
					bg="success"
					show={showSuccess}
					delay={2000}
					autohide
					style={{ position: "absolute", zIndex: "20", right:"1rem" }}
				>
					<Toast.Header>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded me-2"
							alt=""
						/>
						<strong className="me-auto text-success">
							File uploaded successfully!
						</strong>
					</Toast.Header>
					<Toast.Body className="text-white">
						{selectedFile?selectedFile.name:"No file selected"}
					</Toast.Body>
				</Toast>
				<div className="page-container">
					<Sidenav/>
			<div className="my-4" id="reports-page-container">

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
							<Button type="submit" disabled={!isFileSelected} >
								Upload
							</Button>
						</Form.Group>
					</Form>
					<h4 className="my-3">All reports</h4>
					<ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
						{reports.map((report) => (
							<li key={report._id}>
								<div className="d-flex justify-content-between my-3">
									<Button id="reports-button" className="d-flex  align-items-center justify-content-between" onClick={() => {
										setCurrentFile(report);
										setExtension(report.reportResourceURL.split(".").pop());
									}}>
										<span className="">{report.reportName.length <= 20 ? report.reportName : report.reportName.slice(0, 20) + "..."}</span>
										<Button variant="danger" onClick={()=>handleDelete(report._id)}><AiFillDelete/></Button>

									</Button>

								</div>
							</li>
						))}
					</ul>
				</div>
				{currentFile ?
					(
						<div id="viewer-container" style={{ backgroundColor: "rgb(23,29,61)", color: "white" }} >
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
						<div id="viewer-container" style={{ backgroundColor: "rgb(23,29,61)", color: "white" }}>
							<div className="d-flex justify-content-between" >
								<h3>Reports viewer</h3>


							</div>
							<div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgb(147,148,150,0.3)", width: '100%', minHeight: "20rem" }}>
								<span style={{ fontSize: "1.2rem" }}><GrSelect />Select a file to view</span>
							</div>

						</div>
					)
				}

			</div>
			</div>
			<Footer/>
			</div>
		</>
	);

}

export default Reports;