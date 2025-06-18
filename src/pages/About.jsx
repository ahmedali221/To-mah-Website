/** @format */

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import intro from "../assets/AboutImages/intro.mp4";
import rev1 from "../assets/AboutImages/TripAdvisor.jpg";
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

import teamImg1 from "../assets/AboutImages/فريق العمل/staff.jpg";
import teamImg2 from "../assets/AboutImages/فريق العمل/1.jpg";
import visitorsPhotos from "../service/visitors/visitors"; // adjust path if needed

import {
	HeartIcon,
	SparklesIcon,
	UserGroupIcon,
	GlobeAltIcon,
} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [g1, g2, g3, g4, g5, g6, g7];
const teamImages = [teamImg1, teamImg2];

const testimonials = [


	{
		img: rev1,
		text_ar: "من أجمل المطاعم، الأكل في المدينة فعليًا تحفة جداً. شكرًا لمن صممه.",
		text_en: "One of the most beautiful restaurants — food in Medina is truly a masterpiece. Grateful to its designer!",
		name: "أحمد حكيم",
		name_en: "Ahmed Hakeem",
		rating: 5,
	},
	{
		img: rev1,
		text_ar: "مكان جميل ومميز جداً. كل شي فخم ونظيف والموظفون محترمون جداً ومحبون.",
		text_en: "A really beautiful and special place — everything is elegant, clean, and the staff is kind and welcoming!",
		name: "محمد مرشد",
		name_en: "Mohammed Murshed",
		rating: 5,
	},
	{
		img: rev1,
		text_ar: "الأكل ماشاء الله تبارك الله ممتاز جداً، حتى التعامل مع الزبائن جداً جميل. الله يوفقهم.",
		text_en: "The food is exceptionally delicious, and the service is wonderful. May God grant them continued success!",
		name: "بدر أحمد",
		name_en: "Badr Ahmed",
		rating: 5,
	},
	{
		img: rev3,
		text_ar: "ماشاء الله المكان خرافي.",
		text_en: "The place is simply fantastic!",
		name: "جواهر الحربي",
		name_en: "Jawaher AlHarbi",
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
			style={{
				background: 'linear-gradient(135deg, #f0f2f7 0%, #f8f9fc 100%)'
			}}
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
			<section className="py-16 md:py-24 relative overflow-hidden" style={{
				background: 'linear-gradient(135deg, #f8f9fc 0%, rgba(103, 48, 38, 0.05) 50%, #f0f2f7 100%)'
			}}>
				<div className="absolute inset-0" style={{
					background: 'radial-gradient(circle at 30% 20%, rgba(103, 48, 38, 0.1), transparent 50%)'
				}}></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="text-center mb-16">
						<h1 className="text-4xl md:text-6xl font-bold mb-4" style={{
							background: 'linear-gradient(135deg, #673026 0%, #7e845d 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text'
						}}>
							{t("about.story.title")}
						</h1>
						<div className="w-24 h-1 mx-auto rounded-full" style={{
							background: 'linear-gradient(90deg, #d97706 0%, #673026 100%)'
						}}></div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
						<div className="animate-on-scroll order-2 lg:order-1" id="story-img-1">
							<div className={`relative group transform transition-all duration-1000 ${isVisible["story-img-1"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
								<div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" style={{
									background: 'linear-gradient(135deg, #673026 0%, #d97706 100%)'
								}}></div>
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
									<div className="w-16 h-0.5" style={{
										background: 'linear-gradient(90deg, transparent 0%, #d97706 100%)'
									}}></div>
									<SparklesIcon className="w-6 h-6" style={{ color: '#d97706' }} />
									<div className="w-16 h-0.5" style={{
										background: 'linear-gradient(90deg, #d97706 0%, transparent 100%)'
									}}></div>
								</div>
								  <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">
              {t("home.about.idea_section.heading")}
            </h3>
            <p className="text-gray-600 mt-2">
              {t("home.about.idea_section.hijri")} — {t("home.about.idea_section.gregorian")}
            </p>
          </div>

          {/* Opening Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">
              {t("home.about.opening_section.heading")}
            </h3>
            <p className="text-gray-600 mt-2">
              {t("home.about.opening_section.hijri")} — {t("home.about.opening_section.gregorian")}
            </p>
          </div>
								<div className="p-6 rounded-xl border" style={{
									background: 'linear-gradient(135deg, rgba(103, 48, 38, 0.05) 0%, rgba(166, 171, 139, 0.05) 100%)',
									borderColor: 'rgba(103, 48, 38, 0.2)'
								}}>
									<p className="text-2xl font-bold font-serif" style={{ color: '#673026' }}>
										{t("about.story.signature")}
									</p>
								</div>
							</div>
						</div>

						<div className="animate-on-scroll order-3 lg:order-3" id="story-img-2">
							<div className={`relative group transform transition-all duration-1000 delay-500 ${isVisible["story-img-2"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
								<div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" style={{
									background: 'linear-gradient(135deg, #7e845d 0%, #673026 100%)'
								}}></div>
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
			<section className="py-16 md:py-20 animate-on-scroll" >
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-6" >
							{t("about.ambiance.title")}
						</h2>
						<div className="w-24 h-1 mx-auto rounded-full mb-8"></div>
						<p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed" >
							{t("about.ambiance.description")}
						</p>
					</div>
				</div>
			</section>

			{/* Video Section */}
			<section className="py-16 md:py-24" style={{ backgroundColor: '#f8f9fc' }}>
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
									className="absolute -top-12 right-0 text-white text-4xl hover:scale-110 transition-all duration-300"
									onClick={() => setIsPlaying(false)}
									style={{ color: '#f8f9fc' }}
									onMouseEnter={(e) => e.target.style.color = '#d97706'}
									onMouseLeave={(e) => e.target.style.color = '#f8f9fc'}
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

			<section className="py-16 md:py-24 animate-on-scroll" id="team-section" style={{
				background: 'linear-gradient(135deg, #f8f9fc 0%, rgba(166, 171, 139, 0.1) 100%)'
			}}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#1d2939' }}>
							{t("about.team.title", "Our Team")}
						</h2>
						<div className="w-24 h-1 mx-auto rounded-full mb-8" style={{
							background: 'linear-gradient(90deg, #d97706 0%, #673026 100%)'
						}}></div>
						<UserGroupIcon className="w-12 h-12 mx-auto" style={{ color: '#d97706' }} />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
						{teamImages.map((image, index) => (
							<div key={index} className={`transform transition-all duration-1000 ${isVisible["team-section"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: `${index * 150}ms` }}>
								<div className="relative overflow-hidden rounded-2xl shadow-xl group p-2" style={{ backgroundColor: '#f8f9fc' }}>
									<img
										src={image}
										alt={t("about.team.member_alt", { number: index + 1 })}
										className="w-full h-72 md:h-80 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-2 rounded-xlopacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 md:py-24 animate-on-scroll" id="special-menu-section" style={{ backgroundColor: '#f0f2f7' }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
						<div className={`transition-all duration-1000 ${isVisible["special-menu-section"] ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
							<div className="relative group">
								<div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" style={{
									background: 'linear-gradient(135deg, #673026 0%, #d97706 100%)'
								}}></div>
								<img
									src={logo}
									alt={t("about.special_menu.logo_alt")}
									className="relative rounded-2xl shadow-2xl w-full h-80 lg:h-96 object-cover"
								/>
							</div>
						</div>
						<div className={`transition-all duration-1000 delay-300 ${isVisible["special-menu-section"] ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
							<div className="relative group">
								<div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" style={{
									background: 'linear-gradient(135deg, #7e845d 0%, #673026 100%)'
								}}></div>
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
			<section className="py-16 md:py-24 animate-on-scroll" id="testimonials-section" style={{ background: 'linear-gradient(135deg, #f8f9fc 0%, #fffbe6 100%)' }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#1d2939' }}>
							{t("about.testimonials.title", "آراء الزوار")}
						</h2>
						<div className="w-24 h-1 mx-auto rounded-full mb-8" style={{
							background: 'linear-gradient(90deg, #d97706 0%, #673026 100%)'
						}}></div>
						<HeartIcon className="w-12 h-12 mx-auto" style={{ color: '#d97706' }} />
					</div>
					<Slider {...sliderSettings}>
						{testimonials.map((testimonial, idx) => (
							<div key={idx} className="px-4">
								<div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center h-full min-h-[340px]">
									<img
										src={testimonial.img}
										alt={testimonial.name}
										className="w-20 h-20 rounded-full object-cover border-4 border-amber-200 shadow mb-4"
									/>
									<div className="mb-2">
										{renderStars(testimonial.rating)}
									</div>
									<p className="text-lg font-medium mb-4" style={{ color: '#673026' }}>
										{i18n.language === "ar" ? testimonial.text_ar : testimonial.text_en}
									</p>
									<p className="text-sm text-gray-500 font-semibold">
										{i18n.language === "ar" ? testimonial.name : testimonial.name_en}
									</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>
			{/* Gallery Section */}
			<section
				className="py-16 md:py-20 overflow-hidden"
				style={{ backgroundColor: '#f8f9fc' }}>
				<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
					<Slider {...gallerySliderSettings}>
						{galleryImages.concat(galleryImages).map((img, index) => (
							<div key={index} className="px-2">
								<div className="flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl group">
									<img
										src={img}
										alt={t("about.gallery.image_alt")}
										className="h-96 w-auto object-cover transform group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 rounded-2xl shadow-lg"
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>


			{/* Google Reviewss Section */}
			<section className="animate-on-scroll" id="visitors-section" style={{ backgroundColor: '#f0f2f7' }}>
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#1d2939' }}>
						{t("about.visitors.title", "زوارنا المميزون")}
					</h2>
					<div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: '#a6ab8b' }}></div>
					<GlobeAltIcon className="w-12 h-12 mx-auto" style={{ color: '#d97706' }} />
				</div>
				<div className="max-w-7xl mx-auto">
					<Slider {...visitorsGallerySliderSettings} className="visitors-slider">
						{visitorsPhotos.map((visitor, idx) => (
							<div key={idx} className="px-3 flex flex-col items-center">
								<div className="relative group rounded-2xl overflow-hidden shadow-xl p-2 h-[600px] flex items-center justify-center w-full" style={{ backgroundColor: '#f8f9fc' }}>
									<img
										src={visitor.image}
										alt={visitor.name}
										className="w-full h-[500px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="w-full mt-6">
									<p style={{ fontSize: "36px", color: '#673026' }} className="text-center font-bold text-xl">{visitor.name}</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>

		</div>
	);
};

export default About;