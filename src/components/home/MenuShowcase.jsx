// components/MenuShowcase.jsx
import SectionWrapper from "./sectionWrapper";
import meal1 from "../../assets/meal1.JPG";
import meal3 from "../../assets/meal3.JPG";
import meal4 from "../../assets/meal4.JPG";
import view from "../../assets/reserve2.jpg";
import products from "../../service/data"; // Adjust the path if needed
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function MenuShowcase() {
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();
  const showcaseProducts = products.slice(0, 4);
  const isArabic = i18n.language === "ar";

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: isArabic ? product.name_ar : product.name_en,
      price: product.price,
      image: product.image || meal1
    });
  };

  return (
    <>
      {/* Order Now Section */}
      <SectionWrapper>
        <h2 className="text-4xl font-extrabold uppercase mb-4 text-center">
          {t("menu_showcase.order_now")}
        </h2>

        <p className="text-primary-dark mb-12 text-center">
          {t("menu_showcase.order_now_desc")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {showcaseProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-md shadow-md overflow-hidden relative border border-primary/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || meal1}
                  alt={isArabic ? product.name_ar : product.name_en}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-full shadow-lg"
                >
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
      <SectionWrapper>
        <h2 className="text-6xl font-bold mb-4 text-center text-primary">
          {t("menu_showcase.experience_title")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-1 lg:order-1">
            <img
              src={view}
              alt="Restaurant View"
              className="w-full max-w-2xl h-96 object-cover rounded-2xl shadow-lg border border-primary/20 mx-auto"
            />
          </div>
          <div className="order-2 lg:order-2 flex flex-col items-center justify-center">
            <p className="text-primary-dark mb-6 text-center max-w-2xl">
              {t("menu_showcase.experience_desc")}
            </p>
            {isArabic ? (
              <Link
                to="https://tomah.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full bg-primary shadow-xl ring-1 ring-primary/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 backdrop-blur-sm border border-white/10 text-white overflow-hidden"
              >
                <span className="absolute right-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl font-extrabold">
                  *
                </span>
                <span className="z-10 transition-transform duration-300 group-hover:-translate-x-1" style={{ color: "white" }}>
                  {t("menu_showcase.book_table")}
                </span>
              </Link>
            ) : (
              <a
                href="https://tomah.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full bg-primary shadow-xl ring-1 ring-primary/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 backdrop-blur-sm border border-white/10 text-white overflow-hidden"
              >
                <span className="absolute left-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl font-extrabold">
                  *
                </span>
                <span className="z-10 transition-transform duration-300 group-hover:translate-x-1" style={{ color: "white" }}>
                  {t("menu_showcase.book_table")}
                </span>
              </a>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Grilled Menu Section */}
      <SectionWrapper>
        <h2 className="text-5xl font-extrabold mb-6 text-center text-primary">
          {t("menu_showcase.grilled_menu")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={meal4}
              alt="Grilled food"
              className="w-full max-w-xl h-auto max-h-96 object-cover rounded-full shadow-lg border border-primary/20 mx-auto"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            {/* Tahini Kebab */}
            <div>
              <div className={`flex items-center gap-2 mb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
                {isArabic ? (
                  <>
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tahini_kebab")}</h3>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tahini_kebab")}</h3>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                  </>
                )}
              </div>
              <p className={`text-primary-dark ${isArabic ? "text-right" : "text-left"}`}>{t("menu_showcase.tahini_kebab_desc")}</p>
            </div>
            {/* Tomah Kebab */}
            <div>
              <div className={`flex items-center gap-2 mb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
                {isArabic ? (
                  <>
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tomah_kebab")}</h3>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.tomah_kebab")}</h3>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <span className="font-semibold text-primary-dark">{`73 ${t("menu_card.currency")}`}</span>
                  </>
                )}
              </div>
              <p className={`text-primary-dark ${isArabic ? "text-right" : "text-left"}`}>{t("menu_showcase.tomah_kebab_desc")}</p>
            </div>
            {/* Beef Joints */}
            <div>
              <div className={`flex items-center gap-2 mb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
                {isArabic ? (
                  <>
                    <span className="font-semibold text-primary-dark">{`75 ${t("menu_card.currency")}`}</span>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.beef_joints")}</h3>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.beef_joints")}</h3>
                    <span className="h-0.5 w-12 bg-amber-400"></span>
                    <span className="font-semibold text-primary-dark">{`75 ${t("menu_card.currency")}`}</span>
                  </>
                )}
              </div>
              <p className={`text-primary-dark ${isArabic ? "text-right" : "text-left"}`}>{t("menu_showcase.beef_joints_desc")}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Dessert Menu Section */}
      <SectionWrapper>
        <h2 className="text-5xl font-extrabold mb-10 text-center text-primary">
          {t("menu_showcase.dessert_menu")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-1 lg:order-1">
            <div className="space-y-10">
              {/* Um Ali */}
              <div>
                <div className={`flex items-center gap-2 mb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
                  {isArabic ? (
                    <>
                      <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                      <span className="h-0.5 w-12 bg-amber-400"></span>
                      <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.um_ali")}</h3>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.um_ali")}</h3>
                      <span className="h-0.5 w-12 bg-amber-400"></span>
                      <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                    </>
                  )}
                </div>
                <p className={`text-primary-dark ${isArabic ? "text-right" : "text-left"}`}>{t("menu_showcase.um_ali_desc")}</p>
              </div>
              {/* Cream Caramel */}
              <div>
                <div className={`flex items-center gap-2 mb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
                  {isArabic ? (
                    <>
                      <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                      <span className="h-0.5 w-12 bg-amber-400"></span>
                      <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.cream_caramel")}</h3>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.cream_caramel")}</h3>
                      <span className="h-0.5 w-12 bg-amber-400"></span>
                      <span className="font-semibold text-primary-dark">{`20 ${t("menu_card.currency")}`}</span>
                    </>
                  )}
                </div>
                <p className={`text-primary-dark ${isArabic ? "text-right" : "text-left"}`}>{t("menu_showcase.cream_caramel_desc")}</p>
              </div>
              {/* Roqaq */}
              <div>
                <div className={`flex items-center gap-2 mb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
                  {isArabic ? (
                    <>
                      <span className="font-semibold text-primary-dark">{`25 ${t("menu_card.currency")}`}</span>
                      <span className="h-0.5 w-12 bg-amber-400"></span>
                      <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.roqaq")}</h3>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-primary">{t("menu_showcase.roqaq")}</h3>
                      <span className="h-0.5 w-12 bg-amber-400"></span>
                      <span className="font-semibold text-primary-dark">{`25 ${t("menu_card.currency")}`}</span>
                    </>
                  )}
                </div>
                <p className={`text-primary-dark ${isArabic ? "text-right" : "text-left"}`}>{t("menu_showcase.roqaq_desc")}</p>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <img
              src={meal3}
              alt="Dessert"
              className="w-full max-w-xl h-auto max-h-96 object-cover rounded-full shadow-lg border border-primary/20 mx-auto"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
