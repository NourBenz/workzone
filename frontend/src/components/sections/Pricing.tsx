// Pricing.tsx
import React from "react"
import { Button } from "../ui/button"

const plans = [
  {
    name: "Free Pass",
    price: "0 DT",
    features: [
      "1 jour d'accès",
      "Wi-Fi haut débit",
      "Espace commun seulement",
    ],
  },
  {
    name: "WorkZone Pass",
    price: "350 DT/mois",
    features: [
      "Accès illimité",
      "Accès salle de réunion 5h",
      "Casier sécurisé",
    ],
    featured: true,
  },
  {
    name: "Premium Pass",
    price: "600 DT/mois",
    features: [
      "Tous les avantages WorkZone Pass",
      "Accès réunion illimité",
      "Adresse de domiciliation incluse",
    ],
  },
]

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Tarifs</h2>
        <p className="text-muted-foreground">
          Choisissez la formule qui vous convient.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border p-6 shadow-sm transition hover:shadow-lg bg-white ${plan.featured ? 'border-primary' : ''}`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-extrabold text-primary mb-4">{plan.price}</p>
            <ul className="text-sm text-muted-foreground mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
            <Button variant={plan.featured ? "default" : "outline"} className="w-full">
              Choisir
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
