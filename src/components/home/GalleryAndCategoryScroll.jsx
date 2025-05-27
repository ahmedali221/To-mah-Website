import SectionWrapper from "./sectionWrapper";
import img1 from "../../assets/gallery/first.jpg";
import img2 from "../../assets/gallery/second.jpg";
import img3 from "../../assets/gallery/third.jpg";
import img4 from "../../assets/gallery/forth.jpg";
import img5 from "../../assets/gallery/fifth.jpg";
import img6 from "../../assets/gallery/sixth.png";
import { useTranslation } from "react-i18next";

const categories = [
  "appetizers",
  "main_dishes",
  "desserts",
  "drinks",
  "salads",
  "grills",
  "pasta",
  "snacks",
  "appetizers",
  "main_dishes",
  "desserts",
  "drinks",
  "salads",
  "grills",
  "pasta",
  "snacks",
  "appetizers",
  "main_dishes",
  "desserts",
  "drinks",
  "salads",
  "grills",
  "pasta",
  "snacks",
];

export default function GalleryAndCategoryScroll() {
  const { t } = useTranslation();

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
        {/* Animation style */}
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

      {/* Gallery Section */}
      <SectionWrapper className="bg-transaprent">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("gallery_and_category.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[img1, img2, img3].map((src, i) => (
              <div key={i} className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-md">
                <img src={src} alt={t("gallery_and_category.dish_alt", { number: i + 1 })} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[img6, img5, img4].map((src, i) => (
              <div key={i + 3} className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-md">
                <img src={src} alt={t("gallery_and_category.dish_alt", { number: i + 4 })} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
