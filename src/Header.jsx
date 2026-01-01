import React from 'react';
import cartImg from './assets/cart.svg';
import logo from './assets/logo.png';

function Header(props) {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="brand"><img src={logo} alt="Logo" /></div>

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
          <button className="icon-btn" aria-label="cart" data-count={props.count} onClick={props.togglePopup}><img src={cartImg} alt="Cart icon" /></button>
        </div>
      </div>
    </header>
  )
}

export default Header;