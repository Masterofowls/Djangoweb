import { Check, Users, Target, Award, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <AnimatedSection className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
              <p className="text-lg text-gray-600 mb-8">
                We're a passionate team of developers, designers, and digital strategists dedicated to creating exceptional web experiences that drive results.
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection 
              delay={0.2}
              className="md:w-1/2 mt-10 md:mt-0"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Our team meeting"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in 2015, we started with a simple mission: to help businesses succeed online through thoughtful design and robust development. Since then, we've worked with companies of all sizes across various industries, from startups to established enterprises.
            </p>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row items-center">
            <AnimatedSection className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <p className="text-gray-600 mb-6">
                Our journey began with three developers who shared a passion for creating beautiful and functional websites. As the digital landscape evolved, so did we, expanding our expertise to include the latest technologies and best practices in web development.
              </p>
              <p className="text-gray-600 mb-6">
                Today, our team includes talented developers, designers, project managers, and digital strategists who work together to deliver exceptional results for our clients. We take pride in our collaborative approach, attention to detail, and commitment to staying at the forefront of web development.
              </p>
              <p className="text-gray-600">
                With each project, we strive to not just meet but exceed expectations, creating websites and applications that not only look great but also perform flawlessly and drive business growth.
              </p>
            </AnimatedSection>
            <AnimatedSection 
              delay={0.2}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                alt="Our growth journey"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from how we build our products to how we interact with our clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection 
              delay={0.1}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe the best results come from working closely with our clients throughout the development process.
              </p>
            </AnimatedSection>

            <AnimatedSection 
              delay={0.2}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering high-quality solutions that exceed expectations and stand the test of time.
              </p>
            </AnimatedSection>

            <AnimatedSection 
              delay={0.3}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and approaches to solve complex problems effectively.
              </p>
            </AnimatedSection>

            <AnimatedSection 
              delay={0.4}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We build relationships based on trust, transparency, and always doing what's right for our clients.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team brings together diverse skills and perspectives to create exceptional web experiences.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection 
              delay={0.1}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Davis"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John Davis</h3>
                <p className="text-primary mb-4">Founder & Lead Developer</p>
                <p className="text-gray-600">
                  With over 15 years of experience in web development, John leads our technical strategy and oversees all projects.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection 
              delay={0.2}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Johnson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary mb-4">Creative Director</p>
                <p className="text-gray-600">
                  Sarah brings designs to life with her keen eye for aesthetics and user experience expertise.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection 
              delay={0.3}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="Michael Chen"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-primary mb-4">Frontend Developer</p>
                <p className="text-gray-600">
                  Michael specializes in creating responsive, accessible, and beautiful user interfaces using modern frameworks.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your project to life with our expertise and passion.
            </p>
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
