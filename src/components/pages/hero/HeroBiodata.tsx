import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Hash,
  Star,
  Music,
  User,
  Droplet,
  Ruler,
  Sparkles,
  Heart,
  Youtube,
  ChevronDown,
} from "lucide-react";

// Import images untuk KimmyInFrame
import img10 from "@/assets/hero/kimmy_in_frame/20250810_211024.jpg";
import img11 from "@/assets/hero/kimmy_in_frame/20250810_211052.jpg";
import img12 from "@/assets/hero/kimmy_in_frame/20250924_103033.jpg";
import img13 from "@/assets/hero/kimmy_in_frame/20250924_103110.jpg";
import img14 from "@/assets/hero/kimmy_in_frame/20250924_103140.jpg";
import img15 from "@/assets/hero/kimmy_in_frame/kimmanyun.jpg";
import img16 from "@/assets/hero/kimmy_in_frame/love.jpg";
import img17 from "@/assets/hero/kimmy_in_frame/offair.jpg";

const KimmyInFrame = [
  { image: img10, text: "Photo 1" },
  { image: img11, text: "Photo 2" },
  { image: img12, text: "Photo 3" },
  { image: img13, text: "Photo 4" },
  { image: img14, text: "Photo 5" },
  { image: img15, text: "Photo 6" },
  { image: img16, text: "Photo 7" },
  { image: img17, text: "Photo 8" },
];

