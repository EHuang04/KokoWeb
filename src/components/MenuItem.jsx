import React from 'react';
import './MenuItem.css';

const MenuItem = ({ product }) => {
  const imagePath = product.image.startsWith('/') ? product.image.slice(1) : product.image;
  
  return (
    <div className="menu-item glass-panel">
      <div className="menu-item-image-wrapper">
        <img src={`${import.meta.env.BASE_URL}${imagePath}`} alt={product.name} className="menu-item-image" loading="lazy" />
      </div>
      <div className="menu-item-info">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{product.name}</h3>
          <span className="menu-item-price">₡{product.price.toFixed(2)}</span>
        </div>
        <span className="menu-item-category">{product.category}</span>
      </div>
    </div>
  );
};

export default MenuItem;
