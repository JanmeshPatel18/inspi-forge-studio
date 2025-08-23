import { Button } from "./button";
import heroImage from "@/assets/hero-granules.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Colorful plastic granules manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          All Types of Plastic
          <span className="block text-primary"> Reprocessed Granules</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">Manufacturer</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Most Satisfied Plastic Granules Provider Since 2004
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-lg">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-lg">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-lg">Product Types</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;