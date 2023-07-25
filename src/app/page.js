
import Hero from './Components/Hero'

import { Roboto_Flex } from "next/font/google"

const roboto = Roboto_Flex({
  subsets: ['latin']
}) 

export default function Home() {
  return (
    <Hero/>
  )
}
