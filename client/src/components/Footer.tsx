import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaXTwitter, label: "X (Twitter)", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} QuantVault™. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid={`link-social-${social.label.toLowerCase().split(" ")[0]}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
