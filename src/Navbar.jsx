import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav_button">
        SHOW ME ALL THE ITEMS
      </Link>
      <Link to="/login" className="nav_button">
        Login
      </Link>
      <Link to="/create-new-user" className="nav_button">
        Create new user
      </Link>
      <Link to="/cart" className="nav_button">
        Go to cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;