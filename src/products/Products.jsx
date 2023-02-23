import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import Cart from '../checkout/Cart';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('No token found in local storage.');
      return;
    }

    setLoading(true);

    axios.get('http://localhost:8080/products', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error(error);
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(p => p.id !== productId);
    setCart(updatedCart);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartProducts={cart} removeFromCart={removeFromCart} />
    </>
  );
}

export default Products;
