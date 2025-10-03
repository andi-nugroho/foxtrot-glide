import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "Perfect for side projects and learning",
    price: { monthly: 0, yearly: 0 },
    features: [
      "5 Projects",
      "10GB Storage",
      "Community Support",
      "Basic Analytics",
      "SSL Certificate",
    ],
  },
  {
    name: "Pro",
    description: "For professional developers and teams",
    price: { monthly: 29, yearly: 290 },
    popular: true,
    features: [
      "Unlimited Projects",
      "100GB Storage",
      "Priority Support",
      "Advanced Analytics",
      "Custom Domains",
      "Team Collaboration",
      "API Access",
    ],
  },
  {
    name: "Business",
    description: "For scaling businesses and enterprises",
    price: { monthly: 99, yearly: 990 },
    features: [
      "Everything in Pro",
      "500GB Storage",
      "24/7 Phone Support",
      "Advanced Security",
      "SLA Guarantee",
      "Dedicated Account Manager",
      "Custom Integrations",
      "White Label Options",
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

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
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full glass-effect">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-accent">Save 17%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card
                className={`h-full p-8 ${
                  plan.popular
                    ? "border-primary/50 shadow-lg ring-2 ring-primary/20"
                    : "glass-effect"
                }`}
              >
                {plan.popular && (
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <Button
                  asChild
                  className={`w-full rounded-full mb-6 ${
                    plan.popular ? "gradient-primary" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to="/dashboard">Get Started</Link>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
