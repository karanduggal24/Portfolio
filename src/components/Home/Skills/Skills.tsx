import { skills } from "@/static data/static";
import { Marquee } from "@/components/ui/marquee";

function Skills() {
  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center w-full overflow-hidden">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 dark:text-green-300 font-bold font-sans py-10">
        Skills
      </h1>

      {/* Scrolling Marquee */}
      <Marquee>
        {skills.map((skill) => {
          const IconComp = skill.img;
          return (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center mx-6 sm:mx-10 text-blue-500 dark:text-green-300 transition-transform hover:scale-105"
            >
              {/* Responsive Icon Size */}
              <IconComp
                className="drop-shadow-md"
                size="4em" // default for accessibility
              />
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
