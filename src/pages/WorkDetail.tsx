import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import workEcommerce from "@/assets/work-ecommerce.jpg";
import workSaas from "@/assets/work-saas.jpg";

const projects: Record<string, any> = {
  "ecommerce-revamp": {
    title: "E-Commerce Platform Revamp",
    client: "RetailCo",
    year: "2024",
    services: ["UX Design", "Frontend", "Performance"],
    stack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    cover: workEcommerce,
    coverAlt: "E-commerce platform interface",
    summary: "Complete redesign and performance optimization of a high-traffic e-commerce platform",
    outcomes: [
      "40% faster LCP (Largest Contentful Paint)",
      "12% increase in conversion rate",
      "25% reduction in bounce rate",
      "50% improvement in mobile performance",
    ],
    challenge: "RetailCo's existing e-commerce platform was struggling with poor performance, especially on mobile devices. The checkout flow had a high abandonment rate, and the overall user experience needed modernization.",
    solution: "We conducted a comprehensive UX audit and rebuilt the frontend using modern technologies. Implemented advanced performance optimizations including edge caching, image optimization, and code splitting.",
    results: "The revamped platform saw immediate improvements in both user engagement and business metrics. Mobile conversion rates increased significantly, and the modern design resonated well with users.",
  },
  "saas-dashboard": {
    title: "SaaS Analytics Dashboard",
    client: "DataTech Inc",
    year: "2024",
    services: ["Product Design", "Full-stack", "Data Visualization"],
    stack: ["React", "TypeScript", "D3.js", "Node.js"],
    cover: workSaas,
    coverAlt: "SaaS dashboard interface",
    summary: "Enterprise analytics platform with real-time data visualization and insights",
    outcomes: [
      "Real-time data processing for 1M+ events/day",
      "30% reduction in time-to-insight",
      "90% user satisfaction score",
      "Successfully onboarded 100+ enterprise clients",
    ],
    challenge: "DataTech needed a powerful analytics dashboard that could handle massive amounts of data while remaining intuitive for non-technical users. The existing solution was slow and lacked key features.",
    solution: "Built a completely new analytics platform from the ground up with a focus on performance and usability. Implemented custom data visualization components and real-time processing pipelines.",
    results: "The new dashboard became DataTech's flagship product, driving significant customer acquisition and retention. Users praised the intuitive interface and powerful insights capabilities.",
  },
};

export default function WorkDetail() {
  const { slug } = useParams();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/work">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button asChild variant="ghost" className="mb-8 rounded-full">
            <Link to="/work">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.summary}</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Client</h3>
                  <p className="text-lg">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Year</h3>
                  <p className="text-lg">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service: string) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="rounded-full gradient-primary">
                <ExternalLink className="mr-2 h-4 w-4" /> View Live Project
              </Button>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src={project.cover}
                alt={project.coverAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
              <p className="text-lg text-muted-foreground">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Key Outcomes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.outcomes.map((outcome: string, i: number) => (
                  <div key={i} className="glass-effect p-6 rounded-2xl border border-border/50">
                    <p className="text-lg font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Results</h2>
              <p className="text-lg text-muted-foreground">{project.results}</p>
            </section>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
