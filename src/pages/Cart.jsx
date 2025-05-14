/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { XMarkIcon, PlusIcon, MinusIcon, ArrowLeftIcon, ShoppingBagIcon, TruckIcon, CreditCardIcon } from "@heroicons/react/24/outline";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: "",
    phone: "",
  });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("cart.order_success"));
    clearCart();
    setShowCheckoutForm(false);
    setDeliveryInfo({ address: "", phone: "" });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <ShoppingBagIcon className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("cart.title")}</h1>
          <p className="text-lg text-gray-600 mb-8">{t("cart.empty")}</p>
          <button
            onClick={() => navigate('/menu')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105"
          >
            {t("home.about.button")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-primary hover:text-primary-dark mb-6 transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 text-white" />
           <span className="text-white"> {t("cart.back")}</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("cart.title")}</h1>
          <p className="text-lg text-gray-600">{t("cart.subtitle")}</p>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </div>

        {/* Cart Items */}
        <div className={`space-y-6 mb-8 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={i18n.language === "ar" && item.name_ar ? item.name_ar : item.name_en}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 shadow-sm hover:bg-white transition-all duration-300"
                  >
                    <XMarkIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {i18n.language === "ar" && item.name_ar ? item.name_ar : item.name_en}
                    </h3>
                    <p className="text-lg font-semibold text-primary">
                      {t("cart.currency")}{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {i18n.language === "ar" && item.desc_ar ? item.desc_ar : item.desc_en}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
<button
  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
  className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
>
 <span> - </span>
</button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-9 h-9 rounded-full text-white	 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                      >
 <span>+</span>
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-300"
                    >
                      {t("cart.remove")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className={`bg-white rounded-xl shadow-md p-6 mb-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t("cart.summary")}</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">{t("cart.subtotal")}</span>
              <span className="font-medium">{t("cart.currency")}{getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t("cart.delivery_fee")}</span>
              <span className="font-medium">{t("cart.currency")}2.99</span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <span className="font-bold text-gray-900">{t("cart.total")}</span>
              <span className="font-bold text-primary text-xl">
                {t("cart.currency")}{(getCartTotal() + 2.99).toFixed(2)}
              </span>
            </div>
          </div>
<button
  onClick={() => navigate('/payment')}
  className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex items-center justify-center"
>
  <CreditCardIcon className="w-5 h-5 mr-2" />
  {t("cart.checkout")}
</button>
        </div>

       
      </div>
    </div>
  );
}

export default Cart;