/** @format */

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	Bars3Icon,
	XMarkIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import logo from "../assets/logonn.png";

function Navbar({ changeLanguage }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { cartItems } = useCart();
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const navigate = useNavigate();

	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
	
	// Function to handle navigation and scroll to top
	const handleNavigation = (e, path) => {
		e.preventDefault();
		navigate(path);
		window.scrollTo(0, 0);
	};

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
			(isMobile
				? "px-2 py-0.5 text-xs "
				: "px-3 py-1 text-sm ") +
			"rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none";

		return (
			<div className={`flex space-x-2 ${isMobile ? "px-3 py-2" : ""}`}>
				{currentLanguage === "en" ? (
					<button
						onClick={() => handleLanguageChange("ar")}
						className={`${buttonClasses} bg-primary text-white hover:bg-primary`}
					>
						{t("navbar.language_toggle.arabic")}
					</button>
				) : (
					<button
						onClick={() => handleLanguageChange("en")}
						className={`${buttonClasses} bg-primary text-white hover:bg-primary`}
					>
						{t("navbar.language_toggle.english")}
					</button>
				)}
			</div>
		);
	};

	const isActive = (path) => {
		return location.pathname === path ? "text-primary font-medium" : "";
	};

	return (
		<nav
			className={`sticky w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/50 backdrop-blur-sm py-6"
				}`}
			dir={i18n.language === "ar" ? "rtl" : "ltr"}
		>
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				{/* Mobile Header */}
				<div className="flex justify-between items-center">
					<div className="md:hidden flex w-full items-center justify-between">
						{/* Brand Logo and Name */}
						<div className="flex items-center gap-2">
							{/* Mobile logo */}
							<div className="w-10 h-10 rounded-full overflow-hidden">
								<img src={logo} alt="To'mah Logo" className="w-full h-full object-cover " />
							</div>
							<span className="text-xl font-bold text-black">
								{t("navbar.brand") || "To'mah"}
							</span>
						</div>

						{/* Right Side Controls */}
						<div className="flex items-center gap-2">
							{/* Cart Icon */}
							<Link
								to="/cart"
								onClick={(e) => handleNavigation(e, "/cart")}
								className="relative p-2 rounded-full bg-white shadow transition hover:scale-105 border border-gray-100"
								aria-label="Cart"
							>
								<ShoppingBagIcon className="h-6 w-6 text-primary" />
								{totalItems > 0 && (
									<span className="absolute -top-1 -right-1 bg-primary text-white rounded-full text-xs px-1.5 py-0.5 font-bold">
										{totalItems}
									</span>
								)}
							</Link>
							{/* Menu Drawer Icon */}
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors duration-300 focus:outline-none"
							>
								{isMenuOpen ? (
									<XMarkIcon className="h-6 w-6" />
								) : (
									<Bars3Icon className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>
					{/* Desktop Navbar */}
					<div className="hidden md:flex items-center w-full justify-between">
						{/* Cart on left */}
						<Link
							to="/cart"
							onClick={(e) => handleNavigation(e, "/cart")}
							className="flex items-center text-black hover:text-gray-700 transition duration-300 ease-in-out"
						>
							<ShoppingBagIcon className="h-6 w-6 mr-2" />
							<span className="font-normal text-base">
								{t("navbar.cart_with_count", { count: totalItems })}
							</span>
						</Link>
						{/* Center - Navigation Links with Logo in the Middle */}
						<div className="flex items-center mx-8">
							{/* Left group of links (Pages dropdown + 2 links) */}
							<div className="flex items-center space-x-8">
								{/* Pages Dropdown styled as nav link */}
								<div className="relative group">
									<Link className={`uppercase nav-link relative py-2 transition-colors duration-300 hover:text-primary focus:outline-none ${isActive('/')}`}> {/* Use isActive('/') for highlight if on home */}
										{t("navbar.pages", "Pages")}
									</Link>
									<div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
										<Link to="/" onClick={(e) => handleNavigation(e, "/")} className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">{t("navbar.home")}</Link>
										<Link to="/menu" onClick={(e) => handleNavigation(e, "/menu")} className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">{t("navbar.menu")}</Link>
										<Link to="/about" onClick={(e) => handleNavigation(e, "/about")} className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">{t("navbar.about")}</Link>
										<Link to="/partners" onClick={(e) => handleNavigation(e, "/partners")} className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">{t("navbar.partners", "Partners")}</Link>
										<Link to="/contact" onClick={(e) => handleNavigation(e, "/contact")} className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">{t("navbar.contact")}</Link>
										<a href="https://mytable.sa/widget/reservation/?rid=2034&lang=en&fbclid=PAZXh0bgNhZW0CMTEAAaYuR96bLluL1TDMP1YL3EkhA6m_lbAbXLYOD-dLQ-CcjZhZ7W4Hrt-c6_w_aem_0m_5PflX6LR-50gWyLYr5A" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">{t("navbar.bookingTable")}</a>
										<Link to="/no-image-products" onClick={(e) => handleNavigation(e, "/no-image-products")} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600">{t("navbar.no_image_products", "منتجات بدون صورة")}</Link>
									</div>
								</div>
								<Link to="/" onClick={(e) => handleNavigation(e, "/")} className={`uppercase nav-link relative py-2 transition-colors duration-300 hover:text-primary ${isActive("/")} group`}>
									{t("navbar.home")}
								</Link>
								<Link to="/menu" onClick={(e) => handleNavigation(e, "/menu")} className={`uppercase nav-link relative py-2 transition-colors duration-300 hover:text-primary ${isActive("/menu")} group`}>
									{t("navbar.menu")}
								</Link>
							</div>
							{/* Centered Logo */}
							<div className="flex items-center justify-center mx-8">
								{/* Desktop logo */}
								<div className="w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center shadow">
									<img src={logo} alt="To'mah Logo" className="w-full h-full object-cover" />
								</div>
							</div>
							{/* Right group of links (3 links) */}
							<div className="flex items-center space-x-8">
								<Link to="/about" onClick={(e) => handleNavigation(e, "/about")} className={`uppercase nav-link relative py-2 transition-colors duration-300 hover:text-primary ${isActive("/about")} group`}>
									{t("navbar.about")}
								</Link>
								<Link to="/partners" onClick={(e) => handleNavigation(e, "/partners")} className={`uppercase nav-link relative py-2 transition-colors duration-300 hover:text-primary ${isActive("/partners")} group`}>
									{t("navbar.partners", "Partners")}
								</Link>
								<Link to="/contact" onClick={(e) => handleNavigation(e, "/contact")} className={`uppercase nav-link relative py-2 transition-colors duration-300 hover:text-primary ${isActive("/contact")} group`}>
									{t("navbar.contact")}
								</Link>
							</div>
						</div>
						{/* Menu button beside language toggle */}
						<div className="flex items-center gap-2">
							<LanguageToggle />
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
				style={{ maxHeight: isMenuOpen ? '80vh' : 0, overflowY: isMenuOpen ? 'auto' : 'hidden' }}
			>
				<div className="px-4 py-3 space-y-2">
					<Link to="/" onClick={(e) => handleNavigation(e, "/")} className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/")}`}>{t("navbar.home")}</Link>
					<Link to="/menu" onClick={(e) => handleNavigation(e, "/menu")} className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/menu")}`}>{t("navbar.menu")}</Link>
					<Link to="/about" onClick={(e) => handleNavigation(e, "/about")} className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/about")}`}>{t("navbar.about")}</Link>
					<Link to="/partners" onClick={(e) => handleNavigation(e, "/partners")} className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/partners")}`}>{t("navbar.partners")}</Link>
					<Link to="/contact" onClick={(e) => handleNavigation(e, "/contact")} className={`block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${isActive("/contact")}`}>{t("navbar.contact")}</Link>
					<a href="https://mytable.sa/widget/reservation/?rid=2034&lang=en&fbclid=PAZXh0bgNhZW0CMTEAAaYuR96bLluL1TDMP1YL3EkhA6m_lbAbXLYOD-dLQ-CcjZhZ7W4Hrt-c6_w_aem_0m_5PflX6LR-50gWyLYr5A" className="block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300">{t("navbar.bookingTable")}</a>
					<Link to="/no-image-products" onClick={(e) => handleNavigation(e, "/no-image-products")} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition">{t("navbar.no_image_products", "منتجات بدون صورة")}</Link>
					<div className="pt-2 border-t border-gray-200">
						<LanguageToggle isMobile={true} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
