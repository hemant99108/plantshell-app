import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Payment from './pages/Payment';
   
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/payment' element={<Payment/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
