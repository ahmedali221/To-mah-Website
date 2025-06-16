// components/home/AboutAndVideoSection.jsx
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
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("home.about.title")}
          </h2>

          <p className="mb-6 text-gray-600 text-base md:text-lg leading-relaxed">
            {t("home.about.description")}
          </p>

          {/* Idea Section */}
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">
              {t("home.about.idea_section.heading")}
            </h3>
            <p className="text-gray-500">
              {t("home.about.idea_section.hijri")} — {t("home.about.idea_section.gregorian")}
            </p>
          </div>

          {/* Opening Section */}
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">
              {t("home.about.opening_section.heading")}
            </h3>
            <p className="text-gray-500">
              {t("home.about.opening_section.hijri")} — {t("home.about.opening_section.gregorian")}
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block px-8 py-3 text-sm md:text-base bg-gray-200 rounded-md hover:bg-gray-500 hover:text-red transition-colors duration-300">
            {t("home.about.button")}
          </Link>
        </motion.div>


        <motion.div
          className="relative mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={story}
            alt="about"
            className="rounded-full shadow-2xl w-full h-80 md:w-96 md:h-96 object-cover"
          />
          <motion.div
            className="absolute -bottom-2 -left-2 text-white p-3 rounded-lg bg-black/70"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="text-lg md:text-xl font-bold">
              {t("home.vision.years", "10+ Years")}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Banner */}

      {!isMobile && (
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer max-w-4xl mx-auto"
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
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 text-white p-6 rounded-full z-10 hover:bg-black/50 transition-all"
              aria-label={t("home.video.play_button", "Play Video")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Modal */}
          {isPlaying && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-5xl mx-auto px-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="absolute -top-12 right-4 text-white text-4xl z-50 hover:text-gray-300"
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
                    className="w-full h-full rounded-lg"
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
