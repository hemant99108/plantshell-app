import React from 'react';

function Home() {
  const products = [
    { id: 1, name: 'Plant Sensor', price: '$29.99' },
    { id: 2, name: 'Self-Watering Pot', price: '$19.99' },
    { id: 3, name: 'Grow Light', price: '$49.99' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Featured Products</h2>
      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  productCard: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Home;
