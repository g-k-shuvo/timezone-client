import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "../styles/Header.css";
import logo from "../images/logo.webp";
import { LinkContainer } from "react-router-bootstrap";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { user, signOutUser } = useAuth();
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Image src={logo} />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/explore">
                <Nav.Link>Explore</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              {user.email ? (
                <>
                  <LinkContainer to="/dashboard">
                    <button className="header-btn">{user.displayName}</button>
                  </LinkContainer>
                  <LinkContainer to="/dashboard">
                    <button className="header-btn">Dashboard</button>
                  </LinkContainer>
                  <button onClick={signOutUser} className="header-btn">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <LinkContainer to="/signin">
                    <button className="header-btn">Sign In</button>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <button className="header-btn">Sign Up</button>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
