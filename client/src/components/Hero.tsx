import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative text-white pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-500 z-0" />
      
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Modern Website Development
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Create beautiful, responsive, and feature-rich web applications with our powerful framework and modern front-end technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                asChild
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <a href="#features">Explore Features</a>
              </Button>
              <Button 
                asChild
                size="lg" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Development workspace" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-white h-16 rounded-t-3xl" />
      </div>
    </section>
  );
}
