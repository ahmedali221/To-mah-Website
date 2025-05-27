// components/MenuShowcase.jsx
import SectionWrapper from "./sectionWrapper";
import meal1 from "../../assets/meal1.JPG";
import meal3 from "../../assets/meal3.JPG";
import meal4 from "../../assets/meal4.JPG";
import view from "../../assets/reserve2.jpg";
import products from "../../service/data"; // Adjust the path if needed
import { useTranslation } from "react-i18next";

export default function MenuShowcase() {
  const { t, i18n } = useTranslation();
  const showcaseProducts = products.slice(0, 4);
  const isArabic = i18n.language === "ar";

  return (
    <>
      {/* Order Now Section */}
      <SectionWrapper className="bg-primary-lightest">
        <h2 className="text-4xl font-extrabold uppercase mb-4 text-center text-primary">
          {t("menu_showcase.order_now")}
        </h2>
        <p className="text-primary-dark mb-12 text-center">
          {t("menu_showcase.order_now_desc")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {showcaseProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-md shadow-md overflow-hidden relative border border-primary/10">
              <div className="relative overflow-hidden">
                <img
                  src={product.image || meal1}
                  alt={isArabic ? product.name_ar : product.name_en}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-full shadow-lg">
                  <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg mr-1">
                    *
                  </span>
                  <span className="transition-all duration-100 group-hover:translate-x-1">
                    {t("menu_showcase.add_to_cart")}
                  </span>
                </button>
              </div>
              <div className="p-4 text-right">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {isArabic ? product.name_ar : product.name_en}
                </h3>
                <p className="text-primary-dark font-medium">
                  {product.price} {t("menu_card.currency")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper className="bg-primary-lightest">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {isArabic ? (
            <>
              {/* Content - Right side for Arabic */}
              <div className="order-2 md:order-1 text-center md:text-right">
                <h2 className="text-6xl font-bold mb-4 text-primary">
                  {t("menu_showcase.experience_title")}
                </h2>

                <a
                  href="https://tomah.sa/"
                  className="group relative inline-flex items-center justify-center bg-primary text-white px-6 py-3 text-lg font-semibold transition duration-300 hover:bg-primary-dark rounded-full shadow-lg"
                >
                  <span className="absolute right-3 text-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    *
                  </span>
                  <span className="transition-transform text-white duration-300 group-hover:-translate-x-1">
                    {t("menu_showcase.book_table")}
                  </span>
                </a>
              </div>
              {/* Image - Left side for Arabic */}
              <div className="order-1 md:order-2">
                <img
                  src={view}
                  alt="Delicious food"
                  className="w-full h-96 object-cover rounded-lg shadow-lg border-4 border-primary"
                />
              </div>
            </>
          ) : (
            <>
              {/* Image - Left side for English */}
              <div>
                <img
                  src={view}
                  alt="Delicious food"
                  className="w-full h-96 object-cover rounded-lg shadow-lg border-4 border-primary"
                />
              </div>
              {/* Content - Right side for English */}
              <div className="text-center md:text-left">
                <h2 className="text-6xl font-bold mb-4 text-primary">
                  {t("menu_showcase.experience_title")}
                </h2>
                <p className="text-primary-dark mb-6">
                  {t("menu_showcase.experience_desc")}
                </p>
                <a
                  href="https://tomah.sa/"
                  className="group relative inline-flex items-center justify-center bg-primary text-white px-6 py-3 text-lg font-semibold transition duration-300 hover:bg-primary-dark rounded-full shadow-lg"
                >
                  <span className="absolute left-3 text-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    *
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {t("menu_showcase.book_table")}
                  </span>
                </a>
              </div>
            </>
          )}
        </div>
      </SectionWrapper>

      {/* Grilled Menu Section */}
      <SectionWrapper className="bg-primary-lightest">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {isArabic ? (
            <>
              {/* Image - Right side for Arabic (swapped) */}
              <div className="order-2 md:order-2">
                <img
                  src={meal4}
                  alt="Grilled food"
                  className="w-full h-auto max-h-96 object-cover rounded-full shadow-lg border-4 border-primary"
                />
              </div>
              {/* Content - Left side for Arabic (swapped) */}
              <div className="order-1 md:order-1 text-center md:text-right">
                <h2 className="text-5xl font-extrabold mb-10 text-primary">{t("menu_showcase.grilled_menu")}</h2>

                {/* === REVERSED ORDER === */}
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tahini_kebab")}</h3>
                  </div>
                  <p className="text-primary-dark">{t("menu_showcase.tahini_kebab_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tomah_kebab")}</h3>
                  </div>
                  <p className="text-primary-dark">{t("menu_showcase.tomah_kebab_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`75 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.beef_joints")}</h3>
                  </div>
                  <p className="text-primary-dark">{t("menu_showcase.beef_joints_desc")}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image - Left side for English (swapped) */}
              <div>
                <img
                  src={meal4}
                  alt="Grilled food"
                  className="w-full h-auto max-h-96 object-cover rounded-full shadow-lg border-4 border-primary"
                />
              </div>
              {/* Content - Right side for English (swapped) */}
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-extrabold mb-10 text-primary">{t("menu_showcase.grilled_menu")}</h2>

                {/* === REVERSED ORDER === */}
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tahini_kebab")}</h3>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                  </div>
                  <p className="text-primary-dark">{t("menu_showcase.tahini_kebab_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tomah_kebab")}</h3>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                  </div>
                  <p className="text-primary-dark">{t("menu_showcase.tomah_kebab_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.beef_joints")}</h3>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <span className="font-semibold text-primary-dark">{`75 ${t("menu_card.currency")}`}</span>
                  </div>
                  <p className="text-primary-dark">{t("menu_showcase.beef_joints_desc")}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </SectionWrapper>

      {/* Dessert Menu Section */}
      <SectionWrapper className="bg-primary-lightest">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {isArabic ? (
            <>
              {/* Image - Left side for Arabic (swapped) */}
              <div className="order-1 md:order-1">
                <img
                  src={meal3}
                  alt="Dessert"
                  className="w-full h-auto max-h-96 object-cover rounded-full shadow-lg border-4 border-primary"
                />
              </div>
              {/* Content - Right side for Arabic (swapped) */}
              <div className="order-2 md:order-2 text-center md:text-right">
                <h2 className="text-5xl font-extrabold mb-10 text-primary text-right">{t("menu_showcase.dessert_menu")}</h2>

                {/* === REVERSED ORDER === */}
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.um_ali")}</h3>
                  </div>
                  <p className="text-primary-dark text-right">{t("menu_showcase.um_ali_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.cream_caramel")}</h3>
                  </div>
                  <p className="text-primary-dark text-right">{t("menu_showcase.cream_caramel_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`25 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.roqaq")}</h3>
                  </div>
                  <p className="text-primary-dark text-right">{t("menu_showcase.roqaq_desc")}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content - Left side for English (swapped) */}
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-extrabold mb-10 text-primary text-left">{t("menu_showcase.dessert_menu")}</h2>

                {/* === REVERSED ORDER === */}
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.um_ali")}</h3>
                  </div>
                  <p className="text-primary-dark text-left">{t("menu_showcase.um_ali_desc")}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.cream_caramel")}</h3>
                  </div>
                  <p className="text-primary-dark text-left">{t("menu_showcase.cream_caramel_desc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="font-semibold text-primary-dark">{`25 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.roqaq")}</h3>
                  </div>
                  <p className="text-primary-dark text-left">{t("menu_showcase.roqaq_desc")}</p>
                </div>
              </div>
              {/* Image - Right side for English (swapped) */}
              <div>
                <img
                  src={meal3}
                  alt="Dessert"
                  className="w-full h-auto max-h-96 object-cover rounded-full shadow-lg border-4 border-primary"
                />
              </div>
            </>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}