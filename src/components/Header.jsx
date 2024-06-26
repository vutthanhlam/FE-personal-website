import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Container className="pt-5 border-bottom px-0">
      <Navbar data-bs-theme="light" expand="md">
        <Navbar.Brand href="/">
          <span className="hello fs-4">Xin chào!!!</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className=" ms-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/cooking">Cooking</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/travel">Travel</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
