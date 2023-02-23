import './Cart.css';

function CartItem({ product, removeFromCart }) {
  return (
    <div className="cart-item">
      <h4>{product.title}</h4>
      <p>{product.price} € x {product.amount}</p>
      <button className='remove-button' onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
}

export default CartItem;