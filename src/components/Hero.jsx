import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-content animate-fade-in">
        <div className="hero-text">
          <h1>Prueba lo<br /><span>Extraordinario.</span></h1>
          <p>Experimenta bubble tea hecho con ingredientes de calidad. Disfruta de nuestras bebidas, comidas asiáticas y postres.</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn">Explorar Menú</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-backdrop"></div>
          <img 
            src={`${import.meta.env.BASE_URL}bubble_tea_1778813674459.png`} 
            alt="Premium KOKO Bubble Tea" 
            className="hero-image"
          />
          <div className="floating-badge badge-1 glass-panel">
            <span>Tapioca</span>
            <strong>Premium</strong>
          </div>
          <div className="floating-badge badge-2 glass-panel">
            <span>Ingredientes</span>
            <strong>Frescos</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
