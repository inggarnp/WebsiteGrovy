import { Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo-grovy.png";

const Footer = () => {
  return (
    <footer
      id="about"
      className="relative py-16 border-t-2 border-primary/20 scroll-mt-20"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--grovy-beige) / 0.2), hsl(var(--background)))",
        }}
      />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 text-3xl font-display font-bold">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--grovy-purple)), hsl(var(--grovy-dark)))",
              }}
            >
              <img
                src={logo}
                alt="Grovy Logo"
                className="h-8 w-8 object-contain drop-shadow-md"
              />
            </div>
            <span className="gradient-text">GROVY</span>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              A dedicated space celebrating Victoria Kimberly, created with
              admiration and heartfelt support.
            </p>
            <p className="text-base text-muted-foreground italic">
              "Home of Kimmy's biggest supporters"
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 pt-2">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-muted-foreground group-hover:fill-primary transition-all duration-300 group-hover:scale-110"
              >
                <path d="M16.5 3a4.5 4.5 0 0 0 4.5 4.5V11a8.94 8.94 0 0 1-4.5-1.23V16a6 6 0 1 1-6-6c.35 0 .7.03 1.03.1v3.18a2.5 2.5 0 1 0 1.97 2.45V3h2.5z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>

          {/* Divider */}
          <div
            className="w-32 h-1 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--grovy-purple)), hsl(var(--grovy-dark)), hsl(var(--grovy-purple)))",
            }}
          />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Glimmer Star of Victory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
