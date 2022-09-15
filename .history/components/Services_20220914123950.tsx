import React from 'react';
import Image from 'next/image';

export const Services = () => {
    return(
        <>
          <div className={styles.container}>
            <div className='rounded-full'>
                <Image 
                  src='/img/carpentry.webp'
                  layout="fill"
                  objectFit="cover"
                 
                  alt='carpentry'
                />
                <span>Carpentry and Woodwork Services</span>
            </div>
          </div>
        </>
    )
}

const styles ={
    container:`bg-[#0390fc]`
}