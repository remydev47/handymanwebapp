import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './Button';
import { Navigation } from 'swiper';

const servicesItems = [
    {
        name:"Carpentry",
        description:"Woodwork and Carpenry from Our Team",
        image:"/img/woodwork.jpg",
        logo: "/img/carpentry.webp"
    },
    {
        name:"Painting",
        description:"Handy Gang provides the best Painting Services",
        image:"/img/Paintingwork.jpg",
        logo: "/img/painting.webp"
    },
    {
        name:"Maintanance",
        description:"Trust the Fixxie to provide maintainance & repair services",
        image:"/img/Homemaintance.jpg",
        logo: "/img/maintance.webp"
    },
    {
        name:"Electrical",
        description:"Fast Electrical Service Provider",
        image:"/img/electrcians.jpg",
        logo: "/img/electrical.webp"
    },
    {
        name:"Plumbing",
        description:"We shall fix your Plumbing Problems",
        image:"/img/Plumbingwork.jpg",
        logo: "/img/plumbing.webp"
    }
]

export const Services = () => {
    return(
        
          <section id="servicesItems">
            <div className="mb-8 flex items-center justify-between">
             <h2 className="text-2xl font-bold">OUR Services</h2>
              <Button variant='outline' className="hidden xs:inline-flex">
                GET A FREE QUOTE
              </Button>
            </div>
            <div id="top-companies__items" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {servicesItems.map((item, i) => (
                 <Link href="/#" key={i}>
                  <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                    <div className="relative block overflow-hidden  pt-[70%]">
                     <Image
                       src={item.image}
                       alt={item.name}
                       layout="fill"
                       objectFit="cover"
                       className="transition-all duration-200 group-hover:scale-[102%]"
                      />
                    </div>
                    <div className="relative flex flex-col border-t p-4 dark:border-slate-600">
                <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg border shadow-sm dark:border-slate-600">
                  <div className="relative block overflow-hidden  bg-blue-500 pt-[100%]">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                  </div>
                </span>

                <h5 className="block truncate text-xl font-semibold capitalize">
                  {item.name}
                </h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  {item.description}
                </span>
              </div>
                 </a>
                 </Link>
              ))}
            </div>

          </section>

    )
}

const styles ={
    container:`bg-[#fff]`
}