// components/VisionAndPhilosophy.jsx
import SectionWrapper from "./sectionWrapper";
import goals from "../../assets/vision.jpg";
import {
  HeartIcon, SparklesIcon, StarIcon, UserGroupIcon,
  GlobeAltIcon, LightBulbIcon, ClockIcon, ShieldCheckIcon, TruckIcon
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function VisionAndPhilosophy() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Vision Section */}
      <SectionWrapper className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("home.vision.title")}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t("home.vision.description")}
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Goals */}
      <SectionWrapper className="bg-transaprent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t("home.goals.title")}
          </h2>

          {/* Image - Now under title on mobile */}
          <div className="mb-8 lg:hidden">
            <img
              src={goals}
              alt={t("home.goals.image_alt")}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-center">
            {/* Text */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              <motion.div
                className="flex items-start gap-4"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-transaprent rounded-lg p-2 md:p-3 shadow-md">
                  <GlobeAltIcon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.goals.heritage.title")}</h3>
                  <p className="text-shadow-black text-sm md:text-base">{t("home.goals.heritage.description")}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 bg-transaprent rounded-lg p-2 md:p-3 shadow-md">
                  <LightBulbIcon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.goals.innovation.title")}</h3>
                  <p className="text-shadow-black text-sm md:text-base">{t("home.goals.innovation.description")}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 bg-transaprent rounded-lg p-2 md:p-3 shadow-md">
                  <UserGroupIcon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.goals.quality.title")}</h3>
                  <p className="text-shadow-black text-sm md:text-base">{t("home.goals.quality.description")}</p>
                </div>
              </motion.div>
            </div>

            {/* Image - Hidden on mobile, shown on desktop */}
            <div className="order-2 lg:order-1 hidden lg:block">
              <motion.img
                src={goals}
                alt={t("home.goals.image_alt")}
                className="rounded-lg shadow-2xl w-full h-[30rem] object-cover"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section - Animated 2-column grid */}
      <SectionWrapper className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("home.values.title")}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: SparklesIcon, key: "quality" },
              { icon: ClockIcon, key: "service" },
              { icon: ShieldCheckIcon, key: "hygiene" },
              { icon: TruckIcon, key: "delivery" }
            ].map(({ icon: Icon, key }) => (
              <motion.div
                key={key}
                className="bg-white border border-gray-100 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <Icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t(`home.features.${key}.title`)}
                </h3>
                <p className="text-sm text-shadow-black leading-relaxed">
                  {t(`home.features.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Features Section - Animated 2-column grid */}
      <SectionWrapper className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("home.features.title")}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: HeartIcon, key: "quality" },
              { icon: SparklesIcon, key: "tradition" },
              { icon: StarIcon, key: "service" }
            ].map(({ icon: Icon, key }) => (
              <motion.div
                key={key}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t(`home.values.${key}.title`)}
                </h3>
                <p className="text-shadow-black leading-relaxed">
                  {t(`home.values.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
