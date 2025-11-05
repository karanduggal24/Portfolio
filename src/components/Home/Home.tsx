import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import image from "/src/assets/MyImage.jpg";
import { TypingAnimation } from "../ui/typing-animation";

function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    // Detect dark mode dynamically
    const getIsDark = () =>
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const draw = () => {
      const isDark = getIsDark();

      // Background fade for trail
      ctx.fillStyle = isDark
        ? "rgba(0, 0, 0, 0.15)" // dark mode
        : "rgba(255, 255, 255, 0.25)"; // light mode
      ctx.fillRect(0, 0, width, height);

      // Matrix rain color
      ctx.fillStyle = isDark
        ? "rgba(74, 222, 128, 0.85)" // ✅ green-400 in dark mode
        : "rgba(59, 130, 246, 0.9)"; // ✅ blue-500 in light mode

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30a0 + Math.random() * 96);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    let animation;
    const loop = () => {
      draw();
      animation = requestAnimationFrame(loop);
    };
    loop();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Repaint when theme changes
    const themeObserver = new MutationObserver(() => {
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", handleResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-[93vh] md:min-h-[90.3vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-center md:text-left overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      {/* Matrix Rain Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none 
        bg-gradient-to-b 
        from-white/70 via-white/50 to-white/80 
        dark:from-transparent dark:via-transparent dark:to-black/90
        transition-colors duration-700"
      ></div>

      {/* Profile Image */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="relative z-10 w-40 h-40 md:w-64 md:h-64 bg-cover bg-center rounded-full 
        border-2 border-blue-500 dark:border-green-400 
        shadow-[0_0_25px_5px_rgba(59,130,246,0.4)] dark:shadow-[0_0_25px_5px_rgba(74,222,128,0.5)]
        hover:shadow-[0_0_35px_10px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_35px_10px_rgba(74,222,128,0.7)]
        transition-shadow duration-700 mb-6 md:mb-0 md:mr-12"
      ></div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold 
          text-blue-500 dark:text-green-400 drop-shadow-lg transition-colors duration-700"
        >
          Karan Duggal
        </motion.h1>

        <p
          className="text-md sm:text-lg md:text-2xl mt-[6px] 
          text-blue-500 dark:text-green-300 leading-relaxed transition-colors duration-700"
        >
          <TypingAnimation>Front-End Developer</TypingAnimation>
          <br />
          <TypingAnimation>Indian</TypingAnimation>
          <br />
          <TypingAnimation>21 Years Old</TypingAnimation>
        </p>
      </div>
    </div>
  );
}

export default Home;
