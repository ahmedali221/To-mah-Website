/** @format */

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
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
import decor2 from "../assets/AboutImages/download.jpeg";
import g1 from "/src/assets/AboutImages/G1.jpg";
import g2 from "/src/assets/AboutImages/G2.jpg";
import g3 from "/src/assets/AboutImages/G3.jpg";
import g4 from "/src/assets/AboutImages/G4.jpg";
import g5 from "/src/assets/AboutImages/G5.jpg";
import g6 from "/src/assets/AboutImages/G6.jpg";
import g7 from "/src/assets/AboutImages/G7.jpg";
import g8 from "/src/assets/AboutImages/G8.jpg";
import g9 from "/src/assets/AboutImages/G9.jpg";
import g10 from "/src/assets/AboutImages/G10.jpg";
import { 
  HeartIcon, 
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const About = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVisible, setIsVisible] = useState({});
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

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
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};
	
	// Intersection Observer for scroll animations
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		};
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
				}
			});
		}, observerOptions);
		
		const sections = document.querySelectorAll('.animate-on-scroll');
		sections.forEach(section => {
			observer.observe(section);
		});
		
		return () => {
			sections.forEach(section => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="bg-slate-50 ">
			{/* OUR STORY SECTION */}
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
								className={`rounded-lg shadow-xl w-full h-auto transform transition-all duration-1000 ${isVisible['story-img-1'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
							/>
						</div>
						
						<div className="animate-on-scroll" id="story-text">
							<div className={`text-center space-y-4 transition-all duration-1000 delay-300 ${isVisible['story-text'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
								<p className="text-amber-600 font-bold text-xl">*</p>
								<p className="text-gray-600 leading-relaxed">{t("about.story.description")}</p>
								<p className="text-2xl font-bold mt-6 font-serif">{t("about.story.signature")}</p>
							</div>
						</div>
						
						<div className="animate-on-scroll" id="story-img-2">
							<img 
								src={img2} 
								alt={t("about.story.image_alt_right")} 
								className={`rounded-lg shadow-xl w-full h-auto transform transition-all duration-1000 delay-500 ${isVisible['story-img-2'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* VIDEO BANNER SECTION */}
			<section className="py-16 bg-gradient-to-b from-white to-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative rounded-xl overflow-hidden shadow-2xl animate-on-scroll" id="video-section">
						<div 
							className={`transition-all duration-1000 ${isVisible['video-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
							onClick={() => setIsPlaying(true)}
						>
							<img 
								src={cover} 
								alt={t("about.video.cover_alt")} 
								className="w-full h-auto object-cover"
							/>
							<button
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 text-white p-6 rounded-full z-10 hover:bg-black/50 transition-all"
								aria-label={t("about.video.play_button")}
							>
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
								<button 
									className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
									onClick={() => setIsPlaying(false)}
								>
									✕
								</button>
								<div className="aspect-w-16 aspect-h-9">
									<video
										src={intro}
										autoPlay
										controls
										className="w-full h-full rounded-lg"
									></video>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>

			{/* VALUES SECTION */}
			<section className="py-16 bg-white animate-on-scroll" id="values-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-16 relative">
						<span className="relative px-8">
							{t("about.values.title")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white transform ${isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '100ms'}}>
							<div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<HeartIcon className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-3">{t("about.values.hospitality")}</h3>
						</div>
						
						<div className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white transform ${isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
							<div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<SparklesIcon className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-3">{t("about.values.authenticity")}</h3>
						</div>
						
						<div className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white transform ${isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '300ms'}}>
							<div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<UserGroupIcon className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-3">{t("about.values.community")}</h3>
						</div>
						
						<div className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white transform ${isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
							<div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<GlobeAltIcon className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-3">{t("about.values.culture")}</h3>
						</div>
					</div>
				</div>
			</section>

			{/* AMBIANCE SECTION */}
			<section className="py-16 bg-slate-50 animate-on-scroll" id="ambiance-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-8 relative">
						<span className="relative px-8">
							{t("about.ambiance.title")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					
					<p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{t("about.ambiance.description")}</p>
					
					<div className={`transition-all duration-1000 ${isVisible['ambiance-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
						<img 
							src={decor2} 
							alt={t("about.ambiance.image_alt")} 
							className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-96 mx-auto"
						/>
					</div>
				</div>
			</section>

			{/* SPECIAL MENU SECTION */}
			<section className="py-16 bg-white animate-on-scroll" id="special-menu-section">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div className={`transition-all duration-1000 ${isVisible['special-menu-section'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
							<img
								src={logo}
								alt={t("about.special_menu.logo_alt")}
								className="rounded-lg shadow-2xl w-full h-auto"
							/>
						</div>
						
						<div className={`transition-all duration-1000 delay-300 ${isVisible['special-menu-section'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
							<img
								src={loc}
								alt={t("about.special_menu.interior_alt")}
								className="rounded-lg shadow-2xl w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* TESTIMONIAL SECTION */}
			<section className="py-16 bg-slate-50 animate-on-scroll" id="testimonial-section">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-16 relative">
						<span className="relative px-8">
							{t("about.testimonials.title")}
							<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
						</span>
					</h2>
					
					<div className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 ${isVisible['testimonial-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

			{/* GALLERY SECTION */}
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
							{ breakpoint: 640, settings: { slidesToShow: 1 } }
						]}
					>
						{galleryImages.concat(galleryImages).map((img, index) => (
							<div key={index} className="px-2">
								<div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
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

			{/* CTA SECTION */}
			<section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white animate-on-scroll" id="cta-section">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
						{t("about.cta.title")}
					</h2>
					<p className={`text-lg mb-8 transition-all duration-1000 delay-200 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
						{t("about.cta.description")}
					</p>
					<div className={`transition-all duration-1000 delay-400 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
						<Link to="/menu" className="btn bg-white text-amber-800 hover:bg-gray-100 border-none px-8 py-3 rounded-full font-bold">
							{t("about.cta.button")}
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;