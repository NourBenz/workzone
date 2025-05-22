import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Check } from 'lucide-react';

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular 
}) => {
  return (
    <Card className={`border ${isPopular ? 'border-workzone-orange shadow-lg' : 'border-gray-200'} h-full flex flex-col`}>
      {isPopular && (
        <div className="bg-workzone-orange text-white text-center py-1 text-sm font-medium">
          Populaire
        </div>
      )}
      
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2">{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1">
                <Check className="h-5 w-5 text-workzone-blue" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className={`w-full ${isPopular ? 'btn-secondary' : 'btn-primary'}`}
        >
          Choisir ce forfait
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Journée",
      price: "25 DT",
      period: "/ jour",
      description: "Pour les visiteurs occasionnels",
      features: [
        "Accès à l'espace coworking",
        "Internet haut débit",
        "Café et thé gratuits",
        "Accès imprimante (10 pages)",
        "Accès salle de réunion (1h)"
      ],
      isPopular: false
    },
    {
      title: "Flex",
      price: "299 DT",
      period: "/ mois",
      description: "Pour les freelances et indépendants",
      features: [
        "Accès illimité à l'espace coworking",
        "Internet haut débit",
        "Café et thé gratuits",
        "Accès imprimante (100 pages)",
        "Accès salle de réunion (5h/mois)",
        "Casier personnel"
      ],
      isPopular: true
    },
    {
      title: "Bureau Privé",
      price: "599 DT",
      period: "/ mois / personne",
      description: "Pour les équipes et startups",
      features: [
        "Bureau fermé privatif",
        "Accès 24/7",
        "Internet haut débit",
        "Café et thé gratuits",
        "Accès imprimante illimité",
        "Accès salle de réunion (10h/mois)",
        "Casier personnel",
        "Adresse de domiciliation"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section-container bg-white">
      <div className="text-center mb-14">
        <h2 className="section-title">Nos Tarifs</h2>
        <p className="section-subtitle">Des forfaits flexibles adaptés à tous les besoins</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingPlan 
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;