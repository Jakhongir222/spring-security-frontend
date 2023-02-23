import './Products.css';

function Product({ product, addToCart }) {
 
  const images = {'Nintendo Switch': 'https://images.unsplash.com/photo-1591182136289-67ff16828fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmludGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'Samsung Galaxy S21 Ultra': 'https://images.unsplash.com/photo-1610792516775-01de03eae630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyMSUyMFVsdHJhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'Nike Air Force 1': 'https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMGFpciUyMGZvcmNlJTIwMXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
  'Kindle Paperwhite': 'https://images.unsplash.com/photo-1551190435-def8c09f507c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8S2luZGxlJTIwUGFwZXJ3aGl0ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
  'Bose QuietComfort 35 II': 'https://images.unsplash.com/photo-1623318993015-4bb0490764bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9zZSUyMHF1aWV0Y29tZm9ydCUyMGVhcmJ1ZHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  'Herschel Retreat Backpack': 'https://images.unsplash.com/photo-1600019248002-f4c4898f739b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8SGVyc2NoZWwlMjBSZXRyZWF0JTIwQmFja3BhY2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
}


  return (
    <article className="product-item">
      <img src={images[product.title]}alt="picture of product" height={260} width= {380}/>
      <section className="text-section">
        <h2>{product.title}</h2>
        <h3>{product.price} €</h3>
        <button className='cart-button' onClick={() => addToCart(product.id)}>Add to Cart</button>
      </section>
    </article>
  );
}

export default Product;
