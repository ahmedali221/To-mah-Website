/** @format */

import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

function MealDetails() {
	const { addToCart } = useCart();
	const { state } = useLocation();
	const navigate = useNavigate();
	const meal = state?.meal;
	const { t, i18n } = useTranslation();

	if (!meal) {
		return <div>{t("meal_details.loading")}</div>;
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
			className="min-h-screen py-16 bg-base-100"
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-8">
					<button onClick={() => navigate(-1)} className="btn btn-ghost">
						← {t("meal_details.back")}
					</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="flex flex-col gap-4">
						<div className="rounded-lg shadow-xl overflow-hidden">
							<img
								src={meal.image}
								alt={i18n.language === "ar" ? meal.name_ar : meal.name_en}
								className="w-full h-auto object-cover"
							/>
						</div>
						<div className="bg-base-200 p-6 rounded-lg">
							<h3 className="text-xl font-bold mb-4">
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
					<div className="space-y-8">
						<div>
							<h1 className="text-4xl font-bold">
								{i18n.language === "ar" ? meal.name_ar : meal.name_en}
							</h1>
							<p className="text-2xl font-semibold text-primary mt-2">
								{t("meal_details.currency")} {meal.price.toFixed(2)}
							</p>
							<p className="text-lg mt-4">
								{i18n.language === "ar" ? meal.desc_ar : meal.desc_en}
							</p>
						</div>
						<div className="divider"></div>
						{meal.ingredients_en && (
							<div>
								<h2 className="text-2xl font-bold mb-4">
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
						{meal.notes_en && (
							<div>
								<h2 className="text-2xl font-bold mb-4">
									{t("meal_details.notes")}
								</h2>
								<p className="text-lg">
									{i18n.language === "ar" ? meal.notes_ar : meal.notes_en}
								</p>
							</div>
						)}
						<div className="pt-8">
							<button
								onClick={handleAddToCart}
								className="btn btn-primary btn-lg w-full md:w-auto">
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
