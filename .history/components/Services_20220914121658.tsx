import React from 'react';
import Image from 'next/image';
import Carpentry from '/img/carpentry.webp'

export const Services = () => {
    return(
        <>
          <div className={styles.container}>
            <div className='rounded-full'>
                <Image 
                  src='/img/carpentry.webp'
                  width={124}
                  height={124}
                  alt='carpentry'
                />
                <span>Carpentry and Woodwork Services</span>
            </div>
          </div>
        </>
    )
}

const styles ={
    container:`bg-[#037bfc]`
}