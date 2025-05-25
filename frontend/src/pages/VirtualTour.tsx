// pages/VirtualTour.tsx
import React from "react"

const VirtualTour: React.FC = () => {
  return (
    <section className="pt-24 px-6 py-20 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Visite Virtuelle</h1>
      <p className="text-muted-foreground mb-6">
        Explorez nos espaces WorkZone grâce à notre visite immersive à 360°.
      </p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://your-virtual-tour-url.com"
          title="Virtual Tour"
          className="w-full h-full rounded-lg shadow-lg"
          allowFullScreen
        />
      </div>
    </section>
  )
}

export default VirtualTour
