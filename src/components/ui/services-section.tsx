import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Factory, Recycle, Truck, TestTube } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "High Density Polyethylene (HDPE)",
      description: "Premium HDPE granules suitable for blow molding, injection molding, and extrusion applications. Available in natural and colored variants."
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Polypropylene (PP)",
      description: "High-quality PP granules with excellent chemical resistance and thermal properties for automotive and packaging industries."
    },
    {
      icon: <TestTube className="h-12 w-12 text-primary" />,
      title: "Low Density Polyethylene (LDPE)",
      description: "Flexible LDPE granules perfect for film production, flexible packaging, and various molding applications."
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "ABS (Acrylonitrile Butadiene Styrene)",
      description: "Durable ABS granules offering excellent impact resistance and surface finish for electronic housings and automotive parts."
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "PET (Polyethylene Terephthalate)",
      description: "Crystal clear PET granules ideal for bottle manufacturing, fiber production, and food-grade packaging applications."
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "All Types of Bottle Scrap",
      description: "Comprehensive recycling services for all types of plastic bottles, converting waste into valuable raw materials."
    }
  ];

  return (
    <section id="services" className="py-20 bg-industrial-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We will Satisfy You By Our{" "}
            <span className="text-primary">Technical Solutions</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our comprehensive range of plastic reprocessing services ensures quality, 
            reliability, and environmental responsibility in every product we deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 shadow-medium hover:shadow-strong">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-white/70 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;