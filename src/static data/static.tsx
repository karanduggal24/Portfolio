// import { IoLogoJavascript } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
interface Skill {
    name:string
    img?:React.ComponentType
    id:number
}

// interface Skills extends Array<Skills>{}

export const skills : Skill[] = [{
    name:"Javascript",
    id:1,
    img:SiJavascript
},
{
    name:"TypeScript",
    id:2,
    img:SiTypescript
},
{
    name:"HTML",
    id:3,
    img:FaHtml5
},
{
    name:"CSS",
    id:4,
    img:FaCss3Alt
},
{
    name:"React",
    id:5,
    img:FaReact
},
{
    name:"Tailwind",
    id:6,
    img:RiTailwindCssFill
}
]

