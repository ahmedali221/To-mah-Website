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
import teamImg1 from "../assets/AboutImages/صور فريق العمل/staff.jpg";
import teamImg2 from "../assets/AboutImages/صور فريق العمل/1.jpg";
import teamImg3 from "../assets/AboutImages/صور فريق العمل/2.jpg";
import teamImg4 from "../assets/AboutImages/صور فريق العمل/3.jpg";
import teamImg5 from "../assets/AboutImages/صور فريق العمل/4.jpg";
import visitor1 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/Doneبروفسور ماليزي.jpg";
import visitor2 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/معالي الوزير توفيق الربيعة.jpg";
import visitor3 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/وزيرة السياحة البحرينية.jpg";
import visitor4 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/مساعد الزويهري - رئيس الاهلي ٢.jpg";
import visitor5 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/مهند قطان و غادة الترك done_.jpg";
import visitor6 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/فريق الاتحاد سيدات.jpg";
import visitor7 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/رئيس جامعة الملك عبدالله _ البروفيسور إدوارد بيرن.jpg";
import visitor8 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/ابوعبدالله ريان بن حزام (دخون الاماراتية) و جواد السويسري.jpg";
import visitor9 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/الرئيس التنفيذي للمركز الوطني للالتزام البيئي.jpg";
import visitor10 from "../assets/AboutImages/زوار طعمة (طباعة - اعلان)/م بندر عبدالله الراجحي شركة متين .jpg";
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
import styled from "styled-components";

const SliderWrapper = styled.div`
	position: relative;
	max-width: 100%;
	margin: 0 auto;

	.slider-box {
		position: relative;
		max-width: 100%;
		min-width: 300px;
		padding: 0 80px;
		margin: 0 auto;
	}

	.visitors-slider {
		position: relative;
		max-width: 100%;
	}

	.slick-track {
		display: flex;
		align-items: stretch;
	}

	.slick-list {
		overflow: hidden;
		margin: 0 auto;
		width: 100%;
	}

	.slick-slide {
		padding: 0 15px;
		height: auto;
	}

	.slick-arrow {
		position: absolute !important;
		top: 50% !important;
		transform: translateY(-50%) !important;
		z-index: 20 !important;
		width: 50px !important;
		height: 50px !important;
		border-radius: 50% !important;
		background: rgba(251, 191, 36, 0.8) !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		cursor: pointer !important;
		transition: all 0.3s ease !important;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
	}

	.slick-arrow:hover {
		background: rgba(251, 191, 36, 0.95) !important;
		transform: translateY(-50%) scale(1.05) !important;
	}

	.slick-arrow::before {
		display: none !important;
	}

	.slick-prev {
		left: -80px !important;
	}

	.slick-next {
		right: -80px !important;
	}

	.arrow-icon {
		width: 24px !important;
		height: 24px !important;
		color: white !important;
	}
`;

