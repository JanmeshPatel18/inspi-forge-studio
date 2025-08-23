import applicationsImage from "@/assets/applications.jpg";

const ApplicationsSection = () => {
  const applications = [
    "Automotive Parts",
    "Packaging Materials", 
    "Household Items",
    "Industrial Containers",
    "Electronic Housings",
    "Construction Materials",
    "Medical Equipment",
    "Food Packaging"
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our high-quality plastic granules find applications across diverse industries, 
            providing reliable solutions for various manufacturing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={applicationsImage}
              alt="Various plastic product applications"
              className="w-full rounded-lg shadow-strong"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-strong">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm">Product Types</div>
            </div>
          </div>

          {/* Right - Applications List */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Used in All Types of Industries
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{app}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="text-xl font-semibold text-primary mb-3">
                Quality Guarantee
              </h4>
              <p className="text-muted-foreground">
                All our plastic granules undergo rigorous quality testing to ensure 
                they meet international standards and your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;