// components/home/SectionWrapper.jsx
import { motion } from "framer-motion";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <motion.section
      className={`max-w-[100rem] mx-auto px-8 sm:px-6 lg:px-8 py-8 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {children}
    </motion.section>
  );
}