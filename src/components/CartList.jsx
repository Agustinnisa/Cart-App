import React from "react";
import { Row, Col } from "react-bootstrap";
import CartItem from "../components/CartItem/CartItem";

function CartList({ products, updateCart }) {
  return (
    <Row>
      {products.map((product) => (
        <Col md={12} key={product.id}>
          <CartItem product={product} updateCart={updateCart} />
        </Col>
      ))}
    </Row>
  );
}

export default CartList;
