// pages/services/Coworking.tsx
import React from "react"

const Coworking: React.FC = () => {
  return (
    <section className="pt-24 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Coworking Zone</h1>
      <p className="text-muted-foreground mb-4">
        Un espace de travail partagé, dynamique et moderne, pensé pour les freelances, startups, et équipes hybrides.
      </p>
      <img src="/images/coworking.jpg" alt="Coworking Zone" className="rounded-lg shadow-lg w-full" />
    </section>
  )
}

export default Coworking
