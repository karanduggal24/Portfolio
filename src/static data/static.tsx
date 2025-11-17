// import { IoLogoJavascript } from "react-icons/io5";
import ReactClothing from "/src/assets/ProjectImg.png";

import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
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
  DesignLib: String;
  CSS: string;
  StateManage: string;
  Description: string;
  Repo:string
  Highlights:string[]
}

export const aboutData: AboutItem[] = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Computer Applications",
    place: "D.A.V. College, Amritsar",
    duration: "2022 - 2025",
    icon: "GraduationCap",
    gradient: "from-secondary/20 to-secondary/10",
  },
  {
    id: 2,
    type: "experience",
    title: "Front-End Developer",
    place: "BrainsPack, Yamunanagar",
    duration: "July 2025 - Present",
    mode: "Internship",
    icon: "Briefcase",
    gradient: "from-secondary/10 to-secondary/20",
  },
];




// interface Skills extends Array<Skills>{}
export const projects: Project[] = [
  {
    name: "Clothing-Store",
    Highlights:["Responsive","Admin-Panel","Order-Confirmation(Mock)","Functional"],
    id: 1,
    img: ReactClothing,
    url: "https://react-clothing.vercel.app/",
    Frontend: "React",
    StateManage: "Redux-toolkit",
    CSS: "Tailwind-CSS",
    DesignLib: "ShadCN,MagicUI",
    Repo:"https://github.com/karanduggal24/React-Clothing",
    Description:
      "Clothing-Store-A sleek and modern online storefront built with React, offering a curated selection of apparel and accessories. With clean design and intuitive navigation, it’s designed to deliver a seamless shopping experience from product browsing to checkout.",
  },
];

export const skills: Skill[] = [
  {
    name: "Javascript",
    id: 1,
    img: SiJavascript,
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
