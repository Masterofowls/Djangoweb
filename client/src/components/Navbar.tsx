import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return location === "/";
    }
    return location === path;
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-sm py-2" : "bg-white/80 backdrop-blur-sm py-3"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center text-2xl font-bold text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              ModernSite
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.href.includes("#") && link.href !== "/#") {
                const id = link.href.split("#")[1];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, id)}
                    className={cn(
                      "font-medium transition-colors hover:text-primary",
                      isActive(link.href) ? "text-primary" : "text-gray-700"
                    )}
                  >
                    {link.label}
                  </a>
                );
              }
              
              return (
                <Link href={link.href} key={link.href}>
                  <a
                    className={cn(
                      "font-medium transition-colors hover:text-primary",
                      isActive(link.href) ? "text-primary" : "text-gray-700"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => {
                    if (link.href.includes("#") && link.href !== "/#") {
                      const id = link.href.split("#")[1];
                      return (
                        <SheetClose key={link.href} asChild>
                          <a
                            href={link.href}
                            onClick={(e) => scrollToSection(e, id)}
                            className={cn(
                              "font-medium transition-colors hover:text-primary py-2",
                              isActive(link.href) ? "text-primary" : "text-gray-700"
                            )}
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      );
                    }
                    
                    return (
                      <SheetClose key={link.href} asChild>
                        <Link href={link.href}>
                          <a
                            className={cn(
                              "font-medium transition-colors hover:text-primary py-2",
                              isActive(link.href) ? "text-primary" : "text-gray-700"
                            )}
                          >
                            {link.label}
                          </a>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
