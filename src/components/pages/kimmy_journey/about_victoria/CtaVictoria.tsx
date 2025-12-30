import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, ChevronDown } from "lucide-react";

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

const CTASection = () => {
  const visibleElements = useScrollReveal();

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <Card
          className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto transition-all duration-700"
          data-reveal-id="cta"
          style={{
            opacity: visibleElements.has("cta") ? 1 : 0,
            transform: visibleElements.has("cta")
              ? "translateY(0)"
              : "translateY(30px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
            Want to Know More?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Explore more about Kimmy's journey and connect with Grovy Family!
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/milestones"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              style={{
                background:
                  "linear-gradient(135deg, hsl(215 85% 55%), hsl(215 100% 64%))",
              }}
            >
              <Calendar className="w-5 h-5" />
              View Milestones
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Uncomment jika mau tambah button lagi */}
            {/* <a
              href="/little-things-about-kimmy"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-primary hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Star className="w-5 h-5" />
              Fun Facts
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a> */}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;