/** @format */

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import productsData from "../service/data";

export default function MenuCard({
	filters,
	currentPage,
	setCurrentPage,
	setFilters,
	searchQuery,
	onViewDetails,
	onAddToCart,
}) {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		let filtered = productsData.filter((product) => {
			return (
				(filters.category === "" || product.category_en === filters.category) &&
				(filters.brand === "" || product.brand === filters.brand) &&
				(filters.available === "" ||
					String(product.available) === filters.available) &&
				product.price >= filters.minPrice &&
				product.price <= filters.maxPrice &&
				product.rating >= filters.minRating &&
				(product.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
					(product.name_ar &&
						product.name_ar.toLowerCase().includes(searchQuery.toLowerCase())))
			);
		});

		if (filters.sortBy) {
			filtered.sort((a, b) => {
				if (filters.sortBy === "price-asc") return a.price - b.price;
				if (filters.sortBy === "price-desc") return b.price - a.price;
				if (filters.sortBy === "rating-asc") return a.rating - b.rating;
				if (filters.sortBy === "rating-desc") return b.rating - a.rating;
				return 0;
			});
		}

		setFilteredProducts(filtered);
		setCurrentPage(1);
	}, [filters, setCurrentPage, searchQuery]);

	const itemsPerPage = 6;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedProducts = filteredProducts.slice(
		startIndex,
		startIndex + itemsPerPage
	);
	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

	const handleSortChange = (event) => {
		setFilters({ ...filters, sortBy: event.target.value });
	};

	return (
		<main
			className="w-full mx-auto px-4"
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			<div className="flex flex-col sm:flex-row justify-between items-center mb-6">
				<p className="text-lg text-gray-600 mb-3 sm:mb-0">
					{t("menu_card.showing", {
						start: startIndex + 1,
						end: Math.min(startIndex + itemsPerPage, filteredProducts.length),
						total: filteredProducts.length,
					})}
				</p>
				<div className="relative">
					<select
						value={filters.sortBy}
						onChange={handleSortChange}
						className="appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<option value="">{t("menu_card.sort.default")}</option>
						<option value="price-asc">{t("menu_card.sort.price_asc")}</option>
						<option value="price-desc">{t("menu_card.sort.price_desc")}</option>
						<option value="rating-asc">{t("menu_card.sort.rating_asc")}</option>
						<option value="rating-desc">
							{t("menu_card.sort.rating_desc")}
						</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
			</div>

			{paginatedProducts.length === 0 ? (
				<div className="text-center py-10">
					<p className="text-xl text-gray-600">{t("menu_card.no_products")}</p>
				</div>
			) : (
				<div className="space-y-6">
					{paginatedProducts.map((product) => (
						<div
							key={product.id}
							className="card bg-base-100 shadow-md overflow-hidden group">
							<div className="grid grid-cols-1 md:grid-cols-2">
								<div className="relative overflow-hidden h-64 md:h-full">
									<img
										src={product.image}
										alt={
											i18n.language === "ar" && product.name_ar
												? product.name_ar
												: product.name_en
										}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
										onClick={() => onViewDetails(product)}
									/>
									<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
										<button
											className="bg-black text-white px-6 py-3 text-base
                                                  flex items-center justify-center gap-2
                                                  transform translate-y-4 group-hover:translate-y-0
                                                  transition-all duration-300 z-10
                                                  hover:bg-gray-800"
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
													className={`w-5 h-5 ${
														i < product.rating
															? "text-yellow-400"
															: "text-gray-300"
													}`}
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											))}
										</div>
										<span className="ml-2 text-gray-600">
											({product.rating})
										</span>
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
					))}
				</div>
			)}

			<div className="mt-10 mb-6 flex justify-center items-center space-x-4">
				<button
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
					className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition-colors">
					{t("menu_card.previous")}
				</button>

				<span className="text-lg">
					{t("menu_card.page", { current: currentPage, total: totalPages })}
				</span>

				<button
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
					disabled={currentPage === totalPages || totalPages === 0}
					className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition-colors">
					{t("menu_card.next")}
				</button>
			</div>
		</main>
	);
}
