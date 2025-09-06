import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity));
  };

  return (
    <div style={{ padding: '40px 0', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container">
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ 
            fontSize: '36px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px'
          }}>
            Shopping Cart
          </h1>
          <p style={{ color: '#666' }}>
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <i className="fas fa-shopping-cart" style={{ 
              fontSize: '64px', 
              color: '#ccc', 
              marginBottom: '20px' 
            }}></i>
            <h3 style={{ color: '#666', marginBottom: '12px' }}>Your cart is empty</h3>
            <p style={{ color: '#999', marginBottom: '24px' }}>
              Looks like you haven't added any items to your cart yet.
            </p>
            <a href="/" className="btn btn-primary">
              Start Shopping
            </a>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
              {cartItems.map((cartItem) => (
                <div key={cartItem.item._id} className="card">
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '100px 1fr auto auto', 
                    gap: '20px', 
                    alignItems: 'center' 
                  }}>
                    <div style={{ 
                      width: '100px', 
                      height: '100px', 
                      background: '#f8f9fa',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={cartItem.item.image} 
                        alt={cartItem.item.name}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover' 
                        }}
                      />
                    </div>
                    
                    <div>
                      <h3 style={{ marginBottom: '8px', color: '#333' }}>
                        {cartItem.item.name}
                      </h3>
                      <p style={{ 
                        color: '#666', 
                        fontSize: '14px',
                        marginBottom: '8px'
                      }}>
                        {cartItem.item.description}
                      </p>
                      <div style={{ 
                        fontSize: '20px', 
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        ${cartItem.item.price}
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <label style={{ fontSize: '14px', color: '#666' }}>Qty:</label>
                      <select
                        value={cartItem.quantity}
                        onChange={(e) => handleQuantityChange(cartItem.item._id, e.target.value)}
                        style={{
                          padding: '8px 12px',
                          border: '2px solid #e9ecef',
                          borderRadius: '6px',
                          fontSize: '14px',
                          background: 'white'
                        }}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold',
                        marginBottom: '8px'
                      }}>
                        ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(cartItem.item._id)}
                        className="btn btn-danger"
                        style={{ padding: '6px 12px', fontSize: '12px' }}
                      >
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}>
              <div>
                <h3 style={{ marginBottom: '4px' }}>Total: ${getTotalPrice().toFixed(2)}</h3>
                <p style={{ opacity: 0.9, fontSize: '14px' }}>
                  {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={clearCart}
                  className="btn btn-secondary"
                  style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
                >
                  Clear Cart
                </button>
                <button className="btn btn-primary" style={{ 
                  background: 'white', 
                  color: '#667eea',
                  fontWeight: 'bold'
                }}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
