/** @format */

import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MenuCard from "../components/MenuCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../service/data";
import {
  SparklesIcon,
  StarIcon,
  HeartIcon,
  ClockIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon,
  ChevronDownIcon,
  ChevronUpIcon
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showPopularMeals, setShowPopularMeals] = useState(false);
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

  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter((product) => {
      // Category
      const normalizedProductCategoryEn = (str) => {
        return str ? str.trim().replace(/\s+/g, ' ').toLowerCase().replace('/', '-').replace(' ', '-') : '';
      };
      const normalizedFilterCategory = (str) => {
        return str ? str.trim().replace(/\s+/g, ' ').toLowerCase().replace('/', '-').replace(' ', '-') : '';
      };
      const matchesCategory =
        filters.category === "" ||
        (i18n.language === "ar" && product.category_ar
          ? normalizedFilterCategory(product.category_ar) === normalizedFilterCategory(filters.category)
          : normalizedProductCategoryEn(product.category_en) === normalizedFilterCategory(filters.category));

      // Subcategory
      const normalizedProductSubcategoryEn = (str) => {
        return str ? str.trim().replace(/\s+/g, ' ').toLowerCase().replace('/', '-').replace(' ', '-') : '';
      };
      const normalizedFilterSubcategory = (str) => {
        return str ? str.trim().replace(/\s+/g, ' ').toLowerCase().replace('/', '-').replace(' ', '-') : '';
      };
      const matchesSubcategory =
        !filters.subcategory ||
        (i18n.language === "ar" && product.subcategory_ar
          ? normalizedFilterSubcategory(product.subcategory_ar) === normalizedFilterSubcategory(filters.subcategory)
          : normalizedProductSubcategoryEn(product.subcategory_en) === normalizedFilterSubcategory(filters.subcategory));

      // Price
      const matchesPrice =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;

      // Search
      const matchesSearch =
        searchQuery === "" ||
        (i18n.language === "ar" && product.name_ar
          ? product.name_ar.toLowerCase().includes(searchQuery.toLowerCase())
          : product.name_en.toLowerCase().includes(searchQuery.toLowerCase()));

      // Brand
      const matchesBrand =
        filters.brand === "" || product.brand === filters.brand;

      // Available
      const matchesAvailable =
        filters.available === "" || String(product.available) === filters.available;

      // Rating
      const matchesRating =
        product.rating >= filters.minRating;

      return (
        matchesCategory &&
        matchesSubcategory &&
        matchesPrice &&
        matchesSearch &&
        matchesBrand &&
        matchesAvailable &&
        matchesRating
      );
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

   {/* Categories Section with Toggle */}
<section className="py-6 sm:py-10">
  <div className="max-w-6xl mx-auto px-2 sm:px-4">
    {/* Mobile Toggle Button */}
    <div className="md:hidden mb-4">
      <button
        onClick={() => setShowPopularMeals(!showPopularMeals)}
        className="w-full flex items-center justify-between bg-primary-light hover:bg-primary text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <span className="text-lg font-semibold">
          {t("menu.categories", "Categories")}
        </span>
        <div className={`transform transition-transform duration-300 ${showPopularMeals ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </button>
    </div>

    {/* Desktop Title (always visible) */}
    <h2 className="hidden md:block text-2xl sm:text-3xl font-bold text-primary-dark mb-4 sm:mb-6 text-center">
      {t("menu.categories", "Categories")}
    </h2>

    {/* Content with Animation */}
    <div className={`
      transition-all duration-500 ease-in-out overflow-hidden
      md:max-h-none md:opacity-100 md:transform-none
      ${showPopularMeals
        ? 'max-h-[2000px] opacity-100 transform translate-y-0'
        : 'md:max-h-none md:opacity-100 max-h-0 opacity-0 transform -translate-y-4'
      }
    `}>
      <div className={`
        transition-all duration-300 delay-100
        md:transform-none md:opacity-100
        ${showPopularMeals
          ? 'transform translate-y-0 opacity-100'
          : 'transform translate-y-4 opacity-0'
        }
      `}>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-0 mb-6 mt-2">
          {[
            { key: 'breakfast', label: i18n.language === 'ar' ? 'فطور' : 'Breakfast' },
            { key: 'lunch_dinner', label: i18n.language === 'ar' ? 'غداء وعشاء' : 'Lunch & Dinner' },
            { key: 'baked_goods', label: i18n.language === 'ar' ? 'مخبوزات' : 'Baked Goods' },
            { key: 'deserts', label: i18n.language === 'ar' ? 'حلويات' : 'Deserts' },
            { key: 'drinks', label: i18n.language === 'ar' ? 'مشروبات' : 'Drinks' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilters({ ...filters, category: cat.label, subcategory: '' })}
              className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow transition-all duration-300 flex items-center justify-center
                border-2
                ${filters.category === cat.label
                  ? 'bg-primary-dark text-white border-primary-dark scale-105 shadow-lg'
                  : 'bg-white text-primary-dark border-primary-light hover:bg-primary-lightest hover:border-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-light'
                }`}
              style={{ minWidth: '140px', marginBottom: '0.5rem' }}
            >
              {cat.label}
              {filters.category === cat.label && (
                <span className="ml-2 bg-white/20 rounded-full p-1">
                  <ChevronUpIcon className="h-4 w-4" />
                </span>
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Main Content */}
      <div className="container mx-auto px-1 sm:px-4 py-3 sm:py-8">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Main content area - MenuCard with Animation */}
          <div className={`w-full transition-all duration-1000 delay-300 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
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

            {/* Subcategories with meals (only shown when a category is selected) */}
            {filters.category && (
              <div className="mt-2 mb-6">
                {/* Get unique subcategories for the selected category, including 'Others' for items without subcategory */}
                {(() => {
                  const subcategories = Array.from(new Set(
                    productsData
                      .filter(p => (i18n.language === "ar" ? p.category_ar === filters.category : p.category_en === filters.category))
                      .map(p => (i18n.language === "ar" ? p.subcategory_ar : p.subcategory_en) || t("menu.others", "Others"))
                  ));
                  return subcategories.filter(Boolean).map((subcategory, index) => {
                    // Get products for this subcategory (including those with no subcategory as 'Others')
                    const subcategoryProducts = productsData.filter(p =>
                      (i18n.language === "ar" ? p.category_ar === filters.category : p.category_en === filters.category) &&
                      ((i18n.language === "ar" ? p.subcategory_ar : p.subcategory_en) === subcategory || (!p.subcategory_ar && !p.subcategory_en && subcategory === t("menu.others", "Others")))
                    );
                    return (
                      <div key={index} className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Subcategory Header */}
                        <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-3 mt-2 text-center">
                          {subcategory}
                        </h3>
                        {/* Subcategory Products */}
                        <div className="p-3 sm:p-4">
                          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subcategoryProducts.map((product) => (
                              <div
                                key={product.id}
                                className="group relative bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                              >
                               {/* Clickable area for navigation */}
<div
  className="cursor-pointer"
  onClick={() => handleViewDetails(product)}
>
  {/* Image Container - Increased height */}
  <div className="h-56 sm:h-60 overflow-hidden bg-gray-100 rounded-t-lg relative flex items-center justify-center">
    {product.image ? (
      <img
        src={product.image}
        alt={i18n.language === "ar" && product.name_ar ? product.name_ar : product.name_en}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">{t("menu_card.no_image")}</span>
      </div>
    )}
  </div>

  {/* Product Info */}
  <div className="p-3">
    {/* Title */}
    <h4 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 line-clamp-1">
      {i18n.language === "ar" && product.name_ar ? product.name_ar : product.name_en}
    </h4>
    {/* Price */}
    <p className="text-sm sm:text-base font-medium text-gray-800">
      {t("menu_card.currency")}{product.price ? product.price.toFixed(0) : "N/A"}
    </p>
    {/* Add to Cart Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart(product);
      }}
      className="mt-2 w-full bg-primary-light hover:bg-primary text-white px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      disabled={!product.available}
    >
      {t("menu_card.add_to_cart")}
    </button>
  </div>
</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            )}

            {/* Only show MenuCard when no category is selected */}
            {!filters.category && (
              <MenuCard
                products={paginatedProducts}
                onViewDetails={handleViewDetails}
                onAddToCart={handleAddToCart}
                onImageClick={handleImageClick}
              />
            )}

            {/* Pagination controls - only show when no category is selected */}
            {!filters.category && totalPages > 1 && (
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
