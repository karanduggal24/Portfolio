import image from "/src/assets/MyImage.jpg";
import { TypingAnimation } from "../ui/typing-animation";
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
// import { Pointer } from "../ui/pointer";

function Home() {
  const { scrollProgress } = useScrollPosition();
  
  useEffect(()=>{
    document.title="Karan Duggal-Home"
  },[])


  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-[88vh] sm:min-h-[93vh] md:min-h-[90.3vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-center md:text-left overflow-hidden bg-primary dark:bg-primary transition-colors duration-700">
        <MatrixRain />
        <BackgroundOverlay />

        <MovingProfileImage 
          src={image} 
          scrollProgress={scrollProgress}
          className="mb-6 md:mb-0 md:mr-12" 
        />

        <div className="relative z-10 text-Secondary flex flex-col justify-center items-center md:items-start">
          <MovingTitle scrollProgress={scrollProgress}>
            Karan Duggal
          </MovingTitle>

          {scrollProgress < 0.3 && (
            <div className="text-md sm:text-lg md:text-2xl mt-1.5 text-secondary dark:text-secondary leading-relaxed transition-colors duration-700">
              <TypingAnimation>Full-Stack Developer(Fresher)</TypingAnimation>
              <br />
              {/* <TypingAnimation>Indian</TypingAnimation> */}
              {/* <br /> */}
              {/* <TypingAnimation>21 Year Old</TypingAnimation> */}
              {/* <br /> */}
              <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                <Phone size={20} className="text-secondary dark:text-secondary" />
                <TypingAnimation>+91-6239868675</TypingAnimation>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                <Mail size={20} className="text-secondary dark:text-secondary" />
                <TypingAnimation>karanduggal6239@gmail.com</TypingAnimation>
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
