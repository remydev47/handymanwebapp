import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        name:"",
        description:"",
        image: "/img/carpentry.webp"
    },
    {
        name:"",
        description:"",
        image: "/img/painting.webp"
    },
    {
        name:"",
        description:"",
        image: "/img/maintance.webp"
    },
    {
        name:"",
        description:"",
        image: "/img/electrical.webp"
    },
    {
        name:"",
        description:"",
        image: "/img/plumbing.webp"
    }
]

export const Services = () => {
    return(
        <>
          <div className={styles.container}>
            <div className='rounded-full'>
               
            </div>
          </div>
        </>
    )
}

const styles ={
    container:`bg-[#0390fc]`
}