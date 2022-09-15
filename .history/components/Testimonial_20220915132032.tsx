import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import Link from 'next/link';

const testimonialItems =[
    {
        image:"/img/people01.png",
        description:"Thank you for the outstanding job on multiple projects! Patti, Dan, Sean, Stephen, and Matt, you have been an absolute delight to work with! You’ll be hearing from me again, for sure! "
    },
    {
        image:"/img/people02.png",
        description:"I am extremely pleased with the work you did for me. Better yet, your communication has been beyond great. I would work with you again in a heartbeat! I will be calling for additional work when I need it. "
    },
    {
        image:"/img/people03.png",
        description:"THE DYNAMIC DUO! Patti and Dan, you make for an unbeatable team! Your entire crew is awesome! Thanks for a job very well done!"
    }
]


export const Testimonial = () => {
    return(
        <>
         <div className=''>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">HAPPY CUSTOMERS</h2>
            </div>
            <div>
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
                   {testimonialItems.map((item, i) => (
                    <Link href="/#" key={i}>
                        <a>

                        </a>
                    </Link>
                   ))} 
                </Swiper>
            </div>
         </div>
        </>
    )
}

const styles= {
    containeritem:`group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700`
}