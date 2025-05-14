/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection({ setSearchQuery, image }) {
	const [localSearchQuery, setLocalSearchQuery] = useState("");
	const { t, i18n } = useTranslation();

	return (
		<div
			className="relative w-full h-screen flex items-center justify-center pt-16"
			dir={i18n.language === "ar" ? "rtl" : "ltr"}
		>

			<img
				src={image}
				alt="hero"
				className="absolute inset-0 w-full h-full object-contain z-0 transform sm:scale-x-100 md:scale-x-110 lg:scale-x-120" // زيادة الحجم فقط في الشاشات الكبيرة
			/>


			<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10" />


			<div className="relative z-20 text-white">

				<h1 className="text-4xl font-bold">{t("hero.title")}</h1>
			</div>
		</div>
	);
}