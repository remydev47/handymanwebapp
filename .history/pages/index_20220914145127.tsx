import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { Services } from '../components/Services'

const Home: NextPage = () => {
  return (
    <div>
      
     <Hero />
     <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
      <Services />
     </main>
     

      
    </div>
  )
}

export default Home
