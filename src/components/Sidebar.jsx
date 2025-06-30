import React from "react";
import { useTranslation } from "react-i18next";
import productsData from "../service/data";

export default function Sidebar({ filters, setFilters }) {
  const { t, i18n } = useTranslation();
  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  // Get all categories, using 'Others' for products without a category
  const categories = Array.from(new Set(
    productsData.map(product => {
      if (i18n.language === "ar") {
        return product.category_ar || t("sidebar.others", "Others");
      } else {
        return product.category_en ? capitalizeFirstLetter(product.category_en) : t("sidebar.others", "Others");
      }
    })
  ));
  // Remove falsy values
  const filteredCategories = categories.filter(Boolean);
  const isCategoryActive = (category) => filters.category === category || (filters.category === "" && category === t("sidebar.others", "Others"));
  const handleCategoryClick = (category) => {
    setFilters({ ...filters, category: category === t("sidebar.others", "Others") ? "" : category, subcategory: "" });
  };
  return (
    <aside className="w-full p-2 sm:p-3 bg-white rounded-lg shadow-lg border border-gray-100" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="p-2 sm:p-4">
        <ul className="space-y-1 sm:space-y-2">
          {filteredCategories.map((category, index) => {
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
    </aside>
  );
}