/** @format */

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import intro from "../assets/AboutImages/intro.mp4";
import rev1 from "../assets/AboutImages/TripAdvisor.jpg";
import rev2 from "../assets/AboutImages/tiktok.jpg";
import rev3 from "../assets/AboutImages/User.jpg";
import img1 from "/src/assets/AboutImages/img1.jpg";
import img2 from "/src/assets/AboutImages/img2.jpg";
import cover from "/src/assets/AboutImages/COVER.jpg";
import logo from "/src/assets/AboutImages/TO'MAH.jpg";
import loc from "/src/assets/AboutImages/restaurantt.jpg";
import g1 from "/src/assets/AboutImages/G1.jpg";
import g2 from "/src/assets/AboutImages/G2.jpg";
import g3 from "/src/assets/AboutImages/G3.jpg";
import g4 from "/src/assets/AboutImages/G4.jpg";
import g5 from "/src/assets/AboutImages/G5.jpg";
import g6 from "/src/assets/AboutImages/G6.jpg";
import g7 from "/src/assets/AboutImages/G7.jpg";
import g8 from "/src/assets/AboutImages/G8.jpg";
import g9 from "/src/assets/AboutImages/G9.jpg";
import teamImg1 from "../assets/AboutImages/فريق العمل/staff.jpg";
import teamImg2 from "../assets/AboutImages/فريق العمل/1.jpg";
import teamImg3 from "../assets/AboutImages/فريق العمل/2.jpg";
import teamImg4 from "../assets/AboutImages/فريق العمل/3.jpg";
import teamImg5 from "../assets/AboutImages/فريق العمل/4.jpg";
import visitor1 from "../assets/AboutImages/زوار مطعم طعمه/Doneبروفسور ماليزي.jpg";
import visitor2 from "../assets/AboutImages/زوار مطعم طعمه/معالي الدكتور توفيق الربيعة .jpg";
import visitor3 from "../assets/AboutImages/زوار مطعم طعمه/وزيرة السياحة البحرينية.jpg";
import visitor4 from "../assets/AboutImages/زوار مطعم طعمه/مساعد الزويهري - رئيس الاهلي ٢.jpg";
import visitor5 from "../assets/AboutImages/زوار مطعم طعمه/مهند قطان و غادة الترك done_.jpg";
import visitor6 from "../assets/AboutImages/زوار مطعم طعمه/فريق الاتحاد سيدات.jpg";
import visitor7 from "../assets/AboutImages/زوار مطعم طعمه/رئيس جامعة الملك عبدالله _ البروفيسور إدوارد بيرن.jpg";
import visitor8 from "../assets/AboutImages/زوار مطعم طعمه/ابوعبدالله ريان بن حزام (دخون الاماراتية) و جواد السويسري.JPG";
import visitor9 from "../assets/AboutImages/زوار مطعم طعمه/الرئيس التنفيذي للمركز الوطني للالتزام البيئي.jpg";
import visitor10 from "../assets/AboutImages/زوار مطعم طعمه/م بندر عبدالله الراجحي شركة متين .jpg";
import {
	HeartIcon,
	SparklesIcon,
	UserGroupIcon,
	GlobeAltIcon,
	ChevronRightIcon,
	ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, onClick, children }) => (
	<button
		className={`${className} absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-110`}
		onClick={onClick}
		aria-label={className.includes("prev") ? "السابق" : "التالي"}
		type="button">
		{children}
	</button>
);

