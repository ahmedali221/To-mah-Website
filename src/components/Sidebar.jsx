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

export default function Sidebar({ filters, setFilters }) {
	const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
	const [, setShowResetButton] = useState(false);
	const [expandedSection, setExpandedSection] = useState("categories");
	const { t, i18n } = useTranslation();

	const availableCategories = [
		"All",
		...new Set(productsData.map((product) => product.category_en)),
	];

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

	const handleCategoryClick = (category_en) => {
		updateFilter("category", category_en === "All" ? "" : category_en);
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
			className="w-full p-3 bg-white rounded-lg shadow-lg border border-gray-100"
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			{(filters.category !== "" ||
				filters.minPrice > 0 ||
				filters.maxPrice < Infinity) && (
			<div className="p-4 border-b border-gray-100">
				<button
					onClick={handleResetFilters}
					className="w-full py-2.5 px-4 bg-amber-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-amber-700 transition-all duration-300 shadow-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
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

			<div className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
				<button
					className="flex justify-between items-center w-full p-4 text-left font-bold text-gray-800"
					onClick={() => toggleSection("categories")}>
					<span className="flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						{t("sidebar.categories")}
					</span>
					<svg
						className={`w-4 h-4 transition-transform duration-300 ${
							expandedSection === "categories" ? "transform rotate-180" : ""
						}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>

				{expandedSection === "categories" && (
					<div className="p-4 pt-4">
						<ul className="space-y-2">
							{availableCategories.map((category_en, index) => {
								const isActive =
									filters.category === (category_en === "All" ? "" : category_en);
								return (
									<li key={index}>
										<button
											onClick={() => handleCategoryClick(category_en)}
											className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-300 ${
												isActive
													? "bg-amber-600 text-white font-medium shadow-sm"
													: "text-gray-700 hover:bg-gray-100"
											}`}>
											{category_en}
											{isActive && (
												<span className="float-right">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor">
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

			<div className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
				<button
					className="flex justify-between items-center w-full p-4 text-left font-bold text-gray-800"
					onClick={() => toggleSection("price")}>
					<span className="flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						{t("sidebar.price_filter")}
					</span>
					<svg
						className={`w-4 h-4 transition-transform duration-300 ${
							expandedSection === "price" ? "transform rotate-180" : ""
						}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>

				{expandedSection === "price" && (
					<div className="p-4 pt-4">
						<div className="mb-6">
							<div className="flex items-center justify-between text-sm text-gray-600 mb-2">
								<span className="font-medium">{t("sidebar.price_range")}</span>
								<span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
									{t("sidebar.currency")} {minPrice} - {t("sidebar.currency")}{" "}
									{priceRange.max === Infinity ? maxPrice : priceRange.max}
								</span>
							</div>

							<input
								type="range"
								className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
								min={minPrice}
								max={maxPrice}
								value={priceRange.max === Infinity ? maxPrice : priceRange.max}
								name="max"
								onChange={handlePriceInputChange}
							/>

							<div className="flex justify-between text-xs text-gray-500 mt-2">
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
							className="w-full bg-amber-600 text-white py-2.5 px-4 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-sm">
							{t("sidebar.apply_filter")}
						</button>
					</div>
				)}
			</div>

			<div className="hover:bg-gray-50 transition-colors duration-300">
				<button
					className="flex justify-between items-center w-full p-4 text-left font-bold text-gray-800"
					onClick={() => toggleSection("popular")}>
					<span className="flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
						</svg>
						{t("sidebar.popular_items")}
					</span>
					<svg
						className={`w-4 h-4 transition-transform duration-300 ${
							expandedSection === "popular" ? "transform rotate-180" : ""
						}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>

				{expandedSection === "popular" && (
					<div className="p-4 pt-4">
						<ul className="space-y-4">
							{popularProducts.length > 0 ? (
								popularProducts.map((product, index) => (
									<li
										key={index}
										className="flex items-center space-x-3 group p-2 hover:bg-white rounded-lg transition-all duration-300 cursor-pointer">
										<div className="w-16 h-16 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
											<img
												src={product.image}
												alt={product.name}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
											/>
										</div>
										<div className="flex-1">
											<p className="font-medium text-gray-800 line-clamp-1 group-hover:text-amber-600 transition-colors duration-300">
												{product.name}
											</p>
											<p className="text-amber-600 font-bold mt-1">
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
