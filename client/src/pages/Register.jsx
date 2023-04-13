import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRegister } from "../hooks/useRegister";

export const Register = (props) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const { register, error, isLoading } = useRegister();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await register(email, pass, name, age, gender, height, weight);
	};

	return (
		<Container
			className="d-flex justify-content-center align-items-center border mt-2 mt-md-4 mt-lg-5"
			style={{ maxWidth: "400px" }}
		>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<h3 className="mt-3">Register</h3>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Full Name"
						name="name"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Row>
					<Col>
						<Form.Group className="mb-3">
							<Form.Label>Age</Form.Label>
							<Form.Control
								type="text"
								placeholder="Age"
								onChange={(e) => {
									setAge(e.target.value);
								}}
							/>
						</Form.Group>
					</Col>

					<Col>
						<Form.Group className="mb-3">
							<Form.Label>Gender</Form.Label>

							<Form.Control
								as="select"
								name="gender"
								onChange={(e) => {
									setGender(e.target.value);
								}}
							>
								<option value="">Select gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3">
							<Form.Label>Height</Form.Label>
							<Form.Control
								type="text"
								placeholder="Height in cm"
								onChange={(e) => {
									setHeight(e.target.value);
								}}
							/>
						</Form.Group>
					</Col>

					<Col>
						<Form.Group className="mb-3">
							<Form.Label>Weight</Form.Label>
							<Form.Control
								type="text"
								placeholder="Weight in kg"
								onChange={(e) => {
									setWeight(e.target.value);
								}}
							/>
						</Form.Group>
					</Col>
				</Row>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter Password"
						onChange={(e) => {
							setPass(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="text-center">
					<Button
						variant="primary"
						type="submit"
						className="mb-3 text-center"
						disabled={isLoading}
					>
						Register
					</Button>
					{error && <div className="error">{error}</div>}
				</Form.Group>

				<Form.Group className="mb-5">
					<Form.Text className="text-muted">
						Already Have an Account,
						<Link
							to={"/login"}
							style={{
								textDecoration: "none",
								color: "blue",
								fontSize: 16,
							}}
						>
							Login Here
						</Link>
					</Form.Text>
				</Form.Group>
			</Form>
		</Container>
	);
};
export default Register;
