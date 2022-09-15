import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { Services } from '../components/Services'

const Home: NextPage = () => {
  return (
    <div>
      
     <Hero />
     <Services />

      
    </div>
  )
}

export default Home
