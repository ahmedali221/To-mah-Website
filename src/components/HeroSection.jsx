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
				backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0) 60%), url(${image})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
		</div>
	);
}