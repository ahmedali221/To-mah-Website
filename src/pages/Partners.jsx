/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import certificate1 from "../assets/certificates/1.png";
import certificate2 from "../assets/certificates/2.png";
import certificate3 from "../assets/certificates/3.png";
import partner1 from "../assets/partners/1.jpg";
import partner2 from "../assets/partners/2.jpg";
import partner3 from "../assets/partners/3.jpg";
import partner4 from "../assets/partners/4.jpg";
import foodicsImg from "../assets/partners/foodics.jpg";
import jisrImg from "../assets/partners/jisr.jpg";
import mytableImg from "../assets/partners/mytable.jpg";

const Partners = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Partner Photos data
  const partnerPhotos = [
    {
      id: 1,
      image: partner1,
    },
    {
      id: 2,
      image: partner2,
    },
    {
      id: 3,
      image: partner3,
    },
    {
      id: 4,
      image: partner4,
    },
  ];

  // Partner companies data - Updated with the new partners list
  const partnerCompanies = [
    {
      id: 1,
      name: { en: "Foodics", ar: "فوديكس" },
      type: { en: "Food Delivery Platform", ar: "منصة توصيل الطعام" },
      description: {
        en: "Leading food delivery platform providing seamless ordering experience for To'mah customers.",
        ar: "منصة توصيل الطعام الرائدة التي توفر تجربة طلب سلسة لعملاء طُعمة.",
      },
      image: foodicsImg,
    },
    {
      id: 2,
      name: { en: "Foodics Accounting", ar: "فوديكس المحاسبي" },
      type: { en: "Financial Management", ar: "إدارة مالية" },
      description: {
        en: "Comprehensive accounting solutions tailored for restaurant and food service operations.",
        ar: "حلول محاسبية شاملة مصممة خصيصًا لعمليات المطاعم وخدمات الطعام.",
      },
      image: partner4,
    },
    {
      id: 3,
      name: { en: "Foodics Online", ar: "فوديكس اون لاين" },
      type: { en: "Digital Ordering System", ar: "نظام الطلب الرقمي" },
      description: {
        en: "Advanced online ordering system enabling customers to enjoy To'mah's flavors from anywhere.",
        ar: "نظام طلب متقدم عبر الإنترنت يمكن العملاء من الاستمتاع بنكهات طُعمة من أي مكان.",
      },
      image: partner3,
    },
    {
      id: 4,
      name: { en: "Club", ar: "كلوب" },
      type: { en: "Loyalty Program", ar: "برنامج الولاء" },
      description: {
        en: "Exclusive loyalty program offering special rewards and benefits for frequent To'mah diners.",
        ar: "برنامج ولاء حصري يقدم مكافآت ومزايا خاصة لرواد طُعمة المنتظمين.",
      },
      image: partner4, // fallback to existing image
    },
    {
      id: 5,
      name: { en: "My Table", ar: "ماي تيبل" },
      type: { en: "Table Reservation", ar: "حجز الطاولات" },
      description: {
        en: "Smart table reservation system ensuring the perfect dining experience at To'mah Restaurant.",
        ar: "نظام ذكي لحجز الطاولات يضمن تجربة طعام مثالية في مطعم طُعمة.",
      },
      image: mytableImg,
    },
    {
      id: 6,
      name: { en: "Oyah", ar: "اوياه" },
      type: { en: "Customer Experience", ar: "تجربة العملاء" },
      description: {
        en: "Customer experience platform enhancing service quality and satisfaction at To'mah.",
        ar: "منصة تجربة العملاء التي تعزز جودة الخدمة والرضا في طُعمة.",
      },
      image: partner1,
    },
    {
      id: 7,
      name: { en: "Nitx", ar: "نتكس" },
      type: { en: "Network Solutions", ar: "حلول الشبكات" },
      description: {
        en: "Reliable network infrastructure solutions supporting To'mah's digital operations.",
        ar: "حلول البنية التحتية للشبكات الموثوقة التي تدعم العمليات الرقمية لطُعمة.",
      },
      image: partner2,
    },
    {
      id: 8,
      name: { en: "Jisr", ar: "جسر" },
      type: { en: "Payment Gateway", ar: "بوابة الدفع" },
      description: {
        en: "Secure payment gateway ensuring safe and convenient transactions for To'mah customers.",
        ar: "بوابة دفع آمنة تضمن معاملات آمنة ومريحة لعملاء طُعمة.",
      },
      image: jisrImg,
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
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6 partners-hero-title"
            >
              {t("partners.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              {t("partners.hero.description")}
            </p>
          </div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div 
                  className="h-64 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(certificate.image)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title[i18n.language === "ar" ? "ar" : "en"]}
                    className="w-full h-full object-contain p-4 hover:opacity-90 transition-opacity"
                    loading="lazy"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Photos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isRTL ? "لحظات الشراكة" : "Partnership Moments"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? "لحظات مميزة من رحلة الشراكات والتعاون مع مطعم طُعمة"
                : "Special moments from our partnership and collaboration journey at To'mah Restaurant"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-16 bg-gray-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 flex items-center justify-center mb-3 text-3xl ">
                    {company.image ? (
                      <img src={company.image} alt={company.name[i18n.language === "ar" ? "ar" : "en"]} className="w-16 h-16 object-contain" loading="lazy" />
                    ) : (
                      company.icon
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {company.name[i18n.language === "ar" ? "ar" : "en"]}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {company.type[i18n.language === "ar" ? "ar" : "en"]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {company.description[i18n.language === "ar" ? "ar" : "en"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
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
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 partners-hero-title">
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

      {/* Certificate Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;