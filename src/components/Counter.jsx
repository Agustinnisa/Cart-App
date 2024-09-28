import React from "react";
import { Button } from "react-bootstrap";

function Counter({ quantity, onQuantityChange }) {
    const increment = () => {
        onQuantityChange(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div>
            <Button variant="outline-danger" onClick={decrement}>-</Button>
            <span className="mx-2">{quantity}</span>
            <Button variant="outline-success" onClick={increment}>+</Button>
        </div>
    );
}

export default Counter;