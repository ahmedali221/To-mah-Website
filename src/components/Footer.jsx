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
import { FaTiktok, FaXTwitter } from "react-icons/fa6"; // TikTok icon from react-icons

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
			name: "X",
			url: "https://x.com/Tomah_sa",
			icon: FaXTwitter,
			gradient: "from-black to-gray-700",
			shadow: "shadow-gray-700/25",
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
		<footer dir={i18n.language === "ar" ? "rtl" : "ltr"} className="relative overflow-hidden w-full">
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
				{/* Main Content - removed max-w-7xl and reduced padding */}
				<div className="w-full px-20 py-20">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
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
												className="relative w-24 h-24 rounded-full object-cover ring-2 ring-primary-dark/30"
											/>
										</div>
										<div>
											<h2 className="text-4xl font-bold text-white" style={{ color: "#f0f0f0" }}>
												{t("navbar.brand")}
											</h2>
											<div className="flex space-x-2 mt-2">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star key={i} className="w-4 h-4 text-white fill-current" />
												))}
											</div>
										</div>
									</div>

									<p className="leading-relaxed mb-6 text-white text-2xl">
										{t("footer.aside.description")}
									</p>

									{/* Contact Info */}
									<div className="space-y-5">
										{[
											{ icon: MapPin, text: t("footer.address") },
											{ icon: Phone, text: t("footer.phone") },
											{ icon: Mail, text: t("footer.email") },
											{ icon: Clock, text: t("footer.hours") },
										].map((contact, index) => (
											<div
												key={index}
												className="flex items-center space-x-5 transition-colors duration-300 text-white text-xl"
											>
												<contact.icon className="w-8 h-8 text-primary bg-white rounded-full p-1" />
												<span style={{ fontSize: "24px" }}>{contact.text}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Navigation */}
						<div className="space-y-8">
							<h3 className="text-xl font-bold relative" style={{ color: "#f0f0f0" }}>
								{t("footer.quick_links")}
								<div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-dark rounded-full"></div>
							</h3>
							<nav className="flex flex-wrap gap-4 justify-center">
								{navigationLinks.map((link, index) => (
									<Link
										key={index}
										to={link.path}
										className="group flex items-center space-x-2 transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 text-white text-lg"
									>
										<link.icon className="w-6 h-6 text-primary bg-white rounded-full p-1" />
										<span style={{ color: "White" }}>{link.label}</span>
										<ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary bg-white rounded-full p-1" />
									</Link>
								))}
							</nav>
						</div>

						{/* Services */}
						<div className="space-y-8">
							<h3 className="text-3xl font-bold relative " style={{ color: "#f0f0f0" }}>
								{t("footer.services_title")}
								<div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-dark rounded-full"></div>
							</h3>
							<div className="space-y-5">
								{servicesList.map((service, index) => (
									<div
										key={index}
										className="group flex items-center space-x-5 transition-all duration-300 p-4 rounded-lg hover:bg-primary/10 text-white text-2xl"
									>
										<service.icon className="w-7 h-7 text-primary bg-white rounded-full p-1" />
										<span style={{ fontSize: "32px" }}>{service.name}</span>
									</div>
								))}
							</div>
						</div>

						{/* Social Media */}
						<div className="lg:col-span-1 space-y-8">
							<h3 className="text-3xl font-bold relative" style={{ color: "#f0f0f0" }}>
								{t("footer.follow_us")}
								<div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-dark rounded-full"></div>
							</h3>
							<div className="flex flex-wrap gap-4 justify-center">
								{socialPlatforms.map((social, index) => (
									<a
										key={index}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.name}
										className={`group relative overflow-hidden bg-white rounded-2xl p-3 border border-primary/20 hover:border-primary transition-all duration-500 hover:scale-105 flex items-center justify-center ${social.shadow} hover:shadow-lg`}
										style={{ fontSize: "0.8rem" }}
									>
										<div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
										<social.icon className="relative z-10 mx-auto text-primary" style={{ width: "1.5em", height: "1em" }} />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section - removed max-w-7xl and reduced padding */}
				<div className="border-t border-primary-dark bg-primary-dark/80 backdrop-blur-sm">
					<div className="w-full px-4 py-4">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div className="flex items-center space-x-6">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
										<span className="font-bold text-lg text-white">©</span>
									</div>
									<span className="text-2xl font-semibold text-white">
										{new Date().getFullYear()}
									</span>
								</div>
								<p className="text-xl text-white">
									{t("footer.rights")}
								</p>
								<Heart className="w-7 h-7 text-primary bg-white rounded-full p-1 animate-pulse fill-current" />
							</div>

							<div className="flex space-x-10">
								{["terms", "privacy", "cookie"].map((item) => (
									<button
										key={item}
										className="group relative font-medium text-white text-xl"
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