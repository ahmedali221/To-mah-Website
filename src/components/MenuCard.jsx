/** @format */

import React from "react";
import { useTranslation } from "react-i18next";

export default function MenuCard({
  products,
  onViewDetails,
  onAddToCart,
}) {
  const { t, i18n } = useTranslation();

  return (
    <main
      className="w-full mx-auto px-1 sm:px-4"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}>

      {products.length === 0 ? (
        <div className="text-center py-8 sm:py-10">
          <p className="text-lg sm:text-xl text-gray-600">{t("menu_card.no_products")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Clickable area for navigation (everything except button) */}
              <div
                className="cursor-pointer"
                onClick={() => onViewDetails(product)}
              >
                {/* Image Container */}
                <div className="h-80 sm:h-96 overflow-hidden bg-gray-100 rounded-lg relative flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={
                      i18n.language === "ar" && product.name_ar
                        ? product.name_ar
                        : product.name_en
                    }
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Availability Badge */}
                  {!product.available && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
                      {t("menu_card.unavailable")}
                    </div>
                  )}

                  {/* Add to Cart Button - Shows on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="pointer-events-auto bg-black text-white px-3 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider rounded shadow translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                      disabled={!product.available}
                    >
                      {t("menu_card.add_to_cart")}
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">
                  {/* Title */}
                  <h2 className="text-base sm:text-lg font-semibold mb-1 text-gray-900 line-clamp-1">
                    {i18n.language === "ar" && product.name_ar
                      ? product.name_ar
                      : product.name_en}
                  </h2>

                  {/* Price */}
                  <p className="text-base sm:text-lg font-medium text-gray-800">
                    {t("menu_card.currency")}{product.price ? product.price.toFixed(0) : "N/A"}
                  </p>

                  {/* Description (optional) */}
                  {product.description && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2">
                      {i18n.language === "ar" && product.description_ar
                        ? product.description_ar
                        : product.description_en}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}