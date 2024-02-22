import DescriptionSection from "./rightSideComponents/description";
import ProjectSection from "./rightSideComponents/projectsSection";
import TecSection from "./rightSideComponents/tecSection";

import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";

import { BsBalloonHeartFill } from "react-icons/bs";

const boxVariant = {
  visible:{opacity:1, transition:{duration:5}},
  hidden: {opacity:0}
}

export default function RightSide():JSX.Element{

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(()=>{
    if (inView){
      control.start("visible");
    }
  },[control,inView]);

  return(
    <motion.div className="rightSide z-10 pb-24 select-none flex flex-col items-center s8:px-32 md:px-0"  ref={ref} variants={boxVariant} initial="hidden" animate={control}>  
      <DescriptionSection />
      <ProjectSection />
      <TecSection />
      <div className="text-xs w-full flex justify-center">Financed by <span className="mx-2 text-red-300">Oscar Rodriguez</span>   and <span className="mx-2 text-purple-300">Mom</span> <BsBalloonHeartFill className="text-red-400 text-sm"/></div>
    </motion.div>

  )
}