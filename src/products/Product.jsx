function Product({product, addToCart}) {
  return (
    <article className={"product_item"}>
      <img src={product.imageUrl} alt={"picture of product"}/>
      <section className={"text_section"}>
        <h2>
          {product.title}
        </h2>
        <h3>{product.price} €</h3>
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      </section>
    </article>
  );
}

export default Product;
