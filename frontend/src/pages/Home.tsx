// Home.tsx - root homepage for WorkZone clone
import React from "react"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Services } from "../components/sections/Services"
import { Events } from "../components/sections/Events"
import { Pricing } from "../components/sections/Pricing"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Events />
      <Pricing />
      
    </>
  )
}

export default Home
