import { Terminal, LayoutDashboard, Smartphone, BarChart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: <Terminal />,
    title: "Custom Development",
    description: "We build tailored applications that meet your specific business requirements and goals."
  },
  {
    icon: <LayoutDashboard />,
    title: "CMS Implementation",
    description: "Powerful content management systems that make updating your website content easy and intuitive."
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks and functions perfectly on all devices."
  },
  {
    icon: <BarChart />,
    title: "Performance Optimization",
    description: "Speed up your website with caching, database optimization, and front-end performance improvements."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive development services to help you build your next web project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 0.1}
              className="flex flex-col md:flex-row"
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-primary text-white rounded-full p-4 inline-flex">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="link" className="text-primary p-0 font-medium hover:underline">
                  <Link href="/contact">Learn more →</Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
