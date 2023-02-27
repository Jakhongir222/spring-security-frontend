import React from 'react';
import Cart from './Cart';
import './Cart.css';

function CartPage({ cart, removeFromCart }) {
    return (
      <div className="cart-page">
        <h1>Cart</h1>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    );
  }
  
  export default CartPage;

