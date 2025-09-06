import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    search: ''
  });
  const [categories, setCategories] = useState([]);
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    fetchItems();
  }, [filters]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (filters.category !== 'all') params.append('category', filters.category);
      if (filters.minPrice) params.append('minPrice', filters.minPrice);
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
      if (filters.search) params.append('search', filters.search);

      const response = await axios.get(`/api/items?${params.toString()}`);
      setItems(response.data);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(response.data.map(item => item.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = (item) => {
    addToCart(item, 1);
    alert('Item added to cart!');
  };

  // Sample data for demo
  useEffect(() => {
    if (items.length === 0 && !loading) {
      // Add some sample items if none exist
      const sampleItems = [
        {
          _id: '1',
          name: 'Wireless Headphones',
          description: 'High-quality wireless headphones with noise cancellation',
          price: 199.99,
          category: 'Electronics',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
          stock: 10
        },
        {
          _id: '2',
          name: 'Smart Watch',
          description: 'Advanced smartwatch with fitness tracking and notifications',
          price: 299.99,
          category: 'Electronics',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
          stock: 5
        },
        {
          _id: '3',
          name: 'Running Shoes',
          description: 'Comfortable running shoes for all terrains',
          price: 129.99,
          category: 'Sports',
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
          stock: 15
        },
        {
          _id: '4',
          name: 'Coffee Maker',
          description: 'Premium coffee maker for the perfect brew',
          price: 89.99,
          category: 'Home',
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
          stock: 8
        },
        {
          _id: '5',
          name: 'Laptop Backpack',
          description: 'Durable backpack perfect for laptops and daily use',
          price: 79.99,
          category: 'Accessories',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
          stock: 20
        },
        {
          _id: '6',
          name: 'Yoga Mat',
          description: 'Non-slip yoga mat for comfortable workouts',
          price: 49.99,
          category: 'Sports',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
          stock: 12
        }
      ];
      setItems(sampleItems);
      setCategories([...new Set(sampleItems.map(item => item.category))]);
    }
  }, [items.length, loading]);

  return (
    <div style={{ padding: '40px 0', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: '#333'
          }}>
            Welcome to ShopEase
          </h1>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast delivery.
          </p>
        </div>

        {/* Filters */}
        <div className="card" style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Filter Products</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px' 
          }}>
            <div>
              <label>Category</label>
              <select 
                className="form-control"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Min Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              />
            </div>
            <div>
              <label>Max Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              />
            </div>
            <div>
              <label>Search</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="loading">
            <i className="fas fa-spinner fa-spin"></i> Loading products...
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '30px' 
          }}>
            {items.map(item => (
              <div key={item._id} className="card">
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
                <h3 style={{ marginBottom: '8px', color: '#333' }}>{item.name}</h3>
                <p style={{ 
                  color: '#666', 
                  marginBottom: '16px', 
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}>
                  {item.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <span style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    color: '#28a745'
                  }}>
                    ${item.price}
                  </span>
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#666',
                    background: '#f8f9fa',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    {item.category}
                  </span>
                </div>
                <button 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => handleAddToCart(item)}
                >
                  <i className="fas fa-cart-plus" style={{ marginRight: '8px' }}></i>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {!loading && items.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <i className="fas fa-search" style={{ fontSize: '48px', color: '#ccc', marginBottom: '16px' }}></i>
            <h3 style={{ color: '#666', marginBottom: '8px' }}>No products found</h3>
            <p style={{ color: '#999' }}>Try adjusting your filters to see more products.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
