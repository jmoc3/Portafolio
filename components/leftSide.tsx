import {  useEffect } from "react";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

export default function LeftSide():JSX.Element{

  useEffect(()=>{

    window.addEventListener("scroll", function(){
      let scrollPosition = window.scrollY
    
      let scrollPercent = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

      const about = document.querySelector('.index-1') as HTMLElement
      const proyects = document.querySelector('.index-2') as HTMLElement
      const tecnologies = document.querySelector('.index-3') as HTMLElement

      if (scrollPercent<10){
        about.classList.add('in')
        proyects.classList.remove('in')
        tecnologies.classList.remove('in')
      } else if (scrollPercent>85){
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

    const hackerEffect = (e:Event) =>{
    
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
    <div className="leftSide xl:sticky top-5 z-0 flex md:flex-col  md:justify-between s8:w-full s8:w-[34rem] md:w-full md:h-3/4vh pt-24 select-none s8:gap-24 md:gap-5">
      <div className="personalPitch flex flex-col s8:justify-between gap-10 ">
        <pre className="name  s8:text-4xl 2xl:text-6xl text-yellow-200 font-semibold w-fit" data-value="Jose Orejarena" >Jose Orejarena</pre>
        <h4 className="profession s8:text-lg 2xl:text-3xl text-amber-600 w-fit" data-value="Software Developer">Software Developer</h4>
        <span className="mini-description s8:text-base md:text-xs 2xl:text-lg">Desarrollo soluciones tecnologicas a problema cotidianos y no tan cotidianos en el son de ser un &quot;Hombre que resuelve&quot;.</span>
      </div>
      <div className="indexs xl:flex xl:flex-col gap-5 s8:hidden">
        <a href="#description" className="index-1 in md:text-sm 2xl:text-xl">* Sobre Mi</a>
        <a href="#projects" className="index-2 md:text-sm 2xl:text-xl">* Proyectos</a>
        <a href="#tecnologies" className="index-3 md:text-sm 2xl:text-xl">* Tecnologias</a>
      </div>
      <div className="contact flex s8:flex-col md:flex-row gap-5 md:items-center">
        <a href="https://github.com/jmoc3" target="_blank" className="h-10 md:w-7 xl:w-10 hover:scale-125 hover:text-white ease-in-out duration-1000" ><BiLogoGithub className="h-full w-full" /></a>

        <a href="https://www.linkedin.com/in/jose-orejarena/"  className="h-10 md:w-7 xl:w-10 hover:scale-125 hover:text-blue-400 ease-in-out duration-1000" target="_blank" ><BiLogoLinkedinSquare className="h-full w-full"/></a>

        <a href="https://www.instagram.com/jmoc224/"  className="flex h-9 md:w-7 xl:w-9 hover:scale-125 hover:text-pink-400 ease-in-out duration-1000" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" enableBackground="new 0 0 24 24" viewBox="0 0 28 28">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
</svg></a>
      </div>
      
    </div>
  )
}