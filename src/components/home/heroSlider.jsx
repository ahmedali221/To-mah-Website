import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
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
        <div className="relative w-full h-[30vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
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
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-48 md:w-72 lg:w-96 h-auto drop-shadow-2xl"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - MINIMAL */}
            <motion.button
                onClick={() => navigate((currentSlide - 1 + heroImages.length) % heroImages.length)}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center z-20"
                style={{ fontSize: "1.2rem", fontWeight: 400 }}
                whileHover={{ scale: 1.07, backgroundColor: "rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <span>&lt;</span>
            </motion.button>
            <motion.button
                onClick={() => navigate((currentSlide + 1) % heroImages.length)}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center z-20"
                style={{ fontSize: "1.2rem", fontWeight: 400 }}
                whileHover={{ scale: 1.07, backgroundColor: "rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <span>&gt;</span>
            </motion.button>




        </div>
    );
}
