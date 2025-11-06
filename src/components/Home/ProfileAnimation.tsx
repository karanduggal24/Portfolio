import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Hook for scroll detection with smooth progress
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = 400; // Distance to complete the transition
      const progress = Math.min(currentScrollY / maxScroll, 1);
      
      setScrollY(currentScrollY);
      setScrollProgress(progress);
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, isScrolled, scrollProgress };
};

// Moving Profile Image Component
interface MovingProfileImageProps {
  src: string;
  scrollProgress: number;
  className?: string;
}

export const MovingProfileImage = ({ src, scrollProgress, className = "" }: MovingProfileImageProps) => {
  const isFixed = scrollProgress > 0.4;
  
  if (isFixed) {
    // Fixed position in top-left
    return (
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-20 left-6 z-9999"
      >
        <div
          style={{ backgroundImage: `url(${src})` }}
          className="w-12 h-12 bg-cover bg-center rounded-full 
          border border-secondary dark:border-secondary 
          shadow-lg transition-colors duration-700"
        />
      </motion.div>
    );
  }
  
  // Normal hero position
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`relative z-10 ${className}`}
    >
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="w-40 h-40 md:w-64 md:h-64 bg-cover bg-center rounded-full 
        border-2 border-secondary dark:border-secondary 
        shadow-[0_0_25px_5px_rgba(59,130,246,0.4)] dark:shadow-[0_0_25px_5px_rgba(74,222,128,0.5)]
        hover:shadow-[0_0_35px_10px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_35px_10px_rgba(74,222,128,0.7)]
        transition-shadow duration-700"
      />
    </motion.div>
  );
};

// Moving Title Component
interface MovingTitleProps {
  children: React.ReactNode;
  scrollProgress: number;
  className?: string;
}

export const MovingTitle = ({ children, scrollProgress, className = "" }: MovingTitleProps) => {
  const isFixed = scrollProgress > 0.6;
  
  if (isFixed) {
    // Fixed position in top-left next to image
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-20 left-20 z-9999"
      >
        <h2 className="text-lg font-semibold text-secondary dark:text-secondary transition-colors duration-700 whitespace-nowrap">
          {children}
        </h2>
        <span className="text-sm text-secondary dark:text-secondary transition-colors duration-700">
          (Front-End Developer)
        </span>
      </motion.div>
    );
  }
  
  // Normal hero position
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`text-4xl sm:text-5xl md:text-6xl font-bold 
      text-secondary dark:text-secondary drop-shadow-lg transition-colors duration-700 ${className}`}
    >
      {children}
    </motion.h1>
  );
};

// Sticky Header Component (alternative approach)
interface StickyHeaderProps {
  src: string;
  name: string;
  title: string;
  isVisible: boolean;
}

export const StickyHeader = ({ src, name, title, isVisible }: StickyHeaderProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 z-50 bg-primary dark:bg-primary backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-700"
          style={{ top: "60px" }} // Adjust based on your navbar height
        >
          <div className="flex items-center px-6 py-3">
            <div
              style={{ backgroundImage: `url(${src})` }}
              className="bg-primary dark:bg-primary w-10 h-10 bg-cover bg-center rounded-full border border-secondary dark:border-secondary mr-3"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-secondary dark:text-secondary transition-colors duration-700">
                {name}
              </h2>
              <span className="text-sm text-secondary dark:text-secondary transition-colors duration-700">
                ({title})
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};