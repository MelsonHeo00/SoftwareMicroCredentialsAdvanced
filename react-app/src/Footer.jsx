import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'green', fontSize: '20px' }}>
      <p>&copy; {new Date().getFullYear()} Melson Heo</p>
    </footer>
  );
};

export default Footer;