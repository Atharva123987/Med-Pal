import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/Navbar";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, pass);
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
        <Navbar />
      <div className="outer-container">
        <Container className="login-container">
          <Row>
            <Col md="6" className="login-img">
              <img src="https://ik.imagekit.io/medpal/6333040.webp?updatedAt=1683912866695" alt="Login" />
            </Col>
            <Col md="6" className="login">
              <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                  <h3 className="mt-4 text-center">Welcome Back!</h3>
                  <h5 className="mb-3 text-center">Login to your Account </h5>
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

                <Form.Group className="text-center mt-5 mb-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="mb-3 text-center"
                    disabled={isLoading}
                  >
                    Login
                  </Button>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Text className="text-muted">
                    Don't have an account? 
                    <br></br>
                    <Link
                      to={"/register"}
                      style={{
                        textDecoration: "none",
                        color: "blue",
                        fontSize: 14,
                      }}
                    >
                      Register Here
                    </Link>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
