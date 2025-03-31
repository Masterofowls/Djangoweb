import { Monitor, Code, Shield, Zap, Cloud, Search } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: <Monitor className="h-12 w-12" />,
    title: "Responsive Design",
    description: "Looks great on any device, from mobile phones to desktop computers."
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: "Powerful Admin",
    description: "Built-in admin interface lets you manage content with ease."
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Secure Framework",
    description: "Built-in protection against common security threats like CSRF, XSS, and SQL injection."
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Fast Performance",
    description: "Optimized for speed with server-side rendering and efficient database queries."
  },
  {
    icon: <Cloud className="h-12 w-12" />,
    title: "Scalable Architecture",
    description: "Designed to grow with your business, from small sites to large applications."
  },
  {
    icon: <Search className="h-12 w-12" />,
    title: "SEO Optimized",
    description: "Built with search engines in mind, helping your site rank higher in search results."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our website comes with everything you need to build modern, responsive web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.title} 
              delay={index * 0.1}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
