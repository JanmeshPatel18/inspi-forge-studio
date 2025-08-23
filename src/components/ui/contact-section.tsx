import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Card, CardContent } from "./card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-industrial-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to discuss your plastic granule requirements? 
            Drop us a line and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 shadow-strong">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                <Input
                  placeholder="Subject"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/60"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/60"
                />
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                    <p className="text-white/70">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-white/70">info@plasticorp.com</p>
                    <p className="text-white/70">sales@plasticorp.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />  
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                    <p className="text-white/70">
                      123 Industrial Park<br />
                      Manufacturing District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-white/70">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-white/70">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-white/70">Sunday: Closed</p>
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

export default ContactSection;