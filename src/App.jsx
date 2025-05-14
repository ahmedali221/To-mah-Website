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
import { FireIcon } from "@heroicons/react/24/outline";
import productsData from "./service/data";

// PopularMeals component to display popular meals
function PopularMeals({ isOpen, onClose }) {
  // Get random meals from productsData
  const getRandomMeals = (count) => {
    const shuffled = [...productsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  const popularMeals = getRandomMeals(5);
  const { addToCart } = useCart();
  
  return (
    <div className={`fixed top-0 right-0 h-screen w-full md:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4 h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Popular Meals</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <span className="text-xl">×</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {popularMeals.map(meal => (
            <div key={meal.id} className="p-3 hover:shadow-md transition-shadow">
              <img src={meal.image} alt={meal.name_en} className="w-full h-40 object-cover mb-2" />
              <div>
                <h3 className="font-medium">{meal.name_en}</h3>
                <p className="text-sm text-gray-500">${meal.price}</p>
              </div>
              <button 
                onClick={() => {
                  addToCart(meal);
                  onClose();
                }}
                className="bg-primary text-white p-2 mt-2 hover:bg-primary/80 transition-colors w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const { i18n } = useTranslation();
  const [isPopularOpen, setIsPopularOpen] = useState(false);

  // Set the direction of the document based on the selected language
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

          {/* Fixed Action Button */}
          <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
            <button 
              onClick={() => setIsPopularOpen(prev => !prev)}
              className={`btn w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isPopularOpen ? 'bg-primary text-white' : 'bg-white'}`}
              aria-label="Popular Meals"
            >
              <FireIcon className="w-6 h-6 text-primary-dark" />
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
