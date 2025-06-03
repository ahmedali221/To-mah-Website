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
import visitorsPhotos from "../service/visitors/visitors"; // adjust path if needed

import {
	HeartIcon,
	SparklesIcon,
	UserGroupIcon,
	GlobeAltIcon,
} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
const teamImages = [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5];


const testimonials = [
	{
		img: rev1,
		text: "مطعم رائع وخدمة ممتازة!",
		name: "زائر من تريب أدفايزر",
		rating: 5,
	},
	{
		img: rev2,
		text: "أجواء جميلة وطعام لذيذ.",
		name: "زائر من تيك توك",
		rating: 5,
	},
	{
		img: rev1,
		text: "أفضل تجربة عائلية.",
		name: "زائر من تريب أدفايزر",
		rating: 5,
	},
	{
		img: rev3,
		text: "خدمة سريعة وطاقم ودود.",
		name: "زائر",
		rating: 4,
	},
	{
		img: rev3,
		text: "أنصح الجميع بزيارته.",
		name: "زائر",
		rating: 5,
	},
	{
		img: rev3,
		text: "مكان مميز في المدينة.",
		name: "زائر",
		rating: 5,
	},
];

const About = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVisible, setIsVisible] = useState({});
	const { t, i18n } = useTranslation();

	// Enhanced slider settings
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		swipe: true,
		draggable: true,
		touchThreshold: 10,
		pauseOnHover: true,
		dotsClass: "slick-dots custom-dots",
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					dots: true
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			},
		],
	};

	const gallerySliderSettings = {
		...sliderSettings,
		slidesToShow: 4,
		dots: false,
		responsive: [
			{ breakpoint: 1280, settings: { slidesToShow: 3, dots: false } },
			{ breakpoint: 1024, settings: { slidesToShow: 2, dots: false } },
			{ breakpoint: 640, settings: { slidesToShow: 1, dots: false } },
		],
	};


	const visitorsGallerySliderSettings = {
		...gallerySliderSettings,
		slidesToShow: 4,
		dots: false,
		responsive: [
			{ breakpoint: 1280, settings: { slidesToShow: 3, dots: false } },
			{ breakpoint: 1024, settings: { slidesToShow: 2, dots: false } },
			{ breakpoint: 640, settings: { slidesToShow: 1, dots: false } },
		],
	};

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-50px",
			threshold: 0.15,
		};
		const observer = new window.IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
					}
				});
			},
			observerOptions
		);
		const sections = document.querySelectorAll(".animate-on-scroll");
		sections.forEach((section) => observer.observe(section));
		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	const renderStars = (rating) => {
		return Array.from({ length: 5 }, (_, i) => (
			<span
				key={i}
				className={`text-lg ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
			>
				★
			</span>
		));
	};

	return (
		<div
			dir={i18n.language === "ar" ? "rtl" : "ltr"}
			className="bg-gradient-to-br from-slate-50 to-white overflow-x-hidden"
		>
			{/* Custom CSS for dots */}
			<style jsx>{`
				.custom-dots {
					bottom: -50px !important;
				}
				.custom-dots li button:before {
					font-size: 12px !important;
					color: #d97706 !important;
					opacity: 0.5;
				}
				.custom-dots li.slick-active button:before {
					opacity: 1;
					color: #d97706 !important;
				}
			`}</style>

			{/* Hero Story Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="text-center mb-16">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
							{t("about.story.title")}
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
						<div className="animate-on-scroll order-2 lg:order-1" id="story-img-1">
							<div className={`relative group transform transition-all duration-1000 ${isVisible["story-img-1"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
								<div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
								<img
									src={img1}
									alt={t("about.story.image_alt_left")}
									className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
								/>
							</div>
						</div>

						<div className="animate-on-scroll order-1 lg:order-2" id="story-text">
							<div className={`text-center space-y-6 transition-all duration-1000 delay-300 ${isVisible["story-text"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
								<div className="flex items-center justify-center space-x-2 mb-6">
									<div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
									<SparklesIcon className="w-6 h-6 text-amber-500" />
									<div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
								</div>
								<p className="text-gray-700 leading-relaxed text-lg font-medium">
									{t("about.story.description")}
								</p>
								<div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
									<p className="text-2xl font-bold font-serif text-amber-800">
										{t("about.story.signature")}
									</p>
								</div>
							</div>
						</div>

						<div className="animate-on-scroll order-3 lg:order-3" id="story-img-2">
							<div className={`relative group transform transition-all duration-1000 delay-500 ${isVisible["story-img-2"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
								<div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
								<img
									src={img2}
									alt={t("about.story.image_alt_right")}
									className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Visit Section */}
			<section className="py-16 md:py-20 bg-gray-50 animate-on-scroll">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
							{t("about.ambiance.title")}
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-8"></div>
						<p className="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
							{t("about.ambiance.description")}
						</p>
					</div>
				</div>
			</section>

			{/* Video Section */}
			<section className="py-16 md:py-24 ">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="animate-on-scroll" id="video-section">
						<div className={`relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-1000 ${isVisible["video-section"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} onClick={() => setIsPlaying(true)}>
							<img
								src={cover}
								alt={t("about.video.cover_alt")}
								className="w-full h-[50vh] md:h-[60vh] object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
							<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-6 md:p-8 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 border-2 border-white/30" aria-label={t("about.video.play_button")}>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24">
									<path d="M8 5v14l11-7z" />
								</svg>
							</button>
						</div>
					</div>
					{isPlaying && (
						<div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
							<div className="relative w-full max-w-5xl mx-auto">
								<button
									className="absolute -top-12 right-0 text-white text-4xl hover:text-amber-400 transition-colors duration-300"
									onClick={() => setIsPlaying(false)}
								>
									✕
								</button>
								<div className="relative rounded-2xl overflow-hidden">
									<video
										src={intro}
										autoPlay
										controls
										className="w-full h-auto rounded-2xl shadow-2xl"
									></video>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-white to-amber-50/30 animate-on-scroll" id="team-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
							{t("about.team.title", "Our Team")}
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-8"></div>
						<UserGroupIcon className="w-12 h-12 text-amber-500 mx-auto" />
					</div>
					<div className="pb-16">
						<Slider {...sliderSettings} className="team-slider">
							{teamImages.map((image, index) => (
								<div key={index} className="px-3">
									<div className={`transform transition-all duration-1000 ${isVisible["team-section"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: `${index * 150}ms` }}>
										<div className="relative overflow-hidden rounded-2xl shadow-xl group bg-white p-2">
											<img
												src={image}
												alt={t("about.team.member_alt", { number: index + 1 })}
												className="w-full h-72 md:h-80 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
											/>
											<div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>

			{/* Restaurant Images Section */}
			<section className="py-16 md:py-24 bg-white animate-on-scroll" id="special-menu-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
						<div className={`transition-all duration-1000 ${isVisible["special-menu-section"] ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
								<img
									src={logo}
									alt={t("about.special_menu.logo_alt")}
									className="relative rounded-2xl shadow-2xl w-full h-80 lg:h-96 object-cover"
								/>
							</div>
						</div>
						<div className={`transition-all duration-1000 delay-300 ${isVisible["special-menu-section"] ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
								<img
									src={loc}
									alt={t("about.special_menu.interior_alt")}
									className="relative rounded-2xl shadow-2xl w-full h-80 lg:h-96 object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50 animate-on-scroll" id="testimonial-section">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
							{t("about.testimonials.title")}
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-8"></div>
						<HeartIcon className="w-12 h-12 text-amber-500 mx-auto" />
					</div>
					<div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100 transition-all duration-1000 ${isVisible["testimonial-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
						<Slider {...{ ...sliderSettings, slidesToShow: 1, dots: true }} className="testimonials-slider">
							{testimonials.map((item, index) => (
								<div className="text-center px-4 md:px-8" key={index}>
									<div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 overflow-hidden rounded-full ring-4 ring-amber-200">
										<img
											className="w-full h-full object-cover"
											src={item.img}
											alt={item.name}
										/>
									</div>
									<div className="flex justify-center mb-4">
										{renderStars(item.rating)}
									</div>
									<p className="text-gray-700 italic mb-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
										"{item.text}"
									</p>
									<p className="font-bold text-amber-800 text-lg">{item.name}</p>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-16 md:py-20  overflow-hidden">
				<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
					<Slider {...gallerySliderSettings}>
						{galleryImages.concat(galleryImages).map((img, index) => (
							<div key={index} className="px-2">
								<div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl group">
									<img
										src={img}
										alt={t("about.gallery.image_alt")}
										className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>


			{/* Visitors Section */}
			<section className=" animate-on-scroll" id="visitors-section">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
						{t("about.visitors.title", "زوارنا المميزون")}
					</h2>
					<div className="w-24 h-1 mx-auto rounded-full mb-8"></div>
					<GlobeAltIcon className="w-12 h-12 text-amber-500 mx-auto" />
				</div>
				<div className="max-w-7xl mx-auto ">
					<Slider {...visitorsGallerySliderSettings} className="visitors-slider">
						{visitorsPhotos.map((visitor, idx) => (
							<div key={idx} className="px-3 flex flex-col items-center">
								<div className="relative group rounded-2xl overflow-hidden shadow-xl bg-white p-2 h-[600px] flex items-center justify-center w-full">
									<img
										src={visitor.image}
										alt={visitor.name}
										className="w-full h-[500px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="w-full mt-6">
									<p className="text-center font-bold text-amber-800 text-xl">{visitor.name}</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>


			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white animate-on-scroll relative overflow-hidden" id="cta-section">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
					<div className={`transition-all duration-1000 ${isVisible["cta-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">
							{t("about.cta.title")}
						</h2>
						<p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
							{t("about.cta.description")}
						</p>
						<Link
							to="/menu"
							className="inline-flex items-center px-8 py-4 bg-white text-amber-800 hover:bg-amber-50 border-none rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
						>
							{t("about.cta.button")}
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;