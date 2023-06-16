import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/styles/loginRegister.css";

const LoginRegister = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const toggleForm = () => {
    setLoginForm(!loginForm);
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="login-register-form">
            <h2 className="text-center">{loginForm ? "Log In" : "Register"}</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className="form-control login-register-submit-btn mt-4"
              >
                {loginForm ? "Log In" : "Register"}
              </Button>
              <p className="toggle-form" onClick={toggleForm}>
                {loginForm ? "Create an account" : "Already have an account?"}
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;
