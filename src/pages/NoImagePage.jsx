import React from "react";
import { useTranslation } from "react-i18next";
import productsData from "../service/data";
import { Link, useNavigate } from "react-router-dom";

const NoImageProducts = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    
    // Function to handle navigation and scroll to top
    const handleNavigation = (e, path) => {
        e.preventDefault();
        navigate(path);
        window.scrollTo(0, 0);
    };

    // Filter products with no image or empty image string
    const productsWithoutImages = productsData.filter(
        (product) =>
            !product.image ||
            typeof product.image !== "string" ||
            product.image.trim() === ""
    );

    // Group products without images by category
    const groupedByCategory = productsWithoutImages.reduce((acc, product) => {
        const category = i18n.language === 'ar'
            ? (product.category_ar || t('no_image_products.other', 'أخرى'))
            : (product.category_en || t('no_image_products.other', 'Other'));
        if (!acc[category]) acc[category] = [];
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-2" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-primary mb-8 text-center">
                    {t("no_image_products.title", "منتجات بدون صورة")}
                </h1>
                {productsWithoutImages.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">
                        {t("no_image_products.none", "كل المنتجات تحتوي على صور.")}
                    </p>
                ) : (
                    <div className="space-y-12">
                        {Object.entries(groupedByCategory).map(([category, products]) => (
                            <div key={category}>
                                <h2 className="text-2xl font-bold text-primary-dark mb-6 mt-8 text-center border-b pb-2">{category}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {products.map((product) => (
                                        <div key={product.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-2">
                                            <div className="flex items-center gap-4">
                                                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg text-gray-400 text-4xl">
                                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11a4 4 0 118 0 4 4 0 01-8 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h2 className="text-xl font-semibold text-primary-dark">
                                                        {i18n.language === "ar" && product.name_ar
                                                            ? product.name_ar
                                                            : product.name_en}
                                                    </h2>
                                                    <p className="text-gray-600">
                                                        {i18n.language === "ar" && product.desc_ar
                                                            ? product.desc_ar
                                                            : product.desc_en}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {t("no_image_products.price", "السعر")}: {product.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <Link
                                                to={`/menu/${product.id}`}
                                                onClick={(e) => handleNavigation(e, `/menu/${product.id}`)}
                                                className="mt-4 inline-block text-primary hover:underline text-sm"
                                            >
                                                {t("no_image_products.view_details", "عرض التفاصيل")}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoImageProducts;