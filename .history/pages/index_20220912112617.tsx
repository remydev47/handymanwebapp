import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="bg-[#091B18] min-h-screen fleex flex-col">
      <Head>
        <title>Lottery Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Hero />
     <h1>Handy man</h1>

      
    </div>
  )
}

export default Home