const CustomArrow = ({ className, onClick, children }) => (
	<button
		className={className}
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
	const visitorImages = [
		visitor1,
		visitor2,
		visitor3,
		visitor4,
		visitor5,
		visitor6,
		visitor7,
		visitor8,
		visitor9,
		visitor10,
	];

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
		<div
			dir={i18n.language === "ar" ? "rtl" : "ltr"}
			className="bg-slate-50 overflow-x-hidden">
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-16 relative">
						<span className="relative px-8">
							{t("about.story.title")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
						<div className="animate-on-scroll" id="story-img-1">
							<img
								src={img1}
								alt={t("about.story.image_alt_left")}
								className={`rounded-lg shadow-xl w-full h-auto transform transition-all duration-1000 ${
									isVisible["story-img-1"]
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
							/>
						</div>
						<div className="animate-on-scroll" id="story-text">
							<div
								className={`text-center space-y-4 transition-all duration-1000 delay-300 ${
									isVisible["story-text"]
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}>
								<p className="text-amber-600 font-bold text-xl">***</p>
								<p className="text-gray-600 leading-relaxed">
									{t("about.story.description")}
								</p>
								<p className="text-2xl font-bold mt-6 font-serif">
									{t("about.story.signature")}
								</p>
							</div>
						</div>
						<div className="animate-on-scroll" id="story-img-2">
							<img
								src={img2}
								alt={t("about.story.image_alt_right")}
								className={`rounded-lg shadow-xl w-full h-auto transform transition-all duration-1000 delay-500 ${
									isVisible["story-img-2"]
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-16 bg-gradient-to-b from-white to-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						className="relative rounded-xl overflow-hidden shadow-2xl animate-on-scroll"
						id="video-section">
						<div
							className={`transition-all duration-1000 ${
								isVisible["video-section"]
									? "opacity-100 scale-100"
									: "opacity-0 scale-95"
							}`}
							onClick={() => setIsPlaying(true)}>
							<img
								src={cover}
								alt={t("about.video.cover_alt")}
								className="w-full h-auto object-cover"
							/>
							<button
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 text-white p-6 rounded-full z-10 hover:bg-black/50 transition-all"
								aria-label={t("about.video.play_button")}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
					{isPlaying && (
						<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
							<div className="relative w-full max-w-4xl mx-auto">
								<button
									className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
									onClick={() => setIsPlaying(false)}>
									✕
								</button>
								<div className="aspect-w-16 aspect-h-9">
									<video
										src={intro}
										autoPlay
										controls
										className="w-full h-full rounded-lg"></video>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
			<section className="py-16 bg-white animate-on-scroll" id="team-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-16 relative">
						<span className="relative px-8">
							{t("about.team.title", "Our Team")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					<div className="w-full overflow-hidden">
						<Slider
							{...settings}
							slidesToShow={3}
							autoplaySpeed={3000}
							className="team-slider"
							responsive={[
								{ breakpoint: 1024, settings: { slidesToShow: 2 } },
								{ breakpoint: 640, settings: { slidesToShow: 1 } },
							]}>
							{teamImages.map((image, index) => (
								<div key={index} className="px-4">
									<div
										className={`transform transition-all duration-1000 ${
											isVisible["team-section"]
												? "translate-y-0 opacity-100"
												: "translate-y-10 opacity-0"
										}`}
										style={{ transitionDelay: `${index * 100}ms` }}>
										<div className="relative overflow-hidden rounded-lg shadow-lg group">
											<img
												src={image}
												alt={t("about.team.member_alt", { number: index + 1 })}
												className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
												<div className="text-white text-center">
													<h3 className="text-xl font-bold">
														{t("about.team.member_name", { number: index + 1 })}
													</h3>
													<p className="text-sm">
														{t("about.team.member_role", { number: index + 1 })}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>
			<section
				className="py-16 bg-slate-50 animate-on-scroll"
				id="ambiance-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-8 relative">
						<span className="relative px-8">
							{t("about.ambiance.title")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					<p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
						{t("about.ambiance.description")}
					</p>
				</div>
			</section>
			<section
				className="py-16 bg-white animate-on-scroll"
				id="special-menu-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div
							className={`transition-all duration-1000 ${
								isVisible["special-menu-section"]
									? "translate-x-0 opacity-100"
									: "-translate-x-10 opacity-0"
							}`}>
							<img
								src={logo}
								alt={t("about.special_menu.logo_alt")}
								className="rounded-lg shadow-2xl w-full h-auto"
							/>
						</div>
						<div
							className={`transition-all duration-1000 delay-300 ${
								isVisible["special-menu-section"]
									? "translate-x-0 opacity-100"
									: "translate-x-10 opacity-0"
							}`}>
							<img
								src={loc}
								alt={t("about.special_menu.interior_alt")}
								className="rounded-lg shadow-2xl w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				className="py-16 bg-slate-50 animate-on-scroll"
				id="testimonial-section">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-16 relative">
						<span className="relative px-8">
							{t("about.testimonials.title")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					<div
						className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 ${
							isVisible["testimonial-section"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}>
						<Slider {...settings}>
							{testimonials.map((item, index) => (
								<div className="text-center px-8" key={index}>
									<div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full">
										<img
											className="w-full h-full object-cover"
											src={item.img}
											alt={item.name}
										/>
									</div>
									<p className="text-gray-600 italic mb-4">"{item.text}"</p>
									<p className="font-bold">{item.name}</p>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>
			<section className="py-16 bg-white overflow-hidden">
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
						{galleryImages.concat(galleryImages).map((img, index) => (
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
			<section
				className="py-16 bg-white animate-on-scroll"
				id="visitors-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-16 relative">
						<span className="relative px-8">
							{t("about.visitors.title", "Our Valued Visitors")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					<div className="w-full overflow-visible">
						<SliderWrapper>
							<div className="slider-box">
								<Slider
									{...settings}
									slidesToShow={3}
									slidesToScroll={1}
									autoplaySpeed={4000}
									className="visitors-slider"
									arrows={true}
									draggable={true}
									swipe={true}
									infinite={true}
									touchThreshold={10}
									speed={500}
									cssEase="cubic-bezier(0.4, 0, 0.2, 1)"
									prevArrow={
										<CustomArrow className="slick-arrow slick-prev">
											<ChevronLeftIcon className="arrow-icon" />
										</CustomArrow>
									}
									nextArrow={
										<CustomArrow className="slick-arrow slick-next">
											<ChevronRightIcon className="arrow-icon" />
										</CustomArrow>
									}
									responsive={[
										{
											breakpoint: 1280,
											settings: { slidesToShow: 3, slidesToScroll: 1 },
										},
										{
											breakpoint: 1024,
											settings: { slidesToShow: 2, slidesToScroll: 1 },
										},
										{
											breakpoint: 640,
											settings: {
												slidesToShow: 1,
												slidesToScroll: 1,
												arrows: true,
											},
										},
									]}>
									{visitorImages.map((image, index) => {
										const visitorName = extractArabicNameFromPath(image);
										return (
											<div key={index} className="px-4">
												<div
													className={`transform transition-all duration-1000 ${
														isVisible["visitors-section"]
															? "translate-y-0 opacity-100"
															: "translate-y-10 opacity-0"
													}`}
													style={{ transitionDelay: `${index * 100}ms` }}>
													<div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
														<div className="relative w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
															<img
																src={image}
																alt={visitorName}
																className="max-w-full max-h-full object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
																style={{
																	minWidth: "100%",
																	minHeight: "100%",
																	objectFit: "cover",
																	objectPosition: "center center",
																}}
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
														</div>
														<div className="p-4 text-center bg-gradient-to-r from-amber-50 to-amber-100">
															<h3
																className="text-lg font-bold text-gray-800 leading-relaxed"
																style={{
																	fontFamily: "Tajawal, Arial, sans-serif",
																	direction: "rtl",
																}}>
																{visitorName}
															</h3>
															<div className="mt-2 w-12 h-0.5 bg-amber-400 mx-auto rounded-full"></div>
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</Slider>
							</div>
						</SliderWrapper>
					</div>
				</div>
			</section>
			<section
				className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white animate-on-scroll"
				id="cta-section">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2
						className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ${
							isVisible["cta-section"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}>
						{t("about.cta.title")}
					</h2>
					<p
						className={`text-lg mb-8 transition-all duration-1000 delay-200 ${
							isVisible["cta-section"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}>
						{t("about.cta.description")}
					</p>
					<div
						className={`transition-all duration-1000 delay-400 ${
							isVisible["cta-section"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}>
						<Link
							to="/menu"
							className="btn bg-white text-amber-800 hover:bg-gray-100 border-none px-8 py-3 rounded-full font-bold">
							{t("about.cta.button")}
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
