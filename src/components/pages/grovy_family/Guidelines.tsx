import { useEffect, useState, useRef } from "react";
import {
  Heart,
  Shield,
  Users,
  MessageCircle,
  Sparkles,
  Eye,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import img1 from "@/assets/logo-grovy.png";

const Guidelines = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        }
      });
    }, observerOptions);

    // Observe all cards
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const guidelines = [
    {
      icon: Heart,
      title: "Menghormati Victoria sebagai Individu",
      description:
        "Victoria adalah manusia dengan perasaan dan kehidupan pribadi. Mari kita dukung karirnya dengan penuh kasih sayang, namun tetap menghargai batasan pribadinya. Support yang tulus adalah support yang menghormati.",
    },
    {
      icon: Shield,
      title: "Menjaga Privasi",
      description:
        "Jangan menyebarkan informasi pribadi Victoria yang bersifat sensitif seperti alamat rumah, nomor telepon, atau jadwal pribadi. Privasi adalah hak setiap orang, termasuk idola kita.",
    },
    {
      icon: MessageCircle,
      title: "Tidak Menyebarkan Rumor atau Drama",
      description:
        "Hindari menyebarkan gosip, hoaks, atau drama yang tidak jelas sumbernya. Jika kamu mendengar sesuatu yang meragukan, lebih baik tanyakan kepada admin atau cari sumber resmi sebelum berbagi.",
    },
    {
      icon: Users,
      title: "Bersikap Sopan Sesama Grovy",
      description:
        "Kita semua di sini karena cinta yang sama kepada Victoria. Perbedaan pendapat itu wajar, tapi mari selalu saling menghormati dan menjaga suasana hangat di komunitas kita.",
    },
    {
      icon: Sparkles,
      title: "Mendukung dengan Cara Positif",
      description:
        "Dukung Victoria dengan cara yang menyehatkan—tidak berlebihan, tidak memaksa, dan tidak merugikan diri sendiri. Support yang terbaik adalah yang membuat kita dan Victoria sama-sama bahagia!",
    },
    {
      icon: Eye,
      title: "Mengikuti Arahan Admin & Staff",
      description:
        "Admin dan staff Grovy bekerja keras untuk menjaga komunitas tetap nyaman. Mohon ikuti arahan mereka dan percayakan keputusan yang dibuat untuk kebaikan bersama.",
    },
    {
      icon: Award,
      title: "Menjaga Nama Baik Grovy",
      description:
        "Setiap tindakan kita di media sosial mencerminkan Grovy sebagai komunitas. Mari jadi fans yang membanggakan, dengan tetap sopan, bijak, dan positif di manapun kita berinteraksi.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 relative overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl animate-float" />
        <div
          className="fixed bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="fixed top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-sky-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 max-w-5xl">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Community Guidelines
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 mx-auto mb-8 rounded-full" />
          </div>

          {/* Opening Section */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            className={`mb-16 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 hover-lift">
              <div className="prose prose-lg max-w-none">
                <p className="text-blue-900 text-lg md:text-xl leading-relaxed mb-6 font-medium">
                  Halo, Grovy! 💙
                </p>
                <p className="text-blue-800/80 text-base md:text-lg leading-relaxed mb-6">
                  Selamat datang di rumah kita bersama—komunitas yang dibangun
                  atas dasar cinta dan dukungan untuk Victoria Kimberly. Di
                  sini, kita semua adalah keluarga yang saling mendukung,
                  menghargai, dan merayakan setiap pencapaian bersama.
                </p>
                <p className="text-blue-800/80 text-base md:text-lg leading-relaxed mb-6">
                  Grovy adalah ruang aman di mana kita bisa mengekspresikan
                  kecintaan kita dengan cara yang positif dan bertanggung jawab.
                  Guidelines ini dibuat bukan untuk membatasi, tapi untuk
                  memastikan kita semua merasa nyaman dan bahagia di sini.
                </p>
                <p className="text-blue-800/80 text-base md:text-lg leading-relaxed">
                  Mari kita jaga kehangatan komunitas ini dengan saling
                  mengingatkan dan mendukung satu sama lain. Karena Grovy bukan
                  hanya tentang mendukung Victoria—tapi juga tentang tumbuh
                  bersama sebagai keluarga yang solid! ✨
                </p>
              </div>
            </div>
          </div>

          {/* Guidelines Cards */}
          <div className="space-y-6 mb-16">
            {guidelines.map((guideline, index) => {
              const Icon = guideline.icon;
              const isCardVisible = visibleCards.has(index);

              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-700 group relative overflow-hidden
                    ${
                      isCardVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-16"
                    }
                    hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-sky-400/0 to-blue-600/0 
                    group-hover:from-blue-500/5 group-hover:via-sky-400/5 group-hover:to-blue-600/5 
                    transition-all duration-500 rounded-2xl pointer-events-none"
                  />

                  <div className="flex items-start gap-4 md:gap-6 relative z-10">
                    <div
                      className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 
                      flex items-center justify-center shadow-lg
                      group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-blue-500/40
                      transition-all duration-500"
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-display text-xl md:text-2xl font-bold text-blue-900 mb-3 
                        group-hover:text-blue-600 transition-colors duration-300"
                      >
                        {guideline.title}
                      </h3>
                      <p
                        className="text-blue-800/80 text-base md:text-lg leading-relaxed
                        group-hover:text-blue-900 transition-colors duration-300"
                      >
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Section */}
          <div
            ref={(el) => (sectionRefs.current[1] = el)}
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center hover-lift group relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-sky-400/0 to-blue-600/0 
                group-hover:from-blue-500/5 group-hover:via-sky-400/5 group-hover:to-blue-600/5 
                transition-all duration-500 rounded-3xl pointer-events-none"
              />

              <div className="relative z-10">
                {/* Logo Grovy */}
                <div
                  className="inline-block p-4 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full mb-6
                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                  group-hover:shadow-xl group-hover:shadow-blue-500/30"
                >
                  <div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 
                    flex items-center justify-center text-white font-display text-3xl font-bold
                    group-hover:from-sky-400 group-hover:to-blue-600 transition-all duration-500"
                  >
                    <img src={img1} alt="Grovy Logo" className="w-full h-full object-contain" />
                  </div>
                </div>

                <h2
                  className="font-display text-3xl md:text-4xl font-bold text-blue-900 mb-6
                  group-hover:gradient-text transition-all duration-300"
                >
                  Bersama Kita Grovy!
                </h2>
                <p
                  className="text-blue-800/80 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto
                  group-hover:text-blue-900 transition-colors duration-300"
                >
                  Guidelines ini dibuat dengan penuh kasih sayang untuk
                  kenyamanan kita semua. Dengan mengikuti panduan ini, kita
                  tidak hanya mendukung Victoria dengan cara yang terbaik, tapi
                  juga menciptakan lingkungan yang hangat dan positif untuk
                  sesama Grovy.
                </p>
                <p
                  className="text-blue-600 text-lg md:text-xl font-semibold
                  group-hover:scale-105 inline-block transition-transform duration-300"
                >
                  Terima kasih sudah menjadi bagian dari keluarga Grovy. Mari
                  kita terus tumbuh dan bersinar bersama! 💙✨
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-sky-400/40 rounded-full animate-pulse-soft" />
          <div
            className="absolute top-40 right-20 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-32 left-16 w-4 h-4 bg-blue-600/40 rounded-full animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 right-32 w-3 h-3 bg-sky-400/40 rounded-full animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guidelines;