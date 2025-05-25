import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logot.png";
import image1 from "../../assets/Slider1.jpeg";
import image2 from "../../assets/Slider7.jpeg";
import image3 from "../../assets/Slider4.jpeg";

const heroImages = [image1, image2, image3];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const navigate = (newIndex) => {
        setDirection(newIndex > currentSlide ? 1 : -1);
        setCurrentSlide(newIndex);
    };

    const variants = {
        enter: (direction) => ({
            scale: direction > 0 ? 1.2 : 0.8,
            opacity: 0,
        }),
        center: {
            scale: 1,
            opacity: 1,
            transition: {
                scale: { duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] },
                opacity: { duration: 0.8 }
            }
        },
        exit: (direction) => ({
            scale: direction > 0 ? 0.8 : 1.2,
            opacity: 0,
            transition: { duration: 0.8 }
        })
    };

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-black">
            <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute w-full h-full"
                >
                    <motion.img
                        src={heroImages[currentSlide]}
                        alt={`Hero Slide ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                    />

                    <motion.div
                        className="absolute top-16 left-1/2 -translate-x-1/2 z-10"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-36 md:w-56 h-auto drop-shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
                onClick={() => navigate((currentSlide - 1 + heroImages.length) % heroImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm"
                aria-label="Previous slide"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <span className="text-2xl font-bold">&lt;</span>
            </motion.button>

            <motion.button
                onClick={() => navigate((currentSlide + 1) % heroImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm"
                aria-label="Next slide"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <span className="text-2xl font-bold">&gt;</span>
            </motion.button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {heroImages.map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => navigate(idx)}
                        className={`w-3 h-3 rounded-full ${idx === currentSlide ? "bg-white" : "bg-white/50"} relative`}
                        aria-label={`Go to slide ${idx + 1}`}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 500 }}
                    >
                        {idx === currentSlide && (
                            <motion.span
                                className="absolute inset-0 rounded-full bg-white"
                                layoutId="indicator"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}