import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const servicesItems = [
    {
        name:"Carpentry",
        description:"",
        image: "/img/carpentry.webp"
    },
    {
        name:"Painting",
        description:"",
        image: "/img/painting.webp"
    },
    {
        name:"Maintance",
        description:"Trust the Fixxie to provide maintainance & repair services",
        image: "/img/maintance.webp"
    },
    {
        name:"Electrical",
        description:"Fast Electrical Service Provider",
        image: "/img/electrical.webp"
    },
    {
        name:"Plumbing",
        description:"We shall fix your Plumbing Problems",
        image: "/img/plumbing.webp"
    }
]

export const Services = () => {
    return(
        <>
          <div className={styles.container}>
            
          </div>
        </>
    )
}

const styles ={
    container:`bg-[#0390fc]`
}