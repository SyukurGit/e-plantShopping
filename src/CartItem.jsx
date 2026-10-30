import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, setAddedToCart }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const unitCost = parseFloat(item.cost.replace('$', '')) || 0;
      return total + unitCost * item.quantity;
    }, 0).toFixed(2);
  };

  // Calculate total number of plant units in cart
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total cost for a specific item (unit price * quantity)
  const calculateTotalCost = (item) => {
    const unitCost = parseFloat(item.cost.replace('$', '')) || 0;
    return (unitCost * item.quantity).toFixed(2);
  };

  // Handler for continue shopping button
  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  // Handler for incrementing item quantity
  const handleIncrement = (item) => {
    if (item) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    }
  };

  // Handler for decrementing item quantity (removes item if quantity reaches 0)
  const handleDecrement = (item) => {
    if (item) {
      if (item.quantity > 1) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
      } else {
        handleRemove(item);
      }
    }
  };

  // Handler for deleting an item from the cart
  const handleRemove = (item) => {
    if (item) {
      if (setAddedToCart) {
        setAddedToCart((prev) => ({
          ...prev,
          [item.name]: false,
        }));
      }
      dispatch(removeItem(item.name));
    }
  };

  // Handler for checkout button displaying "Coming Soon"
  const handleCheckoutShopping = () => {
    alert('Coming Soon: Online Checkout and Payment Gateway integration will be available in the next release!');
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <div className="cart-summary-badge">
          <span>Total Plants: <strong>{calculateTotalQuantity()}</strong></span>
          <span className="divider-dot">•</span>
          <span>Grand Total: <strong>${calculateTotalAmount()}</strong></span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your shopping cart is currently empty.</p>
          <button
            className="continue_shopping_btn"
            onClick={handleContinueShopping}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content-wrapper">
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <div className="cart-item-image-container">
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">
                    Unit Price: <strong>{item.cost}</strong>
                  </div>

                  <div className="cart-item-quantity">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="cart-item-quantity-value">
                      {item.quantity}
                    </span>
                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    Subtotal: <strong>${calculateTotalCost(item)}</strong>
                  </div>

                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <h3 className="total_cart_amount">
              Total Cart Amount: ${calculateTotalAmount()}
            </h3>

            <div className="cart-buttons-group">
              <button
                className="continue_shopping_btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="checkout-button"
                onClick={handleCheckoutShopping}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
