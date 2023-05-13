import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useRegister } from "../hooks/useRegister";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

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
    <>
        <Navbar />
      <div className="outer-container">
        <Container className="register-container">
          <Row>
            <Col md="6" className="register-img">
              <img src="https://ik.imagekit.io/medpal/registerForm.webp?updatedAt=1683913064005" alt="Login" />
            </Col>
            <Col md="6" className="register">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <h3 className="mt-3 text-center">Get started with us!</h3>
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
                    placeholder="Min 8 chars with a special symbol and caps letter"
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

                <Form.Group>
                  <Form.Text className="text-muted">
                    Already Have an Account?
                    <br></br>
                    <Link
                      to={"/login"}
                      style={{
                        textDecoration: "none",
                        color: "blue",
                        fontSize: 14,
                      }}
                    >
                      Login Here
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
export default Register;
