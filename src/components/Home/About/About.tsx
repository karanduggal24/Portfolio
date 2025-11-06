import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion } from "motion/react";

function About() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-10 w-full overflow-hidden px-6 sm:px-10 md:px-16 lg:px-32 py-10">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-secondary dark:text-secondary font-bold font-sans">
        Education and Experience
      </h1>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full sm:w-[90%] md:w-[600px] lg:w-[700px] border border-secondary dark:border-secondary rounded-xl p-5 sm:p-6 flex flex-col items-start justify-center bg-transparent"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl text-secondary dark:text-secondary font-semibold font-sans">
          <TypingAnimation>
            B.C.A (Bachelor of Computer Applications)
          </TypingAnimation>
        </h3>
        <h4 className="text-md sm:text-lg md:text-xl text-secondary dark:text-secondary font-medium font-sans mt-2">
          <TypingAnimation>D.A.V. College, Amritsar</TypingAnimation>
        </h4>
        <h4 className="text-md sm:text-lg md:text-xl text-secondary dark:text-secondary font-medium font-sans mt-1">
          <TypingAnimation>2022 - 2025</TypingAnimation>
        </h4>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full sm:w-[90%] md:w-[600px] lg:w-[700px] border border-secondary dark:border-secondary rounded-xl p-5 sm:p-6 flex flex-col items-start justify-center bg-transparent"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl text-secondary dark:text-secondary font-semibold font-sans">
          <TypingAnimation>BrainsPack, Yamunanagar</TypingAnimation>
        </h3>
        <h4 className="text-md sm:text-lg md:text-xl text-secondary dark:text-secondary font-medium font-sans mt-2">
          <TypingAnimation>Internship</TypingAnimation>
        </h4>
        <h4 className="text-md sm:text-lg md:text-xl text-secondary dark:text-secondary font-medium font-sans mt-1">
          <TypingAnimation>July 2025 - Present</TypingAnimation>
        </h4>
      </motion.div>
    </section>
  );
}

export default About;
