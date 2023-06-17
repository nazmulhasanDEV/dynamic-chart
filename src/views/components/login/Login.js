import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axiosConfig from "../../../utils/axiosConfig";
import { useAuth } from "../../../auth/AuthContext";

const LOGIN_URL = "/auth/api/login/";

const LoginRegister = () => {
  const { auth, setAuth } = useAuth();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoginRequestSent, setIsLoginRequestSent] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLoginRequest = async (e) => {
    e.preventDefault();
    setIsLoginRequestSent(true);
    // Handle form submission logic
    const response = await axiosConfig.post(LOGIN_URL, loginCredentials);
    if (response?.data?.access) {
      Cookies.set("jwt", response?.data?.access, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });
      setAuth({
        ...auth,
        isAuthenticated: true,
        email: loginCredentials?.email,
      });
      navigate(from, { replace: true });
      setLoginCredentials({ email: null, password: null });
    }
    setIsLoginRequestSent(false);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="login-register-form">
            <h2 className="text-center">Log In</h2>
            <Form>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={loginCredentials?.email}
                  onChange={(e) =>
                    setLoginCredentials({
                      ...loginCredentials,
                      [e.target.name]: e.target.value,
                    })
                  }
                  autoFocus={true}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginCredentials?.password}
                  onChange={(e) =>
                    setLoginCredentials({
                      ...loginCredentials,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className="form-control login-register-submit-btn mt-4"
                onClick={handleLoginRequest}
                disabled={
                  !loginCredentials?.email ||
                  !loginCredentials?.password ||
                  isLoginRequestSent
                }
              >
                {isLoginRequestSent ? "Request processing" : "Log In"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;
