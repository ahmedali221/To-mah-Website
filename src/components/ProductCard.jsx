// components/ProductCard.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
    const [modalImage, setModalImage] = useState(null);
    const { t, i18n } = useTranslation();

    const closeModal = () => setModalImage(null);

    return (
        <>
            {/* === Modal === */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fadeIn">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={modalImage}
                            alt="preview"
                            className="object-cover w-full h-full transition-transform duration-500 ease-in-out scale-100"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-5 right-5 text-white bg-red-600 hover:bg-red-700 rounded-full px-4 py-2 z-50 shadow-md text-lg"
                        >
                            {t("menu_card.close")}
                        </button>
                    </div>
                </div>
            )}
            {/* === End Modal === */}

            <div className="card bg-base-100 shadow-md overflow-hidden group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative overflow-hidden h-64 md:h-full group">
                        <img
                            src={product.image}
                            alt={
                                i18n.language === "ar" && product.name_ar
                                    ? product.name_ar
                                    : product.name_en
                            }
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                            onClick={() => setModalImage(product.image)}
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[152px] h-[48px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <button
                                className="bg-black text-white px-6 py-3 text-base
                  flex items-center justify-center gap-2
                  transform translate-y-4 group-hover:translate-y-0
                  transition-all duration-300 z-10 hover:bg-gray-800"
                                onClick={() => onAddToCart(product)}>
                                {t("menu_card.add_to_cart")}
                            </button>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col justify-center">
                        <h2 className="card-title uppercase text-xl font-semibold mb-2">
                            {i18n.language === "ar" && product.name_ar
                                ? product.name_ar
                                : product.name_en}
                        </h2>
                        <h3 className="text-lg font-medium text-gray-700 mb-4">
                            {i18n.language === "ar" && product.desc_ar
                                ? product.desc_ar
                                : product.desc_en}
                        </h3>
                        <div className="flex items-center mb-4">
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="ml-2 text-gray-600">({product.rating})</span>
                        </div>
                        <p className="text-2xl font-bold text-black flex items-center gap-1 mb-4">
                            <span className="text-lg font-semibold text-gray-500">
                                {t("menu_card.currency")}
                            </span>{" "}
                            {product.price.toFixed(2)}
                        </p>
                        {product.available ? (
                            <span className="text-green-600 font-medium mb-4">
                                {t("menu_card.available")}
                            </span>
                        ) : (
                            <span className="text-red-600 font-medium mb-4">
                                {t("menu_card.unavailable")}
                            </span>
                        )}
                        <div className="flex space-x-4 mt-2">
                            <button
                                onClick={() => onViewDetails(product)}
                                className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300">
                                {t("menu_card.view_details")}
                            </button>
                            <button
                                onClick={() => onAddToCart(product)}
                                className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                                disabled={!product.available}>
                                {t("menu_card.add_to_cart")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
