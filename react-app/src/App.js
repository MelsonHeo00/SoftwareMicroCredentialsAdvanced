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

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Favorite Color</th>
              <th>Favorite Food</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Red</td>
              <td>Pizza</td>
            </tr>
            <tr>
              <td>Blake</td>
              <td>Blue</td>
              <td>Sushi</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default App;
