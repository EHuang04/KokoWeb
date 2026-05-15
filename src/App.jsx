import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
