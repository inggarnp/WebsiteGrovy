import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import img1 from "@/assets/merchandise/feedme/tote.jpg";
import img2 from "@/assets/merchandise/feedme/keychain.jpg";
import img3 from "@/assets/merchandise/feedme/lanyard.jpg";
import img4 from "@/assets/merchandise/feedme/t-shirt.jpg";

import img5 from "@/assets/merchandise/feedme/dokumentasi/back.jpeg";
import img6 from "@/assets/merchandise/feedme/dokumentasi/kimmy_project.jpeg";
import img7 from "@/assets/merchandise/feedme/dokumentasi/kimmyproject.jpeg";
import img8 from "@/assets/merchandise/feedme/dokumentasi/kimmy_selfie.jpeg";
import img9 from "@/assets/merchandise/feedme/dokumentasi/kimmy_tshirt.jpeg";
import img10 from "@/assets/merchandise/feedme/dokumentasi/dokumentasi1.jpeg";
import img11 from "@/assets/merchandise/feedme/dokumentasi/dokumentasi2.jpeg";
import img12 from "@/assets/merchandise/feedme/dokumentasi/dokumentasi3.jpeg";

import video1 from "@/assets/merchandise/feedme/dokumentasi/video.mp4";

const FeedMeMerch = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1 && !visibleSections.includes(index)) {
            setVisibleSections((prev) => [...prev, index]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const merchandiseItems = [
    {
      id: 1,
      img: img1,
      name: "Tote Bag Feed Me",
      type: "Accessories",
    },
    {
      id: 2,
      img: img4,
      name: "T-Shirt Feed Me",
      type: "Apparel",
    },
    {
      id: 3,
      img: img3,
      name: "Lanyard Feed Me",
      type: "Accessories",
    },
    {
      id: 4,
      img: img2,
      name: "Keychain Feed Me",
      type: "Accessories",
    },
  ];

  const galleryImages = [
    { id: 1, img: img5, caption: "Back Design" },
    { id: 2, img: img6, caption: "Kimmy Project" },
    { id: 3, img: img7, caption: "Kimmy Project Alt" },
    { id: 4, img: img8, caption: "Kimmy Selfie" },
    { id: 5, img: img9, caption: "Kimmy T-Shirt" },
    { id: 6, img: img10, caption: "Documentation 1" },
    { id: 7, img: img11, caption: "Documentation 2" },
    { id: 8, img: img12, caption: "Documentation 3" },
  ];

  const galleryVideos = [
    {
      id: 1,
      video: video1,
      title: "Feed Me – Behind The Scenes",
      subtitle: "Grovy Merchandise Production",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#f5f2f0] via-[#f0ece8] to-[#faf7f5] font-['Figtree'] relative overflow-hidden">
        {/* Fixed Background Decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[5%] w-72 h-72 rounded-full bg-gradient-to-br from-[#9b7653]/8 to-[#8b6644]/8 blur-3xl animate-float"></div>
          <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-[#a0826d]/6 to-[#9b7653]/6 blur-3xl animate-pulse-soft"></div>
          <div
            className="absolute bottom-[20%] left-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-[#8b6644]/7 to-[#a0826d]/7 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="absolute top-[15%] right-[20%] w-32 h-32 border-2 border-[#9b7653]/10 rounded-full animate-pulse-soft"></div>
          <div
            className="absolute bottom-[30%] left-[8%] w-40 h-40 border-2 border-[#a0826d]/10 rounded-full animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
          ></div>

          <div className="absolute top-[45%] left-[25%] w-2 h-2 rounded-full bg-[#9b7653]/20 animate-pulse-soft"></div>
          <div
            className="absolute bottom-[40%] right-[30%] w-2 h-2 rounded-full bg-[#a0826d]/20 animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
          ></div>

          <svg
            className="absolute bottom-0 left-0 w-full opacity-5"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#9b7653"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section
            ref={addToRefs}
            className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
              visibleSections.includes(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#9b7653]/10 to-[#a0826d]/10 blur-3xl animate-pulse-soft"></div>
              <div
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#a0826d]/10 to-[#8b6644]/10 blur-3xl animate-pulse-soft"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl">
              <div className="mb-8 inline-block">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#9b7653]"></div>
                  <svg
                    className="w-6 h-6 text-[#9b7653]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[#9b7653]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <h1 className="font-['Playfair_Display'] text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-[#8b6644] via-[#9b7653] to-[#a0826d] bg-clip-text text-transparent animate-slide-up">
                "Feed Me"
              </h1>

              <p
                className="text-sm md:text-base text-[#8b6644] font-semibold mb-4 animate-slide-up tracking-wider"
                style={{ animationDelay: "0.1s" }}
              >
                EDITION — 1st GROVY MERCHANDISE
              </p>

              <p
                className="text-xl md:text-2xl text-[#5d4a3a] leading-relaxed max-w-3xl mx-auto animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Feed Me adalah merchandise pertama Grovy yang membawa semangat
                kebersamaan dan kelucuan. Terinspirasi dari momen-momen
                menggemaskan yang penuh energi positif, koleksi ini adalah awal
                dari perjalanan panjang Kimmy dan Grovy bersama.
              </p>
            </div>
          </section>

          {/* Makna Section */}
          <section
            ref={addToRefs}
            className={`py-24 px-6 transition-all duration-1000 delay-100 ${
              visibleSections.includes(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9b7653]/20 via-[#a0826d]/20 to-[#8b6644]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-[0_20px_60px_-15px_rgba(155,118,83,0.15)] border border-[#9b7653]/10 transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(155,118,83,0.25)] group-hover:-translate-y-2">
                  <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#8b6644] to-[#9b7653] bg-clip-text text-transparent">
                    Makna di Balik Feed Me
                  </h2>

                  <div className="space-y-6 text-lg text-[#5d4a3a] leading-relaxed">
                    <p>
                      Feed Me adalah representasi dari energi yang saling
                      memberi dan menerima. Seperti hamster lucu yang selalu
                      lapar akan kasih sayang dan perhatian, Grovy juga "lapar"
                      akan dukungan, kebersamaan, dan momen-momen bahagia
                      bersama Kimmy.
                    </p>

                    <p>
                      Merchandise ini mengingatkan kita bahwa hubungan yang
                      indah adalah tentang saling memberi energi. Kimmy memberi
                      kami lagu, tawa, dan inspirasi—dan kami, sebagai Grovy,
                      memberi dukungan, cinta, dan kehadiran yang nyata.
                    </p>

                    <p className="font-semibold text-[#8b6644]">
                      Feed Me adalah simbol kebersamaan yang menggemaskan, penuh
                      kehangatan, dan selalu membuat kita tersenyum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Preview Merchandise */}
          <section
            ref={addToRefs}
            className={`py-24 px-6 bg-gradient-to-br from-[#faf7f5] to-[#f5f2f0] transition-all duration-1000 delay-200 ${
              visibleSections.includes(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8b6644] to-[#9b7653] bg-clip-text text-transparent">
                  Merchandise Preview
                </h2>
                <p className="text-lg text-[#5d4a3a] max-w-3xl mx-auto leading-relaxed">
                  Koleksi Feed Me Edition—merchandise pertama yang membawa
                  semangat kebersamaan Grovy. Setiap item dirancang dengan penuh
                  cinta dan kelucuan khas hamster kesayangan kita.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {merchandiseItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="group relative"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#9b7653]/20 to-[#a0826d]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-[0_10px_40px_-10px_rgba(155,118,83,0.1)] border border-[#9b7653]/10 transition-all duration-500 group-hover:shadow-[0_15px_50px_-10px_rgba(155,118,83,0.2)] group-hover:-translate-y-2 cursor-pointer">
                      <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden border border-[#9b7653]/10">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        <span className="absolute top-3 left-3 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#8b6644]">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#5d4a3a] text-center mb-3 group-hover:text-[#8b6644] transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Informasi */}
          <section
            ref={addToRefs}
            className={`py-24 px-6 transition-all duration-1000 delay-300 ${
              visibleSections.includes(3)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#a0826d]/20 via-[#9b7653]/20 to-[#8b6644]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-gradient-to-br from-white/90 to-[#faf7f5]/90 backdrop-blur-sm rounded-3xl p-12 shadow-[0_20px_60px_-15px_rgba(155,118,83,0.15)] border border-[#9b7653]/10 transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(155,118,83,0.25)] group-hover:-translate-y-2">
                  <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#8b6644] to-[#9b7653] bg-clip-text text-transparent">
                    Informasi Penting
                  </h2>

                  <div className="space-y-6 text-lg text-[#5d4a3a] leading-relaxed">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#8b6644] mt-3 flex-shrink-0"></div>
                      <p>
                        Merchandise Feed Me Edition adalah{" "}
                        <span className="font-semibold text-[#8b6644]">
                          koleksi pertama Grovy
                        </span>{" "}
                        yang telah diluncurkan dengan periode pre-order
                        terbatas.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#9b7653] mt-3 flex-shrink-0"></div>
                      <p>
                        Halaman ini berfungsi sebagai{" "}
                        <span className="font-semibold text-[#9b7653]">
                          dokumentasi dan kenangan
                        </span>{" "}
                        dari merchandise pertama yang penuh makna ini.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#a0826d] mt-3 flex-shrink-0"></div>
                      <p>
                        Untuk informasi merchandise terbaru dan periode
                        pre-order selanjutnya, selalu ikuti{" "}
                        <span className="font-semibold text-[#a0826d]">
                          media sosial resmi Grovy
                        </span>
                        .
                      </p>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-[#9b7653]/5 to-[#a0826d]/5 rounded-2xl border border-[#9b7653]/20">
                      <p className="text-center font-semibold text-[#8b6644]">
                        Feed Me Edition adalah awal dari perjalanan merchandise
                        Grovy yang akan terus berlanjut! 🐹✨
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section
            ref={addToRefs}
            className={`py-24 px-6 bg-gradient-to-br from-[#f5f2f0] to-[#faf7f5] transition-all duration-1000 delay-400 ${
              visibleSections.includes(4)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8b6644] to-[#9b7653] bg-clip-text text-transparent">
                  Feed Me Gallery
                </h2>
                <p className="text-lg text-[#5d4a3a] max-w-3xl mx-auto leading-relaxed">
                  Dokumentasi visual dari Feed Me Edition—foto produk, mockup
                  desain, dan momen kebahagiaan Grovy dengan merchandise pertama
                  kami.
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((item, idx) => (
                  <div
                    key={item.id}
                    className="group relative"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#9b7653]/30 to-[#a0826d]/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Card */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-[0_10px_40px_-10px_rgba(155,118,83,0.15)] border border-[#9b7653]/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_50px_-10px_rgba(155,118,83,0.25)]">
                      {/* Image */}
                      <img
                        src={item.img}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay caption */}
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="p-6">
                          <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white">
                            {item.caption}
                          </h3>
                        </div>
                      </div>

                      {/* Border hover */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#9b7653]/30 rounded-2xl transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Video */}
          <section
            ref={addToRefs}
            className={`py-24 px-6 bg-gradient-to-br from-[#faf7f5] to-[#f5f2f0] transition-all duration-1000 delay-500 ${
              visibleSections.includes(5)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8b6644] to-[#9b7653] bg-clip-text text-transparent">
                  Feed Me Videos
                </h2>
                <p className="text-lg text-[#5d4a3a] max-w-3xl mx-auto leading-relaxed">
                  Dokumentasi video Feed Me Edition—behind the scenes dan momen
                  spesial proses pembuatan merchandise Grovy.
                </p>
              </div>

              {/* FULL VIDEO */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9b7653]/30 to-[#a0826d]/30 rounded-[2.5rem] blur-2xl opacity-70" />

                {/* Video Wrapper */}
                <div className="relative bg-white rounded-[2.5rem] p-4 shadow-[0_20px_80px_-20px_rgba(155,118,83,0.35)] border border-[#9b7653]/20">
                  <div
                    className="w-full overflow-hidden rounded-2xl"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <video
                      src={video1}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Caption */}
                  <div className="text-center mt-8 px-4">
                    <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-[#5d4a3a]">
                      Feed Me – Behind The Scenes
                    </h3>
                    <p className="text-sm md:text-base text-[#5d4a3a]/60 mt-3">
                      Grovy Merchandise Production
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Section */}
          <section
            ref={addToRefs}
            className={`py-32 px-6 relative overflow-hidden transition-all duration-1000 delay-600 ${
              visibleSections.includes(6)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#9b7653]/10 to-[#a0826d]/10 blur-3xl animate-pulse-soft"></div>
              <div
                className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#a0826d]/10 to-[#8b6644]/10 blur-3xl animate-pulse-soft"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-12">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#9b7653] to-transparent mx-auto mb-12"></div>
              </div>

              <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#8b6644] via-[#9b7653] to-[#a0826d] bg-clip-text text-transparent">
                Perjalanan yang Terus Berlanjut
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-[#5d4a3a] leading-relaxed">
                <p>
                  Feed Me Edition adalah awal dari perjalanan merchandise Grovy.
                  Meski periode pre-order telah berlalu, kenangan dan makna di
                  balik koleksi pertama ini akan selalu hidup bersama kita—dalam
                  setiap tawa, setiap dukungan, dan setiap momen kebersamaan.
                </p>

                <p className="font-semibold text-[#8b6644] text-2xl mt-8">
                  Terima kasih telah menjadi bagian dari awal perjalanan ini.
                  Mari terus tumbuh bersama! 🐹✨
                </p>
              </div>

              <div className="mt-12 inline-block">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#9b7653] to-transparent"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedMeMerch;
