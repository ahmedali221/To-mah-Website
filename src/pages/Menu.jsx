/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuCard from "../components/MenuCard";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../service/data";
import Sidebar from "../components/Sidebar";
import MenuHero from "../assets/AboutImages/menu.png";

function Menu() {
	const { t, i18n } = useTranslation();
	const minPrice = Math.min(...productsData.map((p) => p.price));
	const maxPrice = Math.max(...productsData.map((p) => p.price));

	// Extract unique categories based on language
	const categories = [
		...new Set(
			productsData.map((product) =>
				i18n.language === "ar" && product.category_ar
					? product.category_ar
					: product.category_en
			)
		),
	];

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

	// Filter products based on search and basic filters
	const filteredProducts = productsData.filter((product) => {
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

	return (
		<div className="bg-gray-50" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			<HeroSection setSearchQuery={handleSearchQueryChange} image={MenuHero} />

			<div className="container mx-auto px-4 py-8">
				{/* Mobile filter toggle button */}
				<button
					className="md:hidden w-full py-3 mb-4 bg-black text-white flex justify-center items-center"
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
					{/* Sidebar - Now on the left side */}
					<div
						className={`
              md:w-1/4 md:block 
              ${showFilters ? "block" : "hidden"} 
              bg-white shadow-md rounded-lg overflow-hidden mb-6 md:mb-0
            `}>
						<div className="p-5">
							<h2 className="text-xl font-bold mb-4 uppercase">
								{t("menu.filters")}
							</h2>
							<Sidebar
								filters={filters}
								setFilters={setFilters}
								categories={categories}
							/>
						</div>
					</div>

					{/* Main content area - MenuCard */}
					<div className="md:w-3/4">
						<MenuCard
							filters={filters}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							setFilters={setFilters}
							searchQuery={searchQuery}
							onViewDetails={handleViewDetails}
							onAddToCart={handleAddToCart}
							products={filteredProducts}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
