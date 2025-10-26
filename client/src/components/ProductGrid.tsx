import { motion } from "framer-motion";
import { Globe, RefreshCw, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProductGrid() {
  const products = [
    {
      icon: Globe,
      title: "QuantVault Online",
      features: [
        "No KYC payments: enjoy seamless transactions without the friction of Know Your Customer requirements.",
        "Quick setup: get started in under 10 minutes with our non-gated platform.",
        "Convenience: re-use wallet authorizations for a smoother payment experience.",
      ],
    },
    {
      icon: RefreshCw,
      title: "QuantVault Subscriptions",
      features: [
        "Custom subscription plans: flexible pricing models to cater to all subscription needs, allowing you to adapt to your business requirements effortlessly.",
        "Flexible billing intervals: choose from weekly, monthly, quarterly, or annual billing cycles with easy customization.",
        "Free trials & upgrades: offer trial periods and seamless plan upgrades without requiring customers to re-verify payment methods.",
      ],
    },
    {
      icon: FileText,
      title: "QuantVault Invoicing",
      features: [
        "Low code / no code integration: easily create hosted invoice pages with minimal technical knowledge.",
        "Automated receipts: our managed invoice email service ensures your customers receive their receipts promptly, enhancing their experience.",
        "Export-friendly records: download invoice data in formats compatible with popular accounting and tax software.",
      ],
    },
  ];

  return (
    <section className="relative py-20 sm:py-32" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="text-solution-headline"
          >
            Our Solution
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our Solution Streamlines Crypto Transactions, Ensuring Effortless
            Adoption for All Merchants.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            QuantVault provides no-code solutions for payments, boosting profits and
            removing banking hurdles. Online or offline, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-6 sm:p-8 h-full bg-card/50 backdrop-blur-sm border-white/10 hover-elevate transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                data-testid={`card-product-${index}`}
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-6">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  {product.title}
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <p
          className="text-center text-lg text-muted-foreground"
          data-testid="text-trust-bar"
        >
          Our products suit any merchant, letting you harness crypto without
          traditional banking infrastructure. Step into the future of payments.
        </p>
      </div>
    </section>
  );
}
