import React from 'react';
import { CartContext } from "./CartContext";
import { Link } from "react-router";
import cartImg from './assets/cart.svg';
import logo from './assets/logo.png';

function Header(props) {
  const { cartCount } = useContext(CartContext);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to={""} aria-current="page" className="brand"><img src={logo} alt="Logo" /></Link>

        <nav className="nav">
          <Link
            to={""}
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to={"/products"}
            aria-current="page"
          >
            Products
          </Link>
          <Link
            to={"/contact"}
            aria-current="page"
          >
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <div className="search">
            <input placeholder="Search" />
          </div>
          <Link
            className="icon-btn"
            aria-label="cart"
            to={"/cart"}
            aria-current="page"
            data-count={cartCount}
          >
            <img src={cartImg} alt="Cart icon" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;