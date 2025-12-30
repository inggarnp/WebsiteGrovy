import React, { useState, useEffect, useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import semua data video dari folder video_data
import { youtubeVideos } from "@/components/pages/kimmy_archive/video/YoutubeVideo";
import { instagramReels } from "@/components/pages/kimmy_archive/video/InstagramReels";
import { tiktokClips } from "@/components/pages/kimmy_archive/video/TiktokClips";
import { kimmyFiles } from "@/components/pages/kimmy_archive/video/KimmyFiles";
import { xVideos } from "@/components/pages/kimmy_archive/video/Xvideos";
import { specialMoments } from "@/components/pages/kimmy_archive/video/SpecialMoment";

const KimmyInClips = () => {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-sky-200/15 rounded-full blur-3xl"></div>

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(37, 99, 235, 0.03) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>

          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300/30 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-sky-300/30 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-blue-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-sky-400/25 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="relative z-10">
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
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent">
                Kimmy in Clips
              </h1>
              <p className="text-lg md:text-xl text-blue-900/80 leading-relaxed max-w-3xl mx-auto">
                Koleksi lengkap video dan momen bergerak Kimmy. Dari konten
                resmi JKT48 hingga momen spontan di berbagai platform, setiap
                klip merekam energi dan kepribadian Kimmy yang hidup.
              </p>
            </div>
          </section>

          {/* YouTube Section */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div
                className="mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
                id="youtube-title"
                style={{
                  opacity: isVisible["youtube-title"] ? 1 : 0,
                  transform: isVisible["youtube-title"]
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                  Kimmy on YouTube JKT48
                </h2>
                <p className="text-lg text-blue-800/80 max-w-3xl">
                  Video resmi Kimmy dari channel YouTube JKT48, mencakup music
                  video, performance, dan konten eksklusif lainnya.
                </p>
              </div>

              <ScrollableGallery
                items={youtubeVideos}
                id="youtube"
                renderItem={(video) => (
                  <div className="w-96">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                        <div
                          className="absolute inset-0 z-10 bg-gradient-to-br 
                from-blue-600/0 via-sky-600/0 to-blue-900/0 
                group-hover:from-blue-600/5 
                group-hover:via-sky-600/5 
                group-hover:to-blue-900/5 
                transition-all duration-500"
                        ></div>

                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />

                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                              <Play className="w-10 h-10 text-blue-900 fill-blue-900 ml-1" />
                            </div>
                          </div>

                          <div className="absolute bottom-2 right-2 z-20 px-2 py-1 bg-blue-900/80 backdrop-blur-sm text-white text-xs rounded font-medium">
                            {video.duration}
                          </div>
                        </div>

                        <div className="p-4 relative z-20">
                          <h3 className="font-bold text-blue-900 mb-1 group-hover:text-blue-700 transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-sm text-blue-700/70">
                            {video.date}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              />
            </div>
          </section>

          {/* Instagram Reels Section */}
          <section className="py-16 px-6 bg-gradient-to-br from-sky-100/30 to-blue-100/30">
            <div className="max-w-7xl mx-auto">
              <div
                className="mb-8 animate-on-scroll opacity-0 transition-all duration-1000"
                id="instagram-title"
                style={{
                  opacity: isVisible["instagram-title"] ? 1 : 0,
                  transform: isVisible["instagram-title"]
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                  Instagram Reels
                </h2>
                <p className="text-lg text-blue-800/80 max-w-3xl">
                  Reels dan video pendek Kimmy di Instagram, menampilkan momen
                  sehari-hari, behind the scenes, dan konten kreatif.
                </p>
              </div>

              <div className="mb-10 max-w-3xl rounded-xl border border-sky-200/60 bg-sky-50/60 px-4 py-3 text-sm text-blue-900 backdrop-blur">
                <p className="font-semibold mb-1">How to play this video</p>
                <ul className="list-disc list-inside text-blue-800/80 space-y-1">
                  <li>
                    <span className="font-medium">Desktop:</span> Hover the
                    video to preview (no sound)
                  </li>
                  <li>
                    <span className="font-medium">Mobile:</span> Tap and hold
                    the video to preview
                  </li>
                  <li>
                    <span className="font-medium">Sound:</span> Instagram Reels
                    are shown as silent previews
                  </li>
                </ul>
              </div>

              <ScrollableGallery
                items={instagramReels}
                id="instagram"
                renderItem={(video) => (
                  <div className="w-72">
                    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
                      <div className="aspect-[9/16] relative overflow-hidden bg-black">
                        <video
                          src={video.video}
                          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="font-bold text-blue-900 text-sm">
                          {video.title}
                        </h3>
                        <p className="text-xs text-blue-700/70">
                          {video.date}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </section>

          {/* TikTok Section */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div
                className="mb-8 animate-on-scroll opacity-0 transition-all duration-1000"
                id="tiktok-title"
                style={{
                  opacity: isVisible["tiktok-title"] ? 1 : 0,
                  transform: isVisible["tiktok-title"]
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                  TikTok Moments
                </h2>
                <p className="text-lg text-blue-800/80 max-w-3xl">
                  Konten singkat dan fun dari TikTok Kimmy, menampilkan trend,
                  challenge, dan momen menghibur yang viral.
                </p>
              </div>

              <div className="mb-10 max-w-3xl rounded-xl border border-blue-200/60 bg-blue-50/60 px-4 py-3 text-sm text-blue-900 backdrop-blur">
                <p className="font-semibold mb-1">How to play this video</p>
                <ul className="list-disc list-inside text-blue-800/80 space-y-1">
                  <li>
                    <span className="font-medium">Desktop:</span> Click the
                    video to play or pause
                  </li>
                  <li>
                    <span className="font-medium">Mobile:</span> Tap the video
                    to play or pause
                  </li>
                  <li>
                    <span className="font-medium">Sound:</span> Make sure your
                    device volume is turned on
                  </li>
                </ul>
              </div>

              <ScrollableGallery
                items={tiktokClips}
                id="tiktok"
                renderItem={(video) => (
                  <div className="w-64">
                    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-700/0 to-sky-600/0 group-hover:from-blue-700/5 group-hover:to-sky-600/5 transition-all duration-500 z-10"></div>

                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="absolute inset-0 shadow-[0_0_40px_rgba(37,99,235,0.35)]"></div>
                      </div>

                      <div className="aspect-[9/16] relative overflow-hidden bg-black">
                        <video
                          src={video.video}
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                          onClick={(e) => {
                            const current = e.currentTarget;
                            document.querySelectorAll("video").forEach((v) => {
                              if (v !== current) v.pause();
                            });
                            if (current.paused) {
                              current.play();
                            } else {
                              current.pause();
                            }
                          }}
                        />
                      </div>

                      <div className="p-3 relative z-20">
                        <h3 className="font-bold text-blue-900 mb-1 text-sm group-hover:text-blue-700 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-xs text-blue-700/70">
                          {video.date}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </section>

          {/* Kimmy Files Section */}
          <section className="py-16 px-6 bg-gradient-to-br from-blue-100/30 to-sky-100/30">
            <div className="max-w-7xl mx-auto">
              <div
                className="mb-8 animate-on-scroll opacity-0 transition-all duration-1000"
                id="kimmyfile-title"
                style={{
                  opacity: isVisible["kimmyfile-title"] ? 1 : 0,
                  transform: isVisible["kimmyfile-title"]
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

              <div className="mb-10 max-w-3xl rounded-xl border border-blue-200/60 bg-white/60 px-4 py-3 text-sm text-blue-900 backdrop-blur">
                <p className="font-semibold mb-1">How to play this video</p>
                <ul className="list-disc list-inside text-blue-800/80 space-y-1">
                  <li>
                    <span className="font-medium">Tap / Click</span> video to
                    play or pause
                  </li>
                  <li>Only one video will play at a time</li>
                  <li>Sound is enabled (TikTok-style experience)</li>
                </ul>
              </div>

              <ScrollableGallery
                items={kimmyFiles}
                id="kimmy-files"
                renderItem={(video) => (
                  <div className="w-64">
                    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer">
                      <div className="aspect-[9/16] relative overflow-hidden bg-black">
                        <video
                          src={video.video}
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover"
                          onClick={(e) => {
                            const current = e.currentTarget;
                            document.querySelectorAll("video").forEach((v) => {
                              if (v !== current) v.pause();
                            });
                            if (current.paused) current.play();
                            else current.pause();
                          }}
                        />
                      </div>

                      <div className="p-3">
                        <h3 className="font-bold text-blue-900 text-sm">
                          {video.title}
                        </h3>
                        <p className="text-xs text-blue-700/70">
                          {video.date}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </section>

          {/* X (Twitter) Section */}
          <section className="py-16 px-6 bg-gradient-to-br from-blue-100/30 to-sky-100/30">
            <div className="max-w-7xl mx-auto">
              <div
                className="mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
                id="x-title"
                style={{
                  opacity: isVisible["x-title"] ? 1 : 0,
                  transform: isVisible["x-title"]
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                  From X
                </h2>
                <p className="text-lg text-blue-800/80 max-w-3xl">
                  Video clips singkat yang dibagikan melalui platform X, berisi
                  update cepat dan momen spontan Kimmy.
                </p>
              </div>

              <ScrollableGallery
                items={xVideos}
                id="x-videos"
                renderItem={(video) => (
                  <div className="w-80">
                    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-sky-700/0 group-hover:from-blue-600/5 group-hover:to-sky-700/5 transition-all duration-500 z-10"></div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="absolute inset-0 shadow-[0_0_35px_rgba(37,99,235,0.3)]"></div>
                      </div>

                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-sky-100 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                            <Play className="w-8 h-8 text-blue-900 fill-blue-900 ml-1" />
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-blue-300 text-7xl font-bold opacity-10">
                          {video.id}
                        </div>
                      </div>

                      <div className="p-3 relative z-10">
                        <h3 className="font-bold text-blue-900 mb-1 text-sm group-hover:text-blue-700 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-xs text-blue-700/70">
                          {video.date}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </section>

          {/* Special Moments Section */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div
                className="mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
                id="special-title"
                style={{
                  opacity: isVisible["special-title"] ? 1 : 0,
                  transform: isVisible["special-title"]
                    ? "translateY(0)"
                    : "translateY(30px)",
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                  Special Moments
                </h2>
                <p className="text-lg text-blue-800/80 max-w-3xl">
                  Momen-momen istimewa dan bersejarah dalam perjalanan Kimmy,
                  arsip milestone penting yang menandai fase berharga dalam
                  kariernya.
                </p>
              </div>

              <ScrollableGallery
                items={specialMoments}
                id="special"
                renderItem={(video) => (
                  <div className="w-[420px]">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          <div className="absolute inset-0 bg-black/25"></div>

                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                              <Play className="w-12 h-12 text-blue-900 fill-blue-900 ml-1" />
                            </div>
                          </div>

                          <div className="absolute top-3 left-3 px-3 py-1 bg-blue-900/90 text-white text-xs rounded-full font-medium">
                            ⭐ Special
                          </div>

                          <div className="absolute top-3 right-3 px-3 py-1 bg-sky-900/90 text-white text-xs rounded-full">
                            {video.label}
                          </div>

                          <div className="absolute bottom-2 right-2 px-2 py-1 bg-blue-900/80 text-white text-xs rounded">
                            {video.duration}
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="font-bold text-blue-900 text-base mb-1 group-hover:text-blue-700 transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-sm text-blue-700/80">
                            {video.date}
                          </p>
                          <p className="text-xs text-blue-600 mt-2">
                            Click to watch on YouTube (official)
                          </p>
                        </div>
                      </div>
                    </a>
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
                Setiap klip dalam koleksi ini merekam energi, senyum, dan momen
                berharga Kimmy. Dari panggung hingga layar, dari performance
                hingga candid moment, semua tersimpan di sini untuk kita nikmati
                bersama.
              </p>
              <div className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Terus berkarya, Kimmy! 💙🎬
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KimmyInClips;