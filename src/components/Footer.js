import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>© 2024 Hara-Bhara All rights reserved.</p>
        <div style={styles.links}>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '1rem 0',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Footer;
