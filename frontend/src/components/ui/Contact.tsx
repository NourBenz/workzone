import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Votre nom"
                    className="h-12" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com"
                    className="h-12" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Sujet de votre message"
                  className="h-12" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message"
                  className="min-h-[200px] resize-none"
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg">
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 p-8">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Work Zone 1.0
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Adresse</p>
                    <p className="text-gray-600">
                      A8.8 imm Golden Towers, Centre Urbain Nord Tunis, 1082 Tunisie
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Téléphone</p>
                    <p className="text-gray-600">+216 36 238 053</p>
                    <p className="text-gray-600">+216 22 252 273</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Email</p>
                    <p className="text-gray-600">hello@workzone.tn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Work Zone 2.0
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Adresse</p>
                    <p className="text-gray-600">
                      B.0 imm zeineb, centre urbain nord Tunis 1082, Tunisie
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Téléphone</p>
                    <p className="text-gray-600">+216 36 238 053</p>
                    <p className="text-gray-600">+216 22 252 273</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Email</p>
                    <p className="text-gray-600">hello@workzone.tn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;