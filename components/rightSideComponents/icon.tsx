import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";
import React from 'react';

type IconProps = {
  link: string,
  icon: string,
  color: string,
  children: React.ReactNode
}

const boxVariant = {
  visible:{opacity:1, x: 0 , transition:{duration:3}},
  hidden: {opacity:0, x:100}
}

export function Icon({link, icon, color, children}:IconProps):JSX.Element{
  
  const colorVariants: { [key: string]: string }  = {
    blue: 's8:text-blue-400 md:text-current md:hover:text-blue-400 hover:scale-125',
    red: 's8:text-red-400 md:text-current md:hover:text-red-400 hover:scale-125',
    amber: 's8:text-amber-400 md:text-current md:hover:text-amber-400 hover:scale-125',
    zinc: 's8:text-zinc-400 md:text-current md:hover:text-zinc-400 hover:scale-125',
    cyan: 's8:text-cyan-400 md:text-current md:hover:text-cyan-400 hover:scale-125',
    indigo: 's8:text-indigo-400 md:text-current md:hover:text-indigo-400 hover:scale-125',
    green: 's8:text-green-400 md:text-current md:hover:text-green-400 hover:scale-125',
    yellow: 's8:text-yellow-400 md:text-current md:hover:text-yellow-400 hover:scale-125',
    sky: 's8:text-sky-400 md:text-current md:hover:text-sky-400 hover:scale-125',
    violet: 's8:text-violet-400 md:text-current md:hover:text-violet-400 hover:scale-125',
    orange: 's8:text-orange-400 md:text-current md:hover:text-orange-400 hover:scale-125'
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