import { Dock, DockIcon } from "../ui/dock";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Pointer } from "../ui/pointer";
function BottomDock() {
  return (
    <div>
      
      {/* Fixed Dock Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <Pointer />
        <Dock className="backdrop-blur-md bg-white/20 dark:bg-white/30 border border-white/10 rounded-2xl shadow-lg p-2 flex gap-4 transition-all duration-300">
          
          {/* GitHub (External) */}
          <a
            href="https://github.com/karanduggal24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockIcon className="  hover:scale-110 transition-transform duration-200 cursor-none text-blue-500 dark:text-green-400">
              <FaGithub size="1.5em" />
            </DockIcon>
          </a>

          {/* Settings (Internal route) */}
          <a
            href="https://www.linkedin.com/in/karan-duggal-7b93822b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-none text-blue-500 dark:text-green-400">
              <FaLinkedin size="1.5em" />
            </DockIcon>
          </a>

          {/* Search (Internal route) */}
          <a href="/src/assets/ResumeATSFriendly.pdf" download>
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-none text-blue-500 dark:text-green-400">
              <FaFileDownload size="1.5em" />
            </DockIcon>
          </a>
        </Dock>
      </div>
    </div>
  );
}

export default BottomDock;
