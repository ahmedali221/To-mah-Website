/** @format */

import { useTranslation } from "react-i18next";
import logo from "../assets/logo.webp";

function Footer() {
	const { t, i18n } = useTranslation();

	return (
		<>
			<footer
				className="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
				dir={i18n.language === "ar" ? "rtl" : "ltr"}>
				<nav>
					<h6 className="footer-title">{t("footer.services_title")}</h6>
					<a className="link link-hover">{t("footer.services.branding")}</a>
					<a className="link link-hover">{t("footer.services.design")}</a>
					<a className="link link-hover">{t("footer.services.marketing")}</a>
					<a className="link link-hover">
						{t("footer.services.advertisement")}
					</a>
				</nav>
				<nav>
					<h6 className="footer-title">{t("footer.company_title")}</h6>
					<a
						className="link link-hover"
						href="https://www.tripadvisor.com/Restaurant_Review-g298551-d28445172-Reviews-To_mah_Restaurant-Medina_Al_Madinah_Province.html"
						target="_blank"
						rel="noopener noreferrer">
						{t("footer.company.tripadvisor")}
					</a>
					<a
						className="link link-hover"
						href="https://www.youtube.com/channel/UCLXAOmq4QkfUtHgD6dV_ryA"
						target="_blank"
						rel="noopener noreferrer">
						{t("footer.company.youtube")}
					</a>
					<a
						className="link link-hover"
						href="https://www.google.com/maps/place/%D8%B7%D9%8C%D8%B9%D9%85%D8%A9%E2%80%AD/@24.4402965,39.6629878,17z/data=!3m1!4b1!4m6!3m5!1s0x15bd95535e8cfba3:0x6c20f3e111d4579b!8m2!3d24.4402965!4d39.6629878!16s%2Fg%2F11ln_x5kwh?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
						target="_blank"
						rel="noopener noreferrer">
						{t("footer.company.google_maps")}
					</a>
					<a
						className="link link-hover"
						href="https://linktr.ee/Tomah.sa?ltsid=ff5d7851-1331-4983-a8a8-66214bceee5f"
						target="_blank"
						rel="noopener noreferrer">
						{t("footer.company.linktree")}
					</a>
				</nav>
				<nav>
					<h6 className="footer-title">{t("footer.legal_title")}</h6>
					<a className="link link-hover">{t("footer.legal.terms")}</a>
					<a className="link link-hover">{t("footer.legal.privacy")}</a>
					<a className="link link-hover">{t("footer.legal.cookie")}</a>
				</nav>
			</footer>
			<footer
				className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4"
				dir={i18n.language === "ar" ? "rtl" : "ltr"}>
				<aside className="grid-flow-col items-center">
					<img
						src={logo}
						alt="To'mah Logo"
						className="w-10 h-10 rounded-full mr-2"
					/>
					<p>{t("footer.aside.description")}</p>
				</aside>
				<nav className="md:place-self-center md:justify-self-end">
					<div className="grid grid-flow-col gap-4">
						<a
							href="https://www.instagram.com/tomah.sa/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="fill-current">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.241 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.241-1.314-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C4.521 2.573 5.788 2.295 7.154 2.233 8.42 2.175 8.8 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769 2.297 6.049 2.284 6.459 2.284 12s.013 5.951.071 7.231c.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.058-1.28.071-1.69.071-7.231s-.013-5.951-.071-7.231c-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0z" />
								<path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
							</svg>
						</a>
						<a
							href="https://www.tiktok.com/@tomah_sa"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TikTok">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="fill-current">
								<path d="M12.004 2.003c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm2.5 13.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-1.38 1.12-2.5 2.5-2.5.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3.535c-1.14.232-2 1.242-2 2.465 0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5z" />
							</svg>
						</a>
						<a
							href="https://www.snapchat.com/add/tomah.sa"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Snapchat">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="fill-current">
								<path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8zm3.293-6.707a1 1 0 0 0-1.414 0l-.293.293V13a1 1 0 1 0-2 0v.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414zm-6.586 0a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414l-.293.293V13a1 1 0 1 0-2 0v.586l-.293-.293a1 1 0 0 0-1.414 0z" />
							</svg>
						</a>
						<a
							href="https://x.com/Tomah_sa"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="X (Twitter)">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="fill-current">
								<path d="M22.46 5.924c-.793.352-1.644.59-2.538.697a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.636 4.086A12.72 12.72 0 0 1 3.11 4.868a4.48 4.48 0 0 0 1.388 5.973 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.72 12.72 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.697z" />
							</svg>
						</a>
						<a
							href="https://web.facebook.com/profile.php?id=61563929756017&_rdc=1&_rdr"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="fill-current">
								<path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
							</svg>
						</a>
						<a
							href="https://linktr.ee/Tomah.sa?ltsid=ff5d7851-1331-4983-a8a8-66214bceee5f"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Linktree">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="fill-current">
								<path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
							</svg>
						</a>
					</div>
				</nav>
			</footer>
		</>
	);
}

export default Footer;
