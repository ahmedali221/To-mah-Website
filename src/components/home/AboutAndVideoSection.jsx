import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./sectionWrapper";
import about from "../../assets/about.png";
import story from "../../assets/Story2.jpg";
import cover from "../../assets/AboutImages/COVER.jpg";
import intro from "../../assets/AboutImages/intro.mp4";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AboutAndVideoSection() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SectionWrapper className="bg-gradient-to-b from-white to-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="px-4 md:px-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("home.about.title")}
          </h2>

          <p className="mb-8 text-lg md:text-xl leading-relaxed">
            {t("home.about.description")}
          </p>

          {/* Idea Section */}
          <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">
              {t("home.about.idea_section.heading")}
            </h3>
            <p className="text-gray-600 mt-2">
              {t("home.about.idea_section.hijri")} — {t("home.about.idea_section.gregorian")}
            </p>
          </div>

          {/* Opening Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">
              {t("home.about.opening_section.heading")}
            </h3>
            <p className="text-gray-600 mt-2">
              {t("home.about.opening_section.hijri")} — {t("home.about.opening_section.gregorian")}
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block px-10 py-4 text-base font-semibold bg-white text-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            {t("home.about.button")}
          </Link>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[300px] md:w-[400px] mx-auto">
            <img
              src={story}
              alt="about"
              className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[350px] object-cover"
            />
            <motion.div
              className="absolute -bottom-4 right-4 text-white p-4 rounded-xl bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="text-xl md:text-2xl font-bold">
                {t("vision.years")}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video Banner */}
      {!isMobile && (
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer max-w-5xl mx-auto"
            onClick={() => setIsPlaying(true)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={cover}
              alt={t("home.video.cover_alt", "Video Cover")}
              className="w-full h-auto object-cover"
            />
            <motion.button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 text-white p-8 rounded-full z-10 hover:bg-black/60 transition-all backdrop-blur-sm"
              aria-label={t("home.video.play_button", "Play Video")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Modal */}
          {isPlaying && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-6xl mx-auto px-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="absolute -top-14 right-4 text-white text-4xl z-50 hover:text-gray-300"
                  onClick={() => setIsPlaying(false)}
                  aria-label="Close Video"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
                <div className="aspect-video">
                  <video
                    src={intro}
                    autoPlay
                    controls
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full rounded-xl shadow-2xl"
                  ></video>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </SectionWrapper>
  );
}