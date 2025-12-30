import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import semua data foto dari folder photo_data
import { lunaVictaPhotos } from "@/components/pages/kimmy_archive/gallery/LunaVicta";
import { kimmyFilesContent } from "@/components/pages/kimmy_archive/gallery/KimmyFiles";
import { xPhotos } from "@/components/pages/kimmy_archive/gallery/Xphotos";
import { instagramPhotos } from "@/components/pages/kimmy_archive/gallery/InstagramPhotos";
import { threadsPhotos } from "@/components/pages/kimmy_archive/gallery/ThreadsPhotos";
import { fanshotPhotos } from "@/components/pages/kimmy_archive/gallery/FanArt";

const KimmyInFrame = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const ScrollableGallery = ({ items, renderItem, id }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        const scrollAmount = direction === "left" ? -400 : 400;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    return (
      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 -translate-x-4 hover:-translate-x-5"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="flex-shrink-0">
              {renderItem(item, index)}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 translate-x-4 hover:translate-x-5"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div
            className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 transition-all duration-1000"
            id="hero"
            style={{
              opacity: isVisible["hero"] ? 1 : 0,
              transform: isVisible["hero"]
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-sky-700 bg-clip-text text-transparent">
              Kimmy in Frames
            </h1>
            <p className="text-lg md:text-xl text-blue-900/80 leading-relaxed max-w-3xl mx-auto">
              Selamat datang di arsip visual Kimmy, sebuah koleksi dokumentasi
              foto yang mengabadikan berbagai momen penting dari perjalanan
              Kimmy bersama Grovy. Dari unggahan resmi hingga momen spontan yang
              diabadikan oleh fans, halaman ini menjadi tempat di mana setiap
              frame menceritakan kisahnya sendiri.
            </p>
          </div>
        </section>

        {/* LunaVicta Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-12 animate-on-scroll transition-all duration-1000"
              id="lunavicta-title"
              style={{
                opacity: isVisible["lunavicta-title"] ? 1 : 0,
                transform: isVisible["lunavicta-title"]
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                #LunaVicta
              </h2>
              <p className="text-lg text-blue-800/80 max-w-3xl">
                #LunaVicta adalah highlight mingguan yang dibagikan setiap hari
                Senin oleh Kimmy. Berisi potret Kimmy sebagai pembuka minggu
                yang hangat untuk para fans, menghadirkan energi positif di awal
                pekan.
              </p>
            </div>

            <ScrollableGallery
              items={lunaVictaPhotos}
              id="lunavicta"
              renderItem={(photo) => (
                <div className="w-72">
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${photo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-sky-600/0 group-hover:from-blue-600/10 group-hover:to-sky-600/10 transition-all duration-500" />

                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={photo.image}
                        alt={`LunaVicta ${photo.date}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4 relative z-10 bg-white/90 backdrop-blur-sm">
                      <p className="text-sm font-medium text-blue-900">
                        LunaVicta — {photo.date}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* KimmyFiles Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-100/30 to-sky-100/30">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-12 animate-on-scroll transition-all duration-1000"
              id="kimmyfiles-title"
              style={{
                opacity: isVisible["kimmyfiles-title"] ? 1 : 0,
                transform: isVisible["kimmyfiles-title"]
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                #KimmyFiles
              </h2>
              <p className="text-lg text-blue-800/80 max-w-3xl">
                #KimmyFiles adalah arsip outfit dan penampilan Kimmy yang
                dibagikan setiap hari Jumat. Menampilkan gaya, fashion, dan
                detail visual Kimmy dari berbagai kesempatan.
              </p>
            </div>

            <ScrollableGallery
              items={kimmyFilesContent}
              id="kimmyfiles"
              renderItem={(content) => (
                <div className="w-72">
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700/0 via-sky-700/0 to-blue-900/0 group-hover:from-blue-700/10 group-hover:via-sky-700/10 group-hover:to-blue-900/10 transition-all duration-500" />

                    <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                      <img
                        src={content.image}
                        alt={`KimmyFiles ${content.date}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4 relative z-10 bg-white/90 backdrop-blur-sm">
                      <p className="text-sm font-medium text-blue-900">
                        KimmyFiles — {content.date}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* From X Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
              id="fromx-title"
              style={{
                opacity: isVisible["fromx-title"] ? 1 : 0,
                transform: isVisible["fromx-title"]
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                From X
              </h2>
              <p className="text-lg text-blue-800/80 max-w-3xl">
                Pilihan foto terbaik Kimmy yang dibagikan melalui platform X,
                menghadirkan momen-momen spesial dalam kualitas visual yang
                memukau.
              </p>
            </div>

            <ScrollableGallery
              items={xPhotos}
              id="fromx"
              renderItem={(photo) => (
                <div className="w-56">
                  <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div
                      className="absolute inset-0 z-10 bg-gradient-to-br 
              from-blue-600/0 to-sky-600/0 
              group-hover:from-blue-600/10 
              group-hover:to-sky-600/10 
              transition-all duration-500"
                    ></div>

                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={photo.image}
                        alt="From X"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-sky-100/30 to-blue-100/30">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
              id="instagram-title"
              style={{
                opacity: isVisible["instagram-title"] ? 1 : 0,
                transform: isVisible["instagram-title"]
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                Instagram Moments
              </h2>
              <p className="text-lg text-blue-800/80 max-w-3xl">
                Foto-foto pilihan Kimmy dari Instagram, mencakup momen kegiatan,
                event, dan project tertentu yang diabadikan dengan indah.
              </p>
            </div>

            <ScrollableGallery
              items={instagramPhotos}
              id="instagram"
              renderItem={(photo) => (
                <div className="w-64">
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div
                      className="absolute inset-0 z-10 bg-gradient-to-br 
              from-sky-700/0 via-blue-700/0 to-sky-900/0 
              group-hover:from-sky-700/10 
              group-hover:via-blue-700/10 
              group-hover:to-sky-900/10 
              transition-all duration-500"
                    ></div>

                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={photo.image}
                        alt="Instagram moment"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* Threads Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
              id="threads-title"
              style={{
                opacity: isVisible["threads-title"] ? 1 : 0,
                transform: isVisible["threads-title"]
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                Threads Snapshots
              </h2>
              <p className="text-lg text-blue-800/80 max-w-3xl">
                Potret sederhana Kimmy yang dibagikan melalui Threads, menangkap
                momen-momen spontan dan autentik dalam keseharian.
              </p>
            </div>

            <ScrollableGallery
              items={threadsPhotos}
              id="threads"
              renderItem={(photo) => (
                <div className="w-64">
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div
                      className="absolute inset-0 z-10 bg-gradient-to-br 
              from-blue-600/0 to-sky-700/0 
              group-hover:from-blue-600/10 group-hover:to-sky-700/10 
              transition-all duration-500"
                    ></div>

                    <div className="aspect-[4/5] relative overflow-hidden">
                      <img
                        src={photo.image}
                        alt="Threads snapshot"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* Fanshots Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-100/30 to-sky-100/30">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
              id="fanshots-title"
              style={{
                opacity: isVisible["fanshots-title"] ? 1 : 0,
                transform: isVisible["fanshots-title"]
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                FanArt
              </h2>
            </div>

            <ScrollableGallery
              items={fanshotPhotos}
              id="fanshots"
              renderItem={(photo) => (
                <div className="w-72">
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700/0 via-sky-700/0 to-blue-900/0 group-hover:from-blue-700/10 group-hover:via-sky-700/10 group-hover:to-blue-900/10 transition-all duration-500"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 shadow-[0_0_30px_rgba(37,99,235,0.3)]"></div>
                    </div>
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-sky-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-blue-300 text-5xl font-bold opacity-20">
                        {photo.id}
                      </div>
                    </div>
                    <div className="p-4 relative z-10">
                      <p className="text-xs text-blue-700 font-medium">
                        📸 {photo.credit}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-20 px-6">
          <div
            className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 transition-all duration-1000"
            id="closing"
            style={{
              opacity: isVisible["closing"] ? 1 : 0,
              transform: isVisible["closing"]
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            <p className="text-lg md:text-xl text-blue-800/80 leading-relaxed">
              Kimmy in Frames akan terus diperbarui seiring perjalanan Kimmy dan
              Grovy. Halaman ini menjadi tempat kita menyimpan kenangan bersama,
              mengabadikan setiap momen indah yang telah kita lalui. Terima
              kasih telah menjadi bagian dari perjalanan ini.
            </p>
            <div className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Dengan cinta, dari Grovy untuk Kimmy 💙
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default KimmyInFrame;