import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul style={styles.list}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button
                    onClick={() => removeFromCart(item)}
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={styles.total}>
            <h3>Total: ${total}</h3>
          </div>
          <Link to="/payment" style={styles.purchaseButton}>
            Purchase Now
          </Link>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
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
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    borderBottom: '1px solid #ddd',
    paddingBottom: '1rem',
  },
  image: {
    width: '100px',
    height: '100px',
    marginRight: '1rem',
  },
  removeButton: {
    padding: '0.5rem',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  total: {
    textAlign: 'right',
    marginTop: '2rem',
    fontSize: '1.5rem',
  },
  purchaseButton: {
    display: 'block',
    textAlign: 'center',
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1.25rem',
  },
};

export default Cart;
