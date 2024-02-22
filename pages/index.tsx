

import { JetBrains_Mono } from 'next/font/google'
import LeftSide from '@/components/leftSide';
import RighSide from '@/components/rightSide';
import { use, useEffect } from 'react';

const jetbrains = JetBrains_Mono({subsets:['latin']})

export default function Home() {

  useEffect(()=>{

    const blur = document.querySelector('.blob') as HTMLElement

    document.body.onpointermove = (event) =>{

      const { clientX, clientY } = event;
      
      blur.animate({
        left : `${clientX}px`,
        top : `${clientY}px`,
      }, {duration:2000, fill:'forwards'})
    }

  })

  return (
      <main  className={`${jetbrains.className} antialiased xl:flex xl:flex-row gap-56 justify-center md:px-36 xl:px-56  text-gray-200 w-inherit h-inherit`} >
        <div className="blob absolute aspect-square h-56 -translate-y-1/2 -translate-x-1/2 rounded bg-gradient-to-r from-neutral-200 to-orange-500  blur-3xl opacity-10" ></div>
        <LeftSide></LeftSide>
        <RighSide></RighSide>
      </main>      
  );
}
