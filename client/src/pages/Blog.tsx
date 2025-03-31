import { useState } from "react";
import { CalendarIcon, User, Tag, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "Building APIs with React and Express",
    excerpt: "Learn how to create powerful and scalable APIs using React and Express. We'll cover best practices, authentication, and error handling.",
    content: "Lorem ipsum dolor sit amet...",
    author: "John Davis",
    date: "May 15, 2023",
    category: "Development",
    tags: ["React", "Express", "API"],
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    slug: "/blog/building-apis"
  },
  {
    id: 2,
    title: "Security Best Practices for Web Applications",
    excerpt: "Discover the best ways to keep your web applications secure and protected. Learn about common vulnerabilities and how to mitigate them.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Sarah Johnson",
    date: "April 28, 2023",
    category: "Security",
    tags: ["Security", "Web", "Best Practices"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    slug: "/blog/security-best-practices"
  },
  {
    id: 3,
    title: "Optimizing Frontend Performance",
    excerpt: "Tips and techniques to make your web applications faster and more efficient. Learn about code splitting, lazy loading, and more.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Michael Chen",
    date: "April 10, 2023",
    category: "Performance",
    tags: ["Frontend", "Performance", "Optimization"],
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
    slug: "/blog/optimizing-performance"
  },
  {
    id: 4,
    title: "Introduction to React Hooks",
    excerpt: "A comprehensive guide to React Hooks. Learn how to use useState, useEffect, useContext, and more to build powerful functional components.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Emily Rodriguez",
    date: "March 22, 2023",
    category: "Development",
    tags: ["React", "Hooks", "Frontend"],
    imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    slug: "/blog/react-hooks-intro"
  },
  {
    id: 5,
    title: "Responsive Design Principles",
    excerpt: "Master the art of responsive web design. Learn how to create websites that look great on any device, from mobile phones to desktop computers.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Alex Thompson",
    date: "March 5, 2023",
    category: "Design",
    tags: ["Design", "Responsive", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    slug: "/blog/responsive-design"
  },
  {
    id: 6,
    title: "Getting Started with TypeScript",
    excerpt: "A beginner's guide to TypeScript. Learn how to add static typing to your JavaScript code and prevent common errors.",
    content: "Lorem ipsum dolor sit amet...",
    author: "David Wilson",
    date: "February 18, 2023",
    category: "Development",
    tags: ["TypeScript", "JavaScript", "Development"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    slug: "/blog/typescript-intro"
  }
];

const categories = [
  "All",
  "Development",
  "Design",
  "Security",
  "Performance",
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-16">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest news, tips, and insights about web development.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main content */}
            <div className="md:w-2/3">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Blog posts */}
              <div className="space-y-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <AnimatedSection
                      key={post.id}
                      delay={index * 0.1}
                    >
                      <Card>
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title} 
                              className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <CardHeader className="p-0 pb-3">
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                <CalendarIcon className="h-4 w-4 mr-2" />
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <User className="h-4 w-4 mr-2" />
                                <span>{post.author}</span>
                              </div>
                              <CardTitle className="text-xl font-bold mb-2">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 pb-4">
                              <p className="text-gray-600">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter className="p-0 flex justify-between items-center">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                  <span 
                                    key={tag}
                                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Button asChild variant="link" className="text-primary p-0">
                                <Link href={post.slug}>Read more →</Link>
                              </Button>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    </AnimatedSection>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No articles found. Try a different search term.</p>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3 mt-8 md:mt-0">
              <AnimatedSection
                delay={0.2}
                className="bg-white rounded-lg p-6 shadow-sm mb-8"
              >
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection
                delay={0.3}
                className="bg-white rounded-lg p-6 shadow-sm mb-8"
              >
                <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-start">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h4 className="font-medium mb-1">
                          <Link href={post.slug}>
                            <a className="hover:text-primary transition-colors">
                              {post.title}
                            </a>
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection
                delay={0.4}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
