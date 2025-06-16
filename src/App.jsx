/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import MealDetails from "./pages/MealDetails";
import NoImageProducts from "./pages/NoImagePage";
import { CartProvider, useCart } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import Banner from "./components/Banner";

function App() {
  const { t, i18n } = useTranslation();

  document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Detect mobile device
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          {/* Banner and Navbar always visible */}
          {!isMobile && <Banner />}
          <Navbar changeLanguage={changeLanguage} />

          {/* Page Content with Top Padding for sticky navbar */}
          <main className="flex-grow ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<MealDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/no-image-products" element={<NoImageProducts />} />
            </Routes>
          </main>

          <Footer />
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;