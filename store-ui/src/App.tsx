import React from "react";
import { PageData } from "./main";
import { Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./App.css";

interface AppParams {
  pages: PageData[];
}

const App: React.FC<AppParams> = ({ pages }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Stripe Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {pages.map((page) => {
                return <Nav.Link href={page.path}>{page.name}</Nav.Link>;
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="content">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
