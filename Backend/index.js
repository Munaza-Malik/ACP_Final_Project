const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Cart = require('./models/cart');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config({ path: '../.env' });  // Load .env from the root directory

const app = express();

const CardDetails = require('./models/CardDetails');
const Checkout = require('./models/checkOut');

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// MongoDB connection using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Signup Endpoint
app.post('/api/auth/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation: check if any field is missing
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

     // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Error during registration', error });
  }
});

// Login Endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const secretKey = process.env.JWT_SECRET || 'fallback-secret';  // Ensure JWT_SECRET is loaded
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error during login', error });
  }
});

//Add to Cart
app.post('/api/cart', async (req, res, next) => {
  try {
    const { furniture } = req.body;

    if (!furniture || !furniture.name || !furniture.price || !furniture.image) {
      return res.status(400).json({ message: 'Missing furniture details' });
    }

    // Assuming you have JWT token logic here
    const token = req.headers.authorization?.split(' ')[1];  // Bearer token

if (!token) {
  return res.status(401).json({ message: 'No token provided' });
}

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
  console.error("JWT_SECRET is not defined");
  return res.status(500).json({ message: 'JWT_SECRET is not defined in the environment' });
}

const decoded = jwt.verify(token, secretKey);

    const userId = decoded.id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, furnitures: [furniture] });
    } else {
      cart.furnitures.push(furniture);
    }

    await cart.save();
    res.status(200).json(cart);

  } catch (err) {
    console.error('Error adding to cart:', err);
    next(err);  // Pass the error to the next middleware for handling
  }
});

//Fetch cart
app.get('/api/cart', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      return res.status(500).json({ message: 'JWT_SECRET is not defined' });
    }

    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.id;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart.furnitures);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Error fetching cart' });
  }
});

//cart items delete
// Remove an item from the cart
app.delete('/api/cart/:furnitureId', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      return res.status(500).json({ message: 'JWT_SECRET is not defined' });
    }

    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.id;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the furniture by its id in the cart
    const furnitureId = req.params.furnitureId;

    // Remove the furniture from the cart
    const updatedfurnitures = cart.furnitures.filter(furniture => furniture._id.toString() !== furnitureId);
    cart.furnitures = updatedfurnitures;

    await cart.save();

    res.status(200).json({ message: 'Item removed from cart', cart: cart.furnitures });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Error removing item from cart' });
  }
});


// Checkout
app.post('/api/checkout', async (req, res) => {
  try {
    const { description, furnitureDetails, furniturePrice, deliveryCharges, totalAmount } = req.body;

    if (!description || !furnitureDetails || !furniturePrice || !deliveryCharges || !totalAmount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newCheckout = new Checkout({
      description,
      furnitureDetails,
      furniturePrice,
      deliveryCharges,
      totalAmount,
    });

    await newCheckout.save();
    res.status(201).json({ message: 'Checkout info saved successfully!' });
  } catch (error) {
    console.error('Error saving checkout info:', error);
    res.status(500).json({ message: 'Error saving checkout info' });
  }
});

//Card Details
app.post('/api/card-details', async (req, res) => {
  const { cardHolder, cardNumber, cvv, expiryDate } = req.body;

  try {
    if (!cardHolder || !cardNumber || !cvv || !expiryDate) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newCardDetails = new CardDetails({
      cardHolder,
      cardNumber,
      cvv,
      expiryDate,
    });

    await newCardDetails.save();
    res.status(201).json({ message: 'Card details saved successfully.' });
  } catch (error) {
    console.error('Error saving card details:', error);
    res.status(500).json({ message: 'Failed to save card details.' });
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
