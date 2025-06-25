import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Book Store</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <div className="search-cart">
        <div className="search">
          <input type="text" placeholder="Search books..." />
          <button type="submit">Search</button>
        </div>
        <div className="cart">
          <a href="/cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;