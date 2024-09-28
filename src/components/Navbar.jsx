import React from "react";
import { Navbar as BootstrapNavbar, Container, Badge, Image, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ totalQuantity, totalPrice }) {
  return (
    <BootstrapNavbar bg="white" variant="light" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <Image src="./src/assets/style-shop.svg" alt="Logo" width={40} height={80} className="me-2" />
          
        </BootstrapNavbar.Brand>
        <Nav className="ms-auto align-items-center">
          <Badge bg="secondary" className="me-3">
            Items: {totalQuantity}
          </Badge>
          <Badge bg="primary" className="me-3">
            Total: ${totalPrice.toFixed(2)}
          </Badge>

          <FaShoppingCart size={24} />
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
