import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl sm:text-2xl font-bold text-foreground">
              nexaris
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-product"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-why-us"
            >
              Why Us
            </button>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-docs"
            >
              Docs
            </a>
            <button
              onClick={() => scrollToSection("cta")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("cta")}
              className="rounded-full px-6 hidden sm:flex"
              data-testid="button-join-waitlist-nav"
            >
              Join Waitlist
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("solution")}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="link-mobile-product"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="link-mobile-why-us"
              >
                Why Us
              </button>
              <a
                href="#"
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="link-mobile-docs"
              >
                Docs
              </a>
              <button
                onClick={() => scrollToSection("cta")}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="link-mobile-contact"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="w-full rounded-full mt-4"
                data-testid="button-mobile-join-waitlist"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
