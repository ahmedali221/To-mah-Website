/** @format */

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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

export default function Sidebar({ filters, setFilters, categories }) {
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [, setShowResetButton] = useState(false);
  const [expandedSection, setExpandedSection] = useState("categories");
  const { t, i18n } = useTranslation();

  // Use categories prop from Menu.jsx, add "All" option translated
  const availableCategories = [t("menu.all_categories"), ...categories];

  const popularProducts = productsData
    .filter((product) => product.trendy === true)
    .map((product) => ({
      id: product.id,
      name:
        i18n.language === "ar" && product.name_ar
          ? product.name_ar
          : product.name_en,
      price: product.price,
      image: product.image,
    }));

  useEffect(() => {
    setPriceRange({ min: filters.minPrice, max: filters.maxPrice });
    if (filters.minPrice === 0 && filters.maxPrice === Infinity) {
      setShowResetButton(false);
    }
  }, [filters.minPrice, filters.maxPrice]);

  const updateFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleCategoryClick = (category) => {
    updateFilter("category", category === t("menu.all_categories") ? "" : category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePriceInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    const type = event.target.name;
    setPriceRange((prevRange) => ({ ...prevRange, [type]: value }));
  };

  const handleApplyPriceFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    }));
    if (priceRange.min > 0 || priceRange.max < Infinity) {
      setShowResetButton(true);
    } else {
      setShowResetButton(false);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setPriceRange({ min: 0, max: Infinity });
    setShowResetButton(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const minPrice = Math.min(...productsData.map((p) => p.price));
  const maxPrice = Math.max(...productsData.map((p) => p.price));

  return (
    <aside
      className="w-full bg-white rounded-lg"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {(filters.category !== "" ||
        filters.minPrice > 0 ||
        filters.maxPrice < Infinity) && (
        <div className="p-4 border-b border-gray-100">
          <button
            onClick={handleResetFilters}
            className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
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

      <div className="border-b border-gray-100">
        <button
          className="flex justify-between items-center w-full p-4 text-left font-bold"
          onClick={() => toggleSection("categories")}
        >
          <span>{t("sidebar.categories")}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              expandedSection === "categories" ? "transform rotate-180" : ""
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
          <div className="p-4 pt-0">
            <ul className="space-y-3">
              {availableCategories.map((category, index) => {
                const isActive =
                  filters.category ===
                  (category === t("menu.all_categories") ? "" : category);
                return (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full text-left py-1 px-2 rounded transition-colors ${
                        isActive
                          ? "bg-black text-white font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                      {isActive && (
                        <span className="float-right">
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

      <div className="border-b border-gray-100">
        <button
          className="flex justify-between items-center w-full p-4 text-left font-bold"
          onClick={() => toggleSection("price")}
        >
          <span>{t("sidebar.price_filter")}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              expandedSection === "price" ? "transform rotate-180" : ""
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
          <div className="p-4 pt-0">
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span className="font-medium">{t("sidebar.price_range")}</span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  {t("sidebar.currency")} {minPrice} - {t("sidebar.currency")}{" "}
                  {priceRange.max === Infinity ? maxPrice : priceRange.max}
                </span>
              </div>

              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                min={minPrice}
                max={maxPrice}
                value={priceRange.max === Infinity ? maxPrice : priceRange.max}
                name="max"
                onChange={handlePriceInputChange}
              />

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>
                  {t("sidebar.currency")} {minPrice}
                </span>
                <span>
                  {t("sidebar.currency")} {maxPrice}
                </span>
              </div>
            </div>

            <button
              onClick={handleApplyPriceFilter}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
            >
              {t("sidebar.apply_filter")}
            </button>
          </div>
        )}
      </div>

      <div>
        <button
          className="flex justify-between items-center w-full p-4 text-left font-bold"
          onClick={() => toggleSection("popular")}
        >
          <span>{t("sidebar.popular_items")}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              expandedSection === "popular" ? "transform rotate-180" : ""
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
          <div className="p-4 pt-0">
            <ul className="space-y-4">
              {popularProducts.length > 0 ? (
                popularProducts.map((product, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 group p-2 hover:bg-gray-50 rounded transition-colors"
                  >
                    <div className="w-16 h-16 overflow-hidden rounded bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-black font-bold mt-1">
                        {t("sidebar.currency")} {product.price.toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-center py-4">
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