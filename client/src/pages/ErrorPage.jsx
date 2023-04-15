import React from "react";
import tempImg from '../assets/Access-Denied.jpg'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const ErrorPage = () => {
	return (
		<div style={{  textAlign: "center", padding: "50px" }}>
			<h1 style={{ color: "#721c24", fontSize: "3rem" }}>Stop!</h1>
			<p style={{ color: "#721c24", fontSize: "1.5rem" }}>Unauthorised Access</p>
			<img
				src={tempImg}
				style={{ width: "5rem" }}
			/>
			<Link><Button>Go to Home</Button></Link>
		</div>
	);
};

export default ErrorPage;
