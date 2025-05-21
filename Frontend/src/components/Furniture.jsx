import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Furniture.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Furniture({ heading, furniture = [], addToCart, notificationCount = 0, cartItems = [] }) {
  const [cartCount, setCartCount] = useState(0); // Local state for cart count

  const navigate = useNavigate();

  const handleBuyNow = (furniture) => {
    navigate('/checkout', { state: { selectedItems: [furniture] } });
  };
  const handleAddToCart = (furniture) => {
    if (!furniture.name || !furniture.price || !furniture.image) {
      console.error("Invalid furniture details:", furniture);
      return;
    }
  
    addToCart(furniture);  // Update the cart in state
    setCartCount((prevCount) => prevCount + 1);
    // Send the furniture data to the backend API
    fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Send the token
      },
      body: JSON.stringify({ furniture })
    })
    
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to add furniture: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Furniture added to cart:', data);
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };
  

  return (
    <div>
      <Header cartCount={cartCount} notificationCount={notificationCount} />
      <div className="section-container">
        <div className="search-bar-container">
          <input type="text" placeholder="Furniture, Category" className="search-bar" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <h2>{heading}</h2>
        <div className="image-scroll">
          {furniture.map((furniture, index) => (
            <div className="image-item" key={index}>
              <img src={furniture.image} alt={furniture.name} />
              <h3>{furniture.name}</h3>
              <h3>{furniture.price}</h3>
              <button onClick={() => handleAddToCart(furniture)}>Add to Cart</button>
              <button onClick={() => handleBuyNow(furniture)}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Furniture;
