import { useEffect } from "react";
import { motion } from "motion/react";
import { projects } from "@/static data/static";
import { Safari } from "../ui/safari";
import { FaGithub } from "react-icons/fa";
import { FloatingProfileBadge } from "../ui/FloatingProfileBadge";
import ScrollToTop from "../ui/ScrollToTop";

function Projects() {
useEffect(()=>{
  document.title="Karan Duggal-Projects"
},[])  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

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
        className="max-w-7xl mx-auto mb-12"
        variants={headerVariants}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl text-center text-secondary dark:text-secondary font-semibold font-sans mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-secondary dark:bg-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="max-w-7xl mx-auto space-y-16 lg:space-y-24"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col gap-8 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center`}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Safari Preview */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-full max-w-lg transform transition-transform duration-300"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-none"
                >
                  <Safari url={project.url} imageSrc={project.img} />
                </a>
              </motion.div>
            </motion.div>

            {/* Project Details */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="border-2 border-dotted border-secondary dark:border-secondary rounded-2xl p-6 sm:p-8 lg:p-10 bg-primary/30 backdrop-blur-sm hover:bg-primary/50 transition-all duration-300 hover:shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-secondary dark:text-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.name}
                </motion.h2>

                {/* Description */}
                {project.Description && (
                  <motion.p 
                    className="text-sm sm:text-base text-secondary dark:text-secondary lg:text-lg mb-6 leading-relaxed opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {project.Description}
                  </motion.p>
                )}
    {Array.isArray(project.Highlights) && (
  <motion.div 
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.0 }}
    viewport={{ once: true }}
  >
    {/* Section Title */}
    <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-secondary mb-3">
      Features:
    </h3>

    {/* Feature Tags */}
    <div className="flex flex-wrap gap-2">
      {project.Highlights.map((highlight, i) => (
        <motion.span
          key={i}
          className="px-3 py-1.5 text-xs sm:text-sm bg-secondary/10 border border-secondary/30 
                     rounded-full text-secondary dark:text-secondary font-medium 
                     hover:bg-secondary/20 hover:scale-105 transition-all duration-200
                     shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -2 }}
        >
          {highlight}
        </motion.span>
      ))}
    </div>
  </motion.div>
)}

                {/* Technologies Section */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-secondary">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      project.Frontend,
                      project.Backend,
                      project.StateManage,
                      project.CSS,
                      project.DesignLib,
                      project.DataBase,
                    ]
                      .filter(Boolean)
                      .map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs sm:text-sm bg-secondary/10 border border-secondary/30 rounded-full text-secondary dark:text-secondary font-medium hover:bg-secondary/20 transition-colors duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.6 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                  </div>
                </motion.div>

                {/* View Project Link */}
                <motion.div 
                  className="flex items-center gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.Repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none inline-block text-secondary rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size="2em" />
                  </motion.a>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none inline-block px-6 py-2 bg-secondary text-primary rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
