import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

function notify(){
   return  toast("added to cart ");
}

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
    <Toaster />
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>{product.price}</p>
        <button style={styles.button} onClick={() =>{
            addToCart(product)
            notify();
            }}>
            Add to Cart
        </button>
      
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  name: {
    margin: '1rem 0 0.5rem',
    fontSize: '1.2rem',
  },
  price: {
    fontSize: '1rem',
    color: '#555',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProductCard;
