import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";

const boxVariant = {
  visible:{opacity:1, x: 0 , transition:{duration:3}},
  hidden: {opacity:0, x:100}
}

export function Icon({link, icon, color, children}:any){
  
  const colorVariants: { [key: string]: string }  = {
    blue: 'hover:text-blue-400 hover:scale-125',
    red: 'hover:text-red-400 hover:scale-125',
    amber: 'hover:text-amber-400 hover:scale-125',
    zinc: 'hover:text-zinc-400 hover:scale-125',
    cyan: 'hover:text-cyan-400 hover:scale-125',
    indigo: 'hover:text-indigo-400 hover:scale-125',
    green: 'hover:text-green-400 hover:scale-125',
    yellow: 'hover:text-yellow-400 hover:scale-125',
    sky: 'hover:text-sky-400 hover:scale-125',
    violet: 'hover:text-violet-400 hover:scale-125',
    orange: 'hover:text-orange-400 hover:scale-125'
  }
  

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(()=>{
    if (inView){
      control.start("visible");
    }
  },[control,inView]);

  return (
    <a href={link} className={`${icon}-icon ${colorVariants[color]} ease-in-out duration-200`} target="_blank">
        <motion.div  ref={ref} variants={boxVariant} initial="hidden" animate={control}>
          {children}
        </motion.div>
      </a>  
  )
}