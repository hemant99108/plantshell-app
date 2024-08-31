import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Hara-Bhara</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/reviews" style={styles.link}>Reviews</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
};

export default Navbar;
