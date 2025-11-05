import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// import { Pointer } from "../ui/pointer";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    [
      " cursor-none transition-all duration-300 px-3 py-2 rounded-md font-medium",
      "hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105",
      isActive
        ? "bg-black text-green-300 dark:bg-white dark:text-blue-500"
        : "text-blue-500 dark:text-green-300",
    ].join(" ");

  return (
    <header className="w-full sticky top-0 left-0 z-50 shadow-md bg-white dark:bg-black transition-colors duration-500 select-none">
      {/* <Pointer/> */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-[70px] px-6 relative">
        {/* Logo */}
        <Link
          to="/"
          className=" cursor-none text-blue-500 dark:text-green-300  text-2xl font-bold tracking-wide hover:text-gray-300 transition-colors"
        >
          Karan Duggal
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClasses}>
              Projects
            </NavLink>
          </li>
          <li className="flex items-center">
            <AnimatedThemeToggler className="cursor-none" />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <AnimatedThemeToggler />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Accordion-style Mobile Menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-inner"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <NavLink
                  to="/"
                  className={navLinkClasses}
                  onClick={() => setMenuOpen(false)}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={navLinkClasses}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
