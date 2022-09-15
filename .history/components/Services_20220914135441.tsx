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
        
                <div className="flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={124}
                        height={124}
                        className="transition-all duration-200 group-hover:scale-[102%]"
                      />
                  </div>
                
             </Link>
            ))}
          </div>
        </>
    )
}

const styles ={
    container:`bg-[#0390fc] flex`
}