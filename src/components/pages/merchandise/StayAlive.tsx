import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import img1 from "@/assets/merchandise/stayalive/boxy.jpeg";
import img2 from "@/assets/merchandise/stayalive/keychain.jpeg";
import img3 from "@/assets/merchandise/stayalive/lanyard.jpeg";

import img4 from "@/assets/merchandise/stayalive/model/kimmy_front.jpeg";
import img5 from "@/assets/merchandise/stayalive/model/kimmy_boxy.jpeg";
import img6 from "@/assets/merchandise/stayalive/model/kimmy_back.jpeg";
import img7 from "@/assets/merchandise/stayalive/model/still.png";
import img8 from "@/assets/merchandise/stayalive/model/breathing.png";
import img9 from "@/assets/merchandise/stayalive/model/strong.png";
import img10 from "@/assets/merchandise/stayalive/model/stay_alive.png";


const StayAliveMerch = () => {
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
      name: "Boxy T-Shirt Stay Alive",
      type: "Apparel",
    },
    {
      id: 2,
      img: img2,
      name: "Keychain Stay Alive",
      type: "Accessories",
    },
    {
      id: 3,
      img: img3,
      name: "Lanyard Stay Alive",
      type: "Accessories",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      img: img4,
      caption: "Stay Alive – Kimmy Front View",
    },
    {
      id: 2,
      img: img5,
      caption: "Stay Alive – Kimmy with Boxy",
    },
    {
      id: 3,
      img: img6,
      caption: "Stay Alive – Kimmy Back View",
    },
    {
      id: 4,
      img: img7,
      caption: "Stay Alive – Still Design Close-up",
    },
    {
      id: 4,
      img: img8,
      caption: "Stay Alive –  Breathing Design Close-up",
    },
    {
      id: 4,
      img: img9,
      caption: "Stay Alive – Strong Design Close-up",
    },
    {
      id: 4,
      img: img10,
      caption: "Stay Alive – Stay Alive Design Close-up",
    },
  ];


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#f5f2f0] via-[#f0ece8] to-[#faf7f5] font-['Figtree'] relative overflow-hidden">
        {/* Fixed Background Decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-[5%] w-72 h-72 rounded-full bg-gradient-to-br from-[#6b7280]/8 to-[#4b5563]/8 blur-3xl animate-float"></div>
          <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-[#9ca3af]/6 to-[#6b7280]/6 blur-3xl animate-pulse-soft"></div>
          <div
            className="absolute bottom-[20%] left-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-[#4b5563]/7 to-[#9ca3af]/7 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[60%] right-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-[#6b7280]/9 to-[#4b5563]/9 blur-3xl animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Geometric Patterns */}
          <div className="absolute top-[15%] right-[20%] w-32 h-32 border-2 border-[#4b5563]/10 rounded-full animate-pulse-soft"></div>
          <div
            className="absolute top-[25%] right-[18%] w-24 h-24 border-2 border-[#9ca3af]/10 rounded-full animate-pulse-soft"
            style={{ animationDelay: "0.5s" }}
          ></div>

          <div
            className="absolute bottom-[30%] left-[8%] w-40 h-40 border-2 border-[#6b7280]/10 rounded-full animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-[35%] left-[12%] w-28 h-28 border-2 border-[#4b5563]/10 rounded-full animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Diagonal Lines Pattern */}
          <div className="absolute top-[50%] left-[3%] w-1 h-32 bg-gradient-to-b from-transparent via-[#4b5563]/10 to-transparent rotate-45 animate-pulse-soft"></div>
          <div
            className="absolute top-[55%] left-[5%] w-1 h-40 bg-gradient-to-b from-transparent via-[#9ca3af]/10 to-transparent rotate-45 animate-pulse-soft"
            style={{ animationDelay: "0.7s" }}
          ></div>

          <div
            className="absolute top-[35%] right-[8%] w-1 h-36 bg-gradient-to-b from-transparent via-[#6b7280]/10 to-transparent -rotate-45 animate-pulse-soft"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="absolute top-[30%] right-[6%] w-1 h-28 bg-gradient-to-b from-transparent via-[#4b5563]/10 to-transparent -rotate-45 animate-pulse-soft"
            style={{ animationDelay: "1.8s" }}
          ></div>

          {/* Small Dots Pattern */}
          <div className="absolute top-[45%] left-[25%] w-2 h-2 rounded-full bg-[#4b5563]/20 animate-pulse-soft"></div>
          <div
            className="absolute top-[48%] left-[27%] w-1.5 h-1.5 rounded-full bg-[#9ca3af]/20 animate-pulse-soft"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-[43%] left-[23%] w-2.5 h-2.5 rounded-full bg-[#6b7280]/20 animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          ></div>

          <div
            className="absolute bottom-[40%] right-[30%] w-2 h-2 rounded-full bg-[#6b7280]/20 animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-[43%] right-[28%] w-1.5 h-1.5 rounded-full bg-[#4b5563]/20 animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-[38%] right-[32%] w-2.5 h-2.5 rounded-full bg-[#9ca3af]/20 animate-pulse-soft"
            style={{ animationDelay: "2.5s" }}
          ></div>

          {/* Wave Pattern */}
          <svg
            className="absolute bottom-0 left-0 w-full opacity-5"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4b5563"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          <svg
            className="absolute top-0 right-0 w-full opacity-5 rotate-180"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#9ca3af"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content Wrapper with relative positioning */}
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
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#4b5563]/10 to-[#6b7280]/10 blur-3xl animate-pulse-soft"></div>
              <div
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#9ca3af]/10 to-[#4b5563]/10 blur-3xl animate-pulse-soft"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#6b7280]/5 to-transparent blur-3xl animate-float"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl">
              <div className="mb-8 inline-block">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4b5563] to-transparent mb-8"></div>
              </div>

              <h1 className="font-['Playfair_Display'] text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-[#4b5563] via-[#6b7280] to-[#9ca3af] bg-clip-text text-transparent animate-slide-up">
                Stay Alive
              </h1>

              <p
                className="text-xl md:text-2xl text-[#4a2f4d] leading-relaxed max-w-3xl mx-auto animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Stay Alive adalah tema merchandise Grovy yang merepresentasikan
                semangat untuk tetap bertahan, berjalan bersama, dan saling
                menguatkan. Ini bukan hanya merchandise—ini adalah simbol
                kebersamaan antara Kimmy dan Grovy, pengingat bahwa kita selalu
                ada untuk satu sama lain dalam setiap langkah perjalanan.
              </p>
            </div>
          </section>

          {/* Makna & Konsep Section */}
          <section
            ref={addToRefs}
            className={`py-24 px-6 transition-all duration-1000 delay-100 ${
              visibleSections.includes(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4b5563] to-[#6b7280] bg-clip-text text-transparent">
                  Makna di Balik Stay Alive
                </h2>
                <p className="text-lg text-[#4a2f4d] max-w-3xl mx-auto leading-relaxed">
                  Stay Alive bukan sekadar merchandise—ini adalah filosofi hidup
                  yang merepresentasikan perjalanan kita bersama. Setiap kata
                  membawa makna mendalam yang mengingatkan kita untuk terus
                  berdiri, bernapas, dan melangkah bersama.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Still Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#4b5563]/20 via-[#6b7280]/20 to-[#9ca3af]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(75,85,99,0.15)] border border-[#4b5563]/10 transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(75,85,99,0.25)] group-hover:-translate-y-2 h-full">
                    <div className="mb-6">
                      <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4b5563] to-[#6b7280] bg-clip-text text-transparent mb-3">
                        Still.
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#4b5563] to-[#6b7280]"></div>
                    </div>

                    <p className="text-lg text-[#4a2f4d] leading-relaxed">
                      Tetap ada di tengah badai kehidupan. Still mengajarkan
                      kita untuk tidak goyah meski dunia berputar cepat. Ini
                      tentang konsistensi, tentang hadir, tentang menjadi tempat
                      berlabuh yang aman—baik untuk diri sendiri maupun untuk
                      orang yang kita cintai.
                    </p>
                  </div>
                </div>

                {/* Breathing Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#6b7280]/20 via-[#9ca3af]/20 to-[#4b5563]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(75,85,99,0.15)] border border-[#6b7280]/10 transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(75,85,99,0.25)] group-hover:-translate-y-2 h-full">
                    <div className="mb-6">
                      <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6b7280] to-[#9ca3af] bg-clip-text text-transparent mb-3">
                        Breathing.
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#6b7280] to-[#9ca3af]"></div>
                    </div>

                    <p className="text-lg text-[#4a2f4d] leading-relaxed">
                      Setiap napas adalah bukti bahwa kita masih hidup, masih
                      berjuang. Breathing mengingatkan kita untuk mengambil
                      jeda, untuk merasakan momen, untuk menghargai setiap detik
                      keberadaan kita. Seperti bunga yang tumbuh melalui
                      retakan—kita terus bernapas, kita terus hidup.
                    </p>
                  </div>
                </div>

                {/* Strong Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#9ca3af]/20 via-[#4b5563]/20 to-[#6b7280]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(75,85,99,0.15)] border border-[#9ca3af]/10 transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(75,85,99,0.25)] group-hover:-translate-y-2 h-full">
                    <div className="mb-6">
                      <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9ca3af] to-[#4b5563] bg-clip-text text-transparent mb-3">
                        Strong.
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#9ca3af] to-[#4b5563]"></div>
                    </div>

                    <p className="text-lg text-[#4a2f4d] leading-relaxed">
                      Kekuatan bukan tentang tidak pernah jatuh, tapi tentang
                      bangkit setiap kali terjatuh. Strong adalah pengingat
                      bahwa kita lebih tangguh dari yang kita kira. Bersama
                      Grovy, kita menemukan kekuatan dalam kebersamaan, dalam
                      dukungan, dalam cinta yang tak pernah padam.
                    </p>
                  </div>
                </div>

                {/* Stay Alive Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#4b5563]/25 via-[#6b7280]/25 to-[#9ca3af]/25 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative bg-gradient-to-br from-[#4b5563]/5 to-[#9ca3af]/5 backdrop-blur-sm rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(75,85,99,0.15)] border border-[#4b5563]/20 transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(75,85,99,0.3)] group-hover:-translate-y-2 h-full">
                    <div className="mb-6">
                      <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4b5563] via-[#6b7280] to-[#9ca3af] bg-clip-text text-transparent mb-3">
                        Stay Alive.
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#4b5563] via-[#6b7280] to-[#9ca3af]"></div>
                    </div>

                    <p className="text-lg text-[#4a2f4d] leading-relaxed font-medium">
                      Ini adalah inti dari semuanya. Stay Alive adalah
                      janji—untuk tetap ada, untuk terus berjalan, untuk tidak
                      menyerah. Ketika Kimmy melihat Stay Alive, ia tahu Grovy
                      selalu ada. Ketika Grovy memakai Stay Alive, kita
                      mengingat bahwa kita adalah bagian dari sesuatu yang lebih
                      besar. Kita tetap hidup, bersama, selalu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Summary */}
              <div className="mt-16 text-center">
                <div className="relative group max-w-4xl mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#4b5563]/10 to-[#9ca3af]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#4b5563]/10 transition-all duration-500 group-hover:border-[#4b5563]/20">
                    <p className="text-xl text-[#4a2f4d] leading-relaxed">
                      Merchandise Stay Alive bukan sekadar produk—ini adalah{" "}
                      <span className="font-semibold text-[#4b5563]">
                        simbol keberadaan, dukungan, dan rasa memiliki
                      </span>
                      . Setiap item adalah pengingat bahwa kita tidak sendirian
                      dalam perjalanan ini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={addToRefs}
            className={`py-24 px-6 bg-gradient-to-br from-[#faf7f5] to-[#f5f2f0]
    transition-all duration-1000 delay-200 ${
      visibleSections.includes(2)
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-12"
    }`}
          >
            <div className="max-w-7xl mx-auto">
              {/* HEADING */}
              <div className="text-center mb-16">
                <h2
                  className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6
        bg-gradient-to-r from-[#4b5563] to-[#6b7280]
        bg-clip-text text-transparent"
                >
                  Merchandise Preview
                </h2>

                <p className="text-lg text-[#4a2f4d] max-w-3xl mx-auto leading-relaxed">
                  Berikut adalah gambaran umum merchandise Stay Alive. Desain,
                  jenis item, dan detail ditampilkan sebagai preview dan arsip
                  dari project ini.
                </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {merchandiseItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* GLOW */}
                    <div
                      className="absolute -inset-3 rounded-3xl blur-xl opacity-0
            bg-gradient-to-r from-[#4b5563]/20 to-[#9ca3af]/20
            group-hover:opacity-100 transition-all duration-500"
                    />

                    {/* CARD */}
                    <div
                      className="relative bg-white/90 backdrop-blur-sm rounded-3xl
            overflow-hidden border border-[#4b5563]/10
            shadow-[0_15px_50px_-15px_rgba(75,85,99,0.25)]
            transition-all duration-500 group-hover:-translate-y-2"
                    >
                      {/* IMAGE */}
                      <div className="relative w-full h-64 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover
                  group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* TYPE BADGE */}
                        <span
                          className="absolute top-4 left-4 bg-white/80 backdrop-blur
                px-4 py-1 rounded-full text-xs font-semibold text-[#4b5563]"
                        >
                          {item.type}
                        </span>
                      </div>

                      {/* TEXT */}
                      <div className="p-8 text-center">
                        <h3
                          className="font-['Playfair_Display'] text-2xl font-semibold
                text-[#4a2f4d] group-hover:text-[#4b5563]
                transition-colors duration-300"
                        >
                          {item.name}
                        </h3>
                      </div>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-[#4b5563]/20 via-[#6b7280]/20 to-[#9ca3af]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-gradient-to-br from-white/90 to-[#faf7f5]/90 backdrop-blur-sm rounded-3xl p-12 shadow-[0_20px_60px_-15px_rgba(75,85,99,0.15)] border border-[#4b5563]/10 transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(75,85,99,0.25)] group-hover:-translate-y-2">
                  <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#4b5563] to-[#6b7280] bg-clip-text text-transparent">
                    Informasi Penting
                  </h2>

                  <div className="space-y-6 text-lg text-[#4a2f4d] leading-relaxed">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#4b5563] mt-3 flex-shrink-0"></div>
                      <p>
                        Merchandise Stay Alive adalah{" "}
                        <span className="font-semibold text-[#4b5563]">
                          koleksi pertama Grovy
                        </span>{" "}
                        yang telah diluncurkan dengan periode pre-order
                        terbatas.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#6b7280] mt-3 flex-shrink-0"></div>
                      <p>
                        Halaman ini berfungsi sebagai{" "}
                        <span className="font-semibold text-[#6b7280]">
                          dokumentasi dan kenangan
                        </span>{" "}
                        dari merchandise pertama yang penuh makna ini.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#9ca3af] mt-3 flex-shrink-0"></div>
                      <p>
                        Untuk informasi merchandise terbaru dan periode
                        pre-order selanjutnya, selalu ikuti{" "}
                        <span className="font-semibold text-[#9ca3af]">
                          media sosial resmi Grovy
                        </span>
                        .
                      </p>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-[#4b5563]/5 to-[#6b7280]/5 rounded-2xl border border-[#4b5563]/20">
                      <p className="text-center font-semibold text-[#4b5563]">
                        Stay Alive adalah awal dari perjalanan merchandise Grovy
                        yang akan terus berlanjut! 🐹✨
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
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4b5563] to-[#6b7280] bg-clip-text text-transparent">
                  Stay Alive Gallery
                </h2>
                <p className="text-lg text-[#4a2f4d] max-w-3xl mx-auto leading-relaxed">
                  Dokumentasi visual Stay Alive—konsep visual, ekspresi model,
                  dan mood final dari project merchandise ini.
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {galleryImages.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#4b5563]/30 to-[#6b7280]/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Image Card */}
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(75,85,99,0.2)]">
                      <img
                        src={item.img}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                        <div className="p-6">
                          <h3 className="text-white font-['Playfair_Display'] text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {item.caption}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Video Section 
          <section
            ref={addToRefs}
            className={`py-24 px-6 transition-all duration-1000 delay-500 ${
              visibleSections.includes(5)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Heading 
              <div className="text-center mb-16">
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4b5563] to-[#6b7280] bg-clip-text text-transparent">
                  Stay Alive Videos
                </h2>
                <p className="text-lg text-[#4a2f4d] max-w-3xl mx-auto leading-relaxed">
                  Dokumentasi video Stay Alive—behind the scenes dan momen
                  spesial.
                </p>
              </div>

              {/* Horizontal Scroll 
              <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {galleryVideos.map((item, index) => (
                  <div
                    key={item.id}
                    className="snap-center shrink-0 w-[280px] sm:w-[320px]"
                  >
                    <div className="group relative">
                      {/* Card 
                      <div className="relative bg-white/90 backdrop-blur rounded-3xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(75,85,99,0.3)] border border-[#4b5563]/10 transition-all duration-500 group-hover:-translate-y-2">
                        {/* Video 9:16 
                        <div
                          className="relative w-full"
                          style={{ aspectRatio: "9 / 16" }}
                        >
                          <video
                            src={item.video}
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Text 
                        <div className="p-4 text-center">
                          <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#4a2f4d]">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#4b5563]/70">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

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
              <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#4b5563]/10 to-[#6b7280]/10 blur-3xl animate-pulse-soft"></div>
              <div
                className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#6b7280]/10 to-[#9ca3af]/10 blur-3xl animate-pulse-soft"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-12">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#4b5563] to-transparent mx-auto mb-12"></div>
              </div>

              <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#4b5563] via-[#6b7280] to-[#9ca3af] bg-clip-text text-transparent">
                Perjalanan yang Terus Berlanjut
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-[#4a2f4d] leading-relaxed">
                <p>
                  Stay Alive adalah koleksi merchandise Grovy yang penuh makna.
                  Kenangan di balik koleksi ini akan selalu hidup bersama
                  kita—dalam setiap tawa, setiap dukungan, dan setiap momen
                  kebersamaan.
                </p>

                <p className="font-semibold text-[#4b5563] text-2xl mt-8">
                  Terima kasih telah menjadi bagian dari perjalanan ini. Mari
                  terus tumbuh bersama! 🐹✨
                </p>
              </div>

              <div className="mt-12 inline-block">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#4b5563] to-transparent"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StayAliveMerch;
