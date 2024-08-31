import React, { useState } from 'react';

function ProductReviews({ product }) {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Jane Doe', content: 'Amazing product! My plants love it.' },
    { id: 2, name: 'John Smith', content: 'Very helpful, especially for beginners.' },
  ]);

  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReviewData = {
      id: reviews.length + 1,
      name: 'Anonymous',
      content: newReview,
    };
    setReviews([...reviews, newReviewData]);
    setNewReview('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reviews for {product.name}</h2>
      <div style={styles.reviews}>
        {reviews.map(review => (
          <div key={review.id} style={styles.reviewCard}>
            <h4>{review.name}</h4>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleReviewSubmit} style={styles.form}>
        <textarea
          style={styles.textarea}
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button type="submit" style={styles.button}>Submit Review</button>
      </form>
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
  reviews: {
    marginBottom: '2rem',
  },
  reviewCard: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '1rem',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  textarea: {
    padding: '1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
};

export default ProductReviews;
