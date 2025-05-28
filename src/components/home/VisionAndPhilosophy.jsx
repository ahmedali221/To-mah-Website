// components/VisionAndPhilosophy.jsx
import SectionWrapper from "./sectionWrapper";
import goals from "../../assets/vision.jpg";
import vision from "../../assets/reserve.jpg";
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
      <SectionWrapper className="bg-transaprent ">
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
            <div className="relative w-full lg:h-[30rem]">
              <img
                src={goals}
                alt={t("home.vision.image_alt")}
                className="rounded-lg shadow-2xl w-full h-50 object-contain absolute top-0 left-0 z-10"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
              />
              {/* <img
                src={vision}
                alt={t("home.vision.image_alt")}
                className="rounded-lg shadow-xl w-4/5 h-4/5 object-contain absolute bottom-0 right-0 z-20 translate-x-4 md:translate-x-8 lg:translate-x-12 translate-y-4 md:translate-y-8 lg:translate-y-12"
                style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.10)" }}
              /> */}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section - Clean 4-column layout */}
      <SectionWrapper className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t("home.values.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: SparklesIcon, key: "quality" },
              { icon: ClockIcon, key: "service" },
              { icon: ShieldCheckIcon, key: "hygiene" },
              { icon: TruckIcon, key: "delivery" }
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="bg-white border border-gray-100 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <Icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t(`home.features.${key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`home.features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Features Section - Clean 3-column layout */}
      <SectionWrapper className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t("home.features.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HeartIcon, key: "quality" },
              { icon: SparklesIcon, key: "tradition" },
              { icon: StarIcon, key: "service" }
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t(`home.values.${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`home.values.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
