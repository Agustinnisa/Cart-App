import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function Counter({ quantity, onQuantityChange }) {
    const [count, setCount] = useState(quantity);

    const increment = () => { 
        setCount((prevCount) => {
            const newCount = prevCount + 1;
            onQuantityChange(newCount);
            return newCount;
        });
    };

    const decrement = () => {
        if (count === 0) return;
        setCount((prevCount) => {
            const newCount = prevCount - 1;
            onQuantityChange(newCount);
            return newCount;
        });
        
    };

    return (
        <ButtonGroup>
            <Button variant="outline-danger" onClick={decrement}>
                -
            </Button>
            <Button variant="outline-secondary" disabled>
                {count}
            </Button>
            <Button variant="outline-success" onClick={increment}>
                +
            </Button>
        </ButtonGroup>
    );
}

export default Counter;