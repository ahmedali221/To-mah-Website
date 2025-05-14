/** @format */

import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MenuCard from "../components/MenuCard";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../service/data";
import Sidebar from "../components/Sidebar";
import MenuHero from "../assets/AboutImages/menu.png";
import { 
  SparklesIcon,
  StarIcon,
  HeartIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

function Menu() {
  const { t, i18n } = useTranslation();
  const minPrice = Math.min(...productsData.map((p) => p.price));
  const maxPrice = Math.max(...productsData.map((p) => p.price));

  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    available: "",
    minPrice: minPrice,
    maxPrice: maxPrice,
    minRating: 0,
    search: "",
    sortBy: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Number of items to load per page
  const ITEMS_PER_PAGE = 10;

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  const handleViewDetails = (product) => {
    navigate("/menu/" + product.id, { state: { meal: product } });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: add toast notification
  };

  // Memoize filtered products to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        filters.category === "" ||
        (i18n.language === "ar" && product.category_ar
          ? product.category_ar === filters.category
          : product.category_en === filters.category);
      const matchesPrice =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;
      const matchesSearch =
        searchQuery === "" ||
        (i18n.language === "ar" && product.name_ar
          ? product.name_ar.toLowerCase().includes(searchQuery.toLowerCase())
          : product.name_en.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [filters, searchQuery, i18n.language]);

  // Calculate paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="bg-gray-50" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Decorated Search Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchQueryChange(e.target.value)}
              placeholder={t("menu.search_placeholder")}
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
            <h2 className="text-4xl font-bold mb-6 relative">
              <span className="relative px-8">
                {t("home.menu.title")}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.features.quality.title")}</h3>
                <p className="text-gray-600">{t("home.features.quality.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.values.service.title")}</h3>
                <p className="text-gray-600">{t("home.values.service.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.values.quality.title")}</h3>
                <p className="text-gray-600">{t("home.values.quality.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.features.delivery.title")}</h3>
                <p className="text-gray-600">{t("home.features.delivery.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Mobile filter toggle button */}
        <button
          className={`md:hidden w-full py-3 mb-4 bg-black text-white flex justify-center items-center transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? t("menu.hide_filters") : t("menu.show_filters")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Sidebar with Animation */}
          <div
            className={`
              md:w-1/4 md:block 
              ${showFilters ? "block" : "hidden"} 
              bg-white shadow-md rounded-lg overflow-hidden mb-6 md:mb-0
              transition-all duration-1000 transform
              ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
            `}>
            <div className="p-5">
              <h2 className="text-xl font-bold mb-4 uppercase">
                {t("menu.filters")}
              </h2>
              <Sidebar filters={filters} setFilters={setFilters} />
            </div>
          </div>

          {/* Main content area - MenuCard with Animation */}
          <div className={`md:w-3/4 transition-all duration-1000 delay-300 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <MenuCard
              filters={filters}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setFilters={setFilters}
              searchQuery={searchQuery}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
              products={paginatedProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;