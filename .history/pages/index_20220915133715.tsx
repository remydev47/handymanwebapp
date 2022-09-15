import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Services } from '../components/Services'
import { Testimonial } from '../components/Testimonial'

const Home: NextPage = () => {
  return (
    <div>
      
     <Hero />
     <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
      <div className='mt-16 space-y-20'>
       <Services />
       {/* <Testimonial /> */}
      </div>
     </main>
     
    </div>
  )
}

export default Home
