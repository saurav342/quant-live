import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-32" id="cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-background border border-white/10 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center">
            <p
              className="text-xs sm:text-sm font-medium tracking-widest text-primary mb-4"
              data-testid="text-cta-welcome"
            >
              Welcome to QuantVault
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
              data-testid="text-cta-headline"
            >
              Join the waitlist to unlock next-gen payments
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Be first to access instant crypto payments, automated invoicing, and
              subscription billing with zero banking friction.
            </p>

            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
