import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <header className="header">
      <div className="logo">
        <h1>Book Store</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="search-cart">
        <div className="search">
          <input type="text" placeholder="Search books..." />
          <button type="submit">Search</button>
        </div>
        <div className="user-actions">
          {isAuthenticated ? (
            <div className="user-profile">
              <div className="user-greeting">
                <span>안녕하세요, {user?.name || '회원'}님</span>
              </div>
              <div className="user-menu">
                <Link to="/profile" className="profile-button">마이페이지</Link>
                <button 
                  className="logout-button" 
                  onClick={() => {
                    logout();
                    // Could add a navigate here if needed
                  }}
                >
                  로그아웃
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="login-button">로그인</Link>
              <Link to="/signup" className="signup-button">회원가입</Link>
            </>
          )}
          <div className="cart">
            <Link to="/cart">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;