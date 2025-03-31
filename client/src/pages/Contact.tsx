import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  return (
    <section className="pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to start a project? Get in touch with our team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <AnimatedSection className="md:w-1/2 p-8 bg-primary text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8">
                Ready to start your project? Contact us today to discuss your requirements and how we can help.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p>123 Web Dev Street</p>
                    <p>San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 mr-3" />
                  <a href="mailto:info@modernsite.com" className="hover:underline">
                    info@modernsite.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <a href="tel:+15551234567" className="hover:underline">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p className="mb-2">Monday - Friday: 9am - 5pm</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection 
              delay={0.2}
              className="md:w-1/2 p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
