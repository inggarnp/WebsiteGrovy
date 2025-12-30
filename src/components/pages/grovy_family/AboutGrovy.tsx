import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import img1 from "@/assets/about_grovy/bintang-removebg-preview.png";
import img2 from "@/assets/about_grovy/matahari-removebg-preview.png";
import img3 from "@/assets/about_grovy/kelopak_penopang-removebg-preview.png";
import img4 from "@/assets/about_grovy/logo-grovy.png";

import img5 from "@/assets/about_grovy/grovy/1765591577238.jpg";
import img6 from "@/assets/about_grovy/grovy/1765591589446.jpg";
import img7 from "@/assets/about_grovy/grovy/1765591595689.jpg";
import img8 from "@/assets/about_grovy/grovy/1765591596419.jpg";
import img9 from "@/assets/about_grovy/grovy/1765591597489.jpg";
import img10 from "@/assets/about_grovy/grovy/1765591598531.jpg";
import img11 from "@/assets/about_grovy/grovy/1765591599180.jpg";
import img12 from "@/assets/about_grovy/grovy/1765591599786.jpg";
import img13 from "@/assets/about_grovy/grovy/1765591654928.jpg";
import img14 from "@/assets/about_grovy/grovy/1765591659350.jpg";
import img15 from "@/assets/about_grovy/grovy/1765591766379.jpg";
import img16 from "@/assets/about_grovy/grovy/1765591768893.jpg";

import img17 from "@/assets/about_grovy/poster/pinnacle.png";
import img18 from "@/assets/about_grovy/poster/Saisho.png";
import img19 from "@/assets/about_grovy/poster/vishalarasa.jpeg";

const AboutGrovy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const photos = [
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];

  const projects = [
    {
      title: "#P1nn4clePursuit",
      description: "Perayaan istimewa untuk hari ulang tahun Victoria Kimberly",
      image: img17,
      link: "/pinnacle",
      buttonClass: "from-blue-500 to-blue-600",
    },
    {
      title: "#SaishoNoRamune",
      description: "Dukungan berkelanjutan dalam setiap penampilan dan event",
      image: img18,
      link: "/saisho",
      buttonClass: "from-blue-400 to-blue-500",
    },
    {
      title: "#Vishalarasa",
      description: "Merayakan milestone penting dalam perjalanan bersama",
      image: img19,
      link: "/visha",
      buttonClass: "from-blue-600 to-blue-700",
    },
  ];

  const isScrollable = projects.length > 3;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse-soft" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">Tentang GROVY</span>
            </h1>
            <div className="w-20 h-[3px] mx-auto rounded-full bg-primary/60" />
          </div>

          {/* Main Description */}
          <div
            className={`glass-card rounded-3xl p-8 md:p-12 mb-16 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              GROVY adalah fanbase yang berdiri untuk mendukung perjalanan{" "}
              <span className="font-semibold text-blue-800">
                Victoria Kimberly
              </span>
              . Kami hadir sebagai ruang bagi para pendukung yang ingin berbagi
              semangat, saling menguatkan, dan menyaksikan perkembangan Kimmy
              dari waktu ke waktu. Kami percaya bahwa setiap dukungan, sekecil
              apa pun, memiliki arti bagi langkah yang ia ambil di panggung
              maupun di luar panggung.
            </p>

            <div className="text-center">
              <a
                href="/staff"
                className="grovy-button inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Our Structure
              </a>
            </div>
          </div>

          {/* Story Section */}
          <div
            className={`mb-16 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6 text-blue-900">
                Cerita Nama
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <span className="text-2xl font-bold gradient-text">
                    GROVY
                  </span>{" "}
                  berasal dari kata{" "}
                  <span className="font-semibold text-blue-800">
                    "Glimmer Star of Victory"
                  </span>
                  , filosofi yang menggambarkan sinar kecil yang tumbuh menjadi
                  bintang kemenangan.
                </p>
                <p className="text-lg leading-relaxed">
                  Nama ini dipilih untuk menggambarkan perjalanan yang pelan
                  tapi pasti, seperti cahaya yang semakin terang saat mendekati
                  tujuannya.
                </p>
              </div>
            </div>
          </div>

          {/* Logo Explanation */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-blue-900">
              Arti Logo GROVY
            </h2>

            {/* Logo Elements Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Bintang Emas */}
              <div className="glass-card rounded-2xl p-8 hover-lift group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden glossy-orb shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={img1}
                    alt="Bintang Emas"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-center mb-3 text-blue-600">
                  Bintang Emas
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Melambangkan harapan dan tujuan yang ingin diraih oleh
                  Victoria Kimberly. Cita-cita yang bersinar dan memandu
                  perjalanan menuju kemenangan.
                </p>
              </div>

              {/* Matahari */}
              <div className="glass-card rounded-2xl p-8 hover-lift group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden glossy-orb shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={img2}
                    alt="Matahari"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-center mb-3 text-sky-600">
                  Matahari
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Menampilkan energi, kekuatan, dan kehangatan. Seperti
                  sinarnya, dukungan untuk Kimmy diharapkan terus hadir dalam
                  segala situasi.
                </p>
              </div>

              {/* Kelopak Penopang */}
              <div className="glass-card rounded-2xl p-8 hover-lift group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden glossy-orb shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={img3}
                    alt="Kelopak Penopang"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-center mb-3 text-blue-700">
                  Kelopak Penopang
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Melukiskan dukungan tulus, harapan dan doa yang menjaga mimpi
                  agar tetap tumbuh. Bentuknya menyiratkan huruf "V", sebagai
                  tanda awal nama Victoria Kimberly.
                </p>
              </div>
            </div>

            {/* Logo Assembly Animation */}
            <div className="glass-card rounded-3xl p-12 text-center">
              <h3 className="text-2xl font-display font-bold mb-8 text-blue-900">
                Cahaya Kemenangan yang Menyatu
              </h3>

              {/* Final Logo */}
              <div className="max-w-md mx-auto mb-6">
                <div className="w-80 h-80 mx-auto rounded-full flex items-center justify-center border-4 border-blue-300 glossy-orb shadow-2xl overflow-hidden">
                  <img
                    src={img4}
                    alt="Logo GROVY Final"
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Keseluruhan elemen ini menyatu sebagai simbol dari cahaya
                kemenangan yang ingin dicapai bersama. Setiap bagian memiliki
                makna tersendiri, namun bersama-sama membentuk kekuatan yang
                utuh untuk mendukung perjalanan Victoria Kimberly.
              </p>
            </div>

            {/* Grovy Projects Preview */}
            <div
              className={`mb-16 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6 text-blue-900">
                Grovy Projects
              </h2>

              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Berbagai project dan kegiatan yang kami selenggarakan untuk
                mendukung Victoria Kimberly
              </p>

              <div className="relative">
                <div
                  className={`${
                    isScrollable ? "overflow-x-auto hide-scrollbar" : ""
                  } pb-4`}
                >
                  <div
                    className={`flex gap-8 px-6 ${
                      isScrollable ? "justify-start" : "justify-center"
                    }`}
                  >
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="glass-card rounded-2xl overflow-hidden hover-lift group w-80 flex-shrink-0"
                      >
                        {/* IMAGE 4:3 */}
                        <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-center mb-2">
                            {project.title}
                          </h3>

                          <p className="text-gray-700 text-center mb-4">
                            {project.description}
                          </p>

                          <Link
                            to={project.link}
                            className="grovy-button block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300"
                          >
                            Lihat Detail
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {isScrollable && (
                  <div className="text-center mt-4 text-gray-500 text-sm">
                    ← Geser untuk melihat lebih banyak →
                  </div>
                )}
              </div>
            </div>

            {/* Gallery Section */}
            <div
              className={`mb-16 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-blue-900">
                Galeri Kegiatan GROVY
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Dokumentasi momen-momen berharga dalam perjalanan kami mendukung
                Victoria Kimberly
              </p>

              {/* Photo Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-bold text-center mb-6 text-blue-800">
                  Foto Kegiatan
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="glass-card rounded-xl overflow-hidden hover-lift aspect-square group cursor-pointer"
                    >
                      <img
                        src={photo}
                        alt={`Foto kegiatan ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4 font-semibold">Follow Us:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {/* Instagram */}
                <a
                  href="https://instagram.com/grovy_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@grovy_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                  TikTok
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/grovy_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutGrovy;