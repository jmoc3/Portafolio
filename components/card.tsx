import { GoEye } from "react-icons/go";
import Atropos from 'atropos/react';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";

const boxVariant = {
  visible:{opacity:1, transition:{duration:2}},
  hidden: {opacity:0}
}

export function Card({date,name,theme,description,repo}:any){

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(()=>{
    if (inView){
      control.start("visible");
    }
  },[control,inView]);

  return (
    <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
    <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
      <div className="card 2xl:flex 2xl:flex-col 3xl:flex-row justify-between " data-atropos-offset='15' data-atropos-opacity="0.5;1">
        <div className="left text-orange-300 md:text-md 2xl:text-xl">{date}</div>
        <div className="right 3xl:w-8/12">
          <div className="project_name flex flex-col gap-2 pb-4 ">
            <div className="title flex items-center justify-between">
              <h2 className="name s8:text-xl md:text-xl 2xl:text-2xl  ">{name}</h2><a href={repo} target="_blank"><GoEye className="text-xl"/></a>
            </div>
            <span className="theme md:text-sm 2xl:text-lg text-blue-300">{theme}</span>
          </div>
          <p className="project_description md:text-xs 2xl:text-sm ">{description}</p>
        </div>
      </div>
    </Atropos>
    </motion.div>
  )
}