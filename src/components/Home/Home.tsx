import image from "/src/assets/MyImage.jpg";
import {
  MatrixRain,
  BackgroundOverlay,
} from "./Animation";
import {
  MovingProfileImage,
  MovingTitle,
  useScrollPosition,
} from "./ProfileAnimation";
import Skills from "./Skills/Skills";
import About from "./About/About";
import { useEffect } from "react";
import { Phone, Mail } from "lucide-react";

function Home() {
  const { scrollProgress } = useScrollPosition();
  
  useEffect(()=>{
    document.title="Karan Duggal-Home"
  },[])


  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Clean Design - Centered on All Devices */}
      <div className="relative w-full min-h-[88vh] sm:min-h-[93vh] md:min-h-[90.3vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-8 sm:py-0 text-center overflow-hidden transition-colors duration-700">
        <MatrixRain />
        <BackgroundOverlay />

        {/* Ambient blobs - contained */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[100px] -z-10" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[100px] -z-10" />

        {/* Profile Image - Clean Design - Centered */}
        <div className="mb-6 relative z-10 flex justify-center">
          <MovingProfileImage 
            src={image} 
            scrollProgress={scrollProgress}
            className="" 
          />
        </div>

        {/* Info Section - Clean Design - Centered */}
        <div className="relative z-10 text-Secondary flex flex-col justify-center items-center w-full max-w-[90vw] sm:max-w-[600px] px-2">
          <MovingTitle scrollProgress={scrollProgress}>
            Karan Duggal
          </MovingTitle>

          {scrollProgress < 0.3 && (
            <div className="text-sm sm:text-base md:text-lg lg:text-xl mt-6 text-secondary dark:text-secondary leading-relaxed transition-colors duration-700 w-full">
              <div className="font-semibold mb-6 text-base sm:text-lg md:text-xl lg:text-2xl">Full-Stack Developer</div>
              
              {/* Contact Info - Clean Design - Centered */}
              <div className="flex flex-col gap-3 w-full items-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/10 dark:bg-secondary/10 border border-secondary/20 flex-shrink-0">
                    <Phone size={16} className="text-secondary dark:text-secondary sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">+91-6239868675</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/10 dark:bg-secondary/10 border border-secondary/20 flex-shrink-0">
                    <Mail size={16} className="text-secondary dark:text-secondary sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg break-words">karanduggal6239@gmail.com</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content that will be scrolled */}
      <Skills />
      <About />
    </div>
  );
}

export default Home;
