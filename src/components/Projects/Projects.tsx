import { useEffect } from "react";
import { motion} from "motion/react";
import type {Variants, TargetAndTransition} from "motion/react";
import { projects } from "@/static data/static";
import { Safari } from "../ui/safari";
import { FaGithub } from "react-icons/fa";
import { FloatingProfileBadge } from "../ui/FloatingProfileBadge";
import ScrollToTop from "../ui/ScrollToTop";

function Projects() {
  useEffect(() => {
    document.title = "Karan Duggal - Projects";
  }, []);

  // Fix for TS2322: Explicitly type the variants
  const tagVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      } 
    }
  };

  // Fix for TS2322: Explicitly type the hover transition
  const smoothPop: TargetAndTransition = {
    scale: 1.12,
    y: -4,
    // Note: Ensure your 'secondary' color allows for transparency or use a hex
    backgroundColor: "rgba(125, 125, 125, 0.1)", 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 18,
      mass: 0.8 
    }
  };

  const tagClass = "px-3 py-1.5 text-xs sm:text-sm bg-secondary/10 border border-secondary/30 rounded-full text-secondary dark:text-secondary font-medium shadow-sm backdrop-blur-sm cursor-none select-none transition-colors duration-300";

  return (
    <motion.div
      className="min-h-screen bg-primary dark:bg-primary py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
    >
      <ScrollToTop />
      <FloatingProfileBadge />

      <div className="max-w-7xl mx-auto space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col gap-10 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Project Preview */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.01, y: -5 }} 
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="w-full max-w-lg shadow-2xl rounded-xl overflow-hidden"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="cursor-none">
                  <Safari url={project.url} imageSrc={project.img} />
                </a>
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2">
              <div className="p-2">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary">{project.name}</h2>
                <p className="text-secondary/70 mb-8 leading-relaxed text-base sm:text-lg">
                  {project.Description}
                </p>

                {/* Features & Tech Sections */}
                {[
                  { title: "Key Features", data: project.Highlights },
                  { title: "Tech Stack", data: [
                    project.Frontend, project.Backend, project.StateManage,
                    project.CSS, project.DesignLib, project.DataBase, project.Deployment
                  ].filter(Boolean) }
                ].map((section, sIdx) => (
                  <div key={sIdx} className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/50 mb-4">
                      {section.title}
                    </h3>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ staggerChildren: 0.05 }}
                    >
                      {section.data?.map((item, i) => (
                        <motion.span
                          key={i}
                          layout
                          variants={tagVariants}
                          whileHover={smoothPop} // No more TS errors here
                          className={tagClass}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                ))}

                {/* Action Links */}
                <div className="flex items-center gap-6 mt-10">
                  <motion.a 
                    href={project.Repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary opacity-70 hover:opacity-100 transition-opacity cursor-none"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <FaGithub size="2.2em" />
                  </motion.a>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-secondary text-primary rounded-full font-bold shadow-lg shadow-secondary/20 cursor-none"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Launch Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;