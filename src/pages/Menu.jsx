/** @format */

import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MenuCard from "../components/MenuCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../service/data";
import Sidebar from "../components/Sidebar";
import {
  SparklesIcon,
  StarIcon,
  HeartIcon,
  ClockIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

function Menu() {
  const { t, i18n } = useTranslation();

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

  // Most Popular Meals: get random meals with images
  const mostPopularMeals = useMemo(() => {
    // Filter meals that have an image
    const mealsWithImages = productsData.filter(
      (product) => product.image && typeof product.image === "string" && product.image.trim() !== ""
    );
    // Shuffle the array
    const shuffled = mealsWithImages
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    // Pick first 6 (or any number you want)
    return shuffled.slice(0, 3);
  }, [productsData]);

  return (
    <div className="min-h-screen bg-white" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Decorated Search Section */}
      <div className="bg-primary-light py-8 px-2 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`relative flex ${i18n.language === "ar" ? "flex-row-reverse" : ""}`}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchQueryChange(e.target.value)}
              placeholder={t("menu.search_placeholder")}
              className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-base sm:text-lg"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                textAlign: i18n.language === "ar" ? "right" : "left"
              }}
            />
            <button
              className={`absolute ${i18n.language === "ar" ? "left-2 sm:left-3" : "right-2 sm:right-3"} top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all duration-300`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Most Popular Meals Section */}
      <section className="py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4 sm:mb-6 text-center">
            {t("menu.most_popular", "Most Popular Meals")}
          </h2>
          <MenuCard
            products={mostPopularMeals}
            onViewDetails={handleViewDetails}
            onAddToCart={handleAddToCart}
            onImageClick={handleImageClick}
          />
        </div>
      </section>

      {/* Fixed Mobile Filter Icon Button */}
      <button
        className={`
          fixed z-50 bottom-6 ${i18n.language === "ar" ? "left-6" : "right-6"}
          md:hidden bg-primary-dark text-white rounded-full shadow-lg p-3 flex items-center justify-center
          transition-all duration-300
          ${showFilters ? "bg-primary" : "bg-primary-dark"}
        `}
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
        aria-label={t("menu.show_filters")}
        onClick={() => setShowFilters(!showFilters)}
      >
        <FunnelIcon className="h-6 w-6" />
      </button>

      {/* Overlay for mobile filters */}
      {showFilters && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}

      {/* Mobile Filters Drawer */}
      <div
        className={`
          fixed top-0 bottom-0 ${i18n.language === "ar" ? "left-0" : "right-0"}
          z-50 w-11/12 max-w-xs bg-white shadow-2xl rounded-l-2xl rounded-r-2xl md:hidden
          transform transition-transform duration-300
          ${showFilters ? "translate-x-0" : i18n.language === "ar" ? "-translate-x-full" : "translate-x-full"}
          flex flex-col
        `}
        style={{ maxHeight: "100vh" }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg text-primary-dark">{t("menu.filters")}</span>
          <button
            className="text-gray-400 hover:text-primary-dark transition"
            onClick={() => setShowFilters(false)}
            aria-label={t("menu.hide_filters")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1 p-2">
          <Sidebar filters={filters} setFilters={setFilters} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-1 sm:px-4 py-3 sm:py-8">
        {/* Hide old filter button */}
        {/* <button ...> ... </button> */}

        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Sidebar with Animation (desktop only) */}
          <div
            className={`
              md:w-1/4 md:block hidden
              bg-white shadow-md rounded-lg overflow-hidden mb-4 md:mb-0
              transition-all duration-1000 transform
              ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
            `}>
            <div className="p-3 sm:p-5">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase text-primary-dark">
                {t("menu.filters")}
              </h2>
              <Sidebar filters={filters} setFilters={setFilters} />
            </div>
          </div>

          {/* Main content area - MenuCard with Animation */}
          <div className={`md:w-3/4 transition-all duration-1000 delay-300 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Sort dropdown */}
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4 sm:mb-6 text-center">
              {t("menu.Menu", "Our Menu")}
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 px-2 sm:px-4 gap-2">
              <p className="text-base sm:text-lg text-primary-dark mb-2 sm:mb-0">
                {t("menu_card.showing", {
                  start: filteredProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0,
                  end: Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length),
                  total: filteredProducts.length
                })}
              </p>
              <div className="relative w-full sm:w-auto">
                <select
                  value={filters.sortBy}
                  onChange={handleSortChange}
                  className="appearance-none border rounded py-2 px-3 sm:px-4 text-primary-dark leading-tight focus:outline-none focus:shadow-outline w-full sm:w-auto">
                  <option value="">{t("menu_card.sort.default")}</option>
                  <option value="price-asc">{t("menu_card.sort.price_asc")}</option>
                  <option value="price-desc">{t("menu_card.sort.price_desc")}</option>
                  <option value="rating-asc">{t("menu_card.sort.rating_asc")}</option>
                  <option value="rating-desc">{t("menu_card.sort.rating_desc")}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-primary-dark">
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
              <div className="mt-6 sm:mt-10 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-2 sm:px-4">
                <div className="text-sm text-primary-dark">
                  {t("menu.page", {
                    current: currentPage,
                    total: totalPages
                  })}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${currentPage === 1 ? 'text-primary-light cursor-not-allowed' : 'text-primary-dark hover:bg-primary-lightest'}`}
                    aria-label={t("menu_card.previous")}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-1">
                    {getPaginationRange().map((page, index) => (
                      <React.Fragment key={index}>
                        {page === '...' ? (
                          <span className="px-2 sm:px-3 py-1 text-primary-light">...</span>
                        ) : (
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md text-sm font-medium ${currentPage === page
                              ? "bg-primary-dark text-white shadow-md"
                              : "text-primary-dark hover:bg-primary-lightest"
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
                    className={`p-2 rounded-md ${currentPage === totalPages || totalPages === 0 ? 'text-primary-light cursor-not-allowed' : 'text-primary-dark hover:bg-primary-lightest'}`}
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative bg-white rounded-lg max-w-full sm:max-w-4xl w-full overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-white rounded-full shadow-md hover:bg-primary-light transition-colors z-10"
            >
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-dark" />
            </button>
            <div className="flex-grow flex items-center justify-center h-full overflow-hidden">
              <img
                src={selectedImage.image}
                alt={i18n.language === "ar" && selectedImage.name_ar ? selectedImage.name_ar : selectedImage.name_en}
                className="max-h-[60vh] sm:max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
      {/* Menu Introduction */}
      <section className="py-10 sm:py-16 bg-primary-lightest">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 sm:mb-16 transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 relative text-primary-dark">
              <span className="relative px-4 sm:px-8">
                {t("home.menu.title")}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-16 sm:w-24 h-1"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12">
              <div className="bg-primary-lightest p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-primary/10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-light">
                  <SparklesIcon className="h-8 w-8 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-dark">{t("home.features.quality.title")}</h3>
                <p className="text-primary">{t("home.features.quality.description")}</p>
              </div>
              <div className="bg-primary-lightest p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-primary/10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-light">
                  <StarIcon className="h-8 w-8 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-dark">{t("home.values.service.title")}</h3>
                <p className="text-primary">{t("home.values.service.description")}</p>
              </div>
              <div className="bg-primary-lightest p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-primary/10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-light">
                  <HeartIcon className="h-8 w-8 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-dark">{t("home.values.quality.title")}</h3>
                <p className="text-primary">{t("home.values.quality.description")}</p>
              </div>
              <div className="bg-primary-lightest p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-primary/10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-light">
                  <ClockIcon className="h-8 w-8 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-dark">{t("home.features.delivery.title")}</h3>
                <p className="text-primary">{t("home.features.delivery.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Menu;