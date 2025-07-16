import AboutAndVideoSection from "../components/home/AboutAndVideoSection";
import MenuBanner from "../components/home/MenuBanner";
import PeopleSection from "../components/home/PeopleSection";
import MenuShowcase from "../components/home/MenuShowcase";
import GalleryAndCategoryScroll from "../components/home/GalleryAndCategoryScroll";
import VisionAndPhilosophy from "../components/home/VisionAndPhilosophy";
import HeroSlider from "../components/home/heroSlider";
import { useTranslation } from "react-i18next";
import artImg from "../assets/ELEMNT-TOMAH.png";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="main-bg overflow-x-hidden">
      <HeroSlider />
      <div className="bg-white overflow-hidden border-y border-gray-200">
        <div className="w-full h-10 flex items-center overflow-hidden">
          <div className="relative w-full h-full">
            <div className="animate-marquee-text flex whitespace-nowrap absolute left-0 top-0 h-full items-center">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="flex items-center gap-3 px-8 h-full">
                  <img src={artImg} alt="art" className="w-7 h-7 object-contain" />
                  <span className="text-2xl font-stretch-expanded text-gray-900 tracking-wide">{t(`toamahBanner`)}</span>
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i + 40} className="flex items-center gap-3 px-8 h-full">
                  <img src={artImg} alt="art" className="w-7 h-7 object-contain" />
                  <span className="text-2xl font-stretch-expanded text-gray-900 tracking-wide">{t(`toamahBanner`)}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AboutAndVideoSection />
      <VisionAndPhilosophy />
      <MenuBanner />

      <MenuShowcase />
      <PeopleSection />

      <style>
        {`
          @keyframes marquee-text {
            0% { transform: translateX(${isRTL ? '0' : '-50%'}); }
            100% { transform: translateX(${isRTL ? '-50%' : '0'}); }
          }
          @keyframes marquee-images {
            0% { transform: translateX(${isRTL ? '0' : '-50%'}); }
            100% { transform: translateX(${isRTL ? '-50%' : '0'}); }
          }
          .animate-marquee-text {
            animation: marquee-text 80s linear infinite;
          }
          .animate-marquee-images {
            animation: marquee-images 40s linear infinite; // changed from 80s to 40s
          }
        `}
      </style>
    </div>
  );
}