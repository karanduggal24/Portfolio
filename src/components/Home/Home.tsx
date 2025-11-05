import image from "/src/assets/MyImage.jpg";
import { TypingAnimation } from "../ui/typing-animation";
import {
  MatrixRain,
  BackgroundOverlay,
  ProfileImage,
  AnimatedTitle,
} from "./Animation";

function Home() {
  return (
    <div className="relative w-full min-h-[93vh] md:min-h-[90.3vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-center md:text-left overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      <MatrixRain />
      <BackgroundOverlay />

      <ProfileImage src={image} size="md" className="mb-6 md:mb-0 md:mr-12" />

      <div className="relative z-10 flex flex-col justify-center items-center md:items-start">
        <AnimatedTitle>Karan Duggal</AnimatedTitle>

        <p className="text-md sm:text-lg md:text-2xl mt-[6px] text-blue-500 dark:text-green-300 leading-relaxed transition-colors duration-700">
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
