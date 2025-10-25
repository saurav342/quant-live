import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Mission() {
  return (
    <section
      className="relative py-20 sm:py-32 border-t border-white/10"
      id="mission"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
              data-testid="text-mission-headline"
            >
              Evolving Beyond Traditional Systems
            </h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
              We address the rising challenges of a digital society by replacing
              complex card fees and monopolistic practices with secure,
              blockchain-based solutions.
            </p>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Decentralized rails built for speed, scalability, and integration,
              from merchant apps to blockchain protocols.
            </p>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Our mission is to equip merchants with innovative technology to stay
              ahead in finance.
            </p>

            <div className="space-y-4">
              {[
                { icon: Zap, text: "Faster settlement" },
                { icon: Shield, text: "Lower fees" },
                { icon: Users, text: "No gatekeepers" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/10 hover-elevate transition-all duration-300">
              <h3
                className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                data-testid="text-disrupting-headline"
              >
                Disrupting the Status Quo
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                We replace outdated financial systems with tools that give
                merchants better margins, faster settlements, and greater control.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
