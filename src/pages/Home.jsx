import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/Slider1.jpeg";
import image2 from "../assets/Slider7.jpeg";
import image3 from "../assets/Slider4.jpeg";
import logo from "../assets/logot.png";
import bg from "../assets/newMenu.jpg";
import goals from "../assets/goals.png";
import vision from "../assets/vision.png";
import about from "../assets/about.png";
import cover from "/src/assets/AboutImages/COVER.jpg";
import intro from "../assets/AboutImages/intro.mp4";
import owner from "../assets/owner.jpg";
import owner2 from "../assets/owner2.jpg";
import cheif from "../assets/cheif.jpg";
import view from "../assets/wall.jpeg";
import meal1 from "../assets/meal1.JPG";
import meal2 from "../assets/meal2.JPG";
import meal3 from "../assets/meal3.JPG";
import meal4 from "../assets/meal4.JPG";
import menu from "../assets/ourMenu.jpg";
import to3 from "../assets/to3ma.jpg";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
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
} from "@heroicons/react/24/outline";

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const heroImages = [image, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisible(true);

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="main-bg">
      {/* Hero Banner Slider */}
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <HeroSection image={img} />
              {/* Logo Image on top of each slide */}
              <div className="absolute top-1/7 left-1/2 -translate-x-1/2 z-10">
                <img src={logo} alt="Logo" className="w-100 h-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? heroImages.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
          }
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
              className={`w-1 h-1 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-1" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-12 md:py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 relative">
                <span className="relative">
                  {t("home.about.title")}
                  <span className="absolute bottom-0 left-0 w-24 h-1"></span>
                </span>
              </h2>
              <p className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                {t("home.about.description")}
              </p>
              <Link
                to="/about"
                className="btn px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
              >
                {t("home.about.button")}
              </Link>
            </div>
            <div className="relative mt-8 md:mt-0">
              <img
                src={about}
                alt={t("home.about.image_alt")}
                className="rounded-t-full rounded-b-full shadow-2xl w-full h-auto transition-all duration-1000 animate-on-scroll"
              />

              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 text-white p-2 sm:p-3 rounded-lg bg-black/70">
                <div className="text-lg md:text-xl font-bold">
                  {t("home.vision.years")}
                </div>
              </div>
            </div>
          </div>

          {/* VIDEO BANNER SECTION */}
          <section className="py-16 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Thumbnail & Play Button */}
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl animate-on-scroll"
                id="video-section"
              >
                <div
                  className={`transition-all duration-1000 cursor-pointer ${
                    isVisible["video-section"]
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={cover}
                    alt={t("home.video.cover_alt", "Video Cover")}
                    className="w-full h-auto object-cover"
                  />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 text-white p-6 rounded-full z-10 hover:bg-black/50 transition-all"
                    aria-label={t("home.video.play_button", "Play Video")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Modal */}
              {isPlaying && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                  <div className="relative w-full max-w-7xl mx-auto px-4">
                    {/* Close Button */}
                    <button
                      className="absolute -top-10 right-4 text-white text-4xl z-50 hover:text-gray-300 transition-colors"
                      onClick={() => setIsPlaying(false)}
                      aria-label="Close Video"
                    >
                      ✕
                    </button>

                    {/* Video */}
                    <div className="aspect-[16/7]">
                      <video
                        src={intro}
                        autoPlay
                        controls
                        onEnded={() => setIsPlaying(false)}
                        className="w-full h-full rounded-lg"
                      ></video>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Menu Button */}
      <div
        className="relative w-full h-150 my-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            style={{ color: "white" }}
          >
            Discover Our Delicious Menu
          </h2>

          <Link
            to="/menu"
            className="group bg-white text-black px-6 py-2 rounded-full text-sm md:text-base hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
          >
            <span
              className="text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              *
            </span>
            <span
              className="transform transition-transform duration-300 group-hover:translate-x-1"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              View our Menu
            </span>
          </Link>
        </div>
      </div>

      {/* people Section */}
      <section className="py-32 bg-white border border-[#001f3f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {/* p1 */}
            <div className="border-r border-black pr-5">
              <img
                src={owner2}
                alt="First"
                className="w-50 h-50 mx-auto rounded-full object-cover shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Fresh Ingredients</h3>
              <p className="text-gray-500 text-sm mt-2">
                We use only the best quality.
              </p>
            </div>

            {/* p2 */}
            <div className="border-r border-black pr-5">
              <img
                src={owner}
                alt="Second"
                className="w-50 h-50 mx-auto rounded-full object-cover shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-gray-500 text-sm mt-2">
                Your food, right on time.
              </p>
            </div>

            {/* p3 */}
            <div className="pr-5">
              <img
                src={cheif}
                alt="Third"
                className="w-50 h-50 mx-auto rounded-full object-cover shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Tasty Recipes</h3>
              <p className="text-gray-500 text-sm mt-2">
                Delicious meals every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* العنوان */}
          <h2 className="text-4xl font-extrabold uppercase mb-4">Order Now</h2>
          <p className="text-gray-600 mb-12">
            Discover our seasonal specials and chef’s recommendations
          </p>

          {/* الكاردات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                img: meal1,
                name: "Vegetable Plate",
                price: "11 SR",
              },
              {
                img: meal2,
                name: "Spicy Sea Chips",
                price: "15 SR",
              },
              {
                img: meal3,
                name: "Rice Pudding",
                price: "17 SR",
              },
              {
                img: meal4,
                name: "Hijazi Kebab",
                price: "73 SR",
              },
            ].map(({ img, name, price }, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 rounded-md shadow-md overflow-hidden relative"
              >
                {/* الصورة */}
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* الزرار */}
                  <button className="w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-start">
                    <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                      *
                    </span>
                    <span className="transition-all duration-100 group-hover:translate-x-1">
                      Add to cart
                    </span>
                  </button>
                </div>

                {/* اسم الوجبة والسعر */}
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {name}
                  </h3>
                  <p className="text-gray-600 font-medium">{price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* warm section */}
      <section className="py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* الصورة في الناحية الشمال */}
          <div>
            <img
              src={view}
              alt="Delicious food"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* النص والزرار في الناحية اليمين */}
          <div className="text-center md:text-left">
            <h2 className="text-6xl font-bold mb-4">
              Experience the Taste of Authenticity
            </h2>
            <p className="text-gray-600 mb-6">
              From traditional flavors to modern twists, our dishes are crafted
              to delight your senses.
            </p>
            <a
              href="https://tomah.sa/"
              className="group relative inline-flex items-center justify-center bg-black text-white px-6 py-3 text-lg font-semibold transition duration-300"
              style={{ color: "white" }}
            >
              <span className="absolute left-3 text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                *
              </span>

              <span className="group relative group-hover:translate-x-1">
                BOOK A TABLE
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* GRILLED Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* الصورة في الناحية الشمال */}
          <div>
            <img
              src={meal4}
              alt="Delicious food"
              className="w-full h-auto rounded-t-full rounded-b-full shadow-lg"
            />
          </div>

          {/* النص في الناحية اليمين */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-10">
              GRILLED TE'AMA MENU
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-1">
                BEEF JOINTS <span className="font-semibold"> 75 SR</span>
              </h3>
              <p className="text-gray-700">
                Indulge in grilled beef joints served with rich tahini sauce. A
                delicious meal rich in protein and authentic grilled flavors.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-1">
                TO'MAH KEBAB ——————————{" "}
                <span className="font-semibold">73 SR</span>
              </h3>
              <p className="text-gray-700">
                Indulge in premium special kebab served with delicious nuts and
                rich tahini sauce. A royal meal rich in luxurious flavors and
                fresh ingredients.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-1">
                Tahini Kebab ———————————————{" "}
                <span className="font-semibold">73 SR</span>
              </h3>
              <p className="text-gray-700">
                Indulge in special kebab grilled over charcoal and topped with
                rich and delicious tahini sauce. A delicious meal rich in
                grilled flavors and distinctive tahini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dessert Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* الصورة في الناحية الشمال */}

          {/* النص في الناحية اليمين */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-10">DESSERT MENU</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-1">
                ROQAQ AL-AGUAT ——————————{" "}
                <span className="font-semibold"> 25 SR</span>
              </h3>
              <p className="text-gray-700">
                Crispy Roqaq Dough Filled With Pistachios And Cream And Served
                With Ice Cream
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-1">
                CREAM CARAMEL ——————————{" "}
                <span className="font-semibold">20 SR</span>
              </h3>
              <p className="text-gray-700">
                Oven Baked Cream caramel served cold caramelized sugar sauce
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-1">
                UM ALI ———————————————{" "}
                <span className="font-semibold">20 SR</span>
              </h3>
              <p className="text-gray-700">
                Dessert made of roqaq with milk and roasted nuts served hot
              </p>
            </div>
          </div>
          <div>
            <img
              src={meal3}
              alt="Delicious food"
              className="w-full h-auto rounded-t-full rounded-b-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/*SCROLL */}
      {/* Auto-scroll horizontal section with food categories */}
      <section className="bg-white py-3 overflow-hidden border ">
        <div className="w-full whitespace-nowrap animate-scroll flex items-center gap-4 px-4 ">
          {[
            "Appetizers",
            "Main Dishes",
            "Desserts",
            "Drinks",
            "Salads",
            "Grills",
            "Pasta",
            "Snacks",
            "Appetizers",
            "Main Dishes",
            "Desserts",
            "Drinks",
            "Salads",
            "Grills",
            "Pasta",
            "Snacks",
            "Appetizers",
            "Main Dishes",
            "Desserts",
            "Drinks",
            "Salads",
            "Grills",
            "Pasta",
            "Snacks",
            "Appetizers",
            "Main Dishes",
            "Desserts",
            "Drinks",
            "Salads",
            "Grills",
            "Pasta",
            "Snacks",
            "Appetizers",
            "Main Dishes",
            "Desserts",
            "Drinks",
            "Salads",
            "Grills",
            "Pasta",
            "Snacks",
            "Appetizers",
            "Main Dishes",
            "Desserts",
            "Drinks",
            "Salads",
            "Grills",
            "Pasta",
            "Snacks",
          ].map((cat, index, arr) => (
            <div
              key={cat}
              className="flex items-center text-lg font-semibold text-gray-800"
            >
              <span className="px-3">{cat}</span>
              {index < arr.length - 1 && (
                <span className="text-yellow-500 text-xl px-2">*</span>
              )}
            </div>
          ))}
        </div>

        {/* Animation style */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* Two images section with styling */}
      <section className="bg-white py- px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* OUR MENU */}
          <div className="flex flex-col items-center px-4">
            <img
              src={menu}
              alt="Our Menu"
              className="w-150 h-100 object-cover rounded-full shadow-lg mb-4"
            />
            <span className="text-xl font-semibold text-gray-800">
              OUR MENU
            </span>
          </div>

          <div className="justify-self-end">
            <img
              src={to3}
              alt="Another"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Restaurant Gallery Section */}

     <section className="bg-white py-16 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">@RESTAURANT TO'MAH</h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
    
    {/* الصف الأول */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[img1, img2, img3].map((src, i) => (
        <div key={i} className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-md">
          <img src={src} alt={`Dish ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>

    {/* الصف الثاني */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[img4, img5, img6].map((src, i) => (
        <div key={i + 3} className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-md">
          <img src={src} alt={`Dish ${i + 4}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>

  </div>
</section>
<section className="bg-white py-20 text-center">
  {/* العنوان الكبير */}
  <h2 className="text-4xl md:text-5xl font-bold uppercase text-gray-900 mb-4">
    VISIT US NOW
  </h2>

  {/* النجوم الذهبية */}
  <div className="text-3xl text-yellow-500">
    ***
  </div>
  <div className="text-3xl text-gray-500">
   Address
  </div>
</section>






      {/* Our Vision & Goals */}
      <section className="py-12 md:py-16 bg-gradient-to-b">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 relative">
            <span className="relative px-8">
              {t("home.vision.title")}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 lg:gap-y-0 items-center">
            {/* Text Content - Added margin-bottom for mobile */}
            <div className="order-1 lg:order-2 mb-12 lg:mb-0">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white rounded-lg p-2 md:p-3 shadow-md">
                    <GlobeAltIcon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t("home.vision.heritage.title")}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {t("home.vision.heritage.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white rounded-lg p-2 md:p-3 shadow-md">
                    <LightBulbIcon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t("home.vision.innovation.title")}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {t("home.vision.innovation.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white rounded-lg p-2 md:p-3 shadow-md">
                    <UserGroupIcon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t("home.vision.community.title")}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {t("home.vision.community.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Stacked Images - Added margin-top for mobile */}
            <div className="order-2 lg:order-1 mt-8 lg:mt-0 flex justify-center relative h-64 sm:h-80 md:h-96 lg:h-[30rem]">
              <div className="relative w-full h-full">
                <img
                  src={goals}
                  alt={t("home.vision.image_alt")}
                  className="rounded-lg shadow-2xl w-full h-full object-contain absolute top-0 left-0 z-10"
                  style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
                />
                <img
                  src={vision}
                  alt={t("home.vision.image_alt")}
                  className="rounded-lg shadow-xl w-4/5 h-4/5 object-contain absolute bottom-0 right-0 z-20 translate-x-4 md:translate-x-8 lg:translate-x-12 translate-y-4 md:translate-y-8 lg:translate-y-12"
                  style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.10)" }}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/25 translate-y-19 bg-white rounded-lg p-2 md:p-3 shadow-xl z-30 min-w-[100px] md:min-w-[120px]">
                  <div className="text-lg md:text-xl font-bold">
                    {t("home.vision.years")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 relative">
            <span className="relative px-8">
              {t("home.values.title")}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <HeartIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                {t("home.values.quality.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.values.quality.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <SparklesIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                {t("home.values.tradition.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.values.tradition.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <StarIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                {t("home.values.service.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.values.service.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 relative">
            <span className="relative px-8">
              {t("home.features.title")}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-1"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <SparklesIcon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {t("home.features.quality.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.features.quality.description")}
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <ClockIcon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {t("home.features.service.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.features.service.description")}
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <ShieldCheckIcon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {t("home.features.hygiene.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.features.hygiene.description")}
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <TruckIcon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {t("home.features.delivery.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.features.delivery.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
