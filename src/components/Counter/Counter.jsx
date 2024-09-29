import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Counter.module.css";

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
    <div className={styles.counterContainer}>
      <Button
        className={styles.decrementBtn}
        variant="custom"
        onClick={decrement}
      >
        -
      </Button>
      <span className="mx-2">{quantity}</span>
      <Button
        className={`${styles.counterBtn} ${styles.incrementBtn}`}
        variant="custom"
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
