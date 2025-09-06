const mongoose = require('mongoose');
const Item = require('../models/Item');
require('dotenv').config();

const sampleItems = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    stock: 10
  },
  {
    name: 'Smart Watch',
    description: 'Advanced smartwatch with fitness tracking, heart rate monitor, and notifications.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    stock: 5
  },
  {
    name: 'Running Shoes',
    description: 'Comfortable running shoes with advanced cushioning for all terrains.',
    price: 129.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    stock: 15
  },
  {
    name: 'Coffee Maker',
    description: 'Premium coffee maker with programmable settings for the perfect brew.',
    price: 89.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
    stock: 8
  },
  {
    name: 'Laptop Backpack',
    description: 'Durable backpack perfect for laptops and daily use with multiple compartments.',
    price: 79.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    stock: 20
  },
  {
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat for comfortable workouts with carrying strap.',
    price: 49.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
    stock: 12
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with excellent sound quality and long battery life.',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    stock: 7
  },
  {
    name: 'Water Bottle',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.',
    price: 24.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop',
    stock: 25
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');
    console.log('Connected to MongoDB');

    // Clear existing items
    await Item.deleteMany({});
    console.log('Cleared existing items');

    // Insert sample items
    await Item.insertMany(sampleItems);
    console.log('Sample items inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
