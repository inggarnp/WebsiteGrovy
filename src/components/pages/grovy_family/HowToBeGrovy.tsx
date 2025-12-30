import React, { useEffect, useRef } from "react";
import { Users, Heart, Shield, Sparkles, Check, Info, Calendar, UserPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowToBeaGrovy() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <style>{`
          .scroll-animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .animate-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .stagger-1 { transition-delay: 0.1s; }
          .stagger-2 { transition-delay: 0.2s; }
          .stagger-3 { transition-delay: 0.3s; }
          .stagger-4 { transition-delay: 0.4s; }
        `}</style>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-blue-600/5 to-transparent"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-100 rounded-full animate-slide-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
              <span className="text-blue-900 font-semibold text-sm tracking-wide">
                OFFICIAL FANBASE
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight animate-slide-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
              How To Be Grovy?
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
              Bergabunglah dengan komunitas yang suportif dan bersatu untuk merayakan Victoria Kimberly. Keanggotaan resmi dibuka secara berkala melalui media sosial resmi kami.
            </p>
          </div>
        </section>

        {/* What Is Grovy */}
        <section className="py-20 bg-white/70 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Apa Itu Grovy?
              </h2>
              <p className="text-xl text-blue-800 max-w-3xl mx-auto">
                Grovy adalah fanbase resmi Victoria Kimberly, sebuah komunitas yang dibangun atas dasar saling menghormati, dukungan penuh, dan positifitas yang tulus.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/50 group cursor-pointer scroll-animate stagger-1">
                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Respect
                </h3>
                <p className="text-blue-800">
                  Kami menghormati Victoria dan setiap anggota komunitas dengan kebaikan dan pertimbangan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/50 group cursor-pointer scroll-animate stagger-2">
                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Support
                </h3>
                <p className="text-blue-800">
                  Kami mendukung Victoria di setiap pencapaian, tantangan, dan kesuksesan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/50 group cursor-pointer scroll-animate stagger-3">
                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Positivity
                </h3>
                <p className="text-blue-800">
                  Kami menciptakan lingkungan yang positif dan merayakan kegembiraan serta menyebarkan semangat.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/50 group cursor-pointer scroll-animate stagger-4">
                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Unity
                </h3>
                <p className="text-blue-800">
                  Kami lebih kuat bersama, bersatu dalam passion dan dedikasi yang sama.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Be a Grovy */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/30 hover:scale-[1.02] scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
                Siapa yang Bisa Menjadi Grovy?
              </h2>
              <div className="space-y-6 text-lg text-blue-800">
                <p>
                  Siapa saja yang tulus mendukung Victoria Kimberly dan menerapkan nilai-nilai Grovy bisa menjadi bagian dari komunitas ini.
                </p>
                <div className="space-y-4 pl-6">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                    <p>Tidak ada batasan usia. Fans dari segala usia dipersilakan.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                    <p>Tidak ada batasan lokasi. Grovy adalah komunitas global.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                    <p>
                      Komitmen untuk berperilaku positif dan interaksi yang saling menghormati.
                    </p>
                  </div>
                </div>
                <p className="pt-4">
                  Baik kamu baru mengenal perjalanan Victoria atau sudah mengikutinya selama bertahun-tahun, kamu diterima di sini selama kamu berbagi nilai dan dedikasi kami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership System */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center scroll-animate">
              Sistem Keanggotaan Grovy
            </h2>
            <p className="text-xl text-blue-100 text-center mb-16 max-w-3xl mx-auto scroll-animate">
              Memahami perbedaan antara pendukung publik dan anggota resmi
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Public Supporter */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-blue-300/50 group cursor-pointer scroll-animate stagger-1">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Pendukung Publik
                </h3>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Mengikuti dan mendukung Victoria secara publik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Berinteraksi dengan konten resmi Grovy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Berpartisipasi dalam kampanye publik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Tidak perlu registrasi</span>
                  </li>
                </ul>
              </div>

              {/* Official Member */}
              <div className="bg-white rounded-3xl p-10 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl group cursor-pointer scroll-animate stagger-2">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                  Anggota Resmi Grovy
                </h3>
                <ul className="space-y-4 text-blue-800">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1 text-blue-900" />
                    <span>Akses ke platform komunitas internal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1 text-blue-900" />
                    <span>Berpartisipasi dalam proyek eksklusif</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1 text-blue-900" />
                    <span>Terlibat langsung dalam acara</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1 text-blue-900" />
                    <span>Kesempatan menjadi staff Grovy</span>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm font-semibold text-blue-900">
                    Registrasi diperlukan hanya saat periode Open Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Become Official Member */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-center scroll-animate">
              Cara Menjadi Anggota Resmi Grovy
            </h2>
            <p className="text-xl text-blue-800 text-center mb-16 max-w-3xl mx-auto scroll-animate">
              Ikuti langkah-langkah ini ketika registrasi Open Member diumumkan
            </p>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Follow Media Sosial Resmi Grovy",
                  description: "Terhubung dengan Instagram, Twitter/X, dan channel resmi kami lainnya untuk tetap mendapat informasi tentang semua pengumuman dan update.",
                },
                {
                  number: "02",
                  title: "Tunggu Pengumuman Open Member",
                  description: "Registrasi keanggotaan resmi dibuka secara berkala. Semua pengumuman akan dibagikan eksklusif melalui akun media sosial resmi kami.",
                },
                {
                  number: "03",
                  title: "Isi Formulir Registrasi",
                  description: "Ketika registrasi dibuka, lengkapi formulir resmi yang disediakan melalui channel kami. Pastikan semua informasi akurat dan lengkap.",
                },
                {
                  number: "04",
                  title: "Proses Verifikasi",
                  description: "Tim kami akan meninjau aplikasi kamu. Proses ini mungkin memakan waktu karena kami dengan teliti memverifikasi setiap pengajuan untuk menjaga integritas komunitas.",
                },
                {
                  number: "05",
                  title: "Konfirmasi Resmi",
                  description: "Anggota yang disetujui akan menerima konfirmasi resmi dan instruksi untuk bergabung dengan platform komunitas internal dan aktivitas.",
                },
              ].map((step, index) => (
                <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-300/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group cursor-pointer scroll-animate stagger-${index + 1}`}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{step.title}</h3>
                      <p className="text-lg text-blue-800">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50 scroll-animate">
              <Info className="w-12 h-12 text-white mx-auto mb-4 animate-pulse-soft" />
              <p className="text-xl text-white font-semibold mb-2">
                Catatan Penting
              </p>
              <p className="text-blue-100 text-lg">
                Grovy tidak menerima aplikasi keanggotaan di luar periode Open Member resmi. Formulir atau klaim registrasi dari sumber tidak resmi harus diabaikan.
              </p>
            </div>
          </div>
        </section>

        {/* Official Information Sources */}
        <section className="py-20 bg-white/70 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-center scroll-animate">
              Dimana Mendapat Informasi Resmi
            </h2>
            <p className="text-xl text-blue-800 text-center mb-12 scroll-animate">
              Semua pengumuman resmi dibagikan eksklusif melalui channel resmi Grovy
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 scroll-animate">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Instagram
                    </h3>
                    <p className="text-blue-800">
                      Follow akun Instagram resmi kami untuk update harian, pengumuman, dan highlight komunitas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Twitter / X
                    </h3>
                    <p className="text-blue-800">
                      Dapatkan update real-time dan berinteraksi dengan komunitas melalui akun Twitter/X resmi kami.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Website Resmi
                    </h3>
                    <p className="text-blue-800">
                      Cek website resmi ini secara berkala untuk update penting, panduan, dan informasi keanggotaan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <p className="text-blue-900 font-semibold text-center">
                  Selalu verifikasi bahwa kamu mengikuti akun resmi yang terverifikasi. Berhati-hatilah terhadap akun palsu atau sumber tidak resmi yang mengaku mewakili Grovy.
                </p>
              </div>

              {/* Social Media Buttons */}
              <div className="mt-8 text-center">
                <p className="text-blue-900 mb-6 font-semibold text-lg">
                  Follow Kami:
                </p>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                  <a href="https://instagram.com/grovy_id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>

                  <a href="https://tiktok.com/@grovy_id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-gray-700/50 hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                    TikTok
                  </a>

                  <a href="https://x.com/grovy_id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-black text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-gray-600/50 hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens After */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-center scroll-animate">
              Apa yang Terjadi Setelah Kamu Menjadi Grovy?
            </h2>
            <p className="text-xl text-blue-800 text-center mb-16 max-w-3xl mx-auto scroll-animate">
              Keanggotaan resmi membuka kesempatan untuk membuat perbedaan nyata
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/40 group cursor-pointer scroll-animate stagger-1">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Users className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Bergabung dengan Komunitas Internal
                </h3>
                <p className="text-lg text-blue-800">
                  Terhubung dengan sesama anggota melalui platform khusus dimana kamu bisa berbagi ide, berkoordinasi untuk dukungan, dan membangun persahabatan yang langgeng.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/40 group cursor-pointer scroll-animate stagger-2">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Sparkles className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Berpartisipasi dalam Proyek
                </h3>
                <p className="text-lg text-blue-800">
                  Berkontribusi dalam proyek-proyek spesial seperti perayaan ulang tahun, acara milestone, inisiatif amal, dan kampanye kreatif.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/40 group cursor-pointer scroll-animate stagger-3">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Calendar className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Keterlibatan dalam Acara
                </h3>
                <p className="text-lg text-blue-800">
                  Terlibat dalam perencanaan dan pelaksanaan acara, dari pertemuan online hingga potensi meet-up dan aktivitas dukungan.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/40 group cursor-pointer scroll-animate stagger-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <UserPlus className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Menjadi Staff Grovy
                </h3>
                <p className="text-lg text-blue-800">
                  Anggota yang berdedikasi mungkin memiliki kesempatan untuk bergabung dengan tim staff Grovy dan membantu membentuk masa depan komunitas kami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 scroll-animate">
              Perjalananmu Dimulai dari Sini
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-12 scroll-animate">
              Baik kamu memilih untuk mendukung Victoria sebagai fans publik atau bergabung sebagai anggota resmi Grovy, dedikasi kamu sangat berarti. Setiap kata penyemangat, setiap tindakan kebaikan, dan setiap momen dukungan berkontribusi pada sesuatu yang indah.
            </p>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-12 scroll-animate">
              Tetap terhubung dengan channel resmi kami, terapkan nilai-nilai respect dan positivity, dan ingatlah bahwa menjadi Grovy adalah tentang merayakan perjalanan Victoria dengan hati dan keaslian.
            </p>
            <div className="inline-block px-8 py-4 bg-white rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 scroll-animate">
              <p className="text-2xl font-bold text-blue-900">
                Selamat datang di keluarga Grovy.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}