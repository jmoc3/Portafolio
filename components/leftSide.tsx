import { DOMElement, EventHandler, useEffect } from "react";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
useEffect

export default function LeftSide(){

  

  useEffect(()=>{

    window.addEventListener("scroll", function(){
      let scrollPosition = window.scrollY
    
      let scrollPercent = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

      const about = document.querySelector('.index-1') as HTMLElement
      const proyects = document.querySelector('.index-2') as HTMLElement
      const tecnologies = document.querySelector('.index-3') as HTMLElement

      if (scrollPercent<15){
        about.classList.add('in')
        proyects.classList.remove('in')
        tecnologies.classList.remove('in')
      } else if (scrollPercent>75){
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
    <div className="leftSide xl:sticky top-5 z-0 flex md:flex-col  md:justify-between w-96 md:h-3/4vh pt-24 select-none s8:pl-32 s8:pr-8 s8:gap-24 md:gap-5">
      <div className="personalPitch flex flex-col s8:justify-between md:gap-5 ">
        <pre className="name s8:text-3xl md:text-4xl 2xl:text-6xl text-yellow-200 font-semibold w-fit" data-value="Jose Orejarena" >Jose Orejarena</pre>
        <h4 className="profession s8:text-base md:text-lg 2xl:text-3xl text-amber-600 w-fit" data-value="Software Developer">Software Developer</h4>
        <span className="mini-description s8:text-xs md:text-xs 2xl:text-lg">Desarrollo soluciones tecnologicas a problema cotidianos y no tan cotidianos en el son de ser un &quot;Hombre que resuelve&quot;.</span>
      </div>
      <div className="indexs xl:flex xl:flex-col gap-5 s8:hidden">
        <a href="#description" className="index-1 in md:text-sm 2xl:text-xl">* Sobre Mi</a>
        <a href="#projects" className="index-2 md:text-sm 2xl:text-xl">* Proyectos</a>
        <a href="#tecnologies" className="index-3 md:text-sm 2xl:text-xl">* Tecnologias</a>
      </div>
      <div className="contact flex s8:flex-col md:flex-row gap-5 md:items-center">
        <a href="https://github.com/jmoc3" target="_blank" className="h-10 md:w-7 xl:w-10 hover:scale-125 hover:text-white ease-in-out duration-1000" ><BiLogoGithub className="h-full w-full" /></a>

        <a href="https://www.linkedin.com/in/jose-orejarena/"  className="h-10 md:w-7 xl:w-10 hover:scale-125 hover:text-blue-400 ease-in-oute duration-1000" target="_blank" ><BiLogoLinkedinSquare className="h-full w-full"/></a>

        <a href="https://leetcode.com/jmoc951/"  className="flex h-9 md:w-7 xl:w-9 hover:scale-125 hover:text-amber-400 ease-in-out duration-1000" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg></a>
      </div>
      
    </div>
  )
}