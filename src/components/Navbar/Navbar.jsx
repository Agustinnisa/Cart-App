import React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Badge,
  Image,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/style-shop.svg";
import styles from "./Navbar.module.css";

function Navbar({ totalQuantity, totalPrice }) {
  return (
    <BootstrapNavbar variant="light" className="navbar-custom shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <Image
            src={logo}
            alt="Logo"
            style={{ width: "170px", height: "auto" }}
            className="d-inline-block align-top"
          />
        </BootstrapNavbar.Brand>
        <Nav className="ml-auto d-flex align-items-center">
          <div className={styles.cartItemInfo}>
            <FaShoppingCart style={{ fontSize: "1.8rem", color: "#763d14" }} />{" "}
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </div>

          {/* <div
            style={{
              backgroundColor: "#d2c7c7",
              color: "#000",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              marginRight: "1rem"
            }}
          >
            Items: {totalQuantity}
          </div> */}

          <div className={styles.carttotalInfo}>
            Total: ${totalPrice.toFixed(2)}
          </div>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
