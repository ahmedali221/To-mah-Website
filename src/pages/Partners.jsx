/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import certificate1 from "../assets/certificates/1.png";
import certificate2 from "../assets/certificates/2.png";
import certificate3 from "../assets/certificates/3.png";

const Partners = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Certificates data
  const certificates = [
    {
      id: 1,
      image: certificate1,
      title: { en: "Quality Assurance", ar: "ضمان الجودة" },
      description: {
        en: "Certified for maintaining the highest standards of food quality and safety.",
        ar: "معتمد للحفاظ على أعلى معايير جودة وسلامة الطعام.",
      },
    },
    {
      id: 2,
      image: certificate2,
      title: { en: "Excellence Award", ar: "جائزة التميز" },
      description: {
        en: "Recognized for exceptional culinary excellence and customer service.",
        ar: "معترف به للتميز الطهي الاستثنائي وخدمة العملاء.",
      },
    },
    {
      id: 3,
      image: certificate3,
      title: { en: "Sustainability Commitment", ar: "التزام الاستدامة" },
      description: {
        en: "Certified for our commitment to sustainable practices and environmental responsibility.",
        ar: "معتمد لالتزامنا بالممارسات المستدامة والمسؤولية البيئية.",
      },
    },
  ];

  // Partner companies data
  const partnerCompanies = [
    {
      id: 1,
      name: { en: "Fresh Farms Co.", ar: "مزارع فريش" },
      type: { en: "Organic Produce", ar: "منتجات عضوية" },
      description: {
        en: "Providing fresh, organic vegetables and fruits directly from local farms.",
        ar: "توفير خضروات وفواكه عضوية طازجة مباشرة من المزارع المحلية.",
      },
      logo: "🌱", // Using emoji as placeholder
    },
    {
      id: 2,
      name: { en: "Premium Meats", ar: "لحوم بريميوم" },
      type: { en: "Quality Meats", ar: "لحوم عالية الجودة" },
      description: {
        en: "Supplying high-quality, ethically sourced meats for our signature dishes.",
        ar: "توريد لحوم عالية الجودة من مصادر أخلاقية لأطباقنا المميزة.",
      },
      logo: "🥩", // Using emoji as placeholder
    },
    {
      id: 3,
      name: { en: "Ocean Fresh", ar: "أوشن فريش" },
      type: { en: "Seafood", ar: "مأكولات بحرية" },
      description: {
        en: "Delivering the freshest seafood from sustainable sources daily.",
        ar: "توصيل أحدث المأكولات البحرية من مصادر مستدامة يوميًا.",
      },
      logo: "🐟", // Using emoji as placeholder
    },
    {
      id: 4,
      name: { en: "Spice World", ar: "عالم التوابل" },
      type: { en: "Spices & Herbs", ar: "توابل وأعشاب" },
      description: {
        en: "Providing authentic spices and herbs that give our dishes their distinctive flavors.",
        ar: "توفير التوابل والأعشاب الأصيلة التي تمنح أطباقنا نكهاتها المميزة.",
      },
      logo: "🌶️", // Using emoji as placeholder
    },
    {
      id: 5,
      name: { en: "Sweet Delights", ar: "حلويات لذيذة" },
      type: { en: "Desserts & Pastries", ar: "حلويات ومعجنات" },
      description: {
        en: "Crafting exquisite desserts and pastries to complement our main courses.",
        ar: "صناعة الحلويات والمعجنات الرائعة لتكملة أطباقنا الرئيسية.",
      },
      logo: "🍰", // Using emoji as placeholder
    },
    {
      id: 6,
      name: { en: "Delivery Express", ar: "ديليفري إكسبرس" },
      type: { en: "Food Delivery", ar: "توصيل طعام" },
      description: {
        en: "Ensuring your favorite To'mah dishes reach you fresh and on time.",
        ar: "ضمان وصول أطباق طُعمة المفضلة لديك طازجة وفي الوقت المحدد.",
      },
      logo: "🚚", // Using emoji as placeholder
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: { en: "Cindy", ar: "سيندي" },
      role: { en: "Food Influencer", ar: "مؤثرة طعام" },
      testimonial: {
        en: "Working with To'mah has been an incredible journey. Their commitment to quality and authentic flavors is unmatched in the industry.",
        ar: "تعاون رائع مع طُعمة، حيث النكهات الأصيلة والتجربة المميزة تجتمعان في مكان واحد.",
      },
      avatar: "👩‍🍳", // Using emoji as placeholder
    },
    {
      id: 2,
      name: { en: "Lillie Gilman", ar: "ليلي جيلمان" },
      role: { en: "Photographer", ar: "مصورة" },
      testimonial: {
        en: "Capturing To'mah's dishes is a photographer's dream. Each plate tells a story of tradition and innovation.",
        ar: "تصوير أطباق طُعمة متعة حقيقية، كل طبق يحكي قصة ثقافية وفنية رائعة.",
      },
      avatar: "📸", // Using emoji as placeholder
    },
    {
      id: 3,
      name: { en: "Neil Rosas", ar: "نيل روساس" },
      role: { en: "Vlogger", ar: "مدوّن فيديو" },
      testimonial: {
        en: "To'mah Restaurant offers not just food, but an experience worth documenting. From ambiance to flavors, everything is perfect.",
        ar: "تجربة طُعمة تستحق التوثيق، من الأجواء إلى النكهات، كل شيء مثالي.",
      },
      avatar: "🎥", // Using emoji as placeholder
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("partners.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {t("partners.hero.description")}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isRTL ? "شهاداتنا وجوائزنا" : "Our Certificates & Awards"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? "نفتخر بالاعتراف بجودتنا والتزامنا بالتميز في كل ما نقدمه"
                : "We take pride in the recognition of our quality and commitment to excellence in everything we serve"}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                variants={itemVariants}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title[i18n.language === "ar" ? "ar" : "en"]}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {certificate.title[i18n.language === "ar" ? "ar" : "en"]}
                  </h3>
                  <p className="text-gray-600">
                    {certificate.description[i18n.language === "ar" ? "ar" : "en"]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isRTL ? "شركاؤنا الموثوقون" : "Our Trusted Partners"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? "نتعاون مع أفضل الموردين لضمان تقديم تجربة طعام استثنائية"
                : "We collaborate with the finest suppliers to ensure an exceptional dining experience"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {company.logo}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {company.name[i18n.language === "ar" ? "ar" : "en"]}
                    </h3>
                    <p className="text-sm text-primary">
                      {company.type[i18n.language === "ar" ? "ar" : "en"]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {company.description[i18n.language === "ar" ? "ar" : "en"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("partners.testimonials.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-primary mb-4">
                  {testimonial.avatar}
                </div>
                <blockquote className="mb-4 text-gray-600 italic">
                  {testimonial.testimonial[i18n.language === "ar" ? "ar" : "en"]}
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name[i18n.language === "ar" ? "ar" : "en"]}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role[i18n.language === "ar" ? "ar" : "en"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("partners.cta.title")}
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t("partners.cta.description")}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            {t("partners.cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;