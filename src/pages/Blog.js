import React from 'react';

function Blog() {
  const blogs = [
    { id: 1, title: 'The Importance of Plant Sensors', date: 'August 25, 2024', excerpt: 'Learn how plant sensors can help you keep your plants healthy by monitoring soil moisture and other vital conditions.' },
    { id: 2, title: 'Self-Watering Pots: A Gardener’s Best Friend', date: 'August 20, 2024', excerpt: 'Discover the convenience and benefits of self-watering pots for busy gardeners.' },
    { id: 3, title: 'Choosing the Right Grow Light for Indoor Plants', date: 'August 15, 2024', excerpt: 'Explore different types of grow lights and find the best one for your indoor garden.' },
    { id: 4, title: 'Starting Your Herb Garden Indoors', date: 'August 10, 2024', excerpt: 'A guide to growing fresh herbs indoors, using our Herb Garden Kit.' },
    { id: 5, title: 'Smart Irrigation Systems: Save Water, Save Time', date: 'August 5, 2024', excerpt: 'How a smart irrigation system can revolutionize your gardening experience.' },
    { id: 6, title: 'Why You Need a Soil Moisture Meter', date: 'August 1, 2024', excerpt: 'Understanding soil moisture levels is crucial for plant health. Here’s why a moisture meter is an essential tool.' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Gardening Tips & Product Guides</h2>
      <div style={styles.blogList}>
        {blogs.map(blog => (
          <div key={blog.id} style={styles.blogCard}>
            <h3 style={styles.title}>{blog.title}</h3>
            <p style={styles.date}>{blog.date}</p>
            <p style={styles.excerpt}>{blog.excerpt}</p>
            <button style={styles.readMoreButton}>Read More</button>
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
    fontSize: '2rem',
  },
  blogList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  blogCard: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  date: {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '1rem',
  },
  excerpt: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  readMoreButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Blog;
