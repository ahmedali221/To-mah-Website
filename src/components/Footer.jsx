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
import { FaTiktok } from "react-icons/fa6"; // TikTok icon from react-icons

function Footer() {
	const { t, i18n } = useTranslation();

	const socialPlatforms = [
		{
			name: "Instagram",
			url: "https://www.instagram.com/tomah.sa/",
			icon: Instagram,
			gradient: "from-pink-500 to-yellow-400",
			shadow: "shadow-pink-500/25",
		},
		{
			name: "TikTok",
			url: "https://www.tiktok.com/@tomah_sa",
			icon: FaTiktok, // Use react-icons TikTok
			gradient: "from-black to-gray-700",
			shadow: "shadow-gray-700/25",
		},
		{
			name: "Twitter",
			url: "https://x.com/Tomah_sa",
			icon: Twitter,
			gradient: "from-sky-400 to-blue-600",
			shadow: "shadow-blue-500/25",
		},
		{
			name: "Facebook",
			url: "https://web.facebook.com/profile.php?id=61563929756017&_rdc=1&_rdr",
			icon: Facebook,
			gradient: "from-blue-600 to-indigo-700",
			shadow: "shadow-blue-600/25",
		},
		{
			name: "YouTube",
			url: "https://www.youtube.com/channel/UCLXAOmq4QkfUtHgD6dV_ryA",
			icon: Youtube,
			gradient: "from-red-500 to-red-700",
			shadow: "shadow-red-500/25",
		},
		{
			name: "TripAdvisor",
			url: "https://www.tripadvisor.com/Restaurant_Review-g298551-d28445172-Reviews-To_mah_Restaurant-Medina_Al_Madinah_Province.html",
			icon: Star,
			gradient: "from-green-500 to-emerald-600",
			shadow: "shadow-green-500/25",
		},
		{
			name: "Google Maps",
			url: "https://www.google.com/maps/place/%D8%B7%D9%8C%D8%B9%D9%85%D8%A9%E2%80%AD/@24.4402965,39.6629878,17z/data=!3m1!4b1!4m6!3m5!1s0x15bd95535e8cfba3:0x6c20f3e111d4579b!8m2!3d24.4402965!4d39.6629878!16s%2Fg%2F11ln_x5kwh?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
			icon: MapPin,
			gradient: "from-primary to-primary-dark",
			shadow: "shadow-primary/25",
		},
		{
			name: "Linktree",
			url: "https://linktr.ee/Tomah.sa?ltsid=ff5d7851-1331-4983-a8a8-66214bceee5f",
			icon: LinkIcon,
			gradient: "from-lime-400 to-green-500",
			shadow: "shadow-lime-500/25",
		},
	];

	const navigationLinks = [
		{ label: t("navbar.home"), path: "/", icon: Globe },
		{ label: t("navbar.about"), path: "/about", icon: Heart },
		{ label: t("navbar.menu"), path: "/menu", icon: Star },
		{ label: t("navbar.partners"), path: "/partners", icon: LinkIcon },
		{ label: t("navbar.contact"), path: "/contact", icon: Mail },
	];

	const servicesList = [
		{ name: t("footer.services.branding"), icon: Sparkles },
		{ name: t("footer.services.design"), icon: Star },
		{ name: t("footer.services.marketing"), icon: Globe },
		{ name: t("footer.services.advertisement"), icon: ExternalLink },
	];

	return (
		<footer dir={i18n.language === "ar" ? "rtl" : "ltr"} className="relative overflow-hidden">
			{/* Dynamic Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-primary"></div>
			</div>

			{/* Floating Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{Array.from({ length: 15 }).map((_, i) => (
					<div
						key={i}
						className="absolute animate-bounce bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-full backdrop-blur-sm"
						style={{
							left: `${10 + (i * 7)}%`,
							top: `${10 + (i * 5)}%`,
							width: `${16 + (i % 4) * 6}px`,
							height: `${16 + (i % 4) * 6}px`,
							animationDelay: `${i * 0.3}s`,
							animationDuration: `${3 + (i % 3)}s`,
						}}
					/>
				))}
			</div>

			<div className="relative z-10">
				{/* Main Content */}
				<div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

						{/* Brand Section */}
						<div className="lg:col-span-2 space-y-8">
							<div className="relative group">
								<div className="absolute -inset-4 bg-primary-dark/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

								<div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-primary-dark/20">
									<div className="flex items-center space-x-6 mb-6">
										<div className="relative">
											<div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full animate-spin-slow opacity-75"></div>
											<img
												src={logo}
												alt="To'mah Logo"
												className="relative w-20 h-20 rounded-full object-cover ring-2 ring-primary-dark/30"
											/>
										</div>
										<div>
											<h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent" style={{ color: "#7e845d" }}>
												{t("navbar.brand")}
											</h2>
											<div className="flex space-x-1 mt-2">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
												))}
											</div>
										</div>
									</div>

									<p className="leading-relaxed mb-6" style={{ color: "#7e845d", fontSize: "1.25em" }}>
										{t("footer.aside.description")}
									</p>

									{/* Contact Info */}
									<div className="space-y-4">
										{[
											{ icon: MapPin, text: t("footer.address") },
											{ icon: Phone, text: t("footer.phone") },
											{ icon: Mail, text: t("footer.email") },
											{ icon: Clock, text: t("footer.hours") },
										].map((contact, index) => (
											<div
												key={index}
												className="flex items-center space-x-4 transition-colors duration-300"
												style={{ color: "#7e845d", fontSize: "0.8em" }}
											>
												<contact.icon className="w-6 h-6" style={{ color: "#7e845d" }} />
												<span>{contact.text}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Navigation */}
						<div className="space-y-6">
							<h3 className=" font-bold relative" style={{ color: "#7e845d" }}>
								{t("footer.quick_links")}
								<div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-dark rounded-full"></div>
							</h3>
							<nav className="space-y-4">
								{navigationLinks.map((link, index) => (
									<Link
										key={index}
										to={link.path}
										className="group flex items-center space-x-4 transition-all duration-300 p-3 rounded-lg hover:bg-primary/10"
										style={{ color: "#7e845d", fontSize: "0.8em" }}
									>
										<link.icon className="w-7 h-7" style={{ color: "#7e845d" }} />
										<span>{link.label}</span>
										<ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
									</Link>
								))}
							</nav>
						</div>

						{/* Services */}
						<div className="space-y-6">
							<h3 className=" font-bold relative" style={{ color: "#7e845d" }}>
								{t("footer.services_title")}
								<div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-dark rounded-full"></div>
							</h3>
							<div className="space-y-4">
								{servicesList.map((service, index) => (
									<div
										key={index}
										className="group flex items-center space-x-4 transition-all duration-300 p-3 rounded-lg hover:bg-primary/10 cursor-pointer"
										style={{ color: "#7e845d", fontSize: "0.8em" }}
									>
										<service.icon className="w-7 h-7" style={{ color: "#7e845d" }} />
										<span>{service.name}</span>
									</div>
								))}
							</div>
						</div>

						{/* Social Media */}
						<div className="lg:col-span-1 space-y-6">
							<h3 className=" font-bold relative" style={{ color: "#7e845d" }}>
								{t("footer.follow_us")}
								<div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-dark rounded-full"></div>
							</h3>
							<div className="grid grid-cols-2 gap-6">
								{socialPlatforms.map((social, index) => (
									<a
										key={index}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.name}
										className={`group relative overflow-hidden bg-primary-lightest rounded-2xl p-7 border border-primary/20 hover:border-primary transition-all duration-500 hover:scale-105 flex items-center justify-center ${social.shadow} hover:shadow-lg`}
										style={{ fontSize: "2.5rem", color: "#7e845d" }}
									>
										<div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
										<social.icon className="relative z-10 mx-auto" style={{ color: "#7e845d" }} />
										{/* Shine effect */}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-primary-dark bg-primary-dark/80 backdrop-blur-sm">
					<div className="max-w-7xl mx-auto px-6 py-6 lg:px-8">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-2">
									<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
										<span className="font-bold text-sm" style={{ color: "#7e845d" }}>©</span>
									</div>
									<span className="text-xl font-semibold" style={{ color: "#7e845d" }}>
										{new Date().getFullYear()}
									</span>
								</div>
								<p className="text-lg" style={{ color: "#7e845d" }}>
									{t("footer.rights")}
								</p>
								<Heart className="w-5 h-5 text-red-400 animate-pulse fill-current" />
							</div>

							<div className="flex space-x-8">
								{["terms", "privacy", "cookie"].map((item) => (
									<button
										key={item}
										className="group relative font-medium"
										style={{ color: "#7e845d", fontSize: "1.1em" }}
									>
										{t(`footer.legal.${item}`)}
										<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Custom Styles */}
			<style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
		</footer>
	);
}

export default Footer;