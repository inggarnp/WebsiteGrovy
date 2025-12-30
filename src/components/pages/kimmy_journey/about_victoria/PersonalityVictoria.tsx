import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Star, Sparkles, Users } from "lucide-react";

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

const PersonalitySection = () => {
  const visibleElements = useScrollReveal();

  const personalityTraits = [
    {
      icon: Heart,
      title: "Energetic & Cheerful",
      description:
        "Selalu membawa energi positif dan senyum yang menghangatkan",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Star,
      title: "Hardworking",
      description: "Dedikasi tinggi dalam setiap penampilan dan latihan",
      color: "from-blue-600/20 to-blue-400/20",
    },
    {
      icon: Sparkles,
      title: "Creative & Artistic",
      description: "Memiliki jiwa seni yang tinggi dalam dance dan performance",
      color: "from-sky-500/20 to-blue-500/20",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Selalu solid dan supportive dengan fellow members",
      color: "from-blue-500/20 to-indigo-500/20",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-grovy-beige/20 to-background" />

      <div className="container relative z-10 px-4">
        <div
          className="text-center mb-12 transition-all duration-700"
          data-reveal-id="personality-header"
          style={{
            opacity: visibleElements.has("personality-header") ? 1 : 0,
            transform: visibleElements.has("personality-header")
              ? "translateY(0)"
              : "translateY(30px)",
          }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
              Personality & Character
            </h2>
            <Sparkles className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-muted-foreground">
            Apa yang membuat Kimmy istimewa? ✨
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 transition-all duration-700"
          data-reveal-id="personality-cards"
          style={{
            opacity: visibleElements.has("personality-cards") ? 1 : 0,
            transform: visibleElements.has("personality-cards")
              ? "translateY(0)"
              : "translateY(30px)",
          }}
        >
          {personalityTraits.map((trait, i) => (
            <Card
              key={i}
              className={`glass-card p-6 md:p-8 bg-gradient-to-br ${trait.color} border-2 border-primary/20 hover-lift`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-300/30 border-2 border-primary/30 shrink-0">
                  <trait.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-muted-foreground">{trait.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;