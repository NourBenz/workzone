// Home.tsx - root homepage for WorkZone clone
import React from "react"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Services } from "../components/sections/Services"
import { Events } from "../components/sections/Events"
import { Pricing } from "../components/sections/Pricing"
import { CoreValues } from "../components/sections/CoreValues"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CoreValues />
      <Services />
      <About />
      <Events />
    </>
  )
}

export default Home
