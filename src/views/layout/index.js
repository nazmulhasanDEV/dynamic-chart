import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../assets/styles/layout.css";

const TopNavBar = () => {
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
                <li>
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
