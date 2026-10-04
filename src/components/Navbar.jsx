import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Shop<span>Hub</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;