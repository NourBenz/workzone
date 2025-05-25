// About.tsx
import React from "react"

export const About: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/about.jpg"
            alt="WorkZone About"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">WorkZone</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-snug">
            Pourquoi choisir WorkZone ?
          </h2>
          <p className="text-muted-foreground mb-6">
            WorkZone est un espace de travail partagé moderne conçu pour favoriser la productivité, la collaboration et l’innovation. Que vous soyez freelance, startup ou entreprise établie, nous avons l’espace qu’il vous faut.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>✅ Bureaux privés & open spaces modernes</li>
            <li>✅ Internet haut débit & services inclus</li>
            <li>✅ Ambiance professionnelle et conviviale</li>
            <li>✅ Accès aux salles de réunion & événements</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
