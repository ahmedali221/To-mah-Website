/** @format */

import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import productsData from "../service/data";
import image from "../assets/AboutImages/image.png";

function Home() {
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const getRandomMeals = (num) => {
		const shuffled = [...productsData].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, num);
	};

	const featuredDishes = getRandomMeals(3);

	return (
		<div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			{/* Hero Banner */}
			<div
				className="hero min-h-[90vh] animate-fade-in"
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<p className="mb-5">{t("home.hero.description")}</p>
						<Link to="/menu" className="btn ">
							{t("home.hero.button")}
						</Link>
					</div>
				</div>
			</div>

			{/* Featured Dishes */}
			<div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 animate-slide-up">
				<h2 className="text-3xl font-bold text-center mb-12">
					{t("home.featured.title")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{featuredDishes.map((dish) => (
						<div
							key={dish.id}
							className="card bg-base-100 shadow-xl animate-zoom-in">
							<figure>
								<img
									src={dish.image}
									alt={
										i18n.language === "ar" && dish.name_ar
											? dish.name_ar
											: dish.name_en
									}
									className="w-full h-48 object-cover"
								/>
							</figure>
							<div className="card-body">
								<h3 className="card-title">
									{i18n.language === "ar" && dish.name_ar
										? dish.name_ar
										: dish.name_en}
								</h3>
								<p>
									{i18n.language === "ar" && dish.desc_ar
										? dish.desc_ar
										: dish.desc_en}
								</p>
								<div className="card-actions justify-between items-center mt-4">
									<span className="text-lg font-semibold">
										{t("home.currency")} {dish.price}
									</span>
									<button
										onClick={() =>
											navigate(`/menu/${dish.id}`, { state: { meal: dish } })
										}
										className="btn btn-sm">
										{t("home.featured.order_button")}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Customer Testimonials */}
			<div className="bg-gray-100 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">
						{t("home.testimonials.title")}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<p className="text-lg italic">{t("home.testimonials.0.text")}</p>
							<p className="mt-4 text-right font-bold">
								{t("home.testimonials.0.name")}
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<p className="text-lg italic">{t("home.testimonials.1.text")}</p>
							<p className="mt-4 text-right font-bold">
								{t("home.testimonials.1.name")}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* About Section */}
			<div className="bg-base-200 py-16 animate-fade-in">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6">
								{t("home.about.title")}
							</h2>
							<p className="mb-6">{t("home.about.description")}</p>
							<Link to="/about" className="btn ">
								{t("home.about.button")}
							</Link>
						</div>
						<div className="aspect-w-16 aspect-h-9">
							<img
								src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
								alt={t("home.about.image_alt")}
								className="rounded-lg shadow-lg object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
