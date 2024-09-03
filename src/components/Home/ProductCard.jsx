import React from 'react';
import './ProductCard.css'; // Import CSS file for styling

const ProductCard = ({ name, image, price, addToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{price}</p>
        <button onClick={addToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
