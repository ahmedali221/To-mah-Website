/** @format */

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

function Footer() {
	const { t, i18n } = useTranslation();

	return (
		<footer dir={i18n.language === "ar" ? "rtl" : "ltr"} className="footer-wrapper">
			{/* Main Footer */}
			<div className="bg-primary-light text-primary relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.3)_0%,transparent_50%)]"></div>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(234,179,8,0.2)_0%,transparent_50%)]"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
						{/* Brand Column */}
						<div className="space-y-6 footer-brand lg:col-span-1">
							<div className="flex items-center space-x-3">
								<div className="relative">
									<img
										src={logo}
										alt="To'mah Logo"
										className="w-14 h-14 rounded-full object-cover shadow-lg ring-2 ring-amber-400/50 footer-logo"
									/>
									<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/20 to-transparent"></div>
								</div>
								<span className="text-2xl font-bold text-white tracking-wide">{t("navbar.brand")}</span>
							</div>
							<p className="text-gray-300 max-w-sm font-merienda leading-relaxed footer-description">
								{t("footer.aside.description")}
							</p>
						</div>

						{/* Quick Links */}
						<div className="footer-links-column">
							<h3 className="text-xl font-bold mb-6 text-white footer-heading relative">
								{t("footer.quick_links")}
								<div className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-400 rounded-full"></div>
							</h3>
							<ul className="space-y-3 footer-links">
								<li>
									<Link to="/" className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("navbar.home")}</span>
									</Link>
								</li>
								<li>
									<Link to="/about" className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("navbar.about")}</span>
									</Link>
								</li>
								<li>
									<Link to="/menu" className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("navbar.menu")}</span>
									</Link>
								</li>
								<li>
									<Link to="/partners" className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("navbar.partners")}</span>
									</Link>
								</li>
								<li>
									<Link to="/contact" className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("navbar.contact")}</span>
									</Link>
								</li>
							</ul>
						</div>

						{/* Services */}
						<div className="footer-links-column">
							<h3 className="text-xl font-bold mb-6 text-white footer-heading relative">
								{t("footer.services_title")}
								<div className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-400 rounded-full"></div>
							</h3>
							<ul className="space-y-3 footer-links">
								<li>
									<a className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 cursor-pointer">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("footer.services.branding")}</span>
									</a>
								</li>
								<li>
									<a className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 cursor-pointer">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("footer.services.design")}</span>
									</a>
								</li>
								<li>
									<a className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 cursor-pointer">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("footer.services.marketing")}</span>
									</a>
								</li>
								<li>
									<a className="footer-link group flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 cursor-pointer">
										<span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
										<span>{t("footer.services.advertisement")}</span>
									</a>
								</li>
							</ul>
						</div>

						{/* Social Media */}
						<div className="footer-social-section">
							<h3 className="text-xl font-bold mb-6 text-white footer-heading relative">
								{t("footer.follow_us")}
								<div className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-400 rounded-full"></div>
							</h3>
							<div className="flex flex-col gap-3 footer-social-icons">
								{/* First row */}
								<div className="flex flex-row justify-center gap-6">
									{/* Instagram */}
									<a
										href="https://www.instagram.com/tomah.sa/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Instagram"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											className="transition-colors duration-300 group-hover:text-white"
										>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.241 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.241-1.314-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C4.521 2.573 5.788 2.295 7.154 2.233 8.42 2.175 8.8 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769 2.297 6.049 2.284 6.459 2.284 12s.013 5.951.071 7.231c.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.058-1.28.071-1.69.071-7.231s-.013-5.951-.071-7.231c-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0z" />
											<path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
										</svg>
									</a>
									{/* TikTok */}
									<a
										href="https://www.tiktok.com/@tomah_sa"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="TikTok"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 256 256"
											width="32"
											height="32"
											fill="currentColor"
										>
											<g>
												<path
													d="M168 32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a56.06 56.06 0 0 0 56 56h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8h-24a80.09 80.09 0 0 1-80-80V32z"
													fill="#fff"
												/>
												<path
													d="M168 32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a56.06 56.06 0 0 0 56 56h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8h-24a80.09 80.09 0 0 1-80-80V32z"
													fill="#000"
												/>
												<path
													d="M104 80a56 56 0 1 0 56 56V32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a56.06 56.06 0 0 0 56 56h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8h-24a80.09 80.09 0 0 1-80-80V32z"
													fill="#25F4EE"
												/>
												<path
													d="M104 80a56 56 0 1 0 56 56V32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a56.06 56.06 0 0 0 56 56h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8h-24a80.09 80.09 0 0 1-80-80V32z"
													fill="#FE2C55"
												/>
											</g>
										</svg>
									</a>
									{/* X (Twitter) */}
									<a
										href="https://x.com/Tomah_sa"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="X (Twitter)"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											className="transition-colors duration-300 group-hover:text-white"
										>
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
									</a>
									{/* Facebook */}
									<a
										href="https://web.facebook.com/profile.php?id=61563929756017&_rdc=1&_rdr"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Facebook"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											className="transition-colors duration-300 group-hover:text-white"
										>
											<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
										</svg>
									</a>
								</div>
								{/* Second row */}
								<div className="flex flex-row justify-center gap-6">
									{/* YouTube */}
									<a
										href="https://www.youtube.com/channel/UCLXAOmq4QkfUtHgD6dV_ryA"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="YouTube"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											viewBox="0 0 24 24"
											className="transition-colors duration-300 group-hover:text-white"
										>
											<path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.163 3.5 12 3.5 12 3.5s-7.163 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.413 0 12 0 12s0 3.587.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.837 20.5 12 20.5 12 20.5s7.163 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.587 24 12 24 12s0-3.587-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
										</svg>
									</a>
									{/* TripAdvisor */}
									<a
										href="https://www.tripadvisor.com/Restaurant_Review-g298551-d28445172-Reviews-To_mah_Restaurant-Medina_Al_Madinah_Province.html"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="TripAdvisor"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="55"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="transition-colors duration-300 group-hover:text-white"
										>
											<path d="M12.006 4.295c-2.67 0-5.338 1.837-6.098 4.255l-.635 2.024-2.024-.635c1.585-3.552 5.073-6.019 9.057-6.019s7.472 2.467 9.057 6.019l-2.024.635-.635-2.024c-.779-2.418-3.428-4.255-6.098-4.255z" />
											<circle cx="12" cy="14" r="2" />
											<path d="M12 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
										</svg>
									</a>
									{/* Google Maps */}
									<a
										href="https://www.google.com/maps/place/%D8%B7%D9%8C%D8%B9%D9%85%D8%A9%E2%80%AD/@24.4402965,39.6629878,17z/data=!3m1!4b1!4m6!3m5!1s0x15bd95535e8cfba3:0x6c20f3e111d4579b!8m2!3d24.4402965!4d39.6629878!16s%2Fg%2F11ln_x5kwh?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Google Maps"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											viewBox="0 0 24 24"
											className="transition-colors duration-300 group-hover:text-white"
										>
											<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
										</svg>
									</a>
									{/* Linktree */}
									<a
										href="https://linktr.ee/Tomah.sa?ltsid=ff5d7851-1331-4983-a8a8-66214bceee5f"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Linktree"
										className="social-icon group relative p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-110"
										style={{ fontSize: "2rem" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											viewBox="0 0 24 24"
											className="transition-colors duration-300 group-hover:text-white"
										>
											<path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.285 0 .57-.122.734-.324l2.603-3.235 2.603 3.235c.163.202.448.324.734.324.524 0 .972-.38 1.052-.897 0-.162-.08-.323-.08-.486L13.04 12l3.531-3.066c.08-.163.08-.324.08-.486-.08-.517-.528-.897-1.052-.897-.285 0-.57.122-.734.324L12.262 10.11 9.659 7.875c-.163-.202-.448-.324-.734-.324-.524 0-.972.38-1.052.897 0 .162.08.323.08.486L10.484 12l-2.531 3.066z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="bg-primary  py-8 border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="flex items-center space-x-2">
							<span className="text-amber-400">©</span>
							<p className="font-merienda footer-copyright text-white">
								{new Date().getFullYear()} {t("footer.rights")}
							</p>
						</div>
						<div className="flex space-x-8 footer-legal-links">
							<a className="footer-legal-link hover:text-amber-400 transition-colors duration-300 cursor-pointer">
								{t("footer.legal.terms")}
							</a>
							<a className="footer-legal-link hover:text-amber-400 transition-colors duration-300 cursor-pointer">
								{t("footer.legal.privacy")}
							</a>
							<a className="footer-legal-link hover:text-amber-400 transition-colors duration-300 cursor-pointer">
								{t("footer.legal.cookie")}
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;