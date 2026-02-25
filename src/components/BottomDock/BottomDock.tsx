import { Dock, DockIcon } from "../ui/dock";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Resume from "/src/assets/KaranDuggal-FullStack-Resume.pdf";
function BottomDock() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-2 pointer-events-none">
      <div className="pointer-events-auto">
        <Dock className="backdrop-blur-md bg-white/20 dark:bg-white/30 border border-white/10 rounded-2xl shadow-lg p-2 flex gap-2 sm:gap-3 transition-all duration-300">
          
          {/* GitHub */}
          <a
            href="https://github.com/karanduggal24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-none text-secondary dark:text-secondary">
              <FaGithub className="text-lg sm:text-xl" />
            </DockIcon>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/karan-duggal-7b93822b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-none text-secondary dark:text-secondary">
              <FaLinkedin className="text-lg sm:text-xl" />
            </DockIcon>
          </a>

          {/* Resume Download */}
          <a href={Resume} download>
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-none text-secondary dark:text-secondary">
              <FaFileDownload className="text-lg sm:text-xl" />
            </DockIcon>
          </a>
          
          {/* Email */}
          <a href="mailto:karanduggal6239@gmail.com">
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-none text-secondary dark:text-secondary">
              <MdEmail className="text-lg sm:text-xl" />
            </DockIcon>
          </a>
        </Dock>
      </div>
    </div>
  );
}

export default BottomDock;
