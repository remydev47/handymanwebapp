import React, { useState } from 'react';
import Image from 'next/image';
import {Dialog, Transition} from '@headlessui/react'
import { InnerBanner } from './InnerBanner';

const Hero = () => {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      <section className={styles.container}>
        <Image 
          src="/img/handyman.webp"
          layout='fill'
          alt='corporate'
          objectFit='cover'
        />
        <div className={styles.wrapper}>
          <div className={styles.wrapper2}>
               <div className='m-6 min-h-[60px]'>
                    {<InnerBanner
                      show={showBanner}
                      onClose={() => setShowBanner(false)}
                    />}
                 </div>
          </div>
             <div className='mx-4 mt-16 flex flex-col items-center text-center '>
                <h1 className={styles.innerbanner}>
                    Discover your future
                </h1>
                <span className='text-xl text-white sm:text-2xl'>
                    Find your next Job
                </span>
                
              </div>
          
        </div>
      </section>
      <HeroBottomCard />
    </>
  )
}
export default Hero;

function HeroBottomCard() {
  return (
    <div className="bg-neutral-900 p-4">
      <span className="block text-center text-lg text-white">
        No time to look for jobs? Drop your resume with{" "}
        <span className="bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500 bg-clip-text align-middle text-2xl font-black tracking-widest text-transparent">
          HIREDLA-X
        </span>{" "}
        headhunters here.
      </span>
    </div>
  );
}


const styles ={
  container:`relative h-[640px] w-full  bg-red-500/20 sm:h-[55vh] md:h-[440px]`,
  wrapper:`absolute inset-0 bg-neutral-900/70`,
  wrapper2:`mx-auto max-w-screen-lg `,
  innerbanner:`text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl`,
}