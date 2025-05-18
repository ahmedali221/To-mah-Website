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
						{i18n.language === "ar" && meal.name_ar
							? meal.name_ar
							: meal.name_en}
					</h1>
					<div className="w-24 h-1 bg-amber-600 mx-auto"></div>
				</div>

				{/* Main content grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Left column - Image */}
					<div className={`flex flex-col gap-4 transition-all duration-1000 delay-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
						<div className="rounded-lg shadow-xl overflow-hidden relative">
							<img
								src={meal.image}
								alt={
									i18n.language === "ar" && meal.name_ar
										? meal.name_ar
										: meal.name_en || meal.name
								}
								className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
						</div>


						{/* Quick facts */}
						<div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 transition-all duration-1000 delay-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<h3 className="text-xl font-bold mb-4 text-amber-600">
								{t("meal_details.quick_facts")}
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm opacity-70">
										{t("meal_details.prep_time")}
									</p>
									<p className="font-medium">
										{meal.prepTime ?? t("meal_details.na")}
									</p>
								</div>
								<div>
									<p className="text-sm opacity-70">
										{t("meal_details.calories")}
									</p>
									<p className="font-medium">
										{meal.calories ?? t("meal_details.na")}{" "}
										{t("meal_details.kcal")}
									</p>
								</div>
								<div>
									<p className="text-sm opacity-70">
										{t("meal_details.difficulty")}
									</p>
									<p className="font-medium">
										{i18n.language === "ar"
											? meal.difficulty_ar
											: meal.difficulty_en ?? t("meal_details.na")}
									</p>
								</div>
								<div>
									<p className="text-sm opacity-70">
										{t("meal_details.servings")}
									</p>
									<p className="font-medium">
										{meal.servings ?? t("meal_details.na")}
									</p>
								</div>
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
							</div>
						</div>
					</div>

					{/* Right column - Details */}
					<div className={`space-y-8 transition-all duration-1000 delay-400 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
						<div>
							{meal.name && (
								<h2 className="text-2xl font-semibold text-gray-600">
									{meal.name}
								</h2>
							)}
							<p className="text-2xl font-semibold text-amber-600 mt-2">
								{t("meal_details.currency")} {meal.price.toFixed(2)}
							</p>
							<p className="text-lg mt-4">
								{i18n.language === "ar" ? meal.desc_ar : meal.desc_en}
							</p>
						</div>
						<div className="divider"></div>

						{/* Ingredients */}
						{(meal.ingredients_en || meal.ingredients) && (
							<div className={`transition-all duration-1000 delay-600 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
								<h2 className="text-2xl font-bold mb-4 text-amber-600">
									{t("meal_details.ingredients")}
								</h2>
								<ul className="list-disc pl-6 space-y-2">
									{(i18n.language === "ar"
										? meal.ingredients_ar
										: meal.ingredients_en
									).map((ingredient, index) => (
										<li key={index} className="text-lg">
											{ingredient}
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Notes */}
						{(meal.notes_en || meal.notes) && (
							<div className={`transition-all duration-1000 delay-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
								<h2 className="text-2xl font-bold mb-4 text-amber-600">
									{t("meal_details.notes")}
								</h2>
								<p className="text-lg">
									{i18n.language === "ar" ? meal.notes_ar : meal.notes_en}
								</p>
							</div>
						)}

						{/* Add to cart */}
						<div className={`pt-8 transition-all duration-1000 delay-800 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<button
								onClick={handleAddToCart}
								className="btn bg-amber-600 hover:bg-amber-700 text-white border-none btn-lg w-full md:w-auto transition-transform duration-300 hover:scale-105">
								{t("meal_details.add_to_cart")} - {t("meal_details.currency")}{" "}
								{meal.price.toFixed(2)}
							</button>
						</div>
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