import CartItem from "./CartItem"
import './Cart.css';


function Cart({ cart, removeFromCart }) {
  const sumOfItems = cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  if (!cart || cart.length === 0) {
    return <h3>No items in cart, why not add some?</h3>;
  }

  return (
    <div className="cart">
      {cart.map((p) => (
        <CartItem key={p.id} product={p} removeFromCart={removeFromCart} />
      ))}
      <h3>Total price for items: {sumOfItems}</h3>
      <button class="order-btn">Order</button>
    </div>
  );
}

export default Cart;

