// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize express app
const app = express();
const PORT = 5000; // You can change this if needed

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Sample root route
app.get('/', (req, res) => {
  res.send('ShopEZ Backend API Running!');
});

// Example product route
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Gold Bracelet',
      description: 'Elegant gold bracelet with fine detailing',
      price: 1999,
      category: 'fashion accessories'
    },
    {
      id: 2,
      name: 'Silver Necklace',
      description: 'Shiny silver necklace, perfect for gifting',
      price: 999,
      category: 'fashion accessories'
    }
  ]

