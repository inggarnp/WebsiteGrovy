import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, ChevronDown } from "lucide-react";

// Import images untuk gallery preview
import img1 from "@/assets/hero/grovy/1765591577238.jpg";
import img2 from "@/assets/hero/grovy/1765591596419.jpg";
import img3 from "@/assets/hero/grovy/1765591659350.jpg";
import img4 from "@/assets/hero/grovy/1765591766379.jpg";

const actualImages = [
  { image: img1, text: "Photo 1" },
  { image: img2, text: "Photo 2" },
  { image: img3, text: "Photo 3" },
  { image: img4, text: "Photo 4" },
];

// ✨ SCROLL REVEAL HOOK
const useScrollReveal = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-reveal-id");
          if (!id) return;

          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-50px",
      }
    );

    const elements = document.querySelectorAll("[data-reveal-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};

// MAIN COMPONENT
const HeroFanbase = () => {
  const visibleElements = useScrollReveal();

  return (
    <section id="fanbase" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-grovy-beige/20 to-background" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          data-reveal-id="fanbase-header"
          style={{
            opacity: visibleElements.has("fanbase-header") ? 1 : 0,
            transform: visibleElements.has("fanbase-header")
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
              Grovy Family
            </h2>
            <Heart className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Komunitas fans Victoria Kimberly yang solid dan penuh cinta ✨
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Gallery Preview */}
          <div
            className="transition-all duration-700"
            data-reveal-id="fanbase-gallery"
            style={{
              opacity: visibleElements.has("fanbase-gallery") ? 1 : 0,
              transform: visibleElements.has("fanbase-gallery")
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <Card className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-display font-bold text-center mb-6 gradient-text">
                Our Moments Together
              </h3>

              {/* Photo Grid - Pakai foto Kimmy yang ada */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {actualImages.slice(0, 4).map((item, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl overflow-hidden hover-lift group"
                  >
                    <img
                      src={item.image}
                      alt={`Fanbase moment ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="/about-grovy"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(215 85% 55%), hsl(215 100% 64%))",
                  }}
                >
                  <Heart className="w-5 h-5" />
                  Learn More About Grovy
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFanbase;