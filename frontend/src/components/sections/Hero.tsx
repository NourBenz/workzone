// Hero.tsx
import React from "react"
import { Button } from "../ui/button"

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] text-white flex items-center justify-center px-6" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          A Better Environment<br />to <span className="text-primary">Work</span>
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Rejoignez notre espace de coworking ou trouvez votre bureau privé idéal à WorkZone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg">Nos Services</Button>
          <Button variant="outline" size="lg">Contactez-Nous</Button>
        </div>
      </div>
    </section>
  )
}
