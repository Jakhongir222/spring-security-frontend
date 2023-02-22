import Product from './Product.jsx';

function ProductList({products, addToCart}) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
