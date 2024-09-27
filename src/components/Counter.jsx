import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function Counter({ quantity, onQuantityChange }) {
    const increment = () => onQuantityChange(quantity + 1);
    const decrement = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <ButtonGroup>
            <Button variant="outline-danger" onClick={decrement}>
                -
            </Button>
            <Button variant="outline-secondary" disabled>
                {quantity}
            </Button>
            <Button variant="outline-success" onClick={increment}>
                +
            </Button>
        </ButtonGroup>
    );
}

export default Counter;