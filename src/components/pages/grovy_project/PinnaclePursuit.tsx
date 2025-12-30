import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import img1 from "@/assets/pinnacle/pinnacle copy.png";
import video1 from "@/assets/pinnacle/project_online_pinnaclepursuit.mp4";

const PinnaclePursuit = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(215 100% 64% / 0.05) 0%, hsl(215 100% 70% / 0.08) 50%, hsl(210 55% 95%) 100%)",
        }}
      >
        {/* Decorative Elements */}
        <div
          className="fixed top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse-soft"
          style={{
            background:
              "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
          }}
        />
        <div
          className="fixed bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse-soft"
          style={{
            background:
              "linear-gradient(135deg, hsl(215 100% 70%), hsl(215 85% 55%))",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          {/* Hero Section */}
          <section
            ref={addToRefs}
            className={`mb-32 text-center transition-all duration-1000 ${
              visibleSections.has(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative inline-block mb-8">
              <img
                src={img1}
                alt="Pinnacle Pursuit"
                className="w-full max-w-2xl rounded-2xl shadow-2xl mx-auto transition-transform duration-500 hover:scale-105"
                style={{
                  boxShadow: "0 25px 80px -20px hsl(215 100% 64% / 0.3)",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215 100% 64% / 0.1), hsl(215 100% 70% / 0.1))",
                  mixBlendMode: "overlay",
                }}
              />
            </div>

            <h1
              className="text-6xl md:text-7xl font-bold mb-6 font-display tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pinnacle Pursuit
            </h1>
            <p
              className="text-xl md:text-2xl font-light"
              style={{ color: "hsl(215 85% 45%)" }}
            >
              Perjalanan tanpa henti menuju puncak
            </p>
          </section>

          {/* Arti Section */}
          <section
            ref={addToRefs}
            className={`mb-24 transition-all duration-1000 delay-200 ${
              visibleSections.has(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215 100% 64% / 0.2), hsl(215 100% 70% / 0.2))",
                }}
              />

              <div
                className="relative p-12 rounded-3xl backdrop-blur-sm transition-all duration-500 group-hover:translate-y-[-4px]"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(210 30% 95% / 0.9), hsl(0 0% 100% / 0.85))",
                  border: "1px solid hsl(215 100% 64% / 0.15)",
                  boxShadow: "0 20px 60px -15px hsl(215 100% 64% / 0.15)",
                }}
              >
                <h2
                  className="text-4xl md:text-5xl font-bold mb-8 font-display"
                  style={{ color: "hsl(215 85% 45%)" }}
                >
                  Arti
                </h2>
                <div
                  className="space-y-6 text-lg md:text-xl leading-relaxed"
                  style={{ color: "hsl(215 30% 25%)" }}
                >
                  <p className="font-light">
                    Pinnacle Pursuit berarti{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(215 100% 64%)" }}
                    >
                      perjalanan tanpa henti menuju puncak
                    </span>
                    .
                  </p>
                  <p className="font-light">
                    Bukan sekadar tujuan akhir, melainkan rangkaian proses,
                    tekad, dan pertumbuhan yang dilalui untuk mencapai versi
                    terbaik dari diri sendiri.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Filosofi Section */}
          <section
            ref={addToRefs}
            className={`mb-24 transition-all duration-1000 delay-300 ${
              visibleSections.has(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215 100% 70% / 0.2), hsl(215 100% 64% / 0.2))",
                }}
              />

              <div
                className="relative p-12 rounded-3xl backdrop-blur-sm transition-all duration-500 group-hover:translate-y-[-4px]"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(0 0% 100% / 0.9), hsl(210 30% 95% / 0.85))",
                  border: "1px solid hsl(215 100% 64% / 0.15)",
                  boxShadow: "0 20px 60px -15px hsl(215 100% 64% / 0.15)",
                }}
              >
                <h2
                  className="text-4xl md:text-5xl font-bold mb-8 font-display"
                  style={{ color: "hsl(215 85% 45%)" }}
                >
                  Filosofi
                </h2>
                <div
                  className="space-y-6 text-lg md:text-xl leading-relaxed"
                  style={{ color: "hsl(215 30% 25%)" }}
                >
                  <p className="font-light">
                    Puncak tidak pernah berdiri di depan satu jalan lurus.
                  </p>
                  <p className="font-light">
                    Di balik taman yang terlihat indah, masih ada banyak
                    persimpangan yang harus dilewati. Setiap jalan membawa
                    tantangan, pembelajaran, dan penguatan tekad.
                  </p>
                  <p className="font-light">
                    Pinnacle Pursuit memaknai bahwa pencapaian sejati bukan
                    tentang seberapa cepat sampai, tetapi tentang{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(215 100% 64%)" }}
                    >
                      keberanian untuk terus melangkah
                    </span>
                    . Tentang memilih tetap berjalan meski jalannya menanjak,
                    sunyi, dan melelahkan.
                  </p>
                  <p
                    className="font-light italic border-l-4 pl-6"
                    style={{ borderColor: "hsl(215 85% 45%)" }}
                  >
                    Dalam perjalanan ini, proses adalah nilai utama.
                  </p>
                  <p className="font-light">
                    Setiap langkah membentuk karakter, setiap rintangan mengasah
                    keteguhan. Puncak bukan akhir, melainkan simbol dari
                    pertumbuhan yang terus berlangsung.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Kebersamaan Section */}
          <section
            ref={addToRefs}
            className={`mb-32 transition-all duration-1000 delay-400 ${
              visibleSections.has(3)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215 100% 64% / 0.2), hsl(215 100% 70% / 0.2))",
                }}
              />

              <div
                className="relative p-12 rounded-3xl backdrop-blur-sm transition-all duration-500 group-hover:translate-y-[-4px]"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(210 30% 95% / 0.9), hsl(0 0% 100% / 0.85))",
                  border: "1px solid hsl(215 100% 64% / 0.15)",
                  boxShadow: "0 20px 60px -15px hsl(215 100% 64% / 0.15)",
                }}
              >
                <h2
                  className="text-4xl md:text-5xl font-bold mb-8 font-display"
                  style={{ color: "hsl(215 85% 45%)" }}
                >
                  Berjalan Bersama
                </h2>
                <div
                  className="space-y-6 text-lg md:text-xl leading-relaxed"
                  style={{ color: "hsl(215 30% 25%)" }}
                >
                  <p className="font-light">
                    Pinnacle Pursuit juga merupakan{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(215 100% 64%)" }}
                    >
                      ajakan untuk berjalan bersama
                    </span>
                    .
                  </p>
                  <p className="font-light">
                    Mendukung, menyaksikan, dan berproses dalam satu perjalanan
                    panjang menuju puncak yang sama — dengan keyakinan bahwa
                    setiap langkah memiliki makna.
                  </p>
                  <div
                    className="mt-8 pt-8 border-t"
                    style={{ borderColor: "hsl(215 100% 64% / 0.2)" }}
                  >
                    <p
                      className="text-center font-light italic text-xl"
                      style={{ color: "hsl(215 85% 45%)" }}
                    >
                      Selama masih ada langkah yang bisa diambil,
                      <br />
                      <span className="font-semibold text-2xl">
                        perjalanan ini akan selalu berjalan.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section
            ref={addToRefs}
            className={`mb-32 transition-all duration-1000 delay-500 ${
              visibleSections.has(4)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 font-display"
                style={{ color: "hsl(215 85% 45%)" }}
              >
                Jejak dalam Perjalanan
              </h2>
              <p
                className="text-lg md:text-xl font-light max-w-3xl mx-auto"
                style={{ color: "hsl(215 30% 35%)" }}
              >
                Di sepanjang perjalanan menuju puncak, ada momen-momen yang
                menguatkan langkah. Beberapa di antaranya kami abadikan sebagai
                pengingat bahwa perjalanan ini nyata.
              </p>
            </div>

            <p
              className="text-center text-base md:text-lg font-light italic max-w-2xl mx-auto mb-16"
              style={{ color: "hsl(215 30% 45%)" }}
            >
              Dokumentasi ini bukan tentang seberapa besar acaranya, melainkan
              tentang langkah yang pernah diambil bersama.
            </p>

            {/* Video Section */}
            <div className="max-w-4xl mx-auto">
              <div
                className="relative group overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  boxShadow: "0 25px 80px -20px hsl(215 100% 64% / 0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(215 100% 64% / 0.4), hsl(215 100% 70% / 0.4))",
                  }}
                />

                <div
                  className="relative aspect-video overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(210 30% 95%), hsl(0 0% 100%))",
                    border: "2px solid hsl(215 100% 64% / 0.15)",
                  }}
                >
                  {/* Video Placeholder */}
                  {!isPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(215 100% 64% / 0.05), hsl(215 100% 70% / 0.05))",
                      }}
                    >
                      <div className="text-center">
                        <div
                          className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background:
                              "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                            boxShadow: "0 10px 30px hsl(215 100% 64% / 0.3)",
                          }}
                        >
                          <svg
                            className="w-10 h-10 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p
                          className="text-lg font-light"
                          style={{ color: "hsl(215 85% 45%)" }}
                        >
                          Video Dokumentasi
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Uncomment dan ganti URL untuk video asli */}
                  <video
                    className="w-full h-full object-cover relative z-20"
                    controls
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                  >
                    <source src={video1} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Quote */}
          <section
            ref={addToRefs}
            className={`text-center pb-20 transition-all duration-1000 delay-500 ${
              visibleSections.has(4)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p
              className="text-3xl md:text-4xl font-display font-semibold tracking-wide"
              style={{
                background:
                  "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Menuju puncak, bersama.
            </p>
          </section>
        </div>

        {/* Bottom Gradient Shadow */}
        <div
          className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(215 100% 64% / 0.1), transparent)",
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default PinnaclePursuit;