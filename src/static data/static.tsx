// import { IoLogoJavascript } from "react-icons/io5";
import ReactClothing from "/src/assets/ProjectImg.png";

import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
interface Skill {
  name: string;
  img?: React.ComponentType;
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
}

// interface Skills extends Array<Skills>{}
export const projects: Project[] = [
  {
    name: "React-Clothing",
    id: 1,
    img: ReactClothing,
    url: "https://react-clothing.vercel.app/",
    Frontend: "React",
    StateManage: "Redux-toolkit",
    CSS: "Tailwind-CSS",
    DesignLib: "ShadCN,MagicUI",
    Repo:"https://github.com/karanduggal24/React-Clothing",
    Description:
      "React Clothing — A sleek and modern online storefront built with React, offering a curated selection of apparel and accessories. With clean design and intuitive navigation, it’s designed to deliver a seamless shopping experience from product browsing to checkout.",
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
