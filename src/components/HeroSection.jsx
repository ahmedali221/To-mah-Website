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
        backgroundSize: "100% 100%",
        minHeight: "100vh", // Add this line to set a minimum height for the herosection div
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
    }}
    dir={i18n.language === "ar" ? "rtl" : "ltr"}>
    {/* <div className="container mx-auto px-4 text-center z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
        {t("home.hero.title")}
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
        {t("home.hero.subtitle")}
      </p>
      {setSearchQuery && (
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              placeholder={t("hero_section.search_placeholder")}
              className="w-full px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              onClick={() => {
                if (setSearchQuery) setSearchQuery(localSearchQuery);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div> */}
</div>
	);
}