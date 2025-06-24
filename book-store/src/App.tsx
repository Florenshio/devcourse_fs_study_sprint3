import './App.css'
import Layout from './components/layout/Layout'

function App() {

  return (
    <Layout>
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
    </Layout>
  )
}

export default App
