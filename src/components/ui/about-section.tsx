import { CheckCircle, Award, Users, Shield } from "lucide-react";
import { Card, CardContent } from "./card";

const AboutSection = () => {
  const services = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "100% quality tested granules with international standards compliance"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Quality",
      description: "High-grade reprocessed plastic granules for various industrial applications"  
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Experienced professionals with decades of industry expertise"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reliable Supply",
      description: "Consistent delivery and supply chain management for your business needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              We Are Proudly Providing Services Since 2004
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over two decades of experience in the plastic reprocessing industry, 
              we have established ourselves as a leading manufacturer of high-quality 
              plastic granules. Our commitment to excellence and innovation has made us 
              the preferred choice for businesses across various industries.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in converting waste plastic materials into premium quality 
              reprocessed granules, contributing to environmental sustainability while 
              meeting the growing demand for recycled plastic materials.
            </p>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;