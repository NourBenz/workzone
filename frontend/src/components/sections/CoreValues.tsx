import React from "react"
import { FaRegGem, FaSyncAlt, FaUsers } from "react-icons/fa" // Icons for visual match

export const CoreValues: React.FC = () => {
  const values = [
    {
      icon: <FaRegGem size={24} />,
      title: "Qualité",
      description: "Nous pensons fortement que fournir une prestation de qualité n’est pas une option, mais un devoir. C’est pourquoi, nous œuvrons pour satisfaire toutes les envies de nos clients.",
      highlight: true,
    },
    {
      icon: <FaSyncAlt size={24} />,
      title: "Flexibilité",
      description: "La flexibilité est notre façon de procéder. Nous nous adaptons à votre façon de travailler. Espaces partagés ou bureaux privatifs, nous proposons des solutions pour répondre à tous les besoins.",
    },
    {
      icon: <FaUsers size={24} />,
      title: "Communauté",
      description: "Vous allez aimer travailler à Workzone ! Pourquoi ? Parce que nous cultivons le partage et nous développons le sens de collaboration. La connectivité est ce qui définit notre communauté.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value) => (
          <div
            key={value.title}
            className={`p-6 rounded-2xl shadow-md ${
              value.highlight ? "bg-primary/10 text-black" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-primary">{value.icon}</div>
              <h3 className="text-lg font-bold">{value.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
