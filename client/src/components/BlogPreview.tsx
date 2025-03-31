import { CalendarIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "Building APIs with React and Express",
    excerpt: "Learn how to create powerful and scalable APIs using React and Express.",
    date: "May 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    slug: "/blog/building-apis"
  },
  {
    id: 2,
    title: "Security Best Practices for Web Applications",
    excerpt: "Discover the best ways to keep your web applications secure and protected.",
    date: "April 28, 2023",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    slug: "/blog/security-best-practices"
  },
  {
    id: 3,
    title: "Optimizing Frontend Performance",
    excerpt: "Tips and techniques to make your web applications faster and more efficient.",
    date: "April 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
    slug: "/blog/optimizing-performance"
  }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, tips, and insights about web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection
              key={post.id}
              delay={index * 0.1}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button asChild variant="link" className="text-primary p-0 font-medium hover:underline">
                  <Link href={post.slug}>Read more →</Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="mt-4">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
