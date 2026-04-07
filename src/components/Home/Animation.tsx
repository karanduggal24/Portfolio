
// Matix Rain

// import { useEffect, useRef } from "react";
// import { motion } from "motion/react";

// interface MatrixRainProps {
//   className?: string;
// }

// export const MatrixRain = ({ className = "" }: MatrixRainProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     // Detect dark mode dynamically
//     const getIsDark = () => {
//       return document.documentElement.classList.contains("dark");
//     };

//     // Matrix rain setup
//     const fontSize = 16;
//     const columns = Math.floor(width / fontSize);
//     const drops = Array(columns).fill(1);

//     // Floating particles setup
//     interface Particle {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       radius: number;
//       opacity: number;
//     }

//     const particles: Particle[] = [];
//     const particleCount = 50;

//     // Initialize particles
//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         radius: Math.random() * 3 + 2,
//         opacity: Math.random() * 0.5 + 0.3,
//       });
//     }

//     // Initial background fill
//     const initBackground = () => {
//       const isDark = getIsDark();
//       ctx.fillStyle = isDark ? "#000000" : "#ffffff";
//       ctx.fillRect(0, 0, width, height);
//     };
    
//     initBackground();

//     const drawMatrixRain = () => {
//       // Background fade for trail
//       ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
//       ctx.fillRect(0, 0, width, height);

//       // Matrix rain color (green)
//       ctx.fillStyle = "rgba(74, 222, 128, 0.9)";
//       ctx.font = `${fontSize}px monospace`;

//       for (let i = 0; i < drops.length; i++) {
//         const text = String.fromCharCode(0x30a0 + Math.random() * 96);
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
//         drops[i]++;
//       }
//     };

//     const drawFloatingParticles = () => {
//       // Clear with white background
//       ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
//       ctx.fillRect(0, 0, width, height);

//       // Update and draw particles
//       particles.forEach((p) => {
//         // Update position
//         p.x += p.vx;
//         p.y += p.vy;

//         // Bounce off edges
//         if (p.x < 0 || p.x > width) p.vx *= -1;
//         if (p.y < 0 || p.y > height) p.vy *= -1;

//         // Keep within bounds
//         p.x = Math.max(0, Math.min(width, p.x));
//         p.y = Math.max(0, Math.min(height, p.y));

//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`; // secondary color for light mode
//         ctx.fill();

//         // Draw glow
//         const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
//         gradient.addColorStop(0, `rgba(59, 130, 246, ${p.opacity * 0.3})`);
//         gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
//         ctx.fill();
//       });
//     };

//     let animation: number;
//     let currentMode = getIsDark();
    
//     const loop = () => {
//       const isDark = getIsDark();
      
//       // If mode changed, reinitialize background
//       if (isDark !== currentMode) {
//         currentMode = isDark;
//         initBackground();
//       }
      
//       if (isDark) {
//         drawMatrixRain();
//       } else {
//         drawFloatingParticles();
//       }
      
//       animation = requestAnimationFrame(loop);
//     };
//     loop();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
      
//       // Reinitialize particles for new dimensions
//       particles.length = 0;
//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * width,
//           y: Math.random() * height,
//           vx: (Math.random() - 0.5) * 0.5,
//           vy: (Math.random() - 0.5) * 0.5,
//           radius: Math.random() * 3 + 2,
//           opacity: Math.random() * 0.5 + 0.3,
//         });
//       }
      
//       initBackground();
//     };

//     // Repaint when theme changes
//     const themeObserver = new MutationObserver(() => {
//       initBackground();
//     });
//     themeObserver.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });

//     window.addEventListener("resize", handleResize);

//     return () => {
//       cancelAnimationFrame(animation);
//       window.removeEventListener("resize", handleResize);
//       themeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className={`absolute inset-0 z-0 w-full h-full ${className}`}
//     />
//   );
// };

// export const BackgroundOverlay = ({
//   className = "",
// }: {
//   className?: string;
// }) => (
//   <div
//     className={`absolute inset-0 z-0 pointer-events-none 
//     bg-gradient-to-b 
//     from-white/70 via-white/50 to-white/80 
//     dark:from-transparent dark:via-transparent dark:to-black/90
//     transition-colors duration-700 ${className}`}
//   />
// );

