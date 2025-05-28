import SectionWrapper from "./sectionWrapper";
import img1 from "../../assets/gallery/first.jpg";
import img2 from "../../assets/gallery/second.jpg";
import img3 from "../../assets/gallery/third.jpg";
import img4 from "../../assets/gallery/forth.jpg";
import img5 from "../../assets/gallery/fifth.jpg";
import img6 from "../../assets/gallery/sixth.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const images = [img1, img2, img3, img6, img5, img4];

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

  const prevSlide = () => setActive(active === 0 ? images.length - 1 : active - 1);
  const nextSlide = () => setActive(active === images.length - 1 ? 0 : active + 1);

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
      <SectionWrapper className="bg-transaprent">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("gallery_and_category")}
        </h2>
        <div className="relative w-full max-w-md mx-auto">
          <div className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-md">
            <img
              src={images[active]}
              alt={t("gallery_and_category.dish_alt", { number: active + 1 })}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100/80 hover:bg-gray-200 text-sm text-gray-700  shadow transition"
            aria-label="Previous Image"
          >
            &#8592;
          </button>
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100/80 hover:bg-gray-200 text-lg text-gray-700 p-2 rounded-full shadow transition"
            aria-label="Next Image"
          >
            &#8594;
          </button>
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-3 h-3 rounded-full ${active === idx ? "bg-yellow-300" : "bg-gray-300"
                  } transition`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </SectionWrapper>
    </>
  );
}
