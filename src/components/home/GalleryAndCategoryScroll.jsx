import SectionWrapper from "./sectionWrapper";

import { useTranslation } from "react-i18next";



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


    </>
  );
}