// interface ProfileImageProps {
//   src: string;
//   className?: string;
//   size?: "sm" | "md" | "lg";
// }

// export const ProfileImage = ({
//   src,
//   className = "",
//   size = "md",
// }: ProfileImageProps) => {
//   const sizeClasses = {
//     sm: "w-32 h-32 md:w-48 md:h-48",
//     md: "w-40 h-40 md:w-64 md:h-64",
//     lg: "w-48 h-48 md:w-80 md:h-80",
//   };

//   return (
//     <div
//       style={{ backgroundImage: `url(${src})` }}
//       className={`relative z-10 ${sizeClasses[size]} bg-cover bg-center rounded-full 
//       border-2 border-secondary dark:border-secondary 
//       shadow-[0_0_25px_5px_rgba(59,130,246,0.4)] dark:shadow-[0_0_25px_5px_rgba(74,222,128,0.5)]
//       hover:shadow-[0_0_35px_10px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_35px_10px_rgba(74,222,128,0.7)]
//       transition-shadow duration-700 ${className}`}
//     />
//   );
// };

// interface AnimatedTitleProps {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
// }

// export const AnimatedTitle = ({
//   children,
//   className = "",
//   delay = 0,
// }: AnimatedTitleProps) => {
//   return (
//     <motion.h1
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay }}
//       className={`text-4xl sm:text-5xl md:text-6xl font-bold 
//       text-secondary dark:text-secondary drop-shadow-lg transition-colors duration-700 ${className}`}
//     >
//       {children}
//     </motion.h1>
//   );
// };


//Constellation

// import { useEffect, useRef } from "react";

// interface MatrixRainProps {
//   className?: string;
// }

// export const MatrixRain = ({ className = "" }: MatrixRainProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     // --- Configuration ---
//     const particleCount = 80; 
//     const connectionDistance = 150;
//     const particleSpeed = 0.6;
//     let animationFrame: number;

//     const getIsDark = () => document.documentElement.classList.contains("dark");

//     interface Particle {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//     }

//     let particles: Particle[] = [];

//     const initParticles = () => {
//       particles = [];
//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * width,
//           y: Math.random() * height,
//           vx: (Math.random() - 0.5) * particleSpeed,
//           vy: (Math.random() - 0.5) * particleSpeed,
//         });
//       }
//     };

//     const draw = () => {
//       const isDark = getIsDark();
      
//       // Clear background based on theme
//       ctx.fillStyle = isDark ? "#000000" : "#ffffff";
//       ctx.fillRect(0, 0, width, height);

//       // Theme Colors: Matrix Green for Dark, Electric Blue for Light
//       const color = isDark ? "74, 222, 128" : "59, 130, 246";

//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         // Update Position
//         p.x += p.vx;
//         p.y += p.vy;

//         // Screen Bounce
//         if (p.x < 0 || p.x > width) p.vx *= -1;
//         if (p.y < 0 || p.y > height) p.vy *= -1;

//         // Draw Particle Node
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = `rgb(${color})`;
//         ctx.fill();

