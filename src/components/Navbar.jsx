/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
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
	const { cartItems } = useCart();
	const { t } = useTranslation();

	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<nav className="bg-base-100 shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<div className="avatar mr-2">
							<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
								<img src={logo} alt="Logo" />
							</div>
						</div>
						<Link to="/" className="text-2xl font-bold">
							{t("navbar.brand")} {/* ترجمة اسم العلامة التجارية */}
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link to="/" className="hover:text-primary">
							{t("navbar.home")}
						</Link>
						<Link to="/about" className="hover:text-primary">
							{t("navbar.about")}
						</Link>
						<Link to="/menu" className="hover:text-primary">
							{t("navbar.menu")}
						</Link>
						<Link to="/partners" className="hover:text-primary">
							{t("navbar.partners")}
						</Link>
						<Link to="/contact" className="hover:text-primary">
							{t("navbar.contact")}
						</Link>
						<Link to="/cart" className="relative">
							<ShoppingCartIcon className="h-6 w-6 hover:text-primary" />
							{totalItems > 0 && (
								<span className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
									{totalItems}
								</span>
							)}
						</Link>
						{/* أزرار تغيير اللغة للـ Desktop */}
						<div className="flex space-x-2">
							<button
								onClick={() => changeLanguage("en")}
								className="text-sm hover:text-primary">
								English
							</button>
							<button
								onClick={() => changeLanguage("ar")}
								className="text-sm hover:text-primary">
								عربي
							</button>
						</div>
					</div>

					{/* Mobile Navigation Button */}
					<div className="md:hidden flex items-center">
						<Link to="/cart" className="relative mr-4">
							<ShoppingCartIcon className="h-6 w-6" />
							{totalItems > 0 && (
								<span className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
									{totalItems}
								</span>
							)}
						</Link>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none">
							{isMenuOpen ? (
								<XMarkIcon className="h-6 w-6" />
							) : (
								<Bars3Icon className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/"
							className="block px-3 py-2 rounded-md hover:bg-primary hover:text-white"
							onClick={() => setIsMenuOpen(false)}>
							{t("navbar.home")}
						</Link>
						<Link
							to="/about"
							className="block px-3 py-2 rounded-md hover:bg-primary hover:text-white"
							onClick={() => setIsMenuOpen(false)}>
							{t("navbar.about")}
						</Link>
						<Link
							to="/menu"
							className="block px-3 py-2 rounded-md hover:bg-primary hover:text-white"
							onClick={() => setIsMenuOpen(false)}>
							{t("navbar.menu")}
						</Link>
						<Link
							to="/partners"
							className="block px-3 py-2 rounded-md hover:bg-primary hover:text-white"
							onClick={() => setIsMenuOpen(false)}>
							{t("navbar.partners")}
						</Link>
						<Link
							to="/contact"
							className="block px-3 py-2 rounded-md hover:bg-primary hover:text-white"
							onClick={() => setIsMenuOpen(false)}>
							{t("navbar.contact")}
						</Link>
						{/* أزرار تغيير اللغة للـ Mobile */}
						<div className="px-3 py-2 flex space-x-2">
							<button
								onClick={() => {
									changeLanguage("en");
									setIsMenuOpen(false);
								}}
								className="text-sm hover:text-primary">
								English
							</button>
							<button
								onClick={() => {
									changeLanguage("ar");
									setIsMenuOpen(false);
								}}
								className="text-sm hover:text-primary">
								العربية
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
