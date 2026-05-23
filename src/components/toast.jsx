import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        role="alert"
        transition={{ duration: 0.3 }}
        className={`fixed top-6 right-6 text-white px-5 py-3 rounded-xl 
            shadow-lg animate-fade-in ${type ? "bg-twitter" : "bg-red"}`}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
}
