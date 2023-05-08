import React from "react";
import "./ErrorPage.css";

const ErrorPageLink = () => {
	return (
		<div className="error-page-container">
			<h1 className="error-page-title">Oh no!</h1>
			<p className="error-page-message">Invalid Link</p>
			<button
				className="btn btn-primary"
				onClick={() => (window.location.href = "/")}
			>
				Go to Home
			</button>
		</div>
	);
};

export default ErrorPageLink;
