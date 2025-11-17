import { skills, skills2 } from "@/static data/static";
import { Marquee } from "@/components/ui/marquee";

function Skills() {
  return (
    <div className="min-h-[40vh] sm:min-h-[50vh] flex flex-col justify-center items-center w-full overflow-hidden">
      {/* Section Title */}
      {/* <h1 className="text-3xl sm:text-4xl md:text-5xl text-secondary dark:secondary font-bold font-sans py-6 sm:py-10">
        Skills
      </h1> */}
      <div className="min-h-[40vh] sm:min-h-[50vh] flex flex-col justify-center items-center w-full overflow-hidden" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-secondary dark:secondary font-bold font-sans py-6 sm:py-10">
          Back-End Skills </h1>  
        <Marquee className="[--duration:10s]">
        {skills2.map((skill) => {
          const IconComp = skill.img;
          return (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center mx-6 sm:mx-10 text-secondary dark:text-secondary transition-transform hover:scale-105"
            >
              {/* Responsive Icon Size */}
              {IconComp && (
                <IconComp
                  className="drop-shadow-md text-6xl"
                />
              )}
              <h1 className="text-xs sm:text-sm md:text-base mt-2 font-medium text-center">
                {skill.name}
              </h1>
            </div>
          );
        })}
      </Marquee>
      
      </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl text-secondary dark:secondary font-bold font-sans py-6 sm:py-10">Front-End Skills</h1>
      {/* Scrolling Marquee */}
      <Marquee reverse={true} className="[--duration:10s]">
        {skills.map((skill) => {
          const IconComp = skill.img;
          return (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center mx-6 sm:mx-10 text-secondary dark:text-secondary transition-transform hover:scale-105"
            >
              {/* Responsive Icon Size */}
              {IconComp && (
                <IconComp
                  className="drop-shadow-md text-6xl"
                />
              )}
              <h1 className="text-xs sm:text-sm md:text-base mt-2 font-medium text-center">
                {skill.name}
              </h1>
            </div>
          );
        })}
      </Marquee>
      
    </div>
  );
}
export default Skills;
