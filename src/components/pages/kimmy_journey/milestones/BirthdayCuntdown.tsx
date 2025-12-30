import { useState, useEffect } from "react";
import { Calendar, Clock, Timer, Sparkles, Heart, Star } from "lucide-react";

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to March 8, 2026
  useEffect(() => {
    const targetDate = new Date("2026-03-08T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 opacity-20 animate-float">
          <Heart
            className="w-10 h-10"
            style={{ color: "hsl(215 100% 70%)", fill: "hsl(215 100% 70%)" }}
          />
        </div>
        <div
          className="absolute top-20 right-20 opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Star
            className="w-12 h-12"
            style={{ color: "hsl(215 100% 64%)", fill: "hsl(215 100% 64%)" }}
          />
        </div>

        <div
          className="relative glass-card rounded-[3rem] p-12"
          style={{
            boxShadow:
              "0 20px 60px -15px hsl(215 100% 64% / 0.2), 0 10px 30px -10px hsl(215 100% 64% / 0.15)",
          }}
        >
          <h2
            className="text-5xl md:text-7xl font-bold text-center mb-6 font-['Playfair_Display']"
            style={{
              background:
                "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kimmy's Birthday Countdown
          </h2>
          <div className="text-center mb-12">
            <p
              className="text-2xl md:text-3xl font-semibold inline-block px-8 py-4 rounded-full backdrop-blur-sm border-2"
              style={{
                color: "hsl(215 100% 64%)",
                backgroundColor: "hsl(215 100% 64% / 0.08)",
                borderColor: "hsl(215 100% 64% / 0.3)",
              }}
            >
              8 Maret 2026
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { value: timeLeft.days, label: "Hari", Icon: Calendar },
              { value: timeLeft.hours, label: "Jam", Icon: Clock },
              { value: timeLeft.minutes, label: "Menit", Icon: Timer },
              { value: timeLeft.seconds, label: "Detik", Icon: Sparkles },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative hover-lift"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                  }}
                ></div>
                <div
                  className="relative rounded-3xl p-8 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(210 30% 98%) 0%, hsl(210 35% 96%) 100%)",
                    boxShadow: "0 10px 40px hsl(215 100% 64% / 0.12)",
                    border: "2px solid hsl(215 100% 64% / 0.1)",
                  }}
                >
                  <div
                    className="text-6xl md:text-7xl font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="text-xl md:text-2xl font-['Playfair_Display'] font-semibold flex items-center justify-center gap-2"
                    style={{ color: "hsl(215 30% 20%)" }}
                  >
                    <item.Icon
                      className="w-5 h-5"
                      style={{ color: "hsl(215 100% 64%)" }}
                    />
                    <span>{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCountdown;