import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import img1 from "@/assets/saisho/Saisho.png";
import img2 from "@/assets/saisho/kimmy_saisho.jpeg";
import img3 from "@/assets/saisho/sonichi_saisho.jpeg";
import img4 from "@/assets/saisho/bunga_saisho.jpeg";

const SaishoNoRamune = () => {
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

  const photos = [img2, img3, img4];

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
        {/* Decorative Sky Elements - Clouds */}
        <div
          className="fixed top-10 left-[10%] w-32 h-20 rounded-full opacity-20 animate-float"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="fixed top-32 right-[15%] w-40 h-24 rounded-full opacity-15 animate-float"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            filter: "blur(25px)",
            animationDelay: "1s",
          }}
        />
        <div
          className="fixed top-[20%] left-[70%] w-28 h-16 rounded-full opacity-25 animate-float"
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            filter: "blur(18px)",
            animationDelay: "2s",
          }}
        />

        {/* Floating Balloon Decorations - using grovy colors */}
        <div
          className="fixed top-[15%] right-[8%] w-12 h-16 rounded-full opacity-30 animate-float"
          style={{
            background: "hsl(215 100% 64%)",
            filter: "blur(2px)",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="fixed top-[25%] left-[12%] w-10 h-14 rounded-full opacity-25 animate-float"
          style={{
            background: "hsl(215 100% 70%)",
            filter: "blur(2px)",
            animationDelay: "1.5s",
          }}
        />

        {/* Subtle accent orbs */}
        <div
          className="fixed bottom-20 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse-soft"
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
                alt="Saisho No Ramune"
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
              Saisho No Ramune
            </h1>
            <p
              className="text-xl md:text-2xl font-light"
              style={{ color: "hsl(215 85% 45%)" }}
            >
              Ramune pertama dalam hidupmu
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
                    Saisho No Ramune berarti{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(215 100% 64%)" }}
                    >
                      Ramune pertama
                    </span>
                    .
                  </p>
                  <p className="font-light">
                    Sebuah simbol dari pengalaman pertama dalam hidup —
                    canggung, sulit, tapi berkesan.
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
                    Membuka botol Ramune memang tidak mudah.
                  </p>
                  <p className="font-light">
                    Butuh usaha, kesabaran, dan keberanian untuk menekan
                    kelereng pertama itu. Namun justru di situlah letak
                    keseruannya.
                  </p>
                  <p className="font-light">
                    Pengalaman pertama dalam hidup selalu terasa seperti itu.
                  </p>
                  <p className="font-light">
                    Tidak selalu mulus, sering kali membingungkan, bahkan terasa
                    sulit. Tetapi setelah melewatinya, yang tersisa bukan
                    kesulitannya, melainkan kenangan dan rasa bangga karena
                    telah mencoba.
                  </p>
                  <p className="font-light">
                    Saisho No Ramune melambangkan{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(215 100% 64%)" }}
                    >
                      keberanian untuk merasakan hal baru
                    </span>
                    .
                  </p>
                  <p className="font-light">
                    Bahwa setiap awal mungkin terasa asing, namun dari situlah
                    seseorang belajar, tumbuh, dan menemukan kesenangan dalam
                    prosesnya.
                  </p>
                  <p
                    className="font-light italic border-l-4 pl-6"
                    style={{ borderColor: "hsl(215 85% 45%)" }}
                  >
                    Pengalaman pertama tidak harus sempurna.
                  </p>
                  <p className="font-light">
                    Cukup dijalani, dirasakan, dan dikenang — karena dari
                    situlah perjalanan dimulai.
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
              {[1, 2, 3].map((item, index) => {
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
              Setiap awal dimulai dengan keberanian untuk mencoba.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaishoNoRamune;