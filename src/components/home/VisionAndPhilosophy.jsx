// components/VisionAndPhilosophy.jsx
import SectionWrapper from "./SectionWrapper";
import goals from "../../assets/goals.png";
import vision from "../../assets/vision.png";
import {
  HeartIcon, SparklesIcon, StarIcon, UserGroupIcon,
  GlobeAltIcon, LightBulbIcon, ClockIcon, ShieldCheckIcon, TruckIcon
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function VisionAndPhilosophy() {
  const { t } = useTranslation();

  return (
    <>
      {/* Vision & Goals */}
      <SectionWrapper className="bg-transaprent">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative px-8">{t("home.vision.title")}</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-center">
          {/* Text */}
          <div className="order-1 lg:order-2 mb-12 lg:mb-0 space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-transaprent rounded-lg p-2 md:p-3 shadow-md">
                <GlobeAltIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.vision.heritage.title")}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t("home.vision.heritage.description")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-transaprent rounded-lg p-2 md:p-3 shadow-md">
                <LightBulbIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.vision.innovation.title")}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t("home.vision.innovation.description")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-transaprent rounded-lg p-2 md:p-3 shadow-md">
                <UserGroupIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.vision.community.title")}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t("home.vision.community.description")}</p>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className="order-2 lg:order-1 mt-8 lg:mt-0 flex justify-center relative h-64 sm:h-80 md:h-96 lg:h-[30rem]">
            <div className="relative w-full h-full">
              <img
                src={goals}
                alt={t("home.vision.image_alt")}
                className="rounded-lg shadow-2xl w-full h-full object-contain absolute top-0 left-0 z-10"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
              />
              <img
                src={vision}
                alt={t("home.vision.image_alt")}
                className="rounded-lg shadow-xl w-4/5 h-4/5 object-contain absolute bottom-0 right-0 z-20 translate-x-4 md:translate-x-8 lg:translate-x-12 translate-y-4 md:translate-y-8 lg:translate-y-12"
                style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.10)" }}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy Section */}
      <SectionWrapper className="bg-transaprent ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative px-8">{t("home.values.title")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl bg-white">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4">
              <HeartIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.values.quality.title")}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t("home.values.quality.description")}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl bg-white">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4">
              <SparklesIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.values.tradition.title")}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t("home.values.tradition.description")}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl bg-white">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4">
              <StarIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{t("home.values.service.title")}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t("home.values.service.description")}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper className="bg-transaprent">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative px-8">{t("home.features.title")}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3">
              <SparklesIcon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1">{t("home.features.quality.title")}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t("home.features.quality.description")}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3">
              <ClockIcon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1">{t("home.features.service.title")}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t("home.features.service.description")}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3">
              <ShieldCheckIcon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1">{t("home.features.hygiene.title")}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t("home.features.hygiene.description")}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3">
              <TruckIcon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1">{t("home.features.delivery.title")}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t("home.features.delivery.description")}</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
