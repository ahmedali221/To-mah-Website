import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    phone: ''
  });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! (Demo only)');
    clearCart();
    setShowCheckoutForm(false);
    setDeliveryInfo({ address: '', phone: '' });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
          <p className="text-lg">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

        {/* Cart Items */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="card lg:card-side bg-base-100 shadow-xl">
              <figure className="lg:w-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <button
                      className="btn btn-circle btn-sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-circle btn-sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-sm btn-error mt-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title">Order Summary</h2>
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="card-actions justify-end mt-4">
              <button
                className="btn btn-primary"
                onClick={() => navigate('/payment')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        {showCheckoutForm && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Delivery Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label">
                    <span className="label-text">Delivery Address</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    value={deliveryInfo.address}
                    onChange={(e) =>
                      setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    className="input input-bordered w-full"
                    value={deliveryInfo.phone}
                    onChange={(e) =>
                      setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;