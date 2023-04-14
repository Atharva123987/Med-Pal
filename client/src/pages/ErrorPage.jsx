import React from "react";
import tempImg from '../assets/Access-Denied.jpg'
const ErrorPage = () => {
	return (
		<div style={{  textAlign: "center", padding: "50px" }}>
			<h1 style={{ color: "#721c24", fontSize: "3rem" }}>Stop!</h1>
			<p style={{ color: "#721c24", fontSize: "1.5rem" }}>Unauthorised Access</p>
			<img
				src={tempImg}
				style={{ width: "5rem" }}
			/>
		</div>
	);
};

export default ErrorPage;
