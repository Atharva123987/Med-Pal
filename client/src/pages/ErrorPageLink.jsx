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
			<img
				src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg"
				alt="Error page illustration"
				className="error-page-illustration"
			/>
		</div>
	);
};

export default ErrorPageLink;
