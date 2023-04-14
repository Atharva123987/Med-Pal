import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const ReportsList = () => {
	const [reports, setReports] = useState([]);
	const { user } = useAuthContext();

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
	}, [user.token]);

	const handleDownloadReport = async (report) => {
		try {
			const response = await axios.get(report.reportResourceURL, {
				responseType: "blob",
			});
			const url = window.URL.createObjectURL(new Blob([response.data]));
			console.log(url);
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", report.reportName);
			document.body.appendChild(link);
			link.click();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h2>My Reports</h2>
			<ul>
				{reports.map((report) => (
					<li key={report._id}>
						{report.reportName}
						<button onClick={() => handleDownloadReport(report)}>
							Download
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ReportsList;
