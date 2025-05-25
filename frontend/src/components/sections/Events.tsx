// Events.tsx
import React from "react"
import { Button } from "../ui/button"

const events = [
  {
    title: "Atelier Créatif",
    date: "27 Juin 2024",
    location: "WorkZone 1.0",
    image: "/images/event1.jpg",
  },
  {
    title: "Business Networking",
    date: "2 Juillet 2024",
    location: "WorkZone 2.0",
    image: "/images/event2.jpg",
  },
  {
    title: "Formation SEO",
    date: "10 Juillet 2024",
    location: "WorkZone 1.0",
    image: "/images/event3.jpg",
  },
]

export const Events: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Événements à venir</h2>
        <p className="text-muted-foreground">
          Participez à nos prochains événements et ateliers exclusifs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events.map((event) => (
          <div key={event.title} className="bg-gray-50 rounded-lg shadow overflow-hidden hover:shadow-md transition">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.date} – {event.location}</p>
              <Button variant="default" className="mt-4 w-full">Je m'inscris</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
