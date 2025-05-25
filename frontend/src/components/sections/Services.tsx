// Services.tsx
import React from "react"
import { Button } from "../ui/button"

const services = [
  {
    title: "Coworking Zone",
    description: "Un espace de travail partagé, dynamique et moderne.",
    image: "/images/coworking.jpg",
  },
  {
    title: "Private Zone",
    description: "Des bureaux privés pour plus de confidentialité.",
    image: "/images/private.jpg",
  },
  {
    title: "Meeting Zone",
    description: "Salles de réunion équipées et flexibles.",
    image: "/images/meeting.jpg",
  },
  {
    title: "Domiciliation",
    description: "Votre adresse professionnelle clé en main.",
    image: "/images/domiciliation.jpg",
  },
]

export const Services: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
        <p className="text-muted-foreground">
          Découvrez nos zones de travail adaptées à vos besoins.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition-all">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <Button variant="outline" className="w-full">Explorer</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
