import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Book Store is your one-stop destination for all types of books. 
            We offer a wide selection of genres at competitive prices.
          </p>
          <div className="contact">
            <span><i className="fas fa-map-marker-alt"></i> 123 Book Street, Reading City</span>
            <span><i className="fas fa-phone"></i> +1 234 567 8900</span>
            <span><i className="fas fa-envelope"></i> contact@bookstore.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>Stay updated with our latest book releases and promotions.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Book Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
