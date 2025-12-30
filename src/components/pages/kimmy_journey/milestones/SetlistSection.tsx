import { useState, useEffect } from "react";
import { Calendar, Music, Award, Star, Sparkles } from "lucide-react";

// Import images
import img1 from "@/assets/poster/Aitakatta.jpeg";
import img2 from "@/assets/poster/image.png";
import img3 from "@/assets/poster/pj.jpeg";
import img4 from "@/assets/poster/rnn.jpeg";
import img5 from "@/assets/poster/twt.jpg";

const SetlistGrid = () => {
  const [stats, setStats] = useState({
    totalShows: 0,
    unitSongs: 0,
    setlists: 0,
  });

  // Animate statistics
  useEffect(() => {
    const targets = {
      totalShows: 96,
      unitSongs: 8,
      setlists: 5,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        totalShows: Math.floor(targets.totalShows * progress),
        unitSongs: Math.floor(targets.unitSongs * progress),
        setlists: Math.floor(targets.setlists * progress),
      });

      if (currentStep >= steps) {
        setStats(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Setlist data with posters and detailed setlists
  const setlistData = [
    {
      show: "Aitakatta Theater Performance",
      text: "Pada tanggal 1 Maret 2024, Kimmy menorehkan langkah penting dalam kariernya dengan tampil di pertunjukan Shonichi setlist Aitakatta. Hari itu menjadi momen berarti yang menandai awal perjalanan panggungnya di JKT48. Shonichi dikenal sebagai titik mula yang sarat harapan bagi setiap member, dan bagi Kimmy, kesempatan ini menjadi bukti dari kerja keras serta dedikasi yang selama ini ia bangun. Penampilannya membuka lembaran baru yang penuh semangat dan peluang di masa mendatang.",
      date: "1 Maret 2024",
      totalShows: 43,
      poster: img1,
      globalCenter: [],
      unitSongs: ["Glass No I Love You", "Senaka Kara Dakishimete"],
    },
    {
      show: "Pajama Drive",
      text: "Pada tanggal 30 Mei 2024, Kimmy menjalani debutnya dalam setlist Pajama Drive. Penampilan pertamanya di setlist ini menjadi langkah baru yang penting dalam perjalanan panggungnya. Dengan energi, keberanian, dan semangat yang ia bawa, Kimmy berhasil memberikan warna berbeda pada pertunjukan tersebut. Momen ini tidak hanya menjadi bukti perkembangan dirinya, tetapi juga menjadi awal dari penampilan-penampilan berharga yang menunggu di masa depan.",
      date: "31 Okt 2024",
      totalShows: 42,
      poster: img3,
      globalCenter: ["Halloween Night", "Kimi wa Melody", "High Tension"],
      unitSongs: ["Tensi No Shippo"],
    },
    {
      show: "Ramune No Nomikata",
      text: "Pada tanggal 19 Januari 2025, Kimmy kembali membuka babak baru dalam perjalanan teaternya dengan tampil di setlist Ramune no Nomikata. Penampilan perdananya di setlist ini menjadi simbol pertumbuhan dan konsistensinya sebagai member. Dengan ekspresi yang tulus dan performa yang penuh semangat, Kimmy berhasil menghadirkan aura segar di atas panggung. Momen ini menjadi satu lagi pencapaian berarti yang menandai terus berkembangnya langkah Kimmy di dunia hiburan JKT48.",
      date: "15 Sep 2024",
      totalShows: 3,
      poster: img4,
      globalCenter: [],
      unitSongs: ["Usotsuki Na Dachou"],
    },
    {
      show: "Te Wo Tsunaginagara",
      text: "Pada tanggal 24 Mei 2025, Kimmy menambahkan bab baru dalam perjalanan teaternya dengan tampil di setlist Te Wo Tsunaginagara. Debutnya di setlist ini menjadi bukti bahwa ia terus berkembang dan mampu menyesuaikan diri dengan berbagai warna pertunjukan. Dengan senyum yang tulus dan performa yang penuh perasaan, Kimmy berhasil membawa suasana panggung menjadi lebih hidup. Momen ini menjadi salah satu pencapaian berharga yang memperlihatkan langkah demi langkah pertumbuhannya sebagai member JKT48.",
      date: "20 Jul 2024",
      totalShows: 2,
      poster: img5,
      globalCenter: [],
      unitSongs: ["Glory Days", "Choco No Yukue"],
    },
    {
      show: "Kira Kira Girls",
      text: "Pada tanggal 21 November 2025, Kimmy kembali menunjukkan perkembangan barunya dengan tampil di setlist Kira Kira Girls untuk pertama kalinya. Penampilan debut ini menjadi bukti bahwa ia terus memperluas kemampuan dan pesonanya di atas panggung. Dengan aura ceria dan performa yang penuh kepercayaan diri, Kimmy berhasil membawa kilau berbeda dalam pertunjukan tersebut. Momen ini menambah satu lagi pencapaian penting dalam perjalanan panjangnya di JKT48.",
      date: "1 Jan 2024",
      totalShows: 6,
      poster: img2,
      globalCenter: [],
      unitSongs: ["Gomen Ne Jewel", "Candy"],
    },
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display'] gradient-text">
            Show & Setlist
          </h2>
          <div
            className="h-1 w-32 mx-auto rounded-full mb-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(215 100% 64%), transparent)",
            }}
          ></div>
          <p
            className="text-xl font-light"
            style={{ color: "hsl(215 30% 35%)" }}
          >
            Performance Kimmy di berbagai show ✨
          </p>
        </div>

        {/* Statistics Counter */}
        {/* Statistics Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {[
            { label: "Total Shows", value: stats.totalShows, icon: Music },
            { label: "Unit Songs", value: stats.unitSongs, icon: Star },
            { label: "Setlists", value: stats.setlists, icon: Award },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                }}
              ></div>
              <div className="relative glass-card rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                    }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "hsl(215 30% 35%)" }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setlist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {setlistData.map((item, index) => (
            <div
              key={index}
              className="group relative animate-slide-up hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                }}
              ></div>
              <div className="relative glass-card rounded-3xl overflow-hidden hover:border-[hsl(215_100%_64%_/_0.4)] transition-all duration-500">
                {/* Poster Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 50%, hsl(215 100% 64% / 0.4))",
                    }}
                  ></div>
                  <img
                    src={item.poster}
                    alt={item.show}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full backdrop-blur-md border"
                    style={{
                      backgroundColor: "hsl(0 0% 100% / 0.9)",
                      borderColor: "hsl(215 100% 64% / 0.3)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles
                        className="w-4 h-4"
                        style={{ color: "hsl(215 100% 64%)" }}
                      />
                      <span
                        className="font-bold"
                        style={{ color: "hsl(215 30% 25%)" }}
                      >
                        {item.totalShows} show
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-xl shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                      }}
                    >
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-bold text-xl mb-2 font-['Playfair_Display'] leading-tight"
                        style={{ color: "hsl(215 30% 20%)" }}
                      >
                        {item.show}
                      </h3>
                      <p
                        className="text-sm flex items-center gap-2"
                        style={{ color: "hsl(215 30% 40%)" }}
                      >
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </p>
                      {item.text && (
                        <p
                          className="text-sm mt-3 leading-relaxed"
                          style={{ color: "hsl(215 30% 35%)" }}
                        >
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Global Center - jika ada */}
                  {item.globalCenter && item.globalCenter.length > 0 && (
                    <div className="mb-6">
                      <h4
                        className="font-bold text-lg mb-3 font-['Playfair_Display']"
                        style={{ color: "hsl(215 30% 20%)" }}
                      >
                        Global Center
                      </h4>
                      <div className="space-y-2">
                        {item.globalCenter.map((song, songIndex) => (
                          <div
                            key={songIndex}
                            className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:translate-x-2"
                            style={{
                              backgroundColor: "hsl(200 70% 85% / 0.5)",
                              border: "2px solid hsl(200 70% 55% / 0.3)",
                            }}
                          >
                            <div
                              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                              style={{
                                background:
                                  "linear-gradient(135deg, hsl(200 70% 55%) 0%, hsl(210 65% 45%) 100%)",
                                color: "white",
                              }}
                            >
                              ★
                            </div>
                            <span
                              className="font-medium"
                              style={{ color: "hsl(215 30% 25%)" }}
                            >
                              {song}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Unit Songs */}
                  {item.unitSongs && item.unitSongs.length > 0 && (
                    <div className="space-y-2">
                      <h4
                        className="font-bold text-lg mb-3 font-['Playfair_Display']"
                        style={{ color: "hsl(215 30% 20%)" }}
                      >
                        Unit Song
                      </h4>
                      {item.unitSongs.map((song, songIndex) => (
                        <div
                          key={songIndex}
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:translate-x-2"
                          style={{
                            backgroundColor: "hsl(215 50% 90% / 0.5)",
                            border: "2px solid hsl(215 100% 64% / 0.3)",
                          }}
                        >
                          <div
                            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                            style={{
                              background:
                                "linear-gradient(135deg, hsl(215 100% 64%) 0%, hsl(215 100% 70%) 100%)",
                              color: "white",
                            }}
                          >
                            {songIndex + 1}
                          </div>
                          <span
                            className="font-medium"
                            style={{ color: "hsl(215 30% 25%)" }}
                          >
                            {song}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetlistGrid;
