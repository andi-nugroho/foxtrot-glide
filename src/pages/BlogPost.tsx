import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import blogDesignSystem from "@/assets/blog-design-system.jpg";
import blogPerformance from "@/assets/blog-performance.jpg";
import blogAI from "@/assets/blog-ai.jpg";

const posts: Record<string, any> = {
  "design-system-at-scale": {
    title: "Building a Design System at Scale",
    description: "How we built a scalable design system that powers products used by millions",
    date: "2025-01-15",
    tags: ["Design", "System", "React"],
    cover: blogDesignSystem,
    coverAlt: "Design system components preview",
    content: `
# Building a Design System at Scale

Creating a design system that scales across multiple products and teams is a challenging but rewarding endeavor. In this post, we'll explore the key principles and practices that helped us build a system used by millions.

## The Foundation

Every great design system starts with solid foundations:

- **Typography**: Consistent, accessible type scales
- **Color**: Semantic color tokens that support theming
- **Spacing**: Predictable spacing system
- **Components**: Reusable, composable building blocks

## Component Architecture

We built our components with these principles:

1. **Composability**: Components should work together seamlessly
2. **Accessibility**: WCAG AA compliance out of the box
3. **Flexibility**: Support for customization without breaking consistency
4. **Performance**: Optimized for bundle size and runtime performance

## Documentation & Tooling

Great documentation is crucial for adoption. We invested heavily in:

- Interactive component playgrounds
- Copy-paste ready code examples
- Design tokens documentation
- Migration guides for breaking changes

## Results

After 18 months, our design system powers:

- 50+ products
- 200+ engineers
- 20M+ monthly active users

The investment in consistency and quality has paid dividends in development speed and user experience.
    `,
  },
  "web-performance-2025": {
    title: "Web Performance in 2025",
    description: "Latest techniques and best practices for optimizing modern web applications",
    date: "2025-01-10",
    tags: ["Performance", "Web Vitals"],
    cover: blogPerformance,
    coverAlt: "Performance metrics visualization",
    content: `
# Web Performance in 2025

Web performance continues to be crucial for user experience and business metrics. Here's what's changed and what matters most in 2025.

## Core Web Vitals Evolution

The metrics have evolved:

- **LCP (Largest Contentful Paint)**: Now targets sub-1.2s
- **INP (Interaction to Next Paint)**: Replaced FID as the interactivity metric
- **CLS (Cumulative Layout Shift)**: Stricter thresholds for better UX

## Modern Optimization Techniques

### 1. Image Optimization

- Next-gen formats (AVIF, WebP)
- Responsive images with srcset
- Lazy loading below the fold
- Priority hints for hero images

### 2. Code Splitting

Smart chunking strategies:
- Route-based splitting
- Component-level lazy loading
- Vendor bundle optimization

### 3. Edge Computing

Leverage edge functions for:
- Personalized content
- A/B testing
- Dynamic rendering
- API optimization

## Measurement & Monitoring

Use Real User Monitoring (RUM) to track:
- Field data from actual users
- Geographic performance variance
- Device-specific bottlenecks
- Regression detection

## Conclusion

Performance is an ongoing journey, not a destination. Continuous monitoring and optimization are key to success.
    `,
  },
  "ai-powered-development": {
    title: "AI-Powered Development Workflows",
    description: "Leveraging AI to enhance productivity and code quality in modern development",
    date: "2025-01-05",
    tags: ["AI", "Development", "Tools"],
    cover: blogAI,
    coverAlt: "AI technology concept",
    content: `
# AI-Powered Development Workflows

AI is transforming how we write, review, and ship code. Here's how to integrate AI into your development workflow effectively.

## Code Generation

AI assistants can help with:

- **Boilerplate code**: Reduce repetitive work
- **Type definitions**: Generate TypeScript types from APIs
- **Test cases**: Create comprehensive test coverage
- **Documentation**: Auto-generate JSDoc comments

## Code Review Enhancement

AI tools excel at:

1. Identifying potential bugs
2. Suggesting performance optimizations
3. Ensuring code style consistency
4. Detecting security vulnerabilities

## Intelligent Refactoring

Use AI to:
- Modernize legacy code
- Apply design patterns
- Optimize algorithms
- Improve readability

## Best Practices

### Do:
- Review AI-generated code carefully
- Use AI as a pair programmer, not a replacement
- Customize prompts for your codebase
- Train on your team's conventions

### Don't:
- Blindly accept all suggestions
- Skip testing AI-generated code
- Ignore security implications
- Over-rely on automation

## The Future

AI will increasingly handle:
- Automated debugging
- Predictive maintenance
- Performance optimization
- Accessibility improvements

The key is finding the right balance between automation and human oversight.
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button asChild variant="ghost" className="mb-8 rounded-full">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src={post.cover}
              alt={post.coverAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n').map((line: string, i: number) => {
              if (line.startsWith('# ')) {
                return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{line.slice(4)}</h3>;
              } else if (line.startsWith('- ')) {
                return <li key={i} className="ml-6">{line.slice(2)}</li>;
              } else if (line.match(/^\d+\. /)) {
                return <li key={i} className="ml-6">{line.replace(/^\d+\. /, '')}</li>;
              } else if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-bold my-2">{line.slice(2, -2)}</p>;
              } else if (line.trim()) {
                return <p key={i} className="my-4 text-muted-foreground">{line}</p>;
              }
              return null;
            })}
          </div>
        </motion.div>
      </article>
    </div>
  );
}
