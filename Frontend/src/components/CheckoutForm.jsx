import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header1';
import wmlogo from '../assets/wmlogo.png';
const CheckoutForm = () => {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] };
  const [description, setDescription] = useState('');
  const [furnitureDetails, setFurnitureDetails] = useState(selectedItems.map(item => item.name).join(', '));
  const [furniturePrice, setFurniturePrice] = useState(0); // Initialize to 0
  const deliveryCharges = 2500;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate furniturePrice and totalAmount when selectedItems change
  useEffect(() => {
    const totalPrice = selectedItems.reduce((total, item) => parseFloat(total) + parseFloat(item.price), 0);
    setFurniturePrice(parseFloat(totalPrice));
  }, [selectedItems]);

  const totalAmount = furniturePrice + deliveryCharges;

  const handleConfirm = async () => {
    const checkoutData = {
      description,
      furnitureDetails,
      furniturePrice,
      deliveryCharges,
      totalAmount,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkoutData),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        alert('Checkout details saved successfully!');
        navigate('/pay', { state: { subtotal: furniturePrice, deliveryCharges } });
      } else {
        alert(responseData.message || 'Failed to save checkout details.');
      }
    } catch (error) {
      console.error('Error during API call:', error);
      alert('An error occurred while saving checkout details.');
    }
  };
  
  return (
    <div>
      <Header />
      <div className="form-container">
        <div className="form-wrapper">
        <img src={wmlogo} alt="Furniture Store Logo" className="wmlogo" />
          <h1>Check Out</h1>
          {message && <p className="feedback-message">{message}</p>}
          <div className="input-group">
            <label>Address:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your Address"
            />
          </div>
          <div className="input-group">
            <label>Furniture Details:</label>
            <input
              type="text"
              value={furnitureDetails}
              onChange={(e) => setFurnitureDetails(e.target.value)}
              placeholder="Enter furniture details"
            />
          </div>
          <div className="input-group">
            <label>Furniture Price:</label>
            <input
              type="text"
              value={`Rs. ${furniturePrice}`} // Display formatted price
              readOnly
            />
          </div>
          <div className="input-group">
            <label>Delivery Charges:</label>
            <input type="text" value={`Rs. ${deliveryCharges}`} readOnly />
          </div>
          <div className="input-group">
            <label>Total:</label>
            <input type="text" value={`Rs. ${totalAmount}`} readOnly />
          </div>
          <button onClick={handleConfirm} disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
