/** @format */

import { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ThemeContext = createContext();

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");
	const { i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		document.documentElement.setAttribute(
			"dir",
			i18n.language === "ar" ? "rtl" : "ltr"
		);
	}, [theme, i18n.language]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	const value = { theme, toggleTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}
