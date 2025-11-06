import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  type HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A custom pointer component that displays an animated cursor.
 * Automatically changes color based on theme (blue-500 in light, green-300 in dark).
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: HTMLMotionProps<"div">): React.ReactNode {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Detect touch devices using multiple methods
      const checkTouchDevice = () => {
        return (
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia('(pointer: coarse)').matches ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        );
      };

      const touchDevice = checkTouchDevice();
      setIsTouchDevice(touchDevice);

      const shouldShowCustomCursor = () => {
        return !touchDevice && window.innerWidth >= 768;
      };

      // Only set up pointer functionality on non-touch devices and medium screens+
      if (shouldShowCustomCursor()) {
        // Apply cursor: none to the entire document body
        document.body.style.cursor = "none";

        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX);
          y.set(e.clientY);
          setIsActive(true);
        };

        const handleMouseLeave = () => setIsActive(false);

        const handleResize = () => {
          if (!shouldShowCustomCursor()) {
            document.body.style.cursor = "";
            setIsActive(false);
          } else if (!document.body.style.cursor) {
            document.body.style.cursor = "none";
          }
        };

        // Add event listeners to the document for global coverage
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("resize", handleResize);

        // Set initial active state
        setIsActive(true);

        return () => {
          document.body.style.cursor = "";
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseleave", handleMouseLeave);
          window.removeEventListener("resize", handleResize);
        };
      }
    }
  }, [x, y]);

  // Don't render anything on touch devices or small screens
  if (isTouchDevice || (typeof window !== "undefined" && window.innerWidth < 768)) {
    return null;
  }

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pointer-events-none fixed z-100000 transform-[translate(-50%,-50%)] hidden md:block"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "rotate-[-70deg] text-blue-500 dark:text-green-300 drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]",
                  className
                )}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
