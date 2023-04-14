import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileImage } from "react-icons/fa";
import tempImg from '../assets/badge.png'
const Reports = () => {
	const [reports, setReports] = useState([]);
	const { user } = useAuthContext();
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFileSelected, setIsFileSelected] = useState(false);
	const [fileUrl, setFileUrl] = useState(null);

	useEffect(() => {
		const fetchReports = async () => {
			try {
				const response = await axios.get(
					"http://localhost:4000/api/reportsStore",
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					}
				);
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

		try {
			const formData = new FormData();
			formData.append("file", selectedFile);
			const response = await axios.post(
				"http://localhost:4000/api/reportsStore",
				formData,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
						"Content-Type": "multipart/form-data",
					},
				}
			);

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
		  <div className="d-flex">
			<div>
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
			</div>
	  
			<div>
			  <h2>My Reports</h2>
			  <ul>
            {reports.map((report) => (
              <li key={report._id}>
                {report.reportResourceURL.match(/\.(jpeg|jpg|png)$/) ? (
                  <img
                    alt="report image"
                    src={report.reportResourceURL}
                    srcSet={`${report.reportResourceURL} 500w,
                         ${report.reportResourceURL}?w=1000 1000w,
                         ${report.reportResourceURL}?w=1500 1500w`}
                    sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    width="150"
                    height="150"
                  />
                ) : (
                  <img
                    alt="report image"
                    src={`https://docs.google.com/gview?url=${report.reportResourceURL}&embedded=true`}
                    width="150"
                    height="150"
                    frameBorder="0"
                    scrolling="no"
                    style={{ border: "none" }}
                  />
				  
                )}
                <div>
                  {/* <span>{report.reportName}</span> */}
                  <Button variant="success" onClick={() => handleDownloadReport(report)}>
                    Download {getFileTypeIcon(report.reportName)}
                  </Button>
                </div>
                <iframe
  src={`https://docs.google.com/gview?url=${report.reportResourceURL}&embedded=true`}
  style={{ width: "100%", height: "500px", border: "none" }}
  frameBorder="0"
  scrolling="no"
  
/>
<embed
  src={`https://docs.google.com/gview?url=${report.reportResourceURL}&embedded=true`}
  style={{ width: "100%", height: "500px" }}
  type="application/pdf"
/>

              </li>
            ))}
          </ul>
			</div>
		  </div>
		</>
	  );
	  }
	  export default Reports;
	  