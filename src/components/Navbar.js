import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>PlantShell</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/products" style={styles.link}>Products</Link></li>
        <li><Link to="/blog" style={styles.link}>Blog</Link></li>
        <li><Link to="/cart" style={styles.link}>Cart</Link></li>
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
  },
  logo: {
    color: '#fff',
    textDecoration: 'none',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Navbar;
