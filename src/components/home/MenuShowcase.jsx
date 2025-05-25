// components/MenuShowcase.jsx
import SectionWrapper from "./SectionWrapper";
import meal1 from "../../assets/meal1.JPG";
import meal2 from "../../assets/meal2.JPG";
import meal3 from "../../assets/meal3.JPG";
import meal4 from "../../assets/meal4.JPG";
import view from "../../assets/wall.jpeg";
import products from "../../service/data"; // Adjust the path if needed
import { useTranslation } from "react-i18next";

export default function MenuShowcase() {
  const { t, i18n } = useTranslation();
  const showcaseProducts = products.slice(0, 4);

  return (
    <>
      {/* Order Now Section */}
      <SectionWrapper className="bg-transaprent">
        <h2 className="text-4xl font-extrabold uppercase mb-4 text-center">
          {t("menu_showcase.order_now")}
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          {t("menu_showcase.order_now_desc")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {showcaseProducts.map((product) => (
            <div key={product.id} className="group bg-gray-50 rounded-md shadow-md overflow-hidden relative">
              <div className="relative overflow-hidden">
                <img
                  src={product.image || meal1}
                  alt={i18n.language === "ar" ? product.name_ar : product.name_en}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-start">
                  <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">*</span>
                  <span className="transition-all duration-100 group-hover:translate-x-1">
                    {t("menu_showcase.add_to_cart")}
                  </span>
                </button>
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {i18n.language === "ar" ? product.name_ar : product.name_en}
                </h3>
                <p className="text-gray-600 font-medium">
                  {product.price} {t("menu_card.currency")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Warm Section */}
      <SectionWrapper className="bg-transaprent">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full ${i18n.language === "ar" ? "md:flex-row-reverse" : ""}`}>
          {i18n.language === "ar" ? (
            <>
              <div className="text-center md:text-right">
                <h2 className="text-6xl font-bold mb-4">
                  {t("menu_showcase.experience_title")}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t("menu_showcase.experience_desc")}
                </p>
                <a
                  href="https://tomah.sa/"
                  className="group relative inline-flex items-center justify-center bg-black text-white px-6 py-3 text-lg font-semibold transition duration-300"
                >
                  <span className="absolute right-3 text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    *
                  </span>
                  <span className="group relative group-hover:translate-x-1">
                    {t("menu_showcase.book_table")}
                  </span>
                </a>
              </div>
              <div>
                <img
                  src={view}
                  alt="Delicious food"
                  className="w-full h-200 rounded-lg shadow-lg"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  src={view}
                  alt="Delicious food"
                  className="w-full h-200 rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-6xl font-bold mb-4">
                  {t("menu_showcase.experience_title")}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t("menu_showcase.experience_desc")}
                </p>
                <a
                  href="https://tomah.sa/"
                  className="group relative inline-flex items-center justify-center bg-black text-white px-6 py-3 text-lg font-semibold transition duration-300"
                >
                  <span className="absolute left-3 text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    *
                  </span>
                  <span className="group relative group-hover:translate-x-1">
                    {t("menu_showcase.book_table")}
                  </span>
                </a>
              </div>
            </>
          )}
        </div>
      </SectionWrapper>

      {/* Grilled Section */}
      <SectionWrapper className="bg-transaprent">
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i18n.language === "ar" ? "md:flex-row-reverse" : ""}`}>
          {/* For AR: Content right, image left. For EN: Content left, image right */}
          {i18n.language === "ar" ? (
            <>
              {/* Image */}
              <div>
                <img
                  src={meal4}
                  alt="Delicious food"
                  className="w-full h-auto rounded-t-full rounded-b-full shadow-lg"
                />
              </div>
              {/* Content */}
              <div className="text-center md:text-right">
                <h2 className="text-5xl font-extrabold mb-10">{t("menu_showcase.grilled_menu")}</h2>
                <div className="mb-8">
                  <div className="flex flex-col items-end md:items-end">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.beef_joints")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`75 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.beef_joints_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex flex-col items-end md:items-end">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.tomah_kebab")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`73 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.tomah_kebab_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex flex-col items-end md:items-end">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.tahini_kebab")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`73 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.tahini_kebab_desc")}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-extrabold mb-10">{t("menu_showcase.grilled_menu")}</h2>
                <div className="mb-8">
                  <div className="flex flex-col items-start md:items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.beef_joints")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`75 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.beef_joints_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex flex-col items-start md:items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.tomah_kebab")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`73 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.tomah_kebab_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex flex-col items-start md:items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.tahini_kebab")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`73 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.tahini_kebab_desc")}</p>
                </div>
              </div>
              {/* Image */}
              <div>
                <img
                  src={meal4}
                  alt="Delicious food"
                  className="w-full h-auto rounded-t-full rounded-b-full shadow-lg"
                />
              </div>
            </>
          )}
        </div>
      </SectionWrapper>

      {/* Dessert Section */}
      <SectionWrapper className="bg-transparent">
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i18n.language === "ar" ? "" : "md:flex-row-reverse"}`}>
          {/* For AR: Content left, image right. For EN: Content right, image left */}
          {i18n.language === "ar" ? (
            <>
              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-extrabold mb-10">{t("menu_showcase.dessert_menu")}</h2>
                <div className="mb-8">
                  <div className="flex flex-col items-start md:items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.roqaq")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`25 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.roqaq_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex flex-col items-start md:items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.cream_caramel")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`20 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.cream_caramel_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex flex-col items-start md:items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.um_ali")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`20 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.um_ali_desc")}</p>
                </div>
              </div>
              {/* Image */}
              <div>
                <img
                  src={meal3}
                  alt="Delicious food"
                  className="w-full h-auto rounded-t-full rounded-b-full shadow-lg"
                />
              </div>
            </>
          ) : (
            <>
              {/* Image */}
              <div>
                <img
                  src={meal3}
                  alt="Delicious food"
                  className="w-full h-auto rounded-t-full rounded-b-full shadow-lg"
                />
              </div>
              {/* Content */}
              <div className="text-center md:text-right">
                <h2 className="text-5xl font-extrabold mb-10">{t("menu_showcase.dessert_menu")}</h2>
                <div className="mb-8">
                  <div className="flex flex-col items-end md:items-end">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.roqaq")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`25 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.roqaq_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex flex-col items-end md:items-end">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.cream_caramel")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`20 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.cream_caramel_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex flex-col items-end md:items-end">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-black mb-1">{t("menu_showcase.um_ali")}</h3>
                      <span className="h-0.5 w-12 bg-primary mx-2"></span>
                      <span className="font-semibold">{`20 ${t("menu_card.currency")}`}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{t("menu_showcase.um_ali_desc")}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
