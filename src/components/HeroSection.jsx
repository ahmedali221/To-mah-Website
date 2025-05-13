/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection({ setSearchQuery, image }) {
	const [localSearchQuery, setLocalSearchQuery] = useState("");
	const { t, i18n } = useTranslation();

	return (
		<div
			className="w-full h-screen relative flex items-center justify-center text-white pt-16"
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover", // Changed to cover for full width stretch
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed" // Optional: creates parallax effect
			}}
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
		</div>
	);
}