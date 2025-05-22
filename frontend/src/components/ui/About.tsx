import { CheckCircle } from 'lucide-react';

const features = [
  '2 Espaces coworking',
  'Espace de détente',
  'ERP interne',
  'Communauté active',
  'Fibre optique',
  'Événements'
];

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="/about-image.jpg"
              alt="WorkZone Space"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold">140+</div>
              <div className="text-lg">Bureaux privés</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8 p-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Work Zone
            </h2>
            <div className="space-y-6 text-lg text-gray-600 mb-12">
              <p>
                Chez Workzone, nous prônons la flexibilité et la proactivité dans tout ce que nous entreprenons. 
                Nos offres peuvent être personnalisées en fonction des besoins et du budget.
              </p>
              <p>
                Conçus pour favoriser la productivité et optimiser les performances, nos espaces de travail 
                permettent d'échanger, de prospérer et d'inspirer. Sécurisés et accessibles 24/7, nos espaces 
                sont dotés de lumière naturelle favorable à votre épanouissement personnel.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-600 italic text-lg">
                "Workzone, c'est également des événements organisés. Formation, workshop ou séminaire, 
                il se passe toujours quelque chose à Workzone !"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;