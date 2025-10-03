import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import workEcommerce from "@/assets/work-ecommerce.jpg";
import workSaas from "@/assets/work-saas.jpg";

const projects = [
  {
    slug: "ecommerce-revamp",
    title: "E-Commerce Platform Revamp",
    client: "RetailCo",
    year: "2024",
    services: ["UX Design", "Frontend", "Performance"],
    stack: ["React", "Next.js", "Tailwind"],
    cover: workEcommerce,
    coverAlt: "E-commerce platform interface",
    summary: "Complete redesign and performance optimization of a high-traffic e-commerce platform",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "DataTech Inc",
    year: "2024",
    services: ["Product Design", "Full-stack", "Data Viz"],
    stack: ["React", "TypeScript", "D3.js"],
    cover: workSaas,
    coverAlt: "SaaS dashboard interface",
    summary: "Enterprise analytics platform with real-time data visualization and insights",
  },
];

export default function Work() {
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
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Case studies showcasing our approach to solving complex challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/work/${project.slug}`}>
                <Card className="h-full overflow-hidden glass-effect border-border/50 hover:border-primary/50 transition-all group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.coverAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{project.client}</span>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.map((service) => (
                        <Badge key={service} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
