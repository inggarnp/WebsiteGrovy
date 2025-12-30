import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import img1 from "@/assets/vishalarasa/vishalarasa.jpeg";
import img2 from "@/assets/vishalarasa/kimmy_project.jpeg";
import img3 from "@/assets/vishalarasa/kimmy_tshirt.jpeg";
import img4 from "@/assets/vishalarasa/kimmy_selfie.jpeg";
import img5 from "@/assets/vishalarasa/dokumentasi1.jpeg";
import img6 from "@/assets/vishalarasa/dokumentasi2.jpeg";
import img7 from "@/assets/vishalarasa/dokumentasi3.jpeg";

import video1 from "@/assets/vishalarasa/video_project.mp4";

const Vishalarasa = () => {
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

  const photos = [img2, img3, img4, img5, img6, img7];
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
        {/* Tree-inspired decorative elements */}
        <div
          className="fixed top-10 left-[5%] w-3 h-32 opacity-15 animate-float"
          style={{
            background:
              "linear-gradient(to bottom, hsl(215 100% 64%), transparent)",
          }}
        />
        <div
          className="fixed top-20 right-[8%] w-3 h-40 opacity-15 animate-float"
          style={{
            background:
              "linear-gradient(to bottom, hsl(215 100% 70%), transparent)",
            animationDelay: "1s",
          }}
        />

        {/* Leaf-like floating elements */}
        <div
          className="fixed top-[15%] left-[15%] w-8 h-12 rounded-full opacity-20 animate-float"
          style={{
            background: "hsl(215 100% 64%)",
            clipPath: "ellipse(40% 50% at 50% 50%)",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="fixed top-[25%] right-[20%] w-10 h-14 rounded-full opacity-15 animate-float"
          style={{
            background: "hsl(215 100% 70%)",
            clipPath: "ellipse(45% 50% at 50% 50%)",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="fixed top-[40%] left-[25%] w-6 h-10 rounded-full opacity-18 animate-float"
          style={{
            background: "hsl(215 85% 55%)",
            clipPath: "ellipse(40% 50% at 50% 50%)",
            animationDelay: "2s",
          }}
        />

        {/* Bottom nature accent */}
        <div
          className="fixed bottom-0 left-0 right-0 h-32 opacity-10"
          style={{
            background:
              "linear-gradient(to top, hsl(215 100% 64%), transparent)",
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
                alt="Vishalarasa"
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
              Vishalarasa
            </h1>
            <p
              className="text-xl md:text-2xl font-light"
              style={{ color: "hsl(215 85% 45%)" }}
            >
              Rasa yang luas dan mendalam
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
                    Vishalarasa berasal dari gabungan dua kata:
                  </p>
                  <div className="pl-6 space-y-3">
                    <p className="font-light">
                      <span
                        className="font-semibold"
                        style={{ color: "hsl(215 85% 45%)" }}
                      >
                        Vishala
                      </span>{" "}
                      (विशाल) yang berarti{" "}
                      <span className="italic">luas, besar, tak terbatas</span>
                    </p>
                    <p className="font-light">
                      <span
                        className="font-semibold"
                        style={{ color: "hsl(215 100% 64%)" }}
                      >
                        Rasa
                      </span>{" "}
                      (रस) yang berarti{" "}
                      <span className="italic">rasa, esensi, perasaan</span>
                    </p>
                  </div>
                  <p className="font-light pt-4">
                    Secara makna, Vishalarasa berarti{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(215 100% 64%)" }}
                    >
                      rasa yang luas dan mendalam
                    </span>
                    , pengalaman emosional yang berkembang seiring waktu dan
                    melampaui kata-kata.
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
                  Filosofi Vishalarasa
                </h2>
                <div
                  className="space-y-6 text-lg md:text-xl leading-relaxed"
                  style={{ color: "hsl(215 30% 25%)" }}
                >
                  <p className="font-light">
                    Waktu terus berjalan, meninggalkan jejak yang tidak selalu
                    terlihat, namun selalu terasa.
                  </p>
                  <p className="font-light">
                    Dalam setiap perjalanan, manusia tidak hanya bergerak secara
                    fisik, tetapi juga tumbuh secara emosional.
                  </p>
                  <p className="font-light">
                    Vishalarasa memaknai bahwa hidup adalah{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(215 100% 64%)" }}
                    >
                      kumpulan rasa yang saling terhubung
                    </span>
                    . Kebahagiaan, kehangatan, keraguan, dan harapan menyatu
                    menjadi satu kesadaran yang luas. Rasa tersebut tidak
                    memiliki batas, karena terus berkembang melalui pengalaman
                    dan hubungan yang dijalani.
                  </p>
                  <p
                    className="font-light italic border-l-4 pl-6"
                    style={{ borderColor: "hsl(215 85% 45%)" }}
                  >
                    Bukan tentang satu momen besar, melainkan rangkaian momen
                    kecil yang membentuk makna.
                  </p>
                  <p className="font-light">
                    Jejak-jejak inilah yang perlahan menciptakan kedalaman emosi
                    dan pemahaman akan perjalanan hidup itu sendiri.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section
            ref={addToRefs}
            className={`mb-32 transition-all duration-1000 delay-400 ${
              visibleSections.has(3)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 font-display"
                style={{ color: "hsl(215 85% 45%)" }}
              >
                Momen Pertama
              </h2>
              <p
                className="text-lg md:text-xl font-light max-w-3xl mx-auto"
                style={{ color: "hsl(215 30% 35%)" }}
              >
                Setiap momen pertama adalah awal dari cerita baru. Di sini kami
                abadikan langkah-langkah awal yang penuh keberanian.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((item, index) => {
                const photo = photos[index % photos.length];

                return (
                  <div
                    key={item}
                    className="relative group overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
                    style={{
                      aspectRatio: "4/3",
                      boxShadow: "0 10px 40px -10px hsl(215 100% 64% / 0.2)",
                    }}
                  >
                    {/* Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 blur-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(215 100% 64% / 0.3), hsl(215 100% 70% / 0.3))",
                      }}
                    />

                    <div className="relative w-full h-full overflow-hidden">
                      {/* IMAGE */}
                      <img
                        src={photo}
                        alt={`Momen ${item}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Soft overlay (biar lembut) */}
                      <div className="absolute inset-0 bg-white/30 group-hover:bg-white/10 transition-all duration-500" />
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              className="text-center text-base md:text-lg font-light italic max-w-2xl mx-auto mb-16"
              style={{ color: "hsl(215 30% 45%)" }}
            >
              Setiap foto adalah pengingat bahwa hal baru selalu dimulai dengan
              keberanian untuk mencoba.
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
              Setiap rasa memiliki keluasan yang tak terbatas.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vishalarasa;