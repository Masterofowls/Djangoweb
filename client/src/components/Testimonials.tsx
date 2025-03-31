import { QuoteIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "The website they built for us exceeded our expectations. It's fast, responsive, and incredibly easy to manage. Their team was professional and responsive throughout the entire process.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "We needed a complex e-commerce solution, and they delivered perfectly. The site is fast, secure, and the custom admin interface makes managing our products a breeze.",
    author: "David Chen",
    role: "CEO, StyleShop",
    avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    quote: "Working with this team was a pleasure. They took our outdated website and transformed it into a modern, responsive application that's easy to use and maintain.",
    author: "Emily Rodriguez",
    role: "Director, EducationPlus",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our development services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.author}
              delay={index * 0.1}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="text-primary absolute -top-4 left-8">
                <QuoteIcon className="h-8 w-8" />
              </div>
              <p className="text-gray-600 mb-6 pt-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
