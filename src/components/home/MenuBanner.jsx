// components/home/MenuBanner.jsx
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../../assets/newMenu.jpg";
import { useTranslation } from "react-i18next";

export default function MenuBanner() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Add handleClick function to navigate and scroll to top
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/menu");
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      className="relative w-full h-96 my-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h2
          className="text-2xl md:text-4xl mb-6"
          style={{ color: "white", fontWeight: "bold" }}
          initial={{ y: -30, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t("menu_banner.title")}
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/menu"
            onClick={handleClick}
            className="group bg-white text-black px-8 py-3 rounded-full text-sm md:text-base hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 shadow-md"
          >
            <motion.span
              className="text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              *
            </motion.span>
            <motion.span
              className="transform transition-transform duration-300 group-hover:translate-x-1"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              whileHover={{ scale: 1.05 }}
            >
              {t("menu_banner.button")}
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
