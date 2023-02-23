function CartItem({ product, removeFromCart }) {
  return (
    <div>
      <h4>{product.title}</h4>
      <p>{product.price} € x {product.amount}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
}

export default CartItem;