// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Furniture from './components/Furniture';
import Auth from './components/Auth';
import Login from './components/Login';
import Signup from './components/Signup';
import CardDetails from './components/CardDetails';
import CashOnDelivery from './components/CashOnDelivery';
import CheckoutForm from './components/CheckoutForm';
import CartPage from './components/CartPage';
import PayPage from './components/paypage';
import Home from './components/Pages/Home';
import QueenBed from './components/Pages/QueenBed';
import KingBed from './components/Pages/KingBed';
import CrownBed from './components/Pages/CrownBed';
import GlassDoor from './components/Pages/GlassDoor';
import MainDoor from './components/Pages/MainDoor';
import BedroomDoor from './components/Pages/BedroomDoor';
import GlassDining from './components/Pages/GlassDining';
import RectangularDining from './components/Pages/RectangularDining';
import WoodenDining from './components/Pages/WoodenDining';
import WalkInWardrobe from './components/Pages/WalkInWardrobe';
import FullLengthWardrobe from './components/Pages/FullLengthWardrobe';
import MirrorWardrobe from './components/Pages/MirrorWardrobe';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setNotificationCount((prevCount) => prevCount + 1);
  };  
  
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    if (notificationCount > 0) {
      setNotificationCount(notificationCount - 1);
    }
  };

  return (
    <Router>
      <div>
        {/* <Header cartCount={cartItems.length} notificationCount={notificationCount} />  */}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cash-on-delivery" element={<CashOnDelivery removeFromCart={removeFromCart} />} />
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/pay" element={<PayPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/your-furniture-path" element={<Furniture cartItems={cartItems} notificationCount={notificationCount} addToCart={addToCart} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/QueenBed" element={<QueenBed addToCart={addToCart} />} />
          <Route path="/KingBed" element={<KingBed addToCart={addToCart}/>} />
          <Route path="/CrownBed" element={<CrownBed addToCart={addToCart}/>} />
          <Route path="/GlassDoor" element={<GlassDoor addToCart={addToCart}/>} />
          <Route path="/MainDoor" element={<MainDoor addToCart={addToCart}/>} />
          <Route path="/BedroomDoor" element={<BedroomDoor addToCart={addToCart}/>} />
          <Route path="/GlassDining" element={<GlassDining addToCart={addToCart}/>} />
          <Route path="/RectangularDining" element={<RectangularDining addToCart={addToCart}/>} />
          <Route path="/WoodenDining" element={<WoodenDining addToCart={addToCart}/>} />
          <Route path="/WalkInWardrobe" element={<WalkInWardrobe addToCart={addToCart}/>} />
          <Route path="/FullLengthWardrobe" element={<FullLengthWardrobe addToCart={addToCart}/>} />
          <Route path="/MirrorWardrobe" element={<MirrorWardrobe addToCart={addToCart}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

