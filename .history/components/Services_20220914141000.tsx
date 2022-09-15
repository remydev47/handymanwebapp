import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';

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
          <div id="featured-jobs__items" className="!-m-4">
        <Swiper
          className="!p-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            "475": {
              slidesPerView: 2,
            },
            "640": {
              slidesPerView: 3,
            },
            "1024": {
              slidesPerView: 4,
            },
          }}
        >
          {servicesItems.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href="/#">
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

                  <div className="flex flex-col border-t p-4 dark:border-slate-600">
                    <h5 className="block truncate text-xl font-semibold capitalize">
                      {item.name}
                    </h5>
                    <span className="block truncate text-slate-500 dark:text-slate-400">
                      {item.description}
                    </span>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
          </div>
        </>
    )
}

const styles ={
    container:`bg-[#0390fc] `
}