// Biodata data
const bioData = [
  { icon: User, label: "Nama Lengkap", value: "Victoria Kimberly" },
  { icon: Star, label: "Nama Panggilan", value: "Kimmy" },
  { icon: Calendar, label: "Tanggal Lahir", value: "08 Maret 2010" },
  { icon: MapPin, label: "Asal", value: "Jakarta, Indonesia" },
  { icon: Droplet, label: "Golongan Darah", value: "AB" },
  { icon: Ruler, label: "Tinggi Badan", value: "158 cm" },
  { icon: Sparkles, label: "Zodiak", value: "Pisces" },
  { icon: Hash, label: "Generasi", value: "Generasi 12" },
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

const HeroBiodata = () => {
  const visibleElements = useScrollReveal();

  return (
    <section
      id="biodata"
      className="py-24 relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-grovy-beige/30 to-background" />

      <div className="container relative z-10 px-4">
        {/* Header - dengan scroll reveal */}
        <div
          className="text-center mb-16 transition-all duration-700"
          data-reveal-id="header"
          style={{
            opacity: visibleElements.has("header") ? 1 : 0,
            transform: visibleElements.has("header")
              ? "translateY(0)"
              : "translateY(30px)",
          }}
        >
          <div className="inline-block mb-6">
            <div className="border-4 border-foreground p-6 md:p-8 relative bg-background/80 backdrop-blur-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4">
                <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase">
                  Profile
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                <span className="gradient-text">Kimmy's</span>
                <br />
                <span className="text-foreground">Biodata</span>
              </h2>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kenali lebih dekat Victoria Kimberly, member JKT48 yang penuh
            talenta
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start lg:items-stretch">
            {/* KOLOM KIRI - Biodata Cards */}
            <div className="space-y-6 h-full min-h-0">
              <Card
                className="glass-card p-6 md:p-8 transition-all duration-700"
                data-reveal-id="biodata-card"
                style={{
                  opacity: visibleElements.has("biodata-card") ? 1 : 0,
                  transform: visibleElements.has("biodata-card")
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <div className="grid md:grid-cols-2 gap-3">
                  {bioData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 md:p-4 rounded-xl bg-gradient-to-br from-grovy-beige/40 to-transparent border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift min-h-[72px]"
                    >
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-300/20 border border-primary/20 shrink-0">
                        <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-muted-foreground mb-0.5 font-medium">
                          {item.label}
                        </p>
                        <p className="text-sm md:text-base font-bold text-foreground truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Jikoshoukai */}
              <Card
                className="glass-card p-6 md:p-8 text-center transition-all duration-700"
                data-reveal-id="jikoshoukai"
                style={{
                  opacity: visibleElements.has("jikoshoukai") ? 1 : 0,
                  transform: visibleElements.has("jikoshoukai")
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                    Jikoshoukai
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full" />
                </div>
                <p className="text-lg md:text-xl text-foreground/90 italic leading-relaxed font-medium font-display">
                  "Baby hamster yang lincah, aku akan berlari-lari di
                  pikiranmu!"
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400 animate-pulse-soft" />
                  <Heart
                    className="w-5 h-5 text-blue-500 animate-pulse-soft"
                    style={{ animationDelay: "500ms" }}
                  />
                  <Star
                    className="w-5 h-5 text-blue-400 animate-pulse-soft"
                    style={{ animationDelay: "1000ms" }}
                  />
                </div>
              </Card>

              {/* YouTube Video Section (Single) */}
              <Card
                className="glass-card p-6 md:p-8 relative overflow-hidden transition-all duration-700"
                data-reveal-id="youtube-single"
                style={{
                  opacity: visibleElements.has("youtube-single") ? 1 : 0,
                  transform: visibleElements.has("youtube-single")
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-blue-500/10 rounded-full blur-2xl" />

                <div className="absolute top-4 right-4">
                  <Sparkles className="w-5 h-5 text-blue-400 animate-pulse-soft" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Star
                    className="w-4 h-4 text-blue-500 animate-pulse-soft"
                    style={{ animationDelay: "500ms" }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Music className="w-5 h-5 text-blue-500" />
                      <h3 className="text-xl md:text-2xl font-display font-bold gradient-text">
                        Featured Video
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      The First Victoria At JKT48 Video ✨
                    </p>
                  </div>

                  <div className="group">
                    <div className="aspect-video rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl bg-black">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/ST1GwVjfC8s"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                        JKT48 12th Generation Profile: Kimmy
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        Description video singkat
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <a
                      href="/kimmy-in-clips"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(215 85% 55%), hsl(215 100% 64%))",
                        color: "white",
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                      Lihat Video Lainnya
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* KOLOM KANAN - Photo Grid */}
            <div
              className="space-y-4 transition-all duration-700 h-full flex flex-col min-h-0 items-stretch"
              data-reveal-id="photos"
              style={{
                opacity: visibleElements.has("photos") ? 1 : 0,
                transform: visibleElements.has("photos")
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <Card className="glass-card p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 text-center">
                  Kimmy In Frames
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {KimmyInFrame.slice(0, 6).map((item, index) => (
                    <div
                      key={index}
                      className="aspect-[3/4] rounded-xl overflow-hidden hover-lift group"
                    >
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <a
                    href="/about-victoria"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(215 85% 55%), hsl(215 100% 64%))",
                      color: "white",
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <User className="w-5 h-5" />
                    About Victoria
                    <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* YouTube Video Section (Multiple) */}
        <div
          className="mt-12 transition-all duration-700"
          data-reveal-id="youtube-multiple"
          style={{
            opacity: visibleElements.has("youtube-multiple") ? 1 : 0,
            transform: visibleElements.has("youtube-multiple")
              ? "translateY(0)"
              : "translateY(30px)",
          }}
        >
          <Card className="glass-card p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-blue-500/10 rounded-full blur-2xl" />

            <div className="absolute top-6 right-6">
              <Sparkles className="w-6 h-6 text-blue-400 animate-pulse-soft" />
            </div>
            <div className="absolute bottom-8 left-8">
              <Star
                className="w-5 h-5 text-blue-500 animate-pulse-soft"
                style={{ animationDelay: "500ms" }}
              />
            </div>
            <div className="absolute top-1/2 right-12">
              <Heart
                className="w-4 h-4 text-blue-300 animate-pulse-soft"
                style={{ animationDelay: "1000ms" }}
              />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Music className="w-6 h-6 text-blue-500" />
                  <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    Featured Videos
                  </h3>
                  <Music className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Lihat penampilan dan moment terbaik Kimmy ✨
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Video 1 */}
                <div className="group">
                  <div className="aspect-video rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/M8g2MNXlpwQ"
                      title="Featured Video 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-3 px-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Victoria Kimberly (Trainee) - Pemilihan Member Single ke-26 JKT48
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Momen penting Kimmy saat pemilihan member Single ke-26
                      JKT48.
                    </p>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="group">
                  <div className="aspect-video rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Ztg79dr34n4"
                      title="Featured Video 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-3 px-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      [MV] Belalang yang Membangkang - JKT48 Trainee
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Jejak awal Kimmy sebagai trainee dalam MV "Belalang yang
                      Membangkang".
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href="/video"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(215 85% 55%), hsl(215 100% 64%))",
                    color: "white",
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  Lihat Semua Video
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroBiodata;