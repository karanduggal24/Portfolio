import { useEffect } from "react";
import { motion } from "motion/react";
import { projects } from "@/static data/static";
import { Safari } from "../ui/safari";
import { FaGithub } from "react-icons/fa";
import { FloatingProfileBadge } from "../ui/FloatingProfileBadge";
import ScrollToTop from "../ui/ScrollToTop";

function Projects() {
  useEffect(() => {
    document.title = "Karan Duggal-Projects";
  }, []);

  // Animation for the tags (Features/Tech)
  const tagVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  const popHover = {
    scale: 1.15,
    y: -5,
    backgroundColor: "rgba(var(--secondary-rgb), 0.2)", // Uses your secondary color if defined
  };

  // Shared class for tags
  const tagClass = "px-3 py-1.5 text-xs sm:text-sm bg-secondary/10 border border-secondary/30 rounded-full text-secondary dark:text-secondary font-medium shadow-sm backdrop-blur-sm cursor-none transition-colors duration-200";

  return (
    <motion.div
      className="min-h-screen bg-primary dark:bg-primary py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
    >
      <ScrollToTop />
      <FloatingProfileBadge />

      {/* Header */}
      <motion.div 
        className="max-w-7xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-secondary font-semibold mb-4">Projects</h1>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-32">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col gap-10 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}>
            
            {/* Safari Preview - Slides in from side */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-lg">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="cursor-none">
                  <Safari url={project.url} imageSrc={project.img} />
                </a>
              </motion.div>
            </motion.div>

            {/* Project Details */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="border-2 border-dotted border-secondary rounded-2xl p-6 sm:p-10 bg-primary/30 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-secondary">{project.name}</h2>
                <p className="text-sm sm:text-lg text-secondary/80 mb-6 leading-relaxed">{project.Description}</p>

                {/* Features Section */}
                {Array.isArray(project.Highlights) && (
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-secondary mb-3 uppercase tracking-tight">Features</h3>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ staggerChildren: 0.1 }}
                    >
                      {project.Highlights.map((highlight, i) => (
                        <motion.span
                          key={i}
                          variants={tagVariants}
                          whileHover={popHover}
                          className={tagClass}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Technologies Section */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-secondary mb-3 uppercase tracking-tight">Tech Stack</h3>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                  >
                    {[
                      project.Frontend, project.Backend, project.StateManage,
                      project.CSS, project.DesignLib, project.DataBase, project.Deployment
                    ].filter(Boolean).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={tagVariants}
                        whileHover={popHover}
                        className={tagClass}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <motion.a 
                    href={project.Repo} 
                    target="_blank" 
                    className="text-secondary cursor-none" 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <FaGithub size="2.5em" />
                  </motion.a>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    className="px-8 py-3 bg-secondary text-primary rounded-xl font-bold shadow-lg cursor-none"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;