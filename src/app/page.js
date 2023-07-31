'use client'

import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Features from './Components/Features';
import Testimonial from './Components/Testimonial';

import { Roboto_Condensed } from "next/font/google"

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonial />
      <Portfolio />
      <Footer />
    </>


  )
}
