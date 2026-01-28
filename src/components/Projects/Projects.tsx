import { useEffect } from "react";
import { motion} from "motion/react";
import type { Variants, HTMLMotionProps } from "motion/react";
import { projects } from "@/static data/static";
import { Safari } from "../ui/safari";
import { FaGithub } from "react-icons/fa";
import { FloatingProfileBadge } from "../ui/FloatingProfileBadge";
import ScrollToTop from "../ui/ScrollToTop";

function Projects() {
  useEffect(() => {
    document.title = "Karan Duggal-Projects";
  }, []);

  // Explicitly typing variants fixes the staggerChildren error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Explicitly typing this as motion props for a span fixes the transition error
  const popAnimation: HTMLMotionProps<"span"> = {
    initial: { opacity: 0, scale: 0.8, y: 10 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    whileHover: { 
      scale: 1.1, 
      y: -2,
      backgroundColor: "rgba(128, 128, 128, 0.2)" 
    },
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 15 
    },
    viewport: { once: true }
  };

  const tagClass = "px-3 py-1.5 text-xs sm:text-sm bg-secondary/10 border border-secondary/30 rounded-full text-secondary dark:text-secondary font-medium shadow-sm backdrop-blur-sm cursor-none transition-colors duration-200";

  return (
    <motion.div
      className="min-h-screen bg-primary dark:bg-primary py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ScrollToTop />
      <FloatingProfileBadge />

      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-secondary dark:text-secondary font-semibold mb-4">
          Projects
        </h1>
        <motion.div
          className="w-24 h-1 bg-secondary dark:bg-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col gap-8 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Safari Preview */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div
                className="w-full max-w-lg"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="cursor-none">
                  <Safari url={project.url} imageSrc={project.img} />
                </a>
              </motion.div>
            </div>

            {/* Project Details */}
            <motion.div
            whileHover={{scale:1.05,y:1 }}
             className="w-full lg:w-1/2">
              <div className="border-2 border-dotted border-secondary dark:border-secondary rounded-2xl p-6 sm:p-8 lg:p-10 bg-primary/30 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-500">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-secondary dark:text-secondary">
                  {project.name}
                </h2>

                {project.Description && (
                  <p className="text-sm sm:text-base text-secondary dark:text-secondary lg:text-lg mb-6 leading-relaxed opacity-90">
                    {project.Description}
                  </p>
                )}

                {/* Features Section */}
                {Array.isArray(project.Highlights) && (
                  <div className="mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-secondary mb-3">
                      Features:
                    </h3>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {project.Highlights.map((highlight, i) => (
                        <motion.span key={i} className={tagClass} {...popAnimation}>
                          {highlight}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Technologies Section */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-secondary">
                    Technologies Used:
                  </h3>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      project.Frontend, project.Backend, project.StateManage,
                      project.CSS, project.DesignLib, project.DataBase, project.Deployment
                    ]
                      .filter(Boolean)
                      .map((tech, techIndex) => (
                        <motion.span key={techIndex} className={tagClass} {...popAnimation}>
                          {tech}
                        </motion.span>
                      ))}
                  </motion.div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-8">
                  <motion.a
                    href={project.Repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary dark:text-secondary cursor-none"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size="2.2em" />
                  </motion.a>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-secondary text-primary rounded-lg font-medium shadow-md cursor-none"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;