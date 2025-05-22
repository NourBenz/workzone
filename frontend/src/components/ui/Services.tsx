import { Button } from './button';

const services = [
  {
    title: 'Coworking Zone',
    description: 'Un espace de travail partagé pour les freelances et les entrepreneurs.',
    image: '/coworking.jpg',
    link: '/services/coworking'
  },
  {
    title: 'Meetings Zone',
    description: 'Des salles de réunion équipées pour vos rendez-vous professionnels.',
    image: '/meetings.jpg',
    link: '/services/meetings'
  },
  {
    title: 'Private Zone',
    description: 'Des bureaux privés pour votre équipe ou votre entreprise.',
    image: '/private.jpg',
    link: '/services/private'
  },
  {
    title: 'Domiciliation',
    description: 'Une adresse professionnelle pour votre entreprise.',
    image: '/domiciliation.jpg',
    link: '/services/domiciliation'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos différents espaces de travail adaptés à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full bg-white/10 text-white border-white hover:bg-white/20">
                    Explorer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
