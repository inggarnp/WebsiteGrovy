// src/components/pages/milestones/TimelineSection.tsx

import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

// Import timeline images
import img6 from "@/assets/timeline/debut.jpg";
import img7 from "@/assets/timeline/profile_kimmy.jpg";
import img8 from "@/assets/timeline/flowerful_kimmy.jpg";
import img9 from "@/assets/timeline/flowerful.png";
import img10 from "@/assets/timeline/idn.png";
import img11 from "@/assets/timeline/showroom.png";
import img12 from "@/assets/timeline/aitakatta.png";
import img13 from "@/assets/timeline/offair.png";
import img14 from "@/assets/timeline/mng.png";
import img15 from "@/assets/timeline/jkt48school.png";
import img16 from "@/assets/timeline/ultah14.png";
import img17 from "@/assets/timeline/twt.png";
import img18 from "@/assets/timeline/ramune.png";
import img19 from "@/assets/timeline/pajama.png";
import img20 from "@/assets/timeline/gc.png";
import img21 from "@/assets/timeline/kkg.png";
import img22 from "@/assets/timeline/breakfast.png";
import img23 from "@/assets/timeline/ofc2.jpeg";
import img24 from "@/assets/timeline/meminti.jpg";
import img25 from "@/assets/timeline/vc.png";

