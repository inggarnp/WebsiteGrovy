import { useEffect, useState } from "react";
import { User, Heart } from "lucide-react";
import img1 from "@/assets/kimmy_awal_perkenalan.png";

const BiographVictoria = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    setVisibleElements(new Set(["biography"]));
  }, []);

  return (
    <>
      {/* Biography Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden mt-20">
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-blue-400/5" />

          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
            <div
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"
              style={{ animationDelay: "-2s" }}
            />
            <div
              className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-float"
              style={{ animationDelay: "-4s" }}
            />
          </div>

          {/* Geometric pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234588ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Radial glow effects */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse-soft" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full filter blur-[120px] animate-pulse-soft"
            style={{ animationDelay: "-1.5s" }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left ornament */}
          <div className="absolute top-32 left-8 md:left-16">
            <div className="relative">
              <div className="w-32 h-32 border-2 border-primary/20 rounded-full animate-float" />
              <div className="absolute inset-4 border border-blue-400/20 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full" />
            </div>
          </div>

          {/* Bottom right ornament */}
          <div className="absolute bottom-24 right-8 md:right-16">
            <div className="relative w-40 h-40">
              <div
                className="absolute inset-0 border-2 border-blue-400/20 rounded-lg rotate-12 animate-float"
                style={{ animationDelay: "-2s" }}
              />
              <div className="absolute inset-6 border border-primary/20 rounded-lg rotate-12" />
            </div>
          </div>

          {/* Floating sparkles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse-soft"
              style={{
                top: `${15 + i * 12}%`,
                left: `${10 + i * 11}%`,
                animationDelay: `${-i * 0.5}s`,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={
                  i % 2 === 0 ? "text-blue-400/20" : "text-blue-500/20"
                }
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="container relative z-10 px-4">
          <div
            className="max-w-7xl mx-auto transition-all duration-700"
            data-reveal-id="biography"
            style={{
              opacity: visibleElements.has("biography") ? 1 : 0,
              transform: visibleElements.has("biography")
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Left Side - Image with artistic frame */}
              <div className="lg:w-5/12 relative group">
                {/* Decorative frame elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-primary/40 rounded-tl-3xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-4 border-b-4 border-blue-400/40 rounded-br-3xl" />

                {/* Main image container */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white dark:border-grovy-dark shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={img1}
                    alt="Victoria Kimberly"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Elegant badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-2xl blur opacity-75 animate-pulse-soft" />
                    <div className="relative px-8 py-3 bg-background/95 backdrop-blur-sm border-2 border-primary/50 rounded-2xl shadow-2xl">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-sm font-display font-semibold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                          JKT48 Generation 12
                        </span>
                        <div
                          className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                          style={{ animationDelay: "-0.5s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Biography Content */}
              <div className="lg:w-7/12 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-primary/30 rounded-full">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      About Victoria
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                    <span className="gradient-text">Victoria</span>{" "}
                    <span className="text-foreground">Kimberly</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground font-display italic flex items-center gap-3">
                    <span className="text-3xl text-blue-500">"</span>
                    Baby hamster yang lincah
                    <span className="text-3xl text-blue-500">"</span>
                  </p>
                </div>

                {/* Bio paragraphs */}
                <div className="space-y-4 text-foreground/90 text-lg leading-relaxed">
                  <p>
                    <strong className="gradient-text font-semibold">
                      Victoria Kimberly
                    </strong>
                    , yang akrab dipanggil{" "}
                    <strong className="text-blue-500">Kimmy</strong>, adalah
                    member{" "}
                    <strong className="text-primary">JKT48 Generasi 12</strong>{" "}
                    yang debut pada tahun 2023. Lahir di Jakarta pada 8 Maret
                    2010, Kimmy dikenal dengan kepribadiannya yang energik dan
                    selalu ceria.
                  </p>

                  <p>
                    Dengan julukan{" "}
                    <em className="text-blue-500">"baby hamster yang lincah"</em>,
                    Kimmy membawa energi positif dalam setiap penampilannya.
                    Karakteristiknya yang cute namun penuh semangat membuatnya
                    mudah dikenali dan dicintai oleh fans.
                  </p>

                  <p>
                    Sebagai member JKT48, Kimmy aktif dalam berbagai kegiatan
                    seperti{" "}
                    <strong className="text-primary">theater show</strong>,{" "}
                    <strong className="text-primary">handshake event</strong>,
                    dan{" "}
                    <strong className="text-primary">variety content</strong>.
                    Dedikasi dan kerja kerasnya dalam berlatih membuat
                    performanya selalu berkembang dan semakin memukau.
                  </p>
                </div>

                {/* Quote card */}
                <div className="relative mt-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-2xl blur" />
                  <div className="relative bg-gradient-to-br from-blue-500/5 to-blue-400/5 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <Heart className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                      <div className="space-y-2">
                        <p className="text-xl font-display italic text-foreground leading-relaxed">
                          "Baby hamster yang lincah, aku akan berlari-lari di
                          pikiranmu. Halo-ha,
                          <span className="inline-block animate-wiggle">
                            katakan Kimmy!
                          </span>
                          🐹💙"
                        </p>
                        <p className="text-sm text-muted-foreground font-semibold">
                          — Victoria Kimberly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BiographVictoria;