import { Button } from './button';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/dist/assets/background_Plan-de-travail-1-scaled-1.jpg"
        alt="WorkZone Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'brightness(0.7)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Better Environment To Work
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow">
          Le partage et l'échange sont notre devise. Rejoignez notre communauté et tentez l'expérience Workzone…
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="text-lg px-12 py-6 bg-[#ff5757] hover:bg-[#e04a4a] text-white rounded-full font-semibold shadow-lg transition">
            Essai gratuit
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-white text-white rounded-full font-semibold hover:bg-white/20 transition">
            Visite Virtuelle
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
