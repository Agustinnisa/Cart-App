import React from "react";
import { Navbar as BootstrapNavbar, Container, Badge } from "react-bootstrap";

function Navbar({ totalQuantity, totalPrice }) {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand href="#home">MyStore</BootstrapNavbar.Brand>
        <div>
          <Badge bg="secondary" className="me-2">
            Items: {totalQuantity}
          </Badge>
          <Badge bg="primary">Total: ${totalPrice.toFixed(2)}</Badge>
        </div>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
