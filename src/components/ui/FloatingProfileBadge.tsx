import { motion } from "motion/react";

export const FloatingProfileBadge = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="fixed top-20 left-6 z-[9999]"
  >
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-full 
      bg-primary/80 dark:bg-primary/80 backdrop-blur-md shadow-md 
      border border-secondary/40 dark:border-secondary/30 transition-all duration-700"
    >
      <div
        style={{ backgroundImage: `url('/src/assets/MyImage.jpg')` }}
        className="w-10 h-10 bg-cover bg-center rounded-full 
        border border-secondary dark:border-secondary shadow-md"
      />
      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-secondary dark:text-secondary whitespace-nowrap">
          Karan Duggal
        </h2>
        <span className="text-xs text-secondary/80 dark:text-secondary/80">
          Front-End Developer
        </span>
      </div>
    </div>
  </motion.div>
);
