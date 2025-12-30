import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Sparkles, MessageCircle, Play, Gift } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const GroovyNews = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleSections.includes(index)) {
              setVisibleSections((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const newsCategories = [
    {
      id: 3,
      title: "Fan Interactions",
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-800/20 to-blue-900/10",
      description: "Q&A session, kritik & saran, dan interaksi langsung dengan Grovy",
      items: [
        { date: "Coming Soon", content: "Q&A Live Session - Kirim pertanyaanmu sekarang!" },
        { date: "Ongoing", content: "Kritik & Saran terbuka untuk konten yang lebih baik" },
        { date: "Weekly", content: "Fan Art Feature - Share karyamu dan dapatkan spotlight!" }
      ]
    },
    {
      id: 5,
      title: "Fanbase Events",
      icon: Gift,
      color: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-900/20 to-blue-800/10",
      description: "Challenge seru, giveaway, dan event khusus Grovy Family",
      items: [
        { date: "To Be Continue", content: "" },
        { date: "To Be Continue", content: "" },
        { date: "To Be Continue", content: "" }
      ]
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(215 100% 20%) 0%, hsl(215 85% 30%) 50%, hsl(215 100% 20%) 100%)'
    }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse-soft" style={{ background: 'hsl(215 100% 64% / 0.15)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse-soft" style={{ background: 'hsl(215 100% 70% / 0.15)', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-soft" style={{ background: 'hsl(215 85% 55% / 0.1)', animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(215 100% 64%) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header dengan animasi masuk */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
            Grovy News
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'hsl(215 60% 75%)' }}>
            Semua update terbaru dari Grovy dan Grovy Family
          </p>
          <div className="mt-6 w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {newsCategories.map((category, index) => {
            const Icon = category.icon;
            const isVisible = visibleSections.includes(index);
            
            return (
              <div
                key={category.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2" style={{ border: '1px solid hsl(215 100% 64% / 0.2)' }}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-50`}></div>
                  
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shadow glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

                  <div className="relative p-8 h-full" style={{ background: 'hsl(215 80% 15% / 0.6)', backdropFilter: 'blur(12px)' }}>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">{category.title}</h2>
                        <p className="text-sm" style={{ color: 'hsl(215 60% 70%)' }}>{category.description}</p>
                      </div>
                    </div>

                    {/* Content Items */}
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group/item relative p-4 rounded-xl bg-gradient-to-r transition-all duration-300 hover:translate-x-2"
                          style={{ 
                            background: 'linear-gradient(to right, hsl(215 80% 20% / 0.4), transparent)',
                            border: '1px solid hsl(215 100% 64% / 0.2)'
                          }}
                        >
                          {/* Animated border */}
                          <div className="absolute inset-0 rounded-xl opacity-0 group-hover/item:opacity-100 blur transition-opacity duration-300" style={{ background: 'linear-gradient(to right, hsl(215 100% 64% / 0.2), hsl(215 100% 70% / 0.2))' }}></div>
                          
                          <div className="relative">
                            <p className="text-xs font-semibold mb-2 flex items-center gap-2" style={{ color: 'hsl(215 70% 65%)' }}>
                              <span className="w-2 h-2 rounded-full group-hover/item:animate-pulse" style={{ background: 'hsl(215 100% 64%)' }}></span>
                              {item.date}
                            </p>
                            <p className="leading-relaxed" style={{ color: 'hsl(0 0% 95%)' }}>{item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer indicator */}
                    <div className="mt-6 pt-4" style={{ borderTop: '1px solid hsl(215 100% 64% / 0.2)' }}>
                      <p className="text-sm text-center transition-colors" style={{ color: 'hsl(215 60% 60%)' }}>
                        Tap untuk detail lebih lanjut
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-block p-8 rounded-2xl backdrop-blur-sm" style={{ 
            background: 'linear-gradient(135deg, hsl(215 80% 20% / 0.5), hsl(215 85% 25% / 0.5))',
            border: '1px solid hsl(215 100% 64% / 0.3)'
          }}>
            <h3 className="text-2xl font-bold text-white mb-3">Stay Connected!</h3>
            <p className="mb-6 max-w-md" style={{ color: 'hsl(215 60% 75%)' }}>
              Jangan sampai ketinggalan update terbaru dari Grovy Family
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg" style={{ boxShadow: '0 10px 30px hsl(215 100% 64% / 0.3)' }}>
              Join Grovy Family
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default GroovyNews;