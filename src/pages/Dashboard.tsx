import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const stats = [
    { label: "Total Projects", value: "12", icon: BarChart, change: "+2 this month" },
    { label: "Active Users", value: "1,234", icon: Users, change: "+18%" },
    { label: "Performance Score", value: "98", icon: Zap, change: "+5 points" },
    { label: "Revenue", value: "$45.2K", icon: TrendingUp, change: "+23%" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
            </div>
            <Button className="rounded-full gradient-primary">New Project</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Card className="p-6 glass-effect">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm text-green-500">{stat.change}</span>
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6 glass-effect">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  "Deployed 'foxtrot-web' to production",
                  "Updated dependencies in 'api-service'",
                  "Created new feature branch",
                  "Merged PR #145 - Performance improvements",
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 glass-effect">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {["Deploy", "Analytics", "Settings", "Support"].map((action, i) => (
                  <Button key={i} variant="outline" className="rounded-full">
                    {action}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
