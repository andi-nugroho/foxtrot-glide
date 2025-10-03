import { Card } from "@/components/ui/card";
import { FileCode, Palette, Rocket, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Design",
    description: "Start with beautiful, responsive templates or create from scratch",
    icon: Palette,
  },
  {
    number: "02",
    title: "Develop",
    description: "Build with modern tools and best practices built-in",
    icon: FileCode,
  },
  {
    number: "03",
    title: "Deploy",
    description: "Ship to production with one click, zero configuration",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Scale",
    description: "Grow without limits with automatic scaling and optimization",
    icon: BarChart,
  },
];

export default function ProcessSteps() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple Process, <span className="gradient-text">Powerful Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to production in four straightforward steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full p-6 glass-effect border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </div>
                  <div className="relative">
                    <div className="inline-flex p-3 rounded-2xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
