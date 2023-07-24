
import Hero from './Components/Hero'

import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
}) 

export default function Home() {
  return (
    <Hero/>
  )
}
