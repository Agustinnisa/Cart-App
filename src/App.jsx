import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        // Menambahkan properti quantity ke setiap produk
        const productsWithQuantity = data.map((product) => ({
          ...product,
          quantity: 1,
        }));
        setProducts(productsWithQuantity);

        // Inisialisasi totalQuantity dan totalPrice
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

  // Handle total price dan quantity updates
  const updateCart = (quantityDifference, priceDifference) => {
    setTotalQuantity((prevQuantity) => prevQuantity + quantityDifference);
    setTotalPrice((prevPrice) => parseFloat((prevPrice + priceDifference).toFixed(2)));
  };
  
  return (
    <>

    </>
  )
}

export default App
