import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 dark:border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-colors duration-500 mt-8 mb-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          <a
            href="https://github.com/karanduggal24"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none flex items-center gap-2 text-secondary dark:text-secondary hover:opacity-80 transition-opacity duration-300"
          >
            <FaGithub size="1.2em" />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/karan-duggal-7b93822b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-none items-center gap-2 text-secondary dark:text-secondary hover:opacity-80 transition-opacity duration-300"
          >
            <FaLinkedin size="1.2em" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="mailto:[karanduggal6239@gmail.com]"
            className="flex items-center gap-2 cursor-none text-secondary dark:text-secondary hover:opacity-80 transition-opacity duration-300"
          >
            <FaEnvelope size="1.2em" />
            <span className="text-sm font-medium">Karanduggal6239@gmail.com</span>
          </a>

          <a
            href="tel:[+916239868675]"
            className="flex items-center cursor-none gap-2 text-secondary dark:text-secondary hover:opacity-80 transition-opacity duration-300"
          >
            <FaPhone size="1.2em" />
            <span className="text-sm font-medium">+91-6239868675</span>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-white/10 dark:border-white/10 pt-6">
          <p className="text-sm text-secondary/60 dark:text-secondary/60 transition-colors duration-500">
            © {currentYear} Karan Duggal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;