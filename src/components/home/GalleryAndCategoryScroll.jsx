import SectionWrapper from "./sectionWrapper";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import visitorsPhotos from "../../service/visitors/visitors";


const categories = [
  "appetizers", "main_dishes", "desserts", "drinks",
  "salads", "grills", "pasta", "snacks",
  "appetizers", "main_dishes", "desserts", "drinks",
  "salads", "grills", "pasta", "snacks",
  "appetizers", "main_dishes", "desserts", "drinks",
  "salads", "grills", "pasta", "snacks",
];

export default function GalleryAndCategoryScroll() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const prevSlide = () => setActive(active === 0 ? visitorsPhotos.length - 1 : active - 1);
  const nextSlide = () => setActive(active === visitorsPhotos.length - 1 ? 0 : active + 1);

  return (
    <>
      {/* Category Auto-scroll */}
      <div className="bg-transaprent py-3 overflow-hidden border">
        <div className="w-full h-20 whitespace-nowrap animate-scroll flex items-center gap-4 px-4">
          {categories.map((cat, idx, arr) => (
            <div key={idx} className="flex items-center text-lg font-semibold text-gray-800">
              <span className="px-3">{t(`categories.${cat}`)}</span>
              {idx < arr.length - 1 && <span className="text-yellow-500 text-xl px-2">*</span>}
            </div>
          ))}
        </div>
        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
        </style>
      </div>

      {/* Gallery Slider Section */}
      <SectionWrapper className="bg-transparent py-16 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("gallery_and_category")}
        </h2>
        <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
          {/* Image Container */}
          <div className="relative group rounded-2xl overflow-hidden shadow-xl bg-white p-2 h-[600px] flex items-center justify-center w-full">
            <img
              src={visitorsPhotos[active].image}
              alt={visitorsPhotos[active].name}
              className="w-full h-[500px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100/80 hover:bg-gray-200 text-lg text-gray-700 p-2 rounded-full shadow transition z-10"
              aria-label="Previous Image"
            >
              &#8592;
            </button>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100/80 hover:bg-gray-200 text-lg text-gray-700 p-2 rounded-full shadow transition z-10"
              aria-label="Next Image"
            >
              &#8594;
            </button>
          </div>
          {/* Name Below Image */}
          <div className="w-full mt-6">
            <p className="text-center font-bold text-amber-800 text-xl">{visitorsPhotos[active].name}</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
