import CartItem from './CartItem.jsx';

let sumOfItems = 0;

function Cart({ cartProducts, removeFromCart }) {
  if (!cartProducts || cartProducts.length === 0) {
    return <h3>No items in cart, why not add some?</h3>;
  }

  return (
    <div>
      {cartProducts.map((p) => {
        sumOfItems += p.price * p.amount;
        return (
          <CartItem
            key={p.id}
            product={p}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <h3>Total price for items: {sumOfItems} €</h3>
    </div>
  );
}

export default Cart;
