import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const count = cartItems.reduce(
    (total, item) => total + (Number(item.qty) || 0),
    0
  );

  return (
    <header className="navbar">
      <a href="/" className="logo">
  <img src="/images/logo.png" alt="Pet House" className="logo-img" />
  <span className="logo-text">Pet House</span>
</a>
   

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="#products">Shop</a>
      </nav>

      <div className="cart-wrapper">
        <button
          className="cart-btn"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          🛒 Cart
          <span className="cart-count">{count}</span>
        </button>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </header>
  );
}

export default Navbar;