//         // Draw Connections
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const dx = p.x - p2.x;
//           const dy = p.y - p2.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < connectionDistance) {
//             const opacity = 1 - dist / connectionDistance;
//             ctx.beginPath();
//             ctx.lineWidth = 0.8;
//             ctx.strokeStyle = `rgba(${color}, ${opacity * 0.4})`;
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const loop = () => {
//       draw();
//       animationFrame = requestAnimationFrame(loop);
//     };

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // Initialize and Start
//     initParticles();
//     loop();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className={`absolute inset-0 z-0 w-full h-full pointer-events-none ${className}`}
//     />
//   );
// };


//Asci Flow 

// import { useEffect, useRef } from "react";

// interface MatrixRainProps {
//   className?: string;
// }

// export const MatrixRain = ({ className = "" }: MatrixRainProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);
//     let animationFrame: number;
//     let time = 0;

//     const getIsDark = () => document.documentElement.classList.contains("dark");

//     // --- Configuration ---
//     const particleCount = 100;
//     const fontSize = 16;
//     const characters = "01アイウエオカキクケコサシスセソタチツテト".split("");

//     interface Particle {
//       x: number;
//       y: number;
//       speed: number;
//       char: string;
//     }

//     let particles: Particle[] = [];

//     const initParticles = () => {
//       particles = [];
//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * width,
//           y: Math.random() * height,
//           speed: Math.random() * 2 + 1,
//           char: characters[Math.floor(Math.random() * characters.length)],
//         });
//       }
//     };

//     const draw = () => {
//       const isDark = getIsDark();
//       time += 0.005;

//       // Create the "Trail" effect by not clearing the screen fully
//       // This makes the characters look like they are "painting" the screen
//       ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)";
//       ctx.fillRect(0, 0, width, height);

//       const color = isDark ? "74, 222, 128" : "59, 130, 246";
//       ctx.font = `${fontSize}px monospace`;

//       particles.forEach((p) => {
//         // 1. The Flow Field Math (Perlin-like noise using trig)
//         // This determines the 'angle' the particle moves at based on its position
//         const angle = 
//           Math.sin(p.x * 0.005 + time) * Math.PI * 2 + 
//           Math.cos(p.y * 0.005 + time) * Math.PI * 2;

//         // 2. Update Position based on angle
//         p.x += Math.cos(angle) * p.speed;
//         p.y += Math.sin(angle) * p.speed;

//         // 3. Teleport if off-screen
//         if (p.x < 0) p.x = width;
//         if (p.x > width) p.x = 0;
//         if (p.y < 0) p.y = height;
//         if (p.y > height) p.y = 0;

//         // 4. Draw the Character
//         ctx.fillStyle = `rgba(${color}, 0.8)`;
//         ctx.fillText(p.char, p.x, p.y);

//         // Randomly switch character for that "glitch" look
//         if (Math.random() > 0.98) {
//           p.char = characters[Math.floor(Math.random() * characters.length)];
//         }
//       });
//     };

//     const loop = () => {
//       draw();
//       animationFrame = requestAnimationFrame(loop);
//     };

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//       initParticles();
//     };

//     initParticles();
//     loop();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className={`absolute inset-0 z-0 w-full h-full pointer-events-none ${className}`}
//     />
//   );
// };


import { useEffect, useRef } from "react";

interface MatrixRainProps {
  className?: string;
}

export const MatrixRain = ({ className = "" }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track initial dimensions
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrame: number;
    let time = 0;

    const getIsDark = () => document.documentElement.classList.contains("dark");

    // --- Configuration ---
    const isMobile = width < 768;
    const particleCount = isMobile ? 40 : 100; // Fewer particles on mobile for performance
    const fontSize = 16;
    const characters = "01アイウエオカキクケコサシスセソタチツテト".split("");

    interface Particle {
      x: number;
      y: number;
      speed: number;
      char: string;
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          speed: Math.random() * 2 + 1,
          char: characters[Math.floor(Math.random() * characters.length)],
        });
      }
    };

    const draw = () => {
      const isDark = getIsDark();
      time += 0.005;

      ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, width, height);

      const color = isDark ? "74, 222, 128" : "59, 130, 246";
      ctx.font = `${fontSize}px monospace`;

      particles.forEach((p) => {
        const angle = 
          Math.sin(p.x * 0.005 + time) * Math.PI * 2 + 
          Math.cos(p.y * 0.005 + time) * Math.PI * 2;

        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.fillStyle = `rgba(${color}, 0.8)`;
        ctx.fillText(p.char, p.x, p.y);

        if (Math.random() > 0.98) {
          p.char = characters[Math.floor(Math.random() * characters.length)];
        }
      });
    };

    const loop = () => {
      draw();
      animationFrame = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // FIX: Only re-initialize if the WIDTH changes (ignores mobile URL bar toggle)
      if (newWidth !== width) {
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
        initParticles();
      } else {
        // If only height changed, just update canvas height without resetting particles
        height = canvas.height = newHeight;
      }
    };

    initParticles();
    loop();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};