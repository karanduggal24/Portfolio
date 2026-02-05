// import { IoLogoJavascript } from "react-icons/io5";
import TurfKings from "/src/assets/Turf-Kings.png";
import Clothing from "/src/assets/ProjectImg.png";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

interface AboutItem {
  id: number;
  type: "education" | "experience";
  title: string;
  place: string;
  duration: string;
  mode?: string; // e.g. "Internship"
  icon: "GraduationCap" | "Briefcase";
  gradient: string; // for bg gradient direction
}
import { type IconBaseProps } from "react-icons";

interface Skill {
  name: string;
  img?: React.ComponentType<IconBaseProps>;
  id: number;
}

interface Project {
  name: string;
  img?: string;
  id: number;
  url: string;
  Frontend: string;
  Backend?: string;
  DesignLib?: String;
  CSS: string;
  Deployment: string;
  DataBase: string;
  StateManage: string;
  Description: string;
  Repo: string;
  Highlights: string[];
}

export const aboutData: AboutItem[] = [
  {
    id: 1,
    type: "experience",
    title: "Full-Stack Developer",
    place: "Brainspack, Yamunanagar",
    duration: "July 2025 - Present",
    mode: "Internship",
    icon: "Briefcase",
    gradient: "from-secondary/10 to-secondary/20",
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Applications",
    place: "D.A.V. College, Amritsar",
    duration: "2022 - 2025",
    icon: "GraduationCap",
    gradient: "from-secondary/20 to-secondary/10",
  },
];

// interface Skills extends Array<Skills>{}
export const projects: Project[] = [
  {
    name: "Clothing-Store",
    Highlights: [
      "Responsive",
      "Admin-Panel",
      "Order-Confirmation",
      "Functional",
      "RazorPay Gateway",
    ],
    id: 1,
    img: Clothing,
    url: "https://react-clothing.vercel.app/",
    Frontend: "React",
    Backend: " Python (FastAPI)",
    DataBase: "MySQL",
    StateManage: "Redux-toolkit",
    CSS: "Tailwind-CSS",
    Deployment: "Vercel (Frontend Deployment),Render(Backend Deployment)",
    DesignLib: "ShadCN,MagicUI",
    Repo: "https://github.com/karanduggal24/React-Clothing",
    Description:
      "Clothing-Store -> A fully deployed, full-stack eCommerce platform built with React on the frontend and a robust Python FastAPI backend powered by a MySQL databaseDesigned with a sleek, modern UI and smooth navigation, it delivers a seamless shopping experience—from browsing curated apparel and accessories to secure checkout The system features efficient API communication, optimized performance, and a scalable architecture ready for real-world use.",
  },
  {
    name: "Turf-Kings",
    Highlights: ["Responsive", "Ongoing"],
    id: 2,
    img: TurfKings,
    url: "https://turf-kings.vercel.app/",
    Frontend: "NextJS",
    DataBase: "Supabase(PostgreSQL)",
    StateManage: "Zustand",
    CSS: "Tailwind-CSS",
    Deployment: "Vercel for Deployment",
    Repo: "https://github.com/karanduggal24/Turf-Kings",
    Description:
      "TurfKings | Turf Booking Platform Developed a comprehensive web application designed to streamline the process of finding and booking sports facilities. The platform features a dynamic search system for various sports like cricket and football, allowing users to browse premium venues, check real-time availability, and manage bookings. It focuses on a high-performance user interface with a seamless flow from turf discovery to final reservation.",
  },
];
export const skills2: Skill[] = [
  {
    name: "Python",
    id: 1,
    img: FaPython,
  },
  {
    name: "FastAPI",
    id: 2,
    img: SiFastapi,
  },
  {
    name: "MySQL",
    id: 3,
    img: SiMysql,
  },
  {
    name: "Python",
    id: 5,
    img: FaPython,
  },
  {
    name: "JavaScript",
    id: 4,
    img: SiJavascript,
  },
];

export const skills: Skill[] = [
  {
    name: "Next.js",
    id: 1,
    img: SiNextdotjs,
  },
  {
    name: "TypeScript",
    id: 2,
    img: SiTypescript,
  },
  {
    name: "HTML",
    id: 3,
    img: FaHtml5,
  },
  {
    name: "CSS",
    id: 4,
    img: FaCss3Alt,
  },
  {
    name: "React",
    id: 5,
    img: FaReact,
  },
  {
    name: "Tailwind",
    id: 6,
    img: RiTailwindCssFill,
  },
];
