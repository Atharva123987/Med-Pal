import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
	return (
		<div className="error-page-container">
			<h1 className="error-page-title">Stop!</h1>
			<p className="error-page-message">Unauthorised Access</p>
			<img
				src="https://media.istockphoto.com/id/1369736010/photo/he-was-scanning-his-fingerprints-to-gain-access-to-important-information.jpg?b=1&s=170667a&w=0&k=20&c=VQNvbqzpeRr6rljZnsorEI5iMrzPXu5iRyU5IqRsVtU="
				alt="Error page illustration"
				className="error-page-illustration"
			/>
		</div>
	);
};

export default ErrorPage;
