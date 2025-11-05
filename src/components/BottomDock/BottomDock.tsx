import { Dock, DockIcon } from "../ui/dock";
import { HomeIcon, Settings, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function BottomDock() {
  return (
    <div>
      {/* Fixed Dock Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <Dock className="backdrop-blur-md bg-white/20 dark:bg-white/30 border border-white/10 rounded-2xl shadow-lg p-2 flex gap-4 transition-all duration-300">
          {/* GitHub (External) */}
          <a
            href="https://github.com/karanduggal24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-pointer text-blue-500 dark:text-green-400">
              <FaGithub className="h-[2em]" />
            </DockIcon>
          </a>

          {/* Settings (Internal route) */}
          <a
            href="https://www.linkedin.com/in/karan-duggal-7b93822b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-pointer text-blue-500 dark:text-green-400">
              <FaLinkedin /> 
            </DockIcon>
          </a>

          {/* Search (Internal route) */}
          <Link to="/search">
            <DockIcon className="hover:scale-110 transition-transform duration-200 cursor-pointer text-blue-500 dark:text-green-400">
              <Search />
            </DockIcon>
          </Link>
        </Dock>
      </div>
    </div>
  );
}

export default BottomDock;
