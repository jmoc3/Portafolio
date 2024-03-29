

import { JetBrains_Mono } from 'next/font/google'
import LeftSide from '@/components/leftSide';
import RighSide from '@/components/rightSide';
import { useEffect } from 'react';

const jetbrains = JetBrains_Mono({subsets:['latin']})

export default function Home():JSX.Element {

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
      <main  className={`${jetbrains.className} antialiased flex s8:flex-col md:flex-row gap-56   s8:items-center md:items-start md:px-36 xl:px-56  text-gray-200 w-full h-inherit s8:translate-x-1/2 md:translate-x-0 justify-center`} >
        <div className="blob absolute aspect-square h-56 -translate-y-1/2 -translate-x-1/2 rounded bg-gradient-to-r from-neutral-200 to-orange-500  blur-3xl opacity-10 s8:px-16" ></div>
        <LeftSide></LeftSide>
        <RighSide></RighSide>
      </main>      
  );
}
