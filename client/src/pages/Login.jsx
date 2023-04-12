import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent Reload

    // !!!POST REQUEST
    fetch("http://example.com/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(email, pass);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center border mt-2 mt-md-4 mt-lg-5"
      style={{ maxWidth: "400px" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h3 className="mt-3">Login Page</h3>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          {/* <Link to = {'/dashboard'}> */}
          <Button variant="primary" type="submit" className="mb-3 text-center">
            Submit
          </Button>
          {/* </Link> */}
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Text className="text-muted">
            Doesn't have an account,
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "blue", fontSize: 16 }}
            >
              Register Here
            </Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
