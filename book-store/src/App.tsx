import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './components/auth/ProtectedRoute'

// Home page component
const HomePage: React.FC = () => {
  return (
    <div className="home-content">
      <h1>Welcome to Book Store</h1>
      <div className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-grid">
          {/* Book items would go here */}
          <div className="book-card">
            <div className="book-cover">Book Cover</div>
            <h3>Book Title</h3>
            <p className="author">Author Name</p>
            <p className="price">$19.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="book-card">
            <div className="book-cover">Book Cover</div>
            <h3>Book Title 2</h3>
            <p className="author">Author Name</p>
            <p className="price">$24.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="book-card">
            <div className="book-cover">Book Cover</div>
            <h3>Book Title 3</h3>
            <p className="author">Author Name</p>
            <p className="price">$15.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
      </Routes>
    </Layout>
  )
}

export default App
