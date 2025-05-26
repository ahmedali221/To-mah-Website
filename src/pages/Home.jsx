import AboutAndVideoSection from "../components/home/AboutAndVideoSection";
import MenuBanner from "../components/home/MenuBanner";
import PeopleSection from "../components/home/PeopleSection";
import MenuShowcase from "../components/home/MenuShowcase";
import GalleryAndCategoryScroll from "../components/home/GalleryAndCategoryScroll";
import VisionAndPhilosophy from "../components/home/VisionAndPhilosophy";
import HeroSlider from "../components/home/heroSlider";
import { useTranslation } from "react-i18next";


export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="main-bg">
      <HeroSlider />
      <div className="bg-white overflow-hidden border-y border-gray-200">
        <div className="w-full h-14 flex items-center">
          <div className="whitespace-nowrap animate-scroll-single px-4">
            <div className="text-2xl font-stretch-expanded text-gray-900 tracking-wide"> {/* Larger font */}
              {t(`toamahBanner`)}
            </div>
          </div>
        </div>

        {/* Animation style */}
        <style>
          {`
    @keyframes scroll-single {
      0% { transform: translateX(100vw); }
      100% { transform: translateX(-100%); }
    }
    .animate-scroll-single {
      display: inline-block;
      animation: scroll-single 15s linear infinite;
      padding-left: 100%; /* Ensures smooth entry */
    }
    .animate-scroll-single:hover {
      animation-play-state: paused; /* Pause on hover */
    }
    `}
        </style>
      </div>
      <AboutAndVideoSection />
      <MenuBanner />
      <MenuShowcase />
      <GalleryAndCategoryScroll />
      <VisionAndPhilosophy />
      <PeopleSection />
    </div>
  );
}
