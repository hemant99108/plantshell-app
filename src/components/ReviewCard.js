import React from 'react';

function ReviewCard({ review }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{review.name}</h3>
      <p style={styles.review}>{review.review}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  review: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default ReviewCard;
