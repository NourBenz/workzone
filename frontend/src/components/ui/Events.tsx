import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

interface Event {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  image: string;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      title: "Networking Afterwork",
      date: "15 Mars 2024",
      time: "18h00 - 20h00",
      description: "Venez rencontrer d'autres professionnels et échanger autour d'un verre.",
      location: "Espace Lounge",
      image: "https://placehold.co/600x400?text=Networking"
    },
    {
      title: "Workshop: Marketing Digital",
      date: "20 Mars 2024",
      time: "14h00 - 17h00",
      description: "Apprenez les bases du marketing digital et boostez votre présence en ligne.",
      location: "Salle de Formation",
      image: "https://placehold.co/600x400?text=Workshop"
    },
    {
      title: "Pitch Day",
      date: "25 Mars 2024",
      time: "10h00 - 16h00",
      description: "Présentez votre projet devant des investisseurs et entrepreneurs.",
      location: "Auditorium",
      image: "https://placehold.co/600x400?text=Pitch"
    }
  ];

  return (
    <section id="events" className="section-container bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="section-title">Événements à venir</h2>
        <p className="section-subtitle">Découvrez nos prochains événements et rencontres professionnelles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/600x400?text=${event.title[0]}`;
                }}
              />
            </div>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Date:</span> {event.date}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Heure:</span> {event.time}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Lieu:</span> {event.location}
                </p>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">S'inscrire</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Events;