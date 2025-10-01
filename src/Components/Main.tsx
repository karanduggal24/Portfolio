// import React from 'react';
import './Main.css'
import Profile from '../assets/Myimage.webp'
import ReactLogo from '../assets/ReactLogo.png'
import HTMLLogo from '../assets/HTML-Logo.png'
import CSSLogo from '../assets/CSS-Logo.png'
import JSLogo from '../assets/JS-Logo.png'
import TSLogo from '../assets/TS-Logo.png'
import LinkedIn from '../assets/linkedin.png'
import Phone from '../assets/telephone.png'
import Mail from '../assets/gmail.png'
import Github from '../assets/github.png'
import { motion } from "motion/react"

type skills = {
   name?: string;
   id?:number;
   image?:string;
}

// type contactinfo={
//    name:string;
//    id:number;
//    content:string;
// }

function Main() {
    const skills:skills[] =[{name:'HTML',id:1,image:HTMLLogo},
        {name:'CSS',id:2,image:CSSLogo},
        {name:'JavaScript',id:3,image:JSLogo},
        {name:'TypeScript',id:4,image:TSLogo},
        {name:'React',id:5,image:ReactLogo}
    ]

//     const contact:contactinfo[]=[
//       {name:'Phone', id:1, content:' +91-6239868675'},
//       {name:'E-Mail', id:2,content:'Karanduggal6239@gmail.com'},
// ]
  return (
    <div className='main'>
        <div className='first'>
        <motion.div 
        style={{backgroundImage:`url(${Profile})`,
        backgroundSize:'cover',}}
        initial ={{scale:0}}
        whileInView={{scale:1}}
         animate={{
            // y:[0,4,8,12,0]
             }}
             whileHover={{
                scale:1.1
             }} 
             transition={{
               //  ease:easeInOut,
                duration:1
             }}
             className='image'>
        </motion.div>
        <motion.div 
        initial={{
                     scale:0
                  }}
                  whileInView={{scale:1}}
        className='text'>
            <h1>Karan Duggal</h1>
            <p>Full Stack Web Developer</p>
        </motion.div>
      </div>
<div className='skills'>
             <motion.div
             initial={{
                     scale:0
                  }}
                  whileInView={{scale:1}}
                   className='heading'>
             <h1>Skills</h1>
             </motion.div>
             <div className='text-content'>
                {skills.map(skill=>(
                  <motion.div 
                  initial={{
                     scale:0
                  }}
                  whileInView={{scale:1}}
                   className='skill-content' key={skill.id}>
                     {skill.image && <img src={skill.image} alt={`${skill.name} logo`}/>}
                <p>{skill.name}</p>
                </motion.div>
             ))}
             </div>
 </div>
 <div className='Qualification'>
   <motion.div initial={{
                     scale:0
                  }}
                  whileInView={{scale:1}}
                   className='heading'>
      <h1>Qualifications/Work Experience</h1>
      <div className='Qualification-content'>
         <h4>DAV College,Amritsar</h4>
         <h4>B.C.A (2022-2025)</h4>
         <p>(Bachelor of Computer Application)</p>
      </div>
      <div className='Qualification-content'>
         <h4>BrainsPack,Yamunanagar (2025)</h4><p>(Intern)</p>
         <h4>Training and Skill Developement</h4>
      </div>
   </motion.div>

 </div>
 <motion.div initial={{
                     scale:0
                  }}
                  whileInView={{scale:1}}
                   className='About'>
            <div className='heading'>
               <h1>About Me</h1>
            </div>
            <div className="about-content">
               <p>A passionate front-end developer and a recent <b>Bachelor of Computer Applications</b> graduate from <b>DAV College, Amritsar</b> . I have a strong focus on crafting clean, responsive, and user-friendly web applications using modern technologies like JavaScript (ES6+), React, TypeScript, HTML5, and CSS3. As a dedicated and quick learner, I am committed to writing high-quality code and am excited to bring my skills and enthusiasm to a challenging entry-level role within a forward-thinking team.</p>
            </div>
 </motion.div>
                  <div className='projects'>
                     <div className="heading">
                     <h1>Projects</h1>
                     </div>
                  </div>



 <div className='Contact'>
           <div className="heading">
            <h1>Let's Work Together </h1>
            </div>
            <div className='Contact-container'> 
                  <div>
                  <a href="tel:+916239868675"><img src={Phone} /></a>
                  <a href="mailto:karanduggal6239@gmail.com" target='blank'><img src={Mail}/></a>
                  <a href="https://www.linkedin.com/in/karan-duggal-7b93822b4/" target='new'><img src={LinkedIn}/></a>
                  <a href='https://github.com/karanduggal24' target='new'><img src={Github}/></a>
                  </div>
            </div>

            </div>  

 </div>
  );
}

export default Main;