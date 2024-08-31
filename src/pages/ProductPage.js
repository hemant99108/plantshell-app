import React from 'react';
import ProductCard from '../components/ProductCard';


 

function ProductPage() {
  const products = [
    { id: 1, name: 'Plant Sensor', price: '$29.99', image: '/images/sensor.jpg' },
    { id: 2, name: 'Self-Watering Pot', price: '$19.99', image: '/images/pot.jpg' },
    { id: 3, name: 'Grow Light', price: '$49.99', image: '/images/light.jpg' },
    { id: 4, name: 'Soil Moisture Meter', price: '$15.99', image: '/images/moisture-meter.jpg' },
    { id: 5, name: 'Indoor Plant Fertilizer', price: '$12.99', image: '/images/fertilizer.jpg' },
    { id: 6, name: 'Herb Garden Kit', price: '$24.99', image: '/images/herb-garden.jpg' },
    { id: 7, name: 'Smart Irrigation System', price: '$79.99', image: '/images/irrigation.jpg' },
    { id: 8, name: 'Plant Stand', price: '$39.99', image: '/images/plant-stand.jpg' },
    { id: 9, name: 'Hanging Planters', price: '$22.99', image: '/images/hanging-planters.jpg' },
    { id: 10, name: 'Compost Bin', price: '$34.99', image: '/images/compost-bin.jpg' },
    { id: 11, name: 'Garden Tools Set', price: '$29.99', image: '/images/garden-tools.jpg' },
    { id: 12, name: 'Seed Starter Kit', price: '$14.99', image: '/images/seed-starter.jpg' },
    { id: 13, name: 'Plant Grow Tent', price: '$119.99', image: '/images/grow-tent.jpg' },
    { id: 14, name: 'Watering Can', price: '$17.99', image: '/images/watering-can.jpg' },
    { id: 15, name: 'Plant Labels', price: '$9.99', image: '/images/plant-labels.jpg' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Products</h2>
      <div style={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
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
    fontSize: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
};

export default ProductPage;
