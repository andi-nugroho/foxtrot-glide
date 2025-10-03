import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import blogDesignSystem from "@/assets/blog-design-system.jpg";
import blogPerformance from "@/assets/blog-performance.jpg";
import blogAI from "@/assets/blog-ai.jpg";

const posts = [
  {
    slug: "design-system-at-scale",
    title: "Building a Design System at Scale",
    description: "How we built a scalable design system that powers products used by millions",
    date: "2025-01-15",
    tags: ["Design", "System", "React"],
    cover: blogDesignSystem,
    coverAlt: "Design system components preview",
  },
  {
    slug: "web-performance-2025",
    title: "Web Performance in 2025",
    description: "Latest techniques and best practices for optimizing modern web applications",
    date: "2025-01-10",
    tags: ["Performance", "Web Vitals"],
    cover: blogPerformance,
    coverAlt: "Performance metrics visualization",
  },
  {
    slug: "ai-powered-development",
    title: "AI-Powered Development Workflows",
    description: "Leveraging AI to enhance productivity and code quality in modern development",
    date: "2025-01-05",
    tags: ["AI", "Development", "Tools"],
    cover: blogAI,
    coverAlt: "AI technology concept",
  },
];

export default function Blog() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog</span> & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Thoughts on design, development, and the future of the web
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-full"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden glass-effect border-border/50 hover:border-primary/50 transition-all group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.coverAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
