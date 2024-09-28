import React from "react";
import { Navbar as BootstrapNavbar, Container, Badge, Image, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/style-shop.svg";

function Navbar({ totalQuantity, totalPrice }) {
  return (
    <BootstrapNavbar bg="white" variant="light" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <Image
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
            className="d-inline-block align-top"
          />
          
        </BootstrapNavbar.Brand>
        <Nav className="ml-auto">
          <Badge bg="secondary" className="me-2">
            <FaShoppingCart /> Items: {totalQuantity}
          </Badge>
          <Badge bg="primary">Total: ${totalPrice.toFixed(2)}</Badge>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;