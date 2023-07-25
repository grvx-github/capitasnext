'use client'

import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Contact from './contact/page';

import { Roboto_Flex } from "next/font/google"

const roboto = Roboto_Flex({
  subsets: ['latin']
}) 

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
     
    
  )
}
