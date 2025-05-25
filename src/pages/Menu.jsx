/** @format */

import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MenuCard from "../components/MenuCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
// Import the normalized data with unique IDs
import productsData from "../service/data";
import Sidebar from "../components/Sidebar";
import {
  SparklesIcon,
  StarIcon,
  HeartIcon,
  ClockIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

function Menu() {
  const { t, i18n } = useTranslation();

  // No need to combine data here as we're using the normalized data
  // with unique IDs from data.js

  const minPrice = Math.min(...productsData.map((p) => parseFloat(p.price) || 0));
  const maxPrice = Math.max(...productsData.map((p) => parseFloat(p.price) || 100));

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Number of items to load per page
  const ITEMS_PER_PAGE = 12;

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleViewDetails = (product) => {
    navigate("/menu/" + product.id, { state: { meal: product } });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleImageClick = (product) => {
    setSelectedImage(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  const normalizeString = (str) => {
    return str ? str.trim().replace(/\s+/g, ' ').toLowerCase().replace('/', '-').replace(' ', '-') : '';
  };

  // Memoize filtered products to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter((product) => {

      const normalizedProductCategoryEn = normalizeString(product.category_en);
      const normalizedFilterCategory = normalizeString(filters.category);

      const matchesCategory =
        filters.category === "" ||
        (i18n.language === "ar" && product.category_ar
          ? normalizeString(product.category_ar) === normalizedFilterCategory
          : normalizedProductCategoryEn === normalizedFilterCategory);
      const matchesPrice =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;
      const matchesSearch =
        searchQuery === "" ||
        (i18n.language === "ar" && product.name_ar
          ? product.name_ar.toLowerCase().includes(searchQuery.toLowerCase())
          : product.name_en.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesBrand =
        filters.brand === "" || product.brand === filters.brand;
      const matchesAvailable =
        filters.available === "" || String(product.available) === filters.available;
      const matchesRating =
        product.rating >= filters.minRating;

      return matchesCategory && matchesPrice && matchesSearch &&
        matchesBrand && matchesAvailable && matchesRating;
    });

    // Apply sorting
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        if (filters.sortBy === "price-asc") return a.price - b.price;
        if (filters.sortBy === "price-desc") return b.price - a.price;
        if (filters.sortBy === "rating-asc") return a.rating - b.rating;
        if (filters.sortBy === "rating-desc") return b.rating - a.rating;
        return 0;
      });
    }

    return filtered;
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (event) => {
    setFilters({ ...filters, sortBy: event.target.value });
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Function to generate pagination range
  const getPaginationRange = () => {
    const totalNumbers = 5; // Number of page numbers to show
    const totalBlocks = totalNumbers + 2; // Total blocks including ellipsis

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      let pages = [];

      // Always show first page
      pages.push(1);

      // Show ellipsis if needed after first page
      if (startPage > 2) {
        pages.push('...');
      }

      // Show middle range
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Show ellipsis if needed before last page
      if (endPage < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);

      return pages;
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

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
            {/* Sort dropdown */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 px-4">
              <p className="text-lg text-gray-600 mb-3 sm:mb-0">
                {t("menu_card.showing", {
                  start: filteredProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0,
                  end: Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length),
                  total: filteredProducts.length
                })}
              </p>
              <div className="relative">
                <select
                  value={filters.sortBy}
                  onChange={handleSortChange}
                  className="appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">{t("menu_card.sort.default")}</option>
                  <option value="price-asc">{t("menu_card.sort.price_asc")}</option>
                  <option value="price-desc">{t("menu_card.sort.price_desc")}</option>
                  <option value="rating-asc">{t("menu_card.sort.rating_asc")}</option>
                  <option value="rating-desc">{t("menu_card.sort.rating_desc")}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <MenuCard
              products={paginatedProducts}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
              onImageClick={handleImageClick}
            />

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="mt-10 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
                <div className="text-sm text-gray-600">
                  {t("menu.page", {
                    current: currentPage,
                    total: totalPages
                  })}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                    aria-label={t("menu_card.previous")}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-1">
                    {getPaginationRange().map((page, index) => (
                      <React.Fragment key={index}>
                        {page === '...' ? (
                          <span className="px-3 py-1 text-gray-500">...</span>
                        ) : (
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium ${currentPage === page
                              ? "bg-blue-500 text-white shadow-md" // Updated active page style
                              : "text-gray-700 hover:bg-gray-100"
                              }`}
                            aria-label={t("menu.page_number", { number: page })}
                          >
                            {page}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className={`p-2 rounded-md ${currentPage === totalPages || totalPages === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                    aria-label={t("menu_card.next")}
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
            >
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            </button>

            {/* Full-height image container */}
            <div className="flex-grow flex items-center justify-center h-full overflow-hidden">
              <img
                src={selectedImage.image}
                alt={i18n.language === "ar" && selectedImage.name_ar ? selectedImage.name_ar : selectedImage.name_en}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;