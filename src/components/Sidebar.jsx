import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// Import the normalized data with unique IDs
import productsData from "../service/data";

const initialFilters = {
  category: "",
  brand: "",
  available: "",
  minPrice: 0,
  maxPrice: Infinity,
  minRating: 0,
  search: "",
  sortBy: "",
};

export default function Sidebar({ filters, setFilters }) {
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [, setShowResetButton] = useState(false);
  const [expandedSection, setExpandedSection] = useState("categories");
  const { t, i18n } = useTranslation();

  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  // Use the normalized data with unique IDs
  const allProductsData = productsData;

  // Get category names based on language
  const availableCategories = [
    t("sidebar.all_categories"),
    ...new Set(allProductsData.map((product) =>
      i18n.language === "ar" && product.category_ar
        ? product.category_ar
        : capitalizeFirstLetter(product.category_en)
    )),
  ];

  const popularProducts = allProductsData
    .filter((product) => product.trendy === true)
    .map((product) => ({
      id: product.id,
      name: i18n.language === "ar" && product.meal_name_ar
        ? product.meal_name_ar
        : capitalizeFirstLetter(product.meal_name_en),
      price: product.price,
      image: product.image,
    }));

  useEffect(() => {
    const min = Math.min(...allProductsData.map((p) => parseFloat(p.price) || 0));
    const max = Math.max(...allProductsData.map((p) => parseFloat(p.price) || 100));
    setPriceRange({
      min: filters.minPrice || min,
      max: filters.maxPrice === Infinity ? max : filters.maxPrice
    });

    if (filters.minPrice === 0 && filters.maxPrice === Infinity) {
      setShowResetButton(false);
    }
  }, [filters.minPrice, filters.maxPrice]);

  const updateFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleCategoryClick = (category) => {
    const categoryForFilter = category === t("sidebar.all_categories") ? "" : category;
    updateFilter("category", categoryForFilter);
  };

  const handlePriceInputChange = (event) => {
    const value = parseInt(event.target.value, 10) || 0;
    const type = event.target.name;
    setPriceRange((prevRange) => ({ ...prevRange, [type]: value }));
  };

  const handleApplyPriceFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    }));
    setShowResetButton(priceRange.min > 0 || priceRange.max < Infinity);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    const min = Math.min(...productsData.map((p) => p.price));
    const max = Math.max(...productsData.map((p) => p.price));
    setPriceRange({ min, max });
    setShowResetButton(false);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const minPrice = Math.min(...productsData.map((p) => p.price));
  const maxPrice = Math.max(...productsData.map((p) => p.price));

  const isCategoryActive = (category) => {
    if (category === t("sidebar.all_categories")) return filters.category === "";
    return filters.category === category;
  };

  return (
    <aside
      className="w-full p-2 sm:p-3 bg-white rounded-lg shadow-lg border border-gray-100"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {(filters.category !== "" ||
        filters.minPrice > 0 ||
        filters.maxPrice < Infinity) && (
          <div className="p-2 sm:p-4 border-b border-gray-100">
            <button
              onClick={handleResetFilters}
              className="w-full py-2 px-3 sm:py-2.5 sm:px-4 bg-amber-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-amber-700 transition-all duration-300 shadow-sm text-sm sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {t("sidebar.reset_filters")}
            </button>
          </div>
        )}

      {/* Categories Section */}
      <div className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
        <button
          className="flex justify-between items-center w-full p-2 sm:p-4 text-left font-bold text-gray-800"
          onClick={() => toggleSection("categories")}
        >
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {t("sidebar.categories")}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${expandedSection === "categories" ? "transform rotate-180" : ""
              }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {expandedSection === "categories" && (
          <div className="p-2 sm:p-4 pt-2 sm:pt-4">
            <ul className="space-y-1 sm:space-y-2">
              {availableCategories.map((category, index) => {
                const isActive = isCategoryActive(category);
                return (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full text-left py-2 px-2 sm:px-3 rounded-lg transition-all duration-300 ${isActive
                        ? "bg-amber-600 text-white font-medium shadow-sm"
                        : "text-gray-700 hover:bg-gray-100"
                        } ${i18n.language === "ar" ? "text-right" : "text-left"} text-sm sm:text-base`}
                    >
                      {category}
                      {isActive && (
                        <span className={`${i18n.language === "ar" ? "float-left" : "float-right"}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Price Filter Section */}
      <div className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
        <button
          className="flex justify-between items-center w-full p-2 sm:p-4 text-left font-bold text-gray-800"
          onClick={() => toggleSection("price")}
        >
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t("sidebar.price_filter")}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${expandedSection === "price" ? "transform rotate-180" : ""
              }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {expandedSection === "price" && (
          <div className="p-2 sm:p-4 pt-2 sm:pt-4">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                <span className="font-medium">{t("sidebar.price_range")}</span>
                <span className="bg-amber-50 text-amber-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {priceRange.min} {t("sidebar.currency")} - {priceRange.max} {t("sidebar.currency")}
                </span>
              </div>
              <div className="space-y-2 sm:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("sidebar.min_price")}
                  </label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange.min}
                    name="min"
                    onChange={handlePriceInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{minPrice} {t("sidebar.currency")}</span>
                    <span>{maxPrice} {t("sidebar.currency")}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("sidebar.max_price")}
                  </label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange.max}
                    name="max"
                    onChange={handlePriceInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{minPrice} {t("sidebar.currency")}</span>
                    <span>{maxPrice} {t("sidebar.currency")}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleApplyPriceFilter}
              className="w-full bg-amber-600 text-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-sm text-sm sm:text-base"
            >
              {t("sidebar.apply_filter")}
            </button>
          </div>
        )}
      </div>

      {/* Popular Items Section */}
      <div className="hover:bg-gray-50 transition-colors duration-300">
        <button
          className="flex justify-between items-center w-full p-2 sm:p-4 text-left font-bold text-gray-800"
          onClick={() => toggleSection("popular")}
        >
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            {t("sidebar.popular_items")}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${expandedSection === "popular" ? "transform rotate-180" : ""
              }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {expandedSection === "popular" && (
          <div className="p-2 sm:p-4 pt-2 sm:pt-4">
            <ul className="space-y-2 sm:space-y-4">
              {popularProducts.length > 0 ? (
                popularProducts.map((product, index) => (
                  <li
                    key={index}
                    className={`flex items-center p-1 sm:p-2 hover:bg-white rounded-lg transition-all duration-300 cursor-pointer group ${i18n.language === "ar" ? "space-x-reverse gap-2 sm:gap-3" : "space-x-2 sm:space-x-3 gap-2 sm:gap-3"}`}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 line-clamp-1 group-hover:text-amber-600 transition-colors duration-300 text-xs sm:text-base">
                        {product.name}
                      </p>
                      <p className="text-primary-dark font-bold mt-1 text-xs sm:text-base">
                        {product.price.toFixed(2)} {t("sidebar.currency")}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-center py-2 sm:py-4 text-xs sm:text-base">
                  {t("sidebar.no_popular_products")}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}