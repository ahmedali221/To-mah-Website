/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

function MealDetails() {
	const { addToCart } = useCart();
	const { state } = useLocation();
	const navigate = useNavigate();
	const meal = state?.meal;
	const { t, i18n } = useTranslation();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// Trigger animations after component mounts
		setVisible(true);
	}, []);

	if (!meal) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-50">
				<div className="text-center">
					<div className="loading loading-spinner loading-lg text-amber-600"></div>
					<p className="mt-4">{t("meal_details.loading")}</p>
				</div>
			</div>
		);
	}

	const handleAddToCart = () => {
		addToCart(meal);
		const toast = document.getElementById("toast");
		if (toast) {
			toast.classList.remove("hidden");
			setTimeout(() => {
				toast.classList.add("hidden");
			}, 3000);
		}
	};

	// Helper function to get the meal name based on language
	const getMealName = () => {
		if (i18n.language === "ar" && meal.name_ar) {
			return meal.name_ar;
		} else if (i18n.language === "ar" && meal.meal_name_ar) {
			return meal.meal_name_ar;
		} else if (meal.name_en) {
			return meal.name_en;
		} else if (meal.meal_name_en) {
			return meal.meal_name_en;
		} else if (meal.name) {
			return meal.name;
		}
		return t("meal_details.unnamed_meal");
	};

	// Helper function to get the meal description based on language
	const getMealDescription = () => {
		if (i18n.language === "ar" && meal.desc_ar) {
			return meal.desc_ar;
		} else if (i18n.language === "ar" && meal.description_ar) {
			return meal.description_ar;
		} else if (meal.desc_en) {
			return meal.desc_en;
		} else if (meal.description_en) {
			return meal.description_en;
		} else if (meal.description) {
			return meal.description;
		}
		return null;
	};

	// Format price safely
	const formatPrice = (price) => {
		if (price === undefined || price === null) return t("meal_details.na");
		
		if (typeof price === 'string') {
			// If price is already a string (like "15 ريال"), return it as is
			return price;
		}
		
		try {
			return typeof price === 'number' ? price.toFixed(2) : price.toString();
		} catch {
			return price.toString();
		}
	};

	return (
		<div
			className="min-h-screen py-16 bg-slate-50 transition-opacity duration-700 ease-in-out"
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Back button */}
				<div className={`mb-8 transition-all duration-700 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
					<button 
						onClick={() => navigate(-1)} 
						className="btn btn-ghost hover:bg-amber-100 transition-all duration-300">
						← {t("meal_details.back")}
					</button>
				</div>

				{/* Title Section */}
				<div className={`text-center mb-12 transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
					<h1 className="text-4xl font-bold mb-4">
						{getMealName()}
					</h1>
					<div className="w-24 h-1 bg-amber-600 mx-auto"></div>
				</div>

				{/* Main content grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Left column - Image */}
					<div className={`flex flex-col gap-4 transition-all duration-1000 delay-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
						{meal.image && (
							<div className="rounded-lg shadow-xl overflow-hidden relative">
								<img
									src={meal.image}
									alt={getMealName()}
									className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						)}

						{/* Quick facts - Only show if at least one fact exists */}
						{(meal.prepTime || meal.calories || meal.difficulty_en || meal.difficulty_ar || 
						  meal.servings || meal.isVegetarian !== undefined || meal.isVegan !== undefined) && (
							<div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 transition-all duration-1000 delay-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
								<h3 className="text-xl font-bold mb-4 text-amber-600">
									{t("meal_details.quick_facts")}
								</h3>
								<div className="grid grid-cols-2 gap-4">
									{meal.prepTime && (
										<div>
											<p className="text-sm opacity-70">
												{t("meal_details.prep_time")}
											</p>
											<p className="font-medium">
												{meal.prepTime}
											</p>
										</div>
									)}
									
									{meal.calories && (
										<div>
											<p className="text-sm opacity-70">
												{t("meal_details.calories")}
											</p>
											<p className="font-medium">
												{meal.calories}{" "}
												{!meal.calories.includes(t("meal_details.kcal")) && t("meal_details.kcal")}
											</p>
										</div>
									)}
									
									{(meal.difficulty_en || meal.difficulty_ar) && (
										<div>
											<p className="text-sm opacity-70">
												{t("meal_details.difficulty")}
											</p>
											<p className="font-medium">
												{i18n.language === "ar" && meal.difficulty_ar
													? meal.difficulty_ar
													: meal.difficulty_en ?? t("meal_details.na")}
											</p>
										</div>
									)}
									
									{meal.servings && (
										<div>
											<p className="text-sm opacity-70">
												{t("meal_details.servings")}
											</p>
											<p className="font-medium">
												{meal.servings}
											</p>
										</div>
									)}
									
									{meal.isVegetarian !== undefined && (
										<div>
											<p className="text-sm opacity-70">
												{t("meal_details.vegetarian")}
											</p>
											<p className="font-medium">
												{meal.isVegetarian
													? t("meal_details.yes")
													: t("meal_details.no")}
											</p>
										</div>
									)}
									
									{meal.isVegan !== undefined && (
										<div>
											<p className="text-sm opacity-70">
												{t("meal_details.vegan")}
											</p>
											<p className="font-medium">
												{meal.isVegan
													? t("meal_details.yes")
													: t("meal_details.no")}
											</p>
										</div>
									)}
								</div>
							</div>
						)}
					</div>

					{/* Right column - Details */}
					<div className={`space-y-8 transition-all duration-1000 delay-400 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
						<div>
							{meal.price !== undefined && meal.price !== null && (
								<p className="text-2xl font-semibold text-amber-600 mt-2">
									{t("meal_details.currency")} {formatPrice(meal.price)}
								</p>
							)}
							
							{getMealDescription() && (
								<p className="text-lg mt-4">
									{getMealDescription()}
								</p>
							)}
						</div>
						<div className="divider"></div>

						{/* Ingredients - Only show if ingredients exist */}
						{((meal.ingredients_en && meal.ingredients_en.length > 0) || 
						  (meal.ingredients && meal.ingredients.length > 0)) && (
							<div className={`transition-all duration-1000 delay-600 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
								<h2 className="text-2xl font-bold mb-4 text-amber-600">
									{t("meal_details.ingredients")}
								</h2>
								{meal.ingredients_en && meal.ingredients_en.length > 0 && (
									<ul className="list-disc pl-6 space-y-2">
										{meal.ingredients_en.map((ingredient, index) => (
											<li key={index} className="text-lg">
												{ingredient}
											</li>
										))}
									</ul>
								)}
								{meal.ingredients && meal.ingredients.length > 0 && (
									<ul className="list-disc pl-6 space-y-2 mt-4 text-lg text-gray-600">
										{meal.ingredients.map((ingredient, index) => (
											<li key={index}>{ingredient}</li>
										))}
									</ul>
								)}
							</div>
						)}

						{/* Notes - Only show if notes exist */}
						{(meal.notes_en || meal.notes_ar || meal.notes) && (
							<div className={`transition-all duration-1000 delay-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
								<h2 className="text-2xl font-bold mb-4 text-amber-600">
									{t("meal_details.notes")}
								</h2>
								<p className="text-lg">
									{i18n.language === "ar" ? meal.notes_ar : meal.notes_en}
								</p>
							</div>
						)}

						{/* Add to cart - Only show if price exists */}
						{meal.price !== undefined && meal.price !== null && (
							<div className={`pt-8 transition-all duration-1000 delay-800 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
								<button
									onClick={handleAddToCart}
									className="btn bg-amber-600 hover:bg-amber-700 text-white border-none btn-lg w-full md:w-auto transition-transform duration-300 hover:scale-105">
									{t("meal_details.add_to_cart")} - {t("meal_details.currency")}{" "}
									{formatPrice(meal.price)}
								</button>
							</div>
						)}
					</div>
				</div>
				<div id="toast" className="toast toast-end hidden">
					<div className="alert alert-success">
						<span>{t("meal_details.toast")}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MealDetails;