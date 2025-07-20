/** @format */

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import {
	Instagram,
	Twitter,
	Facebook,
	Youtube,
	MapPin,
	ExternalLink,
	Heart,
	Phone,
	Mail,
	Star,
	Globe,
	Link as LinkIcon,
	Sparkles,
	ArrowRight,
	Clock,
} from "lucide-react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

function Footer() {
	const { t, i18n } = useTranslation();

	const socialPlatforms = [
		{ name: "Instagram", url: "https://www.instagram.com/tomah.sa/", icon: Instagram },
		{ name: "TikTok", url: "https://www.tiktok.com/@tomah_sa", icon: FaTiktok },
		{ name: "X", url: "https://x.com/Tomah_sa", icon: FaXTwitter },
		{ name: "Facebook", url: "https://web.facebook.com/profile.php?id=61563929756017&_rdc=1&_rdr", icon: Facebook },
		{ name: "YouTube", url: "https://www.youtube.com/channel/UCLXAOmq4QkfUtHgD6dV_ryA", icon: Youtube },
		{ name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g298551-d28445172-Reviews-To_mah_Restaurant-Medina_Al_Madinah_Province.html", icon: Star },
		{ name: "Google Maps", url: "https://www.google.com/maps/place/%D8%B7%D9%9E%D8%B9%D9%85%D8%A9%E2%80%AD/@24.4402965,39.6629878,17z/data=!3m1!4b1!4m6!3m5!1s0x15bd95535e8cfba3:0x6c20f3e111d4579b!8m2!3d24.4402965!4d39.6629878!16s%2Fg%2F11ln_x5kwh?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D", icon: MapPin },
		{ name: "Linktree", url: "https://linktr.ee/Tomah.sa?ltsid=ff5d7851-1331-4983-a8a8-66214bceee5f", icon: LinkIcon },
	];

	const navigationLinks = [
		{ label: t("navbar.home"), path: "/", icon: Globe },
		{ label: t("navbar.about"), path: "/about", icon: Heart },
		{ label: t("navbar.menu"), path: "/menu", icon: Star },
		{ label: t("navbar.partners"), path: "/partners", icon: LinkIcon },
		{ label: t("navbar.contact"), path: "/contact", icon: Mail },
	];



	return (
		<footer dir={i18n.language === "ar" ? "rtl" : "ltr"} className="w-full">
			{/* Mobile Layout (default) */}
			<div className="bg-gray-100 text-gray-800 pt-8 pb-4 px-2 border-t border-gray-200 lg:hidden">
				<div className="max-w-2xl mx-auto flex flex-col gap-4">
					{/* Brand and Social */}
					<div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center gap-2">
						<img src={logo} alt="To'mah Logo" className="w-14 h-14 rounded-full object-cover border border-gray-300 mb-1" />
						<span className="font-bold text-base text-center">{t("navbar.brand")}</span>
						<div className="grid grid-cols-4 gap-3 mt-2">
							{socialPlatforms.map((social, idx) => (
								<a
									key={idx}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.name}
									className="bg-gray-50 border border-gray-200 rounded-full p-2 flex items-center justify-center hover:bg-gray-200 transition"
									style={{ width: 36, height: 36 }}
								>
									<social.icon className="w-5 h-5 text-primary" />
								</a>
							))}
						</div>
					</div>

					{/* Quick Links and Contact Info in a grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
						{/* Quick Links */}
						<div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2 items-center">
							<h3 className="font-semibold text-primary mb-2 text-center">{t("footer.quick_links")}</h3>
							{navigationLinks.map((link, idx) => (
								<Link
									key={idx}
									to={link.path}
									className={`flex px-3 py-2 rounded hover:bg-gray-200 transition w-full justify-center items-center gap-2 ${i18n.language === "ar" ? "flex-row-reverse justify-end" : "flex-row justify-center"}`}
								>
									{ i18n.language === "ar" ? (
										<>
											<span>{link.label}</span>
											<link.icon className="w-5 h-5 text-primary" />
										</>
									) : (
										<>
											<link.icon className="w-5 h-5 text-primary" />
											<span>{link.label}</span>
										</>
									)}
								</Link>
							))}
						</div>

						{/* Contact Info */}
						<div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3 items-center">
							<h3 className="font-semibold text-primary mb-2 text-center">{t("footer.contact")}</h3>
							<div className="flex items-center gap-2 text-xs text-gray-600">
								<MapPin className="w-5 h-5 text-primary flex-shrink-0" />
								<span className="text-center">{t("footer.address")}</span>
							</div>
							<div className="flex items-center gap-2 text-xs text-gray-600">
								<Phone className="w-5 h-5 text-primary flex-shrink-0" />
								<span dir={i18n.language === "ar" ? "ltr" : undefined} style={i18n.language === "ar" ? { unicodeBidi: "bidi-override" } : {}} className="text-center">
									{t("footer.phone")}
								</span>
							</div>
							<div className="flex items-center gap-2 text-xs text-gray-600">
								<Clock className="w-5 h-5 text-primary flex-shrink-0" />
								<span className="text-center">{t("footer.hours")}</span>
							</div>
							<div className="flex items-start gap-2 text-xs text-gray-600">
								<Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
								<span className="text-center break-words">{t("footer.email")}</span>
							</div>
						</div>
					</div>

					{/* Bottom */}
					<div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-200 pt-3 mt-3 text-xs bg-primary w-full px-2 py-3 text-white rounded-2xl shadow mt-4">
						<div className="flex items-center gap-2">
							<span>© {new Date().getFullYear()} {t("footer.rights")}</span>
							<Heart className="w-4 h-4 text-amber-400" />
						</div>
						{/* Legal buttons removed for mobile */}
					</div>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden lg:block relative overflow-hidden bg-gray-100 text-gray-800 border-t border-gray-200">
				<div className="relative z-10">
					{/* Main Content */}
					<div className="w-full px-20 py-20">
						<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
							{/* Brand Section */}
							<div className="lg:col-span-2 space-y-8">
								<div className="relative group">
									<div className="relative bg-white rounded-3xl p-8 border border-gray-200">
										<div className="flex items-center space-x-6 mb-6">
											<div className="relative">
												<img
													src={logo}
													alt="To'mah Logo"
													className="relative w-24 h-24 rounded-full object-cover ring-2 ring-primary/20"
												/>
											</div>
											<div>
												<h2 className="text-4xl font-bold text-gray-800">
													{t("navbar.brand")}
												</h2>
												<div className="flex space-x-2 mt-2">
													{Array.from({ length: 5 }).map((_, i) => (
														<Star key={i} className="w-4 h-4 text-primary fill-current" />
													))}
												</div>
											</div>
										</div>

										<p className="leading-relaxed mb-6 text-gray-700 text-2xl">
											{t("footer.aside.description")}
										</p>

										{/* Contact Info */}
										<div className="space-y-5">
											{[
												{ icon: MapPin, text: t("footer.address") },
												{ icon: Phone, text: t("footer.phone"), isPhone: true },
												{ icon: Clock, text: t("footer.hours") },
												{ icon: Mail, text: t("footer.email") },
											].map((contact, index) => (
												<div
													key={index}
													className="flex items-center space-x-5 transition-colors duration-300 text-gray-800 text-xl"
												>
													<contact.icon className="w-8 h-8 text-primary bg-white rounded-full p-1 border border-gray-200" />
													<span
														style={{ fontSize: "16px" }}
														dir={i18n.language === "ar" && contact.isPhone ? "ltr" : undefined}
														{...(i18n.language === "ar" && contact.isPhone ? { style: { unicodeBidi: "bidi-override", fontSize: "16px" } } : {})}
													>
														{contact.text}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>

<div className="space-y-8">
	<h3 className={`text-lg font-bold relative text-primary ${i18n.language === "ar" ? "text-right" : "text-left"}`}>
		{t("footer.quick_links")}
		<div className={`absolute -bottom-2 ${i18n.language === "ar" ? "right-0" : "left-0"} w-8 h-1 bg-primary rounded-full`}></div>
	</h3>
	<nav className={`flex flex-col gap-2 w-full`}>
		{navigationLinks.map((link, index) => (
			<Link
				key={index}
				to={link.path}
				className={`group flex items-center transition-all duration-300 p-1 rounded-lg hover:bg-gray-200 text-gray-800 text-base ${i18n.language === "ar" ? "flex-row-reverse justify-end gap-x-2" : "flex-row justify-start gap-x-2"}`}
			>
				{ i18n.language === "ar" ? (
					<>
						<ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 text-primary bg-white rounded-full p-1 border border-gray-200" />
						<span>{link.label}</span>
						<link.icon className="w-5 h-5 text-primary bg-white rounded-full p-1 border border-gray-200" />
					</>
				) : (
					<>
						<link.icon className="w-5 h-5 text-primary bg-white rounded-full p-1 border border-gray-200" />
						<span>{link.label}</span>
						<ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary bg-white rounded-full p-1 border border-gray-200" />
					</>
				)}
			</Link>
		))}
	</nav>
</div>

							{/* Social Media */}
							<div className="lg:col-span-1 space-y-8">
								<h3 className={`text-xl font-bold relative text-primary ${i18n.language === "ar" ? "text-right" : "text-left"}`}>
									{t("footer.follow_us")}
									<div className={`absolute -bottom-2 ${i18n.language === "ar" ? "right-0" : "left-0"} w-8 h-1 bg-primary rounded-full`}></div>
								</h3>
								<div className={`grid grid-cols-4 gap-3 ${i18n.language === "ar" ? "justify-end items-end" : "justify-start items-start"}`}>
									{socialPlatforms.map((social, index) => (
										<a
											key={index}
											href={social.url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={social.name}
											className="group relative overflow-hidden bg-white rounded-2xl p-2 border border-gray-200 hover:border-primary transition-all duration-500 hover:scale-105 flex items-center justify-center hover:shadow-lg"
										>
											<social.icon className="relative z-10 mx-auto text-primary" style={{ width: "1.2em", height: "1.2em" }} />
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* Bottom Section */}
					<div className="border-t border-gray-200 bg-primary w-full px-4 py-4 rounded-b-lg">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-white max-w-6xl mx-auto">
							<div className="flex items-center gap-2">
								<span>© {new Date().getFullYear()} {t("footer.rights")}</span>
								<Heart className="w-4 h-4 text-amber-400" />
							</div>
							<div className="flex gap-3">
								{["terms", "privacy", "cookie"].map((item) => (
									<button
										key={item}
										className="hover:underline text-white"
									>
										{t(`footer.legal.${item}`)}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;