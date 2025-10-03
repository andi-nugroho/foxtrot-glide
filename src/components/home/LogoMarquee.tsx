import { motion } from "framer-motion";

const logos = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple",
  "Netflix", "Tesla", "Spotify", "Uber", "Airbnb",
];

export default function LogoMarquee() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-12">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 shrink-0"
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center min-w-[140px] h-12 text-muted-foreground font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
