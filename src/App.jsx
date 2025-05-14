/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const { i18n } = useTranslation();

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

          {/* Page Content with Top Padding */}
          <main className="flex-grow mt-10">
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
