import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BiographVictoria from "@/components/pages/kimmy_journey/about_victoria/BiographVictoria";
import BiodataVictoria from "@/components/pages/kimmy_journey/about_victoria/BiodataVictoria";
import CtaVictoria from "@/components/pages/kimmy_journey/about_victoria/CtaVictoria";
import PersonalityVictoria from "@/components/pages/kimmy_journey/about_victoria/PersonalityVictoria";

import {
  Sparkles,
} from "lucide-react";


const AboutVictoria = () => {
  {/*const achievements = [
    {
      icon: Trophy,
      title: "JKT48 12th Generation",
      description: "Berhasil lolos audisi dan debut sebagai member Gen 12",
      year: "2023",
    },
    {
      icon: Mic,
      title: "Theater Performances",
      description: "50+ theater shows dengan berbagai setlist",
      year: "2023-2025",
    },
    {
      icon: Video,
      title: "Social Media Growth",
      description: "Mencapai 100K+ followers di berbagai platform",
      year: "2024",
    },
    {
      icon: Award,
      title: "Fan Favorite",
      description: "Ranking tinggi dalam berbagai voting event",
      year: "2023-2024",
    },
  ];

const interests = [
    { icon: Music, label: "Music", items: ["K-Pop", "J-Pop", "Dance Music"] },
    {
      icon: Camera,
      label: "Photography",
      items: ["Selfies", "Aesthetic Shots", "Behind The Scenes"],
    },
    {
      icon: Video,
      label: "Entertainment",
      items: ["Variety Shows", "Anime", "Movies"],
    },
    {
      icon: Star,
      label: "Hobbies",
      items: ["Dancing", "Singing", "Social Media"],
    },
  ]; */}

  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(180deg, hsl(210 30% 95% / 0.3) 0%, hsl(215 100% 64% / 0.05) 30%, hsl(210 30% 97%) 60%, hsl(215 100% 64% / 0.05) 80%, hsl(210 30% 95% / 0.3) 100%)",
      }}
    >
      {/* Decorative elements - apply to whole page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating orbs */}
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/3 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-72 h-72 bg-grovy-beige/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-4s" }}
        />

        {/* Sparkles scattered */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse-soft"
            style={{
              top: `${10 + i * 8}%`,
              left: `${5 + i * 7}%`,
              animationDelay: `${-i * 0.5}s`,
            }}
          >
            <Sparkles
              className={`w-4 h-4 ${
                i % 3 === 0
                  ? "text-blue-500/10"
                  : i % 3 === 1
                  ? "text-blue-400/10"
                  : "text-blue-300/10"
              }`}
            />
          </div>
        ))}

        {/* Geometric patterns */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-float" />
        <div
          className="absolute bottom-1/3 left-10 w-40 h-40 border border-blue-400/10 rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Biography Hero Section */}
      <BiographVictoria />

      {/* Biodata & Social Section */}
      <BiodataVictoria />

      {/* Personality Traits */}
      <PersonalityVictoria />

      {/* Achievements
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div
            className="text-center mb-12 transition-all duration-700"
            data-reveal-id="achievements-header"
            style={{
              opacity: visibleElements.has("achievements-header") ? 1 : 0,
              transform: visibleElements.has("achievements-header")
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                Achievements & Highlights
              </h2>
              <Award className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-muted-foreground">
              Pencapaian Kimmy selama berkarir di JKT48
            </p>
          </div>

          <div
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 transition-all duration-700"
            data-reveal-id="achievements-cards"
            style={{
              opacity: visibleElements.has("achievements-cards") ? 1 : 0,
              transform: visibleElements.has("achievements-cards")
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            {achievements.map((achievement, i) => (
              <Card key={i} className="glass-card p-6 md:p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 border-2 border-primary/20 shrink-0">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {achievement.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-500/20 border border-primary/30 rounded-full text-sm font-semibold text-primary shrink-0">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Interests & Hobbies 
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />

        <div className="container relative z-10 px-4">
          <div
            className="text-center mb-12 transition-all duration-700"
            data-reveal-id="interests-header"
            style={{
              opacity: visibleElements.has("interests-header") ? 1 : 0,
              transform: visibleElements.has("interests-header")
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                Interests & Hobbies
              </h2>
              <Heart className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-muted-foreground">Hal-hal yang disukai Kimmy</p>
          </div>

          <div
            className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700"
            data-reveal-id="interests-cards"
            style={{
              opacity: visibleElements.has("interests-cards") ? 1 : 0,
              transform: visibleElements.has("interests-cards")
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            {interests.map((interest, i) => (
              <Card key={i} className="glass-card p-6 text-center hover-lift">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-300/20 border-2 border-primary/20 inline-block mb-4">
                  <interest.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {interest.label}
                </h3>
                <ul className="space-y-2">
                  {interest.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CtaVictoria />

      <Footer />
    </div>
  );
};

export default AboutVictoria;