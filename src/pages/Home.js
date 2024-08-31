import React from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const featuredProducts = [
    { id: 1, name: 'Plant Sensor', price: '$29.99', image: '/images/sensor.jpg' },
    { id: 2, name: 'Self-Watering Pot', price: '$19.99', image: '/images/pot.jpg' },
    { id: 3, name: 'Grow Light', price: '$49.99', image: '/images/light.jpg' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.heroText}>Welcome to Hara-Bhara</h1>
      </div>
      <section style={styles.section}>
        <h2 style={styles.heading}>Featured Products</h2>
        <div style={styles.grid}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    padding: 0,
    width: '100%',
  },
  hero: {
    backgroundImage: 'url(/images/garden-background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  heroText: {
    fontSize: '4rem',
    margin: 0,
  },
  section: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
};

export default Home;
