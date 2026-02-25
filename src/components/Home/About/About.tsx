import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { aboutData } from "@/static data/static";

const iconMap = {
  GraduationCap,
  Briefcase,
};

function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-10 w-full overflow-x-hidden px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-16 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-secondary dark:text-secondary font-bold font-sans mb-2">
          Education & Experience
        </h1>
        <div className="w-20 h-1 bg-secondary dark:bg-secondary mx-auto rounded-full" />
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-3xl relative z-10">
        {aboutData.map((item, index: number) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: item.type === "education" ? -40 : 40,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}
              />

              {/* Main Card */}
              <div className="relative w-full border border-secondary/60 dark:border-secondary/60 rounded-xl p-5 sm:p-6 bg-white/40 dark:bg-black/40 backdrop-blur-sm hover:border-secondary/80 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
                {/* Icon Badge */}
                <div className="absolute -top-5 left-6 bg-secondary dark:bg-secondary p-3 rounded-lg shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="mt-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-secondary dark:text-secondary font-bold font-sans mb-3">
                    <TypingAnimation>{item.title}</TypingAnimation>
                  </h3>

                  <div className="flex flex-col gap-2 mt-2">
                    {item.mode && (
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-secondary/10 dark:bg-secondary/10 rounded-full border border-secondary/30">
                          <span className="text-sm sm:text-base font-semibold text-secondary dark:text-secondary">
                            <TypingAnimation>{item.mode}</TypingAnimation>
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-secondary/80 dark:text-secondary/80">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <h4 className="text-base sm:text-lg md:text-xl font-medium font-sans">
                        <TypingAnimation>{item.place}</TypingAnimation>
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-secondary/80 dark:text-secondary/80">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <h4 className="text-base sm:text-lg md:text-xl font-medium font-sans">
                        <TypingAnimation>{item.duration}</TypingAnimation>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
