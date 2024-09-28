import React, { useState, useEffect } from 'react';
import Navbar from "../src/components/Navbar/Navbar"
// import './index.css';
import CartList from "../src/components/CartList";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityCart, setQuantityCart] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        const productsWithQuantity = data.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productsWithQuantity);

        const initialTotalQuantity = productsWithQuantity.reduce(
          (acc, product) => acc + product.quantity,
          0
        );
        const initialTotalPrice = productsWithQuantity.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
        setTotalQuantity(initialTotalQuantity);
        setTotalPrice(initialTotalPrice);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const updateCart = (quantityDifference, priceDifference) => {
    setTotalQuantity((prevQuantity) => prevQuantity + quantityDifference);
    setTotalPrice((prevPrice) => parseFloat((prevPrice + priceDifference).toFixed(2)));
    setQuantityCart((prevCart) => prevCart + quantityDifference);
  };

  return (
    <>
      <Navbar totalQuantity={quantityCart} totalPrice={totalPrice} />
      <Container className="mt-4">
        <CartList products={products} updateCart={updateCart} />
      </Container>
    </>
  );
}

export default App;