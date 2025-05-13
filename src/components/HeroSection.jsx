/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection({ setSearchQuery, image }) {
	const [localSearchQuery, setLocalSearchQuery] = useState("");
	const { t, i18n } = useTranslation();


	return (
		<div
			className="w-full h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-white"
			style={{
				backgroundImage: `url(${image})`,
				backgroundBlendMode: "overlay",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
			}}
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			
		</div>
	);
}
