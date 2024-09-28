import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Counter from "../Counter/Counter";
import styles from "./CartItem.module.css";

function CartItem({ product, updateCart }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleQuantityChange = (newQuantity) => {
        const quantityDifference = newQuantity - quantity;
        setQuantity(newQuantity);
        updateCart(quantityDifference, product.price * quantityDifference);
    };

    return (
        <Card className={`${styles.cartItemCard} mb-3 p-3`}>
            <Row className="g-0">
                <Col md={2} className="d-flex align-items-center justify-content-center">
                    <Card.Img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100px", height: "100px", objectFit: "contain" }}
                    />
                </Col>
                <Col md={10}>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Card.Title className={styles.cardTitle}>{product.title}</Card.Title>
                                <Card.Text className={styles.cardText}>Price: ${product.price}</Card.Text>
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                <Counter quantity={quantity} onQuantityChange={handleQuantityChange} />
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                <Card.Text className="mb-0">
                                    Total: ${(product.price * quantity).toFixed(2)}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CartItem;
