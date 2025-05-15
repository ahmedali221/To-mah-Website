/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import MealDetails from "./pages/MealDetails";
import { CartProvider, useCart } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { FireIcon, XMarkIcon } from "@heroicons/react/24/outline";
import productsData from "./service/data";

function PopularMeals({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();

  const getRandomMeals = (count) => {
    const shuffled = [...productsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const popularMeals = getRandomMeals(5);

  return (
    <div 
      className={`fixed top-0 ${i18n.language === "ar" ? "left-0" : "right-0"} h-screen w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : i18n.language === "ar" ? "-translate-x-full" : "translate-x-full"
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {t("popular_meals.title")}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto">
          {popularMeals.map(meal => (
            <div 
              key={meal.id} 
              className={`flex items-center p-3 mb-4 rounded-lg transition-all duration-300 cursor-pointer group ${
                i18n.language === "ar" ? "flex-row-reverse gap-3" : "gap-3"
              } border border-gray-100 hover:shadow-md`}
            >
              <div className="w-20 h-20 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                <img
                  src={meal.image}
                  alt={i18n.language === "ar" && meal.name_ar ? meal.name_ar : meal.name_en}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className={`flex-1 ${i18n.language === "ar" ? "text-right" : "text-left"}`}>
                <h3 className="font-medium text-gray-800 line-clamp-1 group-hover:text-primary transition-colors duration-300">
                  {i18n.language === "ar" && meal.name_ar ? meal.name_ar : meal.name_en}
                </h3>
                <p className="text-primary-dark font-bold mt-1">
                  {meal.price.toFixed(2)} {t("sidebar.currency")}
                </p>
              </div>
              <button
                onClick={() => {
                  addToCart(meal);
                  onClose();
                }}
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors text-sm whitespace-nowrap"
              >
                {t("menu_card.add_to_cart")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const [isPopularOpen, setIsPopularOpen] = useState(false);

  document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          {/* Fixed Navbar */}
          <div className="fixed top-0 left-0 w-full z-50 h-16 bg-base-100 shadow">
            <Navbar changeLanguage={changeLanguage} />
          </div>

        {/* Floating Action Button */}
<div className={`fixed ${i18n.language === "ar" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40`}>
  <button 
    onClick={() => setIsPopularOpen(prev => !prev)}
    className={`btn w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
      isPopularOpen ? 'bg-primary text-white' : 'bg-primary text-white'
    }`}
    aria-label={t("popular_meals.title")}
  >
    {isPopularOpen ? (
      <span className="text-primary-black text-lg font-bold">O</span>
    ) : (
      <span className="text-white text-lg font-bold">P</span>
    )}
  </button>
</div>

          {/* Popup Component */}
          <PopularMeals isOpen={isPopularOpen} onClose={() => setIsPopularOpen(false)} />
          
          {/* Overlay when popup is open */}
          {isPopularOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
              onClick={() => setIsPopularOpen(false)}
            />
          )}

          {/* Page Content with Top Padding */}
          <main className="flex-grow mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<MealDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>

          <Footer />
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;