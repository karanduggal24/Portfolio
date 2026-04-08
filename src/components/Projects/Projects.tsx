import { useEffect } from "react";
import { motion } from "motion/react";
import { projects } from "@/static data/static";
import { Safari } from "../ui/safari";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MatrixRain } from "../Home/Animation";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function Projects() {
  useEffect(() => {
    document.title = "Karan Duggal-Projects";
  }, []);

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-24 py-16 sm:py-24">
      <MatrixRain />
      {/* Ambient blobs - desktop only */}
      <div className="pointer-events-none hidden sm:block absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[120px] -z-10" />
      <div className="pointer-events-none hidden sm:block absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[120px] -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-14 sm:mb-20 relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-secondary/35 dark:text-secondary/35 mb-3"
        >
          What I've built
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-secondary dark:text-secondary"
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-[3px] bg-secondary/30 dark:bg-secondary/30 mx-auto rounded-full mt-4 origin-center"
        />
      </motion.div>

      {/* Staggered Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid grid-cols-1 gap-4 sm:gap-5 relative z-10"
      >
        {projects.map((project) => (
          <ProjectBentoCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectBentoCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:bg-white/20 dark:hover:bg-white/10 hover:border-secondary/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-500"
    >
      {/* Top shine */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 rounded-full" />

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-secondary/10 via-transparent to-transparent dark:from-secondary/15" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-6 p-5 sm:p-7">

        {/* Safari Preview */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none block w-full max-w-sm"
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Safari url={project.url} imageSrc={project.img} />
          </motion.a>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-3 flex flex-col justify-between gap-4">

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary dark:text-secondary mb-3">
              {project.name}
            </h2>
            {project.Description && (
              <p className="text-xs sm:text-sm text-secondary/70 dark:text-secondary/70 leading-relaxed line-clamp-3">
                {project.Description}
              </p>
            )}
          </div>

          {/* Features */}
          {Array.isArray(project.Highlights) && project.Highlights.length > 0 && (
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary/40 dark:text-secondary/40 mb-2">
                Features
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.Highlights.slice(0, 4).map((highlight, i) => (
                  <motion.span
                    key={i}
                    className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-lg bg-secondary/10 border border-secondary/20 text-secondary dark:text-secondary cursor-none hover:bg-secondary/20 hover:border-secondary/40 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {highlight}
                  </motion.span>
                ))}
                {project.Highlights.length > 4 && (
                  <span className="px-2.5 py-1 text-[10px] text-secondary/40">
                    +{project.Highlights.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary/40 dark:text-secondary/40 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[project.Frontend, project.Backend, project.StateManage, project.CSS, project.DesignLib, project.DataBase, project.Deployment]
                .filter(Boolean)
                .slice(0, 6)
                .map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-lg bg-secondary/10 border border-secondary/20 text-secondary dark:text-secondary cursor-none hover:bg-secondary/20 hover:border-secondary/40 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {tech}
                  </motion.span>
                ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <motion.a
              href={project.Repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary dark:text-secondary cursor-none hover:bg-secondary/20 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <FaGithub size="1.2em" />
            </motion.a>

            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-secondary/90 dark:bg-secondary/90 text-white font-semibold text-sm cursor-none hover:bg-secondary transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span>View Live</span>
              <FaExternalLinkAlt size="0.8em" />
            </motion.a>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
