/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../service/data";
import image from "../assets/AboutImages/S1.jpg";
import image2 from "../assets/AboutImages/S2.jpg";
import goals from "../assets/goals.png";
import vision from "../assets/vision.png";
import about from "../assets/about.png";
import menu from "../assets/menu.png";
import image3 from "../assets/AboutImages/S3.jpg";
import HeroSection from "../components/HeroSection";
import { 
  HeartIcon, 
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
  
} from '@heroicons/react/24/outline';

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(false);

  const heroImages = [image, image2, image3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisible(true);
  }, []);

  const getRandomMeals = (num) => {
    const shuffled = [...productsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const featuredDishes = getRandomMeals(3);

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="main-bg">
   {/* Hero Banner Slider */}
<div className="relative w-full h-screen overflow-hidden">
  {/* Slides */}
  <div className="relative w-full h-full">
    {heroImages.map((img, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <HeroSection image={img} />
      </div>
    ))}
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={() => setCurrentSlide(prev => (prev === 0 ? heroImages.length - 1 : prev - 1))}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300"
    aria-label="Previous slide"
  >
    &lt;
  </button>
  <button
    onClick={() => setCurrentSlide(prev => (prev + 1) % heroImages.length)}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300"
    aria-label="Next slide"
  >
    &gt;
  </button>

  {/* Slide Indicators */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full transition-all ${
          index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="relative px-8">
              {t("home.values.title")}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.values.quality.title")}</h3>
              <p className="text-gray-600">{t("home.values.quality.description")}</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <SparklesIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.values.tradition.title")}</h3>
              <p className="text-gray-600">{t("home.values.tradition.description")}</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <StarIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.values.service.title")}</h3>
              <p className="text-gray-600">{t("home.values.service.description")}</p>
            </div>
          </div>
        </div>
      </section>

{/* Our Vision & Goals */}
<section className="py-16 bg-gradient-to-b">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
    <h2 className="text-4xl font-bold text-center mb-16 relative">
      <span className="relative px-8">
        {t("home.vision.title")}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
      </span>
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text Content */}
      <div className="order-2 lg:order-1">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
              <GlobeAltIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("home.vision.heritage.title")}</h3>
              <p className="text-gray-600">{t("home.vision.heritage.description")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
              <LightBulbIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("home.vision.innovation.title")}</h3>
              <p className="text-gray-600">{t("home.vision.innovation.description")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
              <UserGroupIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("home.vision.community.title")}</h3>
              <p className="text-gray-600">{t("home.vision.community.description")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Stacked Images - Updated with responsive adjustments */}
      <div className="order-1 lg:order-2 flex justify-center relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src={goals}
            alt={t("home.vision.image_alt")}
            className="rounded-lg shadow-2xl w-full h-full object-contain absolute top-0 left-0 z-10"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
          />
          <img
            src={vision}
            alt={t("home.vision.image_alt")}
            className="rounded-lg shadow-xl w-4/5 h-4/5 object-contain absolute bottom-0 right-0 z-20 translate-x-8 md:translate-x-12 lg:translate-x-16 translate-y-8 md:translate-y-12 lg:translate-y-16"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.10)" }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-lg p-4 shadow-xl z-30 min-w-[120px] md:min-w-[160px]">
            <div className="text-xl md:text-2xl font-bold">{t("home.vision.years")}</div>
            <div className="text-xs md:text-sm text-gray-600">{t("home.vision.experience")}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Our Menu */}
      <section className="py-16 bg-gradient-to-b">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="relative px-8">
              {t("home.menu.title")}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
            </span>
          </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                    <GlobeAltIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("home.chefs.title")}</h3>
                    <p className="text-gray-600">{t("home.chefs.description")}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                    <LightBulbIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("home.vision.innovation.title")}</h3>
                    <p className="text-gray-600">{t("home.vision.innovation.description")}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                    <UserGroupIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("home.vision.community.title")}</h3>
                    <p className="text-gray-600">{t("home.vision.community.description")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={menu} 
                  alt={t("home.vision.image_alt")}
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 bg-white rounded-lg p-3 sm:p-4 shadow-xl">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">{t("home.vision.years")}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t("home.vision.experience")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="relative px-8">
              {t("home.features.title")}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("home.features.quality.title")}</h3>
              <p className="text-gray-600">{t("home.features.quality.description")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("home.features.service.title")}</h3>
              <p className="text-gray-600">{t("home.features.service.description")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("home.features.hygiene.title")}</h3>
              <p className="text-gray-600">{t("home.features.hygiene.description")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("home.features.delivery.title")}</h3>
              <p className="text-gray-600">{t("home.features.delivery.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="bg-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 relative">
                <span className="relative">
                  {t("home.about.title")}
                  <span className="absolute bottom-0 left-0 w-24 h-1 "></span>
                </span>
              </h2>
              <p className="mb-6 text-gray-600 text-lg leading-relaxed">{t("home.about.description")}</p>
              <Link to="/about" className="btn px-8">
                {t("home.about.button")}
              </Link>
            </div>
            <div className="relative">
              <img
                src={about}
                alt={t("home.about.image_alt")}
                className="rounded-xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 text-white p-3 sm:p-4 rounded-lg">
                <p className="text-base sm:text-lg font-bold">Est. 2010</p>
                <p className="text-sm">Serving Authentic Cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Experience the Taste of Tradition Today</h2>
          <p className="text-base sm:text-lg mb-8">Join us for an unforgettable culinary journey through our city's rich food heritage</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn bg-white hover:bg-gray-100 border-none">
              Browse Our Menu
            </Link>
            <Link to="/contact" className="btn bg-transparent border-white hover:bg-white/10">
             Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;