const About = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVisible, setIsVisible] = useState({});
	const { t, i18n } = useTranslation();

	const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
	const teamImages = [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5];
	const visitorImages = [visitor1, visitor2, visitor3, visitor4, visitor5, visitor6, visitor7, visitor8, visitor9, visitor10];

	const testimonials = [
		{
			img: rev1,
			text: t("about.testimonials.0.text"),
			name: t("about.testimonials.0.name"),
		},
		{
			img: rev2,
			text: t("about.testimonials.1.text"),
			name: t("about.testimonials.1.name"),
		},
		{
			img: rev1,
			text: t("about.testimonials.2.text"),
			name: t("about.testimonials.2.name"),
		},
		{
			img: rev3,
			text: t("about.testimonials.3.text"),
			name: t("about.testimonials.3.name"),
		},
		{
			img: rev3,
			text: t("about.testimonials.4.text"),
			name: t("about.testimonials.4.name"),
		},
		{
			img: rev3,
			text: t("about.testimonials.5.text"),
			name: t("about.testimonials.5.name"),
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		swipe: true,
		draggable: true,
		touchThreshold: 10,
		pauseOnHover: true,
		useCSS: true,
		useTransform: true,
		cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
	};

	const visitorSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		swipe: true,
		draggable: true,
		touchThreshold: 10,
		pauseOnHover: true,
		useCSS: true,
		useTransform: true,
		cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
				}
			});
		}, observerOptions);
		const sections = document.querySelectorAll(".animate-on-scroll");
		sections.forEach((section) => observer.observe(section));
		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	const extractArabicNameFromPath = (imagePath) => {
		try {
			const fileName = imagePath.split("/").pop();
			const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
			let decodedName = decodeURIComponent(nameWithoutExtension);
			let cleanName = decodedName
				.replace(/[A-Za-z0-9_]+/g, "")
				.replace(/^\d+\.?\s*/, "")
				.replace(/\s*done_?\s*$/, "")
				.replace(/\s*٢\s*$/, "")
				.replace(/[-_]/g, " ")
				.replace(/\s+/g, " ")
				.trim();
			return cleanName || "زائر مميز";
		} catch (error) {
			console.error("Error extracting name from path:", error);
			return "زائر مميز";
		}
	};

	return (
		<div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="bg-slate-50">
			{/* Philosophy Section */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
						{t("home.values.title")}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
							<HeartIcon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
							<h3 className="text-xl font-semibold text-center mb-3">{t("home.values.quality.title")}</h3>
							<p className="text-gray-600 text-center">{t("home.values.quality.description")}</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
							<SparklesIcon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
							<h3 className="text-xl font-semibold text-center mb-3">{t("home.values.tradition.title")}</h3>
							<p className="text-gray-600 text-center">{t("home.values.tradition.description")}</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
							<UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
							<h3 className="text-xl font-semibold text-center mb-3">{t("home.values.service.title")}</h3>
							<p className="text-gray-600 text-center">{t("home.values.service.description")}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16 bg-slate-50">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
						{t("home.features.title")}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
							<h3 className="text-xl font-semibold text-center mb-3">{t("home.features.quality.title")}</h3>
							<p className="text-gray-600 text-center">{t("home.features.quality.description")}</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
							<h3 className="text-xl font-semibold text-center mb-3">{t("home.features.service.title")}</h3>
							<p className="text-gray-600 text-center">{t("home.features.service.description")}</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
							<h3 className="text-xl font-semibold text-center mb-3">{t("home.features.hygiene.title")}</h3>
							<p className="text-gray-600 text-center">{t("home.features.hygiene.description")}</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
							<h3 className="text-xl font-semibold text-center mb-3">{t("home.features.delivery.title")}</h3>
							<p className="text-gray-600 text-center">{t("home.features.delivery.description")}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Video Section */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<div className="transition-all duration-1000" onClick={() => setIsPlaying(true)}>
							<img src={cover} alt={t("about.video.cover_alt")} className="w-full h-[500px] object-cover" />
							<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 text-white p-6 rounded-full z-10 hover:bg-black/50 transition-all">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
						</div>
					</div>
					{isPlaying && (
						<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
							<div className="relative w-full max-w-4xl mx-auto">
								<button className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors" onClick={() => setIsPlaying(false)}>
									✕
								</button>
								<div className="aspect-w-16 aspect-h-9">
									<video src={intro} autoPlay controls className="w-full h-full rounded-lg"></video>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 bg-slate-50">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t("about.team.title")}</h2>
					<div className="relative">
						<Slider
							{...settings}
							slidesToShow={3}
							prevArrow={<CustomArrow className="slick-prev -left-12"><ChevronLeftIcon className="w-6 h-6" /></CustomArrow>}
							nextArrow={<CustomArrow className="slick-next -right-12"><ChevronRightIcon className="w-6 h-6" /></CustomArrow>}
							responsive={[
								{ breakpoint: 1024, settings: { slidesToShow: 2 } },
								{ breakpoint: 640, settings: { slidesToShow: 1 } },
							]}>
							{teamImages.map((image, index) => (
								<div key={index} className="px-4">
									<div className="bg-white rounded-xl shadow-lg overflow-hidden group">
										<img
											src={image}
											alt={t("about.team.member_alt", { number: index + 1 })}
											className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>

			{/* Visitors Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
						{t("about.visitors.title", "Our Valued Visitors")}
					</h2>
					<div className="relative">
						<Slider {...visitorSettings}>
							{visitorImages.map((image, index) => {
								const visitorName = extractArabicNameFromPath(image);
								return (
									<div key={index} className="px-4 flex justify-center">
										<div className="bg-white rounded-xl shadow-lg overflow-hidden group w-64 h-96 flex flex-col items-center justify-between border border-gray-100 transition-all duration-300 hover:shadow-2xl">
											<div className="relative w-full h-72 bg-gray-100 flex items-center justify-center">
												<img
													src={image}
													alt={visitorName}
													className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											</div>
											<div className="w-full p-4 bg-gradient-to-r from-amber-50 to-amber-100 flex flex-col items-center">
												<h3 className="text-lg font-bold text-gray-800 text-center font-sans">
													{visitorName}
												</h3>
												<div className="mt-2 w-12 h-0.5 bg-amber-400 mx-auto rounded-full"></div>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
						<div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
							<button className="w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
								<ChevronLeftIcon className="w-6 h-6" />
							</button>
						</div>
						<div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
							<button className="w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
								<ChevronRightIcon className="w-6 h-6" />
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-16 bg-slate-50">
				<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
					<Slider
						slidesToShow={4}
						slidesToScroll={1}
						infinite={true}
						autoplay={true}
						autoplaySpeed={2000}
						arrows={false}
						responsive={[
							{ breakpoint: 1280, settings: { slidesToShow: 3 } },
							{ breakpoint: 1024, settings: { slidesToShow: 2 } },
							{ breakpoint: 640, settings: { slidesToShow: 1 } },
						]}>
						{galleryImages.map((img, index) => (
							<div key={index} className="px-2">
								<div className="w-full h-62 rounded-lg overflow-hidden shadow-lg">
									<img
										src={img}
										alt={t("about.gallery.image_alt")}
										className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">{t("about.cta.title")}</h2>
					<p className="text-lg mb-8">{t("about.cta.description")}</p>
					<Link
						to="/menu"
						className="inline-block bg-white text-amber-800 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105">
						{t("about.cta.button")}
					</Link>
				</div>
			</section>
		</div>
	);
};

export default About;
