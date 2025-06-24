import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const categories = [
    'Fiction',
    'Non-Fiction',
    'Science',
    'History',
    'Biography',
    'Self-Help',
    'Business',
    'Technology',
    'Art & Design',
    'Children\'s Books'
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3>Categories</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <a href={`/category/${category.toLowerCase().replace(' ', '-')}`}>
                {category}
              </a>
            </li>
          ))}
        </ul>

        <div className="featured-section">
          <h3>Featured</h3>
          <div className="featured-item">
            <span className="badge">New</span>
            <a href="/featured/new-releases">New Releases</a>
          </div>
          <div className="featured-item">
            <span className="badge">Hot</span>
            <a href="/featured/bestsellers">Bestsellers</a>
          </div>
          <div className="featured-item">
            <a href="/featured/deals">Deals & Discounts</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
