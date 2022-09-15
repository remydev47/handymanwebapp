import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
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
        images:"/img/Paintingwork.jpg",
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
        image:"/img/electricians.jpg",
        logo: "/img/electrical.webp"
    },
    {
        name:"Plumbing",
        description:"We shall fix your Plumbing Problems",
        image:"/img/Plumbingwork",
        logo: "/img/plumbing.webp"
    }
]

export const Services = () => {
    return(
        <>
          <section>
            services
          </section>
        </>
    )
}

const styles ={
    container:`bg-[#fff]`
}