const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress for timeline
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById("timeline-section");
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Hitung progress berdasarkan posisi scroll di dalam section timeline
      const progress = ((scrollPosition - sectionTop) / sectionHeight) * 100;

      // Clamp antara 0-100
      setScrollProgress(Math.max(0, Math.min(100, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Milestone data
  const milestones = [
    {
      date: "18 November 2023",
      title: "Di Perkenalkan sebagai Trainee JKT48 Gen 12",
      description: "Di Perkenalkan Pada Event Jak Japan Matsuri 2023",
      image: img6,
    },
    {
      date: "01 Desember 2023",
      title: "Youtube JKT48",
      description: "JKT48 12th Generation Profile: Kimmy",
      image: img7,
    },
    {
      date: "17 Desember 2023",
      title: "Debut Sebagai Trainee JKT48 Gen 12",
      description:
        "FLOWERFUL - JKT48 12th Anniversary Concert, Membawakan Lagu KImi to NIji to Taiyo to - Bersama Kamu, Pelangi dan Mentari ",
      image: img9,
    },
    {
      date: "27 Desember 2023",
      title: "Debut di Theater Sebagai Trainee JKT48 Gen 12",
      description:
        "Membawakan Lagu Kimi To Niji To Taiyo To - Bersama Kamu, Pelangi Dan Mentari ",
      image: img8,
    },
    {
      date: "18 Februari 2024",
      title: "Shonichi IDN Live",
      description: "Bersama Lily, Nachia, & Nala",
      image: img10,
    },
    {
      date: "19 Februari 2024",
      title: "Shonichi Showroom Live",
      description: "Bersama Fritzy, Nala, & Erine",
      image: img11,
    },
    {
      date: "01 Maret 2024",
      title: "Shonichi Setlist Aitakatta",
      description:
        "Tampil Unit Song Glass No I Love You & Senaka Kara Dakishimete",
      image: img12,
    },
    {
      date: "8 Maret 2024",
      title: "Ulang Tahun ke-14",
      description: "#P1nn4clePursuit",
      image: img16,
    },
    {
      date: "16 Maret 2024",
      title: "Shonichi Theater Event JKT48 School",
      image: img15,
    },
    {
      date: "20 Maret 2024",
      title: "Shonichi Off Air",
      description: "Di Mukashi Fest Vol. 3",
      image: img13,
    },
    {
      date: "30 Maret 2024",
      title: "Shonichi Video Call",
      image: img25,
    },
    {
      date: "11 Mei 2024",
      title: "Shonichi MnG & 2Shoot",
      descrption: "Spring Has Come",
      image: img14,
    },
    {
      date: "20 Juni 2024",
      title: "Shonichi Setlist Pajama Drive",
      description: "Tampil Unit Song Tensi No Shippo",
      image: img19,
    },
    {
      date: "30 September 2024",
      title: "Shonichi OFC Event",
      description: "SUDDEN VERSUS #2 - The Wild Hunt",
      image: img23,
    },
    {
      date: "28 November 2024",
      title: "JKT48 TV",
      description: "Breakfast Time With Kimmy - Aurellia",
      image: img22,
    },
    {
      date: "19 Januari 2025",
      title: "Shonichi Setlist Ramune No Nomikata",
      description: "Tampil Unit Song Usotsuki Na Dachou",
      image: img18,
    },
    {
      date: "24 Mei 2025",
      title: "Shonichi Te Wo Tsunaginagara",
      description: "Tampil Unit Song Glory Days & Choco No Yukue",
      image: img17,
    },
    {
      date: "08 Agustus 2025",
      title: "Shonichi Global Center",
      description: "Tampil Sebagai Global Center di Setlist Pajama Drive",
      image: img20,
    },
    {
      date: "21 November 2025",
      title: "Shonichi Kira Kira Girls",
      description: "Tampil Unit Song Gomen Ne Jewel",
      image: img21,
    },
    {
      date: "1 Januari 2026",
      title: "Naik Member Inti",
      description:
        "Pada Pengumuman Event MnG Sister Reunion Tanggal 25 Oktober 2025 dimana gen 12 akan di promosikan menjadi member inti",
      image: img24,
    },
  ];

  return (
    <section id="timeline-section" className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display'] gradient-text">
            Kimmy's Timeline
          </h2>
          <div
            className="h-1 w-24 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(215 100% 64%), transparent)",
            }}
          ></div>
        </div>

        {/* Animated Timeline Line - Desktop */}
        <div className="absolute left-1/2 top-40 bottom-20 w-0.5 -translate-x-1/2 hidden md:block">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "hsl(215 100% 64% / 0.15)",
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full rounded-full transition-all duration-100 ease-out"
            style={{
              height: `${scrollProgress}%`,
              background:
                "linear-gradient(to bottom, hsl(215 100% 64%), hsl(215 100% 70%))",
              boxShadow:
                "0 0 10px hsl(215 100% 64% / 0.5), 0 0 20px hsl(215 100% 70% / 0.3)",
            }}
          >
            <div
              className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                boxShadow:
                  "0 0 10px hsl(215 100% 64% / 0.8), 0 0 15px hsl(215 100% 70% / 0.5)",
              }}
            ></div>
          </div>
        </div>

        {/* Mobile Timeline Line */}
        <div className="absolute left-8 top-40 bottom-20 w-0.5 md:hidden">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "hsl(215 100% 64% / 0.15)",
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full rounded-full transition-all duration-100 ease-out"
            style={{
              height: `${scrollProgress}%`,
              background:
                "linear-gradient(to bottom, hsl(215 100% 64%), hsl(215 100% 70%))",
              boxShadow: "0 0 8px hsl(215 100% 64% / 0.5)",
            }}
          >
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
              }}
            ></div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {milestones.map((milestone, index) => {
            const currentYear = milestone.date.split(" ")[2];
            const previousYear =
              index > 0 ? milestones[index - 1].date.split(" ")[2] : null;
            const showYearDivider =
              previousYear && currentYear !== previousYear;

            return (
              <React.Fragment key={index}>
                {/* Year Divider */}
                {showYearDivider && (
                  <div className="flex items-center justify-center py-6 relative z-20">
                    <div
                      className="px-8 py-3 rounded-full border shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                        borderColor: "hsl(0 0% 100% / 0.3)",
                      }}
                    >
                      <span className="text-2xl md:text-3xl font-bold text-white font-['Playfair_Display']">
                        {currentYear}
                      </span>
                    </div>
                  </div>
                )}

                {/* Timeline Item */}
                <div
                  className={`flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-left pl-12 md:pl-0`}
                  >
                    <div className="group relative">
                      <div
                        className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                        }}
                      ></div>
                      <div
                        className="relative glass-card rounded-2xl p-6 hover:border-[hsl(215_100%_64%_/_0.3)] transition-all duration-300"
                        style={{
                          border: "1px solid hsl(215 100% 64% / 0.1)",
                        }}
                      >
                        <div
                          className={`flex items-center gap-2 mb-3 ${
                            index % 2 === 0
                              ? "md:justify-end"
                              : "md:justify-start"
                          } justify-start`}
                        >
                          <Calendar
                            className="w-4 h-4"
                            style={{ color: "hsl(215 100% 64%)" }}
                          />
                          <span
                            className="text-sm font-semibold"
                            style={{ color: "hsl(215 30% 30%)" }}
                          >
                            {milestone.date}
                          </span>
                        </div>
                        <h3
                          className="text-lg md:text-xl font-bold mb-2 font-['Playfair_Display']"
                          style={{ color: "hsl(215 30% 20%)" }}
                        >
                          {milestone.title}
                        </h3>
                        <p
                          className="text-sm"
                          style={{ color: "hsl(215 30% 40%)" }}
                        >
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot - Desktop */}
                  <div className="hidden md:flex items-center justify-center w-12 z-10">
                    <div className="relative">
                      <div
                        className="absolute inset-0 rounded-full blur-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                          opacity: 0.3,
                        }}
                      ></div>
                      <div
                        className="relative w-4 h-4 rounded-full border-2 border-white shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 hidden md:block">
                    <div
                      className="group relative overflow-hidden rounded-2xl border-2 border-white shadow-lg hover:border-[hsl(215_100%_64%_/_0.2)] transition-all duration-300"
                      style={{
                        boxShadow: "0 10px 30px -10px hsl(215 100% 64% / 0.15)",
                      }}
                    >
                      <div
                        className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300 z-10"
                        style={{
                          background:
                            "linear-gradient(to bottom right, hsl(215 100% 64% / 0.1), hsl(215 100% 70% / 0.1))",
                        }}
                      ></div>
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Mobile dot */}
                  <div className="absolute left-8 w-4 h-4 -translate-x-1/2 md:hidden z-10">
                    <div
                      className="absolute inset-0 rounded-full blur-sm"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                        opacity: 0.3,
                      }}
                    ></div>
                    <div
                      className="relative w-full h-full rounded-full border-2 border-white shadow-md"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(215 100% 64%), hsl(215 100% 70%))",
                      }}
                    ></div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;