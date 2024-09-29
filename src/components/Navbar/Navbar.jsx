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
    <BootstrapNavbar className={`${styles.customNavbar} shadow-sm`}>
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <Image
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
            className="d-inline-block align-top"
          />
        </BootstrapNavbar.Brand>
        <Nav className="ms-auto">
          <div className={styles.cartIconContainer}>
            <FaShoppingCart size={33} className={styles.cartIcon} />
            {totalQuantity > 0 && (
              <span className={styles.cartBadge}>{totalQuantity}</span>
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

          <div className={styles.cardPrice}>
            Total: ${totalPrice.toFixed(2)}
          </div>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
