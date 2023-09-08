import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import mainImage from './images/star.jpg';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="app">
        <img src={mainImage} alt="Example Image" />
        <p>Welcome to this page!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
