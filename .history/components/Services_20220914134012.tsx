import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const servicesItems = [
    {
        name:"Carpentry",
        description:"Woodwork and Carpenry from Our Team",
        image: "/img/carpentry.webp"
    },
    {
        name:"Painting",
        description:"Handy Gang provides the best Painting Services",
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
            {servicesItems.map((item, i) => (
                <Link href='/#'>
                <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                <div className="relative block overflow-hidden pt-[70%]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-200 group-hover:scale-[102%]"
                      />
                  </div>
                </a>
             </Link>
            ))}
          </div>
        </>
    )
}

const styles ={
    container:`bg-[#0390fc]`
}