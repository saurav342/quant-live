import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";
import btcImage from "@assets/generated_images/Bitcoin_cryptocurrency_coin_3D_render_f0d948ad.png";
import ethImage from "@assets/generated_images/Ethereum_cryptocurrency_coin_3D_render_ba8f74ef.png";
import usdcImage from "@assets/generated_images/USDC_stablecoin_3D_render_321eb9ba.png";
import tetherImage from "@assets/generated_images/Tether_USDT_coin_3D_render_eb8bf9e5.png";

export function Hero() {
  const coins = [
    { src: btcImage, alt: "Bitcoin", x: "10%", y: "20%", delay: 0, scale: 0.8 },
    { src: ethImage, alt: "Ethereum", x: "75%", y: "15%", delay: 0.2, scale: 1 },
    { src: usdcImage, alt: "USDC", x: "15%", y: "70%", delay: 0.4, scale: 0.6 },
    { src: tetherImage, alt: "Tether", x: "80%", y: "65%", delay: 0.6, scale: 0.7 },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {coins.map((coin, index) => (
        <motion.img
          key={index}
          src={coin.src}
          alt={coin.alt}
          className="absolute w-24 sm:w-32 md:w-40 pointer-events-none"
          style={{
            left: coin.x,
            top: coin.y,
            transform: `scale(${coin.scale})`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.6, 0.9, 0.6],
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            delay: coin.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-xs sm:text-sm font-medium tracking-widest text-primary mb-6"
            data-testid="text-hero-tagline"
          >
            THE FUTURE OF PAYMENTS IS HERE
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            data-testid="text-hero-headline"
          >
            Next-gen
            <br />
            Crypto Payments
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            data-testid="text-hero-subheadline"
          >
            Built to empower every merchant with next-generation solutions
          </p>

          <div className="mb-16">
            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
