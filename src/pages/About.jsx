/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./About.css";
import { useNavigate } from "react-router-dom";
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

const About = () => {
	const [isPlaying, setIsPlaying] = useState(false);
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
		autoplaySpeed: 2000,
		arrows: false,
	};

	return (
		<div className="about-us-page" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			{/* OUR STORY SECTION */}
			<section className="our-story">
				<div className="story-images">
					<img src={img1} alt={t("about.story.image_alt_left")} />
				</div>
				<div className="story-text">
					<h2>{t("about.story.title")}</h2>
					<p className="stars">*</p>
					<p>{t("about.story.description")}</p>
					<p className="signature">{t("about.story.signature")}</p>
				</div>
				<div className="story-images">
					<img src={img2} alt={t("about.story.image_alt_right")} />
				</div>
			</section>

			{/* VIDEO BANNER SECTION */}
			<section className="full-width-video">
				<div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
					<img src={cover} alt={t("about.video.cover_alt")} />
					<button
						className="play-btn"
						aria-label={t("about.video.play_button")}>
						▶
					</button>
				</div>
				{isPlaying && (
					<div className="video-modal">
						<div className="video-content">
							<button className="close-btn" onClick={() => setIsPlaying(false)}>
								✖
							</button>
							<video
								src={intro}
								autoPlay
								controls
								muted
								playsInline
								className="local-video"></video>
						</div>
					</div>
				)}
			</section>

			{/* VALUES SECTION */}
			<section className="values">
				<h2>{t("about.values.title")}</h2>
				<div className="values-cards">
					<div className="value-card">{t("about.values.hospitality")}</div>
					<div className="value-card">{t("about.values.authenticity")}</div>
					<div className="value-card">{t("about.values.community")}</div>
					<div className="value-card">{t("about.values.culture")}</div>
				</div>
			</section>

			{/* DECOR & AMBIANCE SECTION */}
			<section className="decor">
				<h2>{t("about.ambiance.title")}</h2>
				<p>{t("about.ambiance.description")}</p>
				<div className="decor-gallery">
					<img src={decor2} alt={t("about.ambiance.image_alt")} />
				</div>
			</section>

			{/* SPECIAL MENU */}
			<section className="special-menu">
				<div className="menu-left">
					<img
						src={logo}
						alt={t("about.special_menu.logo_alt")}
						className="special-dish-img"
					/>
				</div>
				<div className="menu-right">
					<img
						src={loc}
						alt={t("about.special_menu.interior_alt")}
						className="special-dish-img"
					/>
				</div>
			</section>

			{/* TESTIMONIAL */}
			<section className="testimonial-slider">
				<h2>{t("about.testimonials.title")}</h2>
				<Slider {...settings}>
					{testimonials.map((item, index) => (
						<div className="testimonial" key={index}>
							<img className="user-pic" src={item.img} alt={item.name} />
							<p>{item.text}</p>
							<span>{item.name}</span>
						</div>
					))}
				</Slider>
			</section>

			{/* GALLERY */}
			<section className="gallery">
				<div className="gallery-track">
					{galleryImages.concat(galleryImages).map((img, index) => (
						<img key={index} src={img} alt={t("about.gallery.image_alt")} />
					))}
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="cta">
				<h2>{t("about.cta.title")}</h2>
				<p>{t("about.cta.description")}</p>
				<button className="cta-btn" onClick={() => navigate("/menu")}>
					{t("about.cta.button")}
				</button>
			</section>
		</div>
	);
};

export default About;
