import React from 'react';
import Image from 'next/image';
import {Dialog, Transition} from '@headlessui/react'

const Hero = () => {
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
          inner banner
        </div>
      </section>
    </>
  )
}

export default Hero;

const styles ={
  container:`relative h-[640px] w-full  bg-red-500/20 sm:h-[55vh] md:h-[440px]`,
  wrapper:`absolute inset-0 bg-neutral-900/70`,
  wrapper2:`mx-auto max-w-screen-lg `,
}