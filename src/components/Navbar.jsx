/** @format */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.webp";

function Navbar({ changeLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const LanguageToggle = ({ isMobile = false }) => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const handleLanguageChange = (lang) => {
      changeLanguage(lang);
      setCurrentLanguage(lang);
      if (isMobile) setIsMenuOpen(false);
    };

    const buttonClasses = `px-3 py-1 text-sm rounded-full shadow-md transition-all duration-300 ${
      scrolled 
        ? "bg-amber-600 hover:bg-amber-700 text-white" 
        : "bg-white bg-opacity-90 hover:bg-opacity-100 text-amber-800"
    }`;

    return (
      <div className={`flex space-x-2 ${isMobile ? "px-3 py-2" : ""}`}>
        {currentLanguage === "en" ? (
          <button
            onClick={() => handleLanguageChange("ar")}
            className={buttonClasses}
          >
            {t("navbar.language_toggle.arabic")}
          </button>
        ) : (
          <button
            onClick={() => handleLanguageChange("en")}
            className={buttonClasses}
          >
            {t("navbar.language_toggle.english")}
          </button>
        )}
      </div>
    );
  };

  const isActive = (path) => {
    return location.pathname === path 
      ? scrolled 
        ? "text-amber-600 font-medium" 
        : "text-amber-300 font-medium"
      : scrolled 
        ? "text-gray-700 hover:text-amber-600" 
        : "text-white hover:text-amber-300";
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-colors ${
                scrolled ? "border-amber-600" : "border-amber-300"
              }`}>
                <img 
                  src={logo} 
                  alt="To'mah Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`text-2xl font-bold transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              } hidden sm:block`}>
                {t("navbar.brand")}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link relative py-2 transition-colors ${isActive("/")}`}
            >
              {t("navbar.home")}
            </Link>
            <Link 
              to="/about" 
              className={`nav-link relative py-2 transition-colors ${isActive("/about")}`}
            >
              {t("navbar.about")}
            </Link>
            <Link 
              to="/menu" 
              className={`nav-link relative py-2 transition-colors ${isActive("/menu")}`}
            >
              {t("navbar.menu")}
            </Link>
            <Link 
              to="/partners" 
              className={`nav-link relative py-2 transition-colors ${isActive("/partners")}`}
            >
              {t("navbar.partners")}
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link relative py-2 transition-colors ${isActive("/contact")}`}
            >
              {t("navbar.contact")}
            </Link>
            <Link to="/cart" className="relative p-2 group">
              <ShoppingCartIcon className={`h-6 w-6 transition-colors ${
                scrolled 
                  ? "text-gray-700 group-hover:text-amber-600" 
                  : "text-white group-hover:text-amber-300"
              }`} />
              {totalItems > 0 && (
                <span className={`absolute -top-1 -right-1 rounded-full h-5 w-5 flex items-center justify-center text-xs ${
                  scrolled ? "bg-amber-600 text-white" : "bg-amber-300 text-amber-900"
                }`}>
                  {totalItems}
                </span>
              )}
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4 p-2">
              <ShoppingCartIcon className={`h-6 w-6 ${
                scrolled ? "text-gray-700" : "text-white"
              }`} />
              {totalItems > 0 && (
                <span className={`absolute -top-1 -right-1 rounded-full h-5 w-5 flex items-center justify-center text-xs ${
                  scrolled ? "bg-amber-600 text-white" : "bg-amber-300 text-amber-900"
                }`}>
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? "text-gray-700 hover:text-amber-600" : "text-white hover:text-amber-300"
              }`}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md hover:bg-amber-50 transition-colors ${
              location.pathname === "/" ? "text-amber-600 font-medium" : "text-gray-700"
            }`}>
            {t("navbar.home")}
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md hover:bg-amber-50 transition-colors ${
              location.pathname === "/about" ? "text-amber-600 font-medium" : "text-gray-700"
            }`}>
            {t("navbar.about")}
          </Link>
          <Link
            to="/menu"
            className={`block px-3 py-2 rounded-md hover:bg-amber-50 transition-colors ${
              location.pathname === "/menu" ? "text-amber-600 font-medium" : "text-gray-700"
            }`}>
            {t("navbar.menu")}
          </Link>
          <Link
            to="/partners"
            className={`block px-3 py-2 rounded-md hover:bg-amber-50 transition-colors ${
              location.pathname === "/partners" ? "text-amber-600 font-medium" : "text-gray-700"
            }`}>
            {t("navbar.partners")}
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md hover:bg-amber-50 transition-colors ${
              location.pathname === "/contact" ? "text-amber-600 font-medium" : "text-gray-700"
            }`}>
            {t("navbar.contact")}
          </Link>
          <div className="pt-2 border-t border-gray-200">
            <LanguageToggle isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;