import Navbar from '../components/ui/Navbar';
import Hero from '../components/ui/Hero';
import About from '../components/ui/About';
import Services from '../components/ui/Services';
import Pricing from '../components/ui/Pricing';
import Events from '../components/ui/Events';
import Contact from '../components/ui/Contact';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Events />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
