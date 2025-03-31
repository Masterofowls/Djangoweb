import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <AnimatedSection 
              className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Our team working on projects" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </AnimatedSection>
            <AnimatedSection className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
              <p className="text-gray-600 mb-6">
                We are a team of passionate developers dedicated to creating high-quality web applications that help businesses succeed online. With years of experience in web development, we understand what it takes to build websites that not only look great but also perform exceptionally well.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to provide innovative web solutions that help our clients achieve their business goals. We pride ourselves on our attention to detail, commitment to quality, and customer-focused approach.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>Experienced Team</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>On-time Delivery</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>Customer Support</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <BlogPreview />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to build something amazing. Contact us today to discuss your requirements.
          </p>
          <Button 
            asChild
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
