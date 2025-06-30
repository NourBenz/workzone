import React from "react"
import { Button } from "../ui/button"

export const Hero: React.FC = () => {
  return (
   <section
  className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white flex items-center justify-center px-6"
  style={{ backgroundImage: "url('/images/background.jpg')" }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray/60 z-0" />

      {/* Overlayed images */}
      <img src="/images/lampe.png" className="absolute top-12 left-85 w-[10%] z-10" />
      <img src="/images/girl.png" className="absolute bottom-12 left-20 w-[20%] z-40" />
      <img src="/images/boy.png" className="absolute bottom-10 right-20 w-[20%] z-10" />

      {/* Main text content */}
      <div className="relative z-20 text-center max-w-3xl">
       <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
  <span className="text-primary">A Better Environment</span><br />
  <span className="text-black">to Work</span>
</h1>

        <p className="text-lg text-black/80 mb-8">
          Le partage et l’échange sont notre devise. Rejoignez notre communauté et tentez l’expérience Workzone…</p>
        <p className="text-lg text-red-500 mb-8">
          #o7kom_Wahdek</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg">Essai Gratuit</Button>
          <Button variant="outline" size="lg">Visite virtuelle</Button>
        </div>
      </div>
    </section>
  )
}
