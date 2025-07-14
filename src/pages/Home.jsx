import AboutAndVideoSection from "../components/home/AboutAndVideoSection";
import MenuBanner from "../components/home/MenuBanner";
import PeopleSection from "../components/home/PeopleSection";
import MenuShowcase from "../components/home/MenuShowcase";
import GalleryAndCategoryScroll from "../components/home/GalleryAndCategoryScroll";
import VisionAndPhilosophy from "../components/home/VisionAndPhilosophy";
import HeroSlider from "../components/home/heroSlider";
import { useTranslation } from "react-i18next";
import artImg from "../assets/art.jpeg";


export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="main-bg overflow-x-hidden">
      <HeroSlider />
      <div className="bg-white overflow-hidden border-y border-gray-200">
        <div className="w-full h-10 flex items-center overflow-hidden">
          <div className="relative w-full h-full">
            <div className="animate-marquee flex whitespace-nowrap absolute left-0 top-0 h-full items-center">
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
            <style>
              {`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 80s linear infinite;
                }
              `}
            </style>
          </div>
        </div>
      </div>
      <AboutAndVideoSection />
      <VisionAndPhilosophy />
      <MenuBanner />
      {/* Sliding line of art.jpeg images */}
      <div className="w-full overflow-hidden my-2">
        <div className="relative w-full h-8">
          <div className="animate-marquee flex whitespace-nowrap absolute left-0 top-0 h-full items-center">
            {Array.from({ length: 30 }).map((_, i) => (
              <img
                key={i}
                src={artImg}
                alt="art"
                className="w-12 h-12 mx-6 object-contain inline-block"
              />
            ))}
            {/* Duplicate for seamless loop */}
            {Array.from({ length: 30 }).map((_, i) => (
              <img
                key={i + 30}
                src={artImg}
                alt="art"
                className="w-12 h-12 mx-6 object-contain inline-block"
              />
            ))}
          </div>
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
            `}
          </style>
        </div>
      </div>
      <MenuShowcase />
      <PeopleSection />
    </div>
  );
}
