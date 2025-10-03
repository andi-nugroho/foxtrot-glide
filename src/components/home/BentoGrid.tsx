import { Card } from "@/components/ui/card";
import { Zap, Shield, Rocket, Globe, Code, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized for speed with edge computing and smart caching",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    size: "lg",
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security built into every layer",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    size: "md",
  },
  {
    title: "Deploy Anywhere",
    description: "One-click deployment to any cloud platform",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
    size: "md",
  },
  {
    title: "Global CDN",
    description: "Reach users worldwide with low latency",
    icon: Globe,
    gradient: "from-green-500 to-emerald-500",
    size: "md",
  },
  {
    title: "Developer Experience",
    description: "Intuitive APIs and comprehensive documentation",
    icon: Code,
    gradient: "from-indigo-500 to-purple-500",
    size: "md",
  },
  {
    title: "AI-Powered",
    description: "Smart optimizations powered by machine learning",
    icon: Cpu,
    gradient: "from-pink-500 to-rose-500",
    size: "lg",
  },
];

export default function BentoGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features that help you build, deploy, and scale with confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "lg";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={isLarge ? "md:col-span-2" : "md:col-span-1"}
              >
                <Card className="h-full p-6 sm:p-8 glass-effect border-border/50 hover:border-primary/50 transition-colors group">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
