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
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">Choisissez</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-snug">
            Work Zone
          </h2>
          <p className="text-muted-foreground mb-6">
            Chez Workzone, nous prônons la flexibilité et la proactivité dans tout ce que nous entreprenons. Nos offres peuvent être personnalisées en fonction des besoins et du budget.
          </p>
          <p className="text-muted-foreground mb-6">
            Conçus pour favoriser la productivité et optimiser les performances, nos espaces de travail permettent d’échanger, de prospérer et d’inspirer. Sécurisés et accessibles 24/7, nos espaces sont dotés de lumière naturelle favorable à votre épanouissement personnel, ils sont logés dans un immeuble haut standing au cœur d’un quartier d’affaires renommé.
          </p>
          <p className="text-muted-foreground mb-6">
            Workzone, c’est également des événements organisés. Formation, workshop ou séminaire, il se passe toujours quelque chose à Workzone !
          </p>
        </div>
      </div>
    </section>
  )
}
