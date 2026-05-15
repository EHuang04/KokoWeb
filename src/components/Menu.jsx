import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { products } from '../data';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = ['Todos', 'Bubble Tea', 'Gaseosas', 'Batidos en Agua', 'Batidos en Leche', 'Café', 'Postres', 'Comidas Asiáticas'];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="menu" className="menu-section container">
      <div className="menu-header">
        <h2>Nuestro Menú</h2>
        <p>Descubre nuestras bebidas y delicias</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredProducts.map(product => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
