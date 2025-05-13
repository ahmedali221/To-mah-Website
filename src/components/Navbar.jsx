/** @format */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	ShoppingCartIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.webp";

function Navbar({ changeLanguage }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { cartItems } = useCart();
	const { t, i18n } = useTranslation();
	const location = useLocation();

	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	// Add scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	const LanguageToggle = ({ isMobile = false }) => {
		const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

		const handleLanguageChange = (lang) => {
			changeLanguage(lang);
			setCurrentLanguage(lang);
			if (isMobile) {
				setIsMenuOpen(false);
			}
		};

		const buttonClasses =
			"px-3 py-1 text-sm rounded-full shadow-md " +
			"transition-all duration-300 ease-in-out transform " +
			"hover:scale-105 active:scale-95 focus:outline-none";

		return (
			<div className={`flex space-x-2 ${isMobile ? "px-3 py-2" : ""}`}>
				{currentLanguage === "en" ? (
					<button
						onClick={() => handleLanguageChange("ar")}
						className={`${buttonClasses} bg-primary text-white hover:bg-primary-dark`}>
						{t("navbar.language_toggle.arabic")}
					</button>
				) : (
					<button
						onClick={() => handleLanguageChange("en")}
						className={`${buttonClasses} bg-primary text-white hover:bg-primary-dark`}>
						{t("navbar.language_toggle.english")}
					</button>
				)}
			</div>
		);
	};

	const isActive = (path) => {
		return location.pathname === path ? "text-primary-dark font-medium" : "";
	};

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-white shadow-md py-2"
					: "bg-white/50 backdrop-blur-sm py-6"
			}`}
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<div className="flex items-center">
						<Link to="/" className="flex items-center space-x-2">
							<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
								<img 
									src={logo} 
									alt="To'mah Logo" 
									className="w-full h-full object-cover"
								/>
							</div>
							<span className="text-2xl font-bold text-primary-dark hidden sm:block">
								{t("navbar.brand")}
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link 
							to="/" 
							className={`nav-link relative py-2 transition-colors duration-300 hover:text-primary ${isActive("/")} group`}
						>
							{t("navbar.home")}
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							{location.pathname === "/" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-dark"></span>}
						</Link>
						<Link 
							to="/about" 
							className={`nav-link relative py-2 transition-colors duration-300 ${
								scrolled ? "hover:text-primary" : "text-white hover:text-white/80"
							} ${isActive("/about")} group`}
						>
							{t("navbar.about")}
							<span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
								scrolled ? "bg-primary" : "bg-white"
							} transition-all duration-300 group-hover:w-full`}></span>
							{location.pathname === "/about" && <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
								scrolled ? "bg-primary-dark" : "bg-white"
							}`}></span>}
						</Link>
						<Link 
							to="/menu" 
							className={`nav-link relative py-2 transition-colors duration-300 ${
								scrolled ? "hover:text-primary" : "text-white hover:text-white/80"
							} ${isActive("/menu")} group`}
						>
							{t("navbar.menu")}
							<span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
								scrolled ? "bg-primary" : "bg-white"
							} transition-all duration-300 group-hover:w-full`}></span>
							{location.pathname === "/menu" && <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
								scrolled ? "bg-primary-dark" : "bg-white"
							}`}></span>}
						</Link>
						<Link 
							to="/partners" 
							className={`nav-link relative py-2 transition-colors duration-300 ${
								scrolled ? "hover:text-primary" : "text-white hover:text-white/80"
							} ${isActive("/partners")} group`}
						>
							{t("navbar.partners")}
							<span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
								scrolled ? "bg-primary" : "bg-white"
							} transition-all duration-300 group-hover:w-full`}></span>
							{location.pathname === "/partners" && <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
								scrolled ? "bg-primary-dark" : "bg-white"
							}`}></span>}
						</Link>
						<Link 
							to="/contact" 
							className={`nav-link relative py-2 transition-colors duration-300 ${
								scrolled ? "hover:text-primary" : "text-white hover:text-white/80"
							} ${isActive("/contact")} group`}
						>
							{t("navbar.contact")}
							<span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
								scrolled ? "bg-primary" : "bg-white"
							} transition-all duration-300 group-hover:w-full`}></span>
							{location.pathname === "/contact" && <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
								scrolled ? "bg-primary-dark" : "bg-white"
							}`}></span>}
						</Link>
						<Link to="/cart" className="relative p-2 group">
							<ShoppingCartIcon className={`h-6 w-6 transition-colors duration-300 ${
								scrolled ? "text-primary-dark group-hover:text-primary" : "text-white group-hover:text-white/80"
							}`} />
							{totalItems > 0 && (
								<span className="absolute -top-1 -right-1 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
									{totalItems}
								</span>
							)}
						</Link>
						<LanguageToggle />
					</div>

					{/* Mobile Navigation */}
					<div className="md:hidden flex items-center">
						<Link to="/cart" className="relative mr-4 p-2">
							<ShoppingCartIcon className="h-6 w-6" />
							{totalItems > 0 && (
								<span className="absolute -top-1 -right-1 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
									{totalItems}
								</span>
							)}
						</Link>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 rounded-md text-primary-dark hover:text-primary focus:outline-none transition-colors duration-300">
							{isMenuOpen ? (
								<XMarkIcon className="h-6 w-6" />
							) : (
								<Bars3Icon className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div 
				className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
					isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="px-4 py-3 space-y-2">
					<Link
						to="/"
						className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/")}`}>
						{t("navbar.home")}
					</Link>
					<Link
						to="/about"
						className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/about")}`}>
						{t("navbar.about")}
					</Link>
					<Link
						to="/menu"
						className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/menu")}`}>
						{t("navbar.menu")}
					</Link>
					<Link
						to="/partners"
						className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/partners")}`}>
						{t("navbar.partners")}
					</Link>
					<Link
						to="/contact"
						className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/contact")}`}>
						{t("navbar.contact")}
					</Link>
					<div className="pt-2 border-t border-gray-200">
						<LanguageToggle isMobile={true} />
					</div>
				</div>
			</div>
		</nav>	
	);
}

export default Navbar;