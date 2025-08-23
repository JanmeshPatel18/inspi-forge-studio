import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-primary mb-4">
              PlastiCorp
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Leading manufacturer of high-quality plastic reprocessed granules since 2004. 
              Committed to sustainability and excellence in every product we deliver.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#products" className="text-white/70 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-white/70">HDPE Granules</span></li>
              <li><span className="text-white/70">PP Granules</span></li>
              <li><span className="text-white/70">LDPE Granules</span></li>
              <li><span className="text-white/70">ABS Granules</span></li>
              <li><span className="text-white/70">PET Granules</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2024 PlastiCorp. All rights reserved. | Designed with excellence in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;