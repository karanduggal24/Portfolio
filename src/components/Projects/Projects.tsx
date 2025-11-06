import React from 'react';
import { projects } from '@/static data/static';
import { Safari } from '../ui/safari';
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className='min-h-screen bg-primary dark:bg-primary py-12 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='max-w-7xl mx-auto mb-12'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center text-secondary dark:text-secondary font-semibold font-sans mb-4'>
          Projects
        </h1>
        <div className='w-24 h-1 bg-secondary dark:bg-secondary mx-auto rounded-full'></div>
      </div>

      {/* Projects Grid */}
      <div className='max-w-7xl mx-auto space-y-16 lg:space-y-24'>
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`flex flex-col gap-8 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center`}
          >
            {/* Safari Preview */}
            <div className='w-full lg:w-1/2 flex justify-center'>
              <div className='w-full max-w-lg transform transition-transform duration-300 hover:scale-105'>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className='cursor-none'>
                  <Safari url={project.url} imageSrc={project.img}/>
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className='w-full lg:w-1/2'>
              <div className="border-2 border-dotted border-secondary dark:border-secondary rounded-2xl p-6 sm:p-8 lg:p-10 bg-primary/30 backdrop-blur-sm hover:bg-primary/50 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-secondary dark:text-secondary">
                  {project.name}
                </h2>

                {/* Description */}
                {project.Description && (
                  <p className="text-sm sm:text-base text-secondary dark:text-secondary lg:text-lg mb-6 leading-relaxed opacity-90">
                    {project.Description}
                  </p>
                )}

                {/* Technologies Section */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-secondary">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      project.Frontend,
                      project.Backend,
                      project.StateManage,
                      project.CSS,
                      project.DesignLib
                    ].filter(Boolean).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-secondary/10 border border-secondary/30 rounded-full text-secondary dark:text-secondary font-medium hover:bg-secondary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-4 mt-6">
  <a
    href={project.Repo}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-none inline-block text-secondary rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
  >
    <FaGithub size="2em" />
  </a>
  
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-none inline-block px-6 py-2 bg-secondary text-primary rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
  >
    View Project
  </a>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;