import { DOMElement, EventHandler, useEffect } from "react";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
useEffect

export default function LeftSide(){

  

  useEffect(()=>{

    window.addEventListener("scroll", function(){
      let scrollPosition = window.scrollY
      
      const about = document.querySelector('.index-1') as HTMLElement
      const proyects = document.querySelector('.index-2') as HTMLElement
      const tecnologies = document.querySelector('.index-3') as HTMLElement
      
      if (scrollPosition<200){
        about.classList.add('in')
        proyects.classList.remove('in')
        tecnologies.classList.remove('in')
      } else if (scrollPosition>1000){
        tecnologies.classList.add('in')
        about.classList.remove('in')
        proyects.classList.remove('in')
      }else{
        proyects.classList.add('in')
        about.classList.remove('in')
        tecnologies.classList.remove('in')
      }

    })


    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let title = document.querySelector('.name') as HTMLElement
    let profession = document.querySelector('.profession') as HTMLElement

    const hackerEffect = (e:any) =>{
    
      let i = 0;
    
      const interval = setInterval(()=>{
        const target = e.target as HTMLElement 
        target.textContent = target.textContent!.split("")
        .map((_,index) => {
        
          if (index<i) return target.dataset.value![index]
          return letters[Math.floor(Math.random() * 26)]
        
        })
        .join("")
        
        i+=1/2
        
        if (i>target.textContent.length) clearInterval(interval)
      },30)
    }
    title.onmouseover = hackerEffect
    profession.onmouseover = hackerEffect
  })



  return (
    <div className="leftSide sticky top-5 z-0 flex flex-col justify-between w-96 h-3/4vh pt-24 select-none">
      <div className="personalPitch flex flex-col gap-5 ">
        <h2 className="name text-6xl text-yellow-200" data-value="Jose Orejarena" >Jose Orejarena</h2>
        <h4 className="profession text-3xl text-amber-600" data-value="Software Developer">Software Developer</h4>
        <span className="mini-description text-lg">Desarrollo soluciones tecnologicas a problema cotidianos y no tan cotidianos en el son de ser un &quot;Hombre que resuelve&quot;.</span>
      </div>
      <div className="indexs flex flex-col gap-5">
      <a className="index-1 in flex items-center gap-3" href="#description">
          <div className="lines block">
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <span className="text-xl">Sobre Mi</span>
        </a>
        <a className="index-2 flex items-center gap-3" href="#projects">
          <div className="lines block">
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <span className="text-xl">Proyectos</span>
        </a>
        <a className="index-3 flex items-center gap-3" href="#tecnologies">
          <div className="lines block">
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <span className="text-xl">Tecnologias</span>
        </a>
      </div>
      <div className="contact flex gap-5 justify-items-center">
        <a href="https://github.com/jmoc3" target="_blank" className="h-10 w-10 hover:scale-125 hover:text-white ease-in-out duration-1000" ><BiLogoGithub className="h-full w-full" /></a>

        <a href="https://www.linkedin.com/in/jose-orejarena/"  className="h-10 w-10 hover:scale-125 hover:text-blue-400 ease-in-oute duration-1000" target="_blank" ><BiLogoLinkedinSquare className="h-full w-full"/></a>

        <a href="https://leetcode.com/jmoc951/"  className="h-9 w-9 hover:scale-125 hover:text-amber-400 ease-in-out duration-1000" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg></a>
      </div>
      
    </div>
  )
}