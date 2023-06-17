import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../../auth/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/layout.css";

const TopNavBar = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login", { replace: true });
    setAuth({});
    Cookies.remove("jwt");
    navigate("/login", { replace: true });
  };
  return (
    <Navbar expand="lg" className="top-navbar">
      <Container className="container">
        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar id="navbar-nav">
          <Nav>
            <li class="nav-item dropdown">
              <h6
                class="text-white dropdown-toggle pt-4"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nazmul Hasan
              </h6>
              <ul class="dropdown-menu dropdown-menu-white">
                <li onClick={logoutHandler}>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            <Nav.Link href="#" id="nav-profile-dropdown">
              <img
                src={require("../../assets/images/avatar.png")}
                alt="Profile"
                className="profile-picture"
              />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
