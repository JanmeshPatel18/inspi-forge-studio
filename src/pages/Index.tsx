import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";
import ApplicationsSection from "@/components/ui/applications-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
