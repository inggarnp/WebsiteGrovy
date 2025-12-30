import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const KimmySchedule = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const monthlyActivities = {
    0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
  };
  
  const activeDays = monthlyActivities[selectedMonth] || [];
  const hasActivities = activeDays.length > 0;

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      selectedMonth === today.getMonth() &&
      selectedYear === today.getFullYear()
    );
  };

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const theaterShows = [];
  const hasTheaterShows = theaterShows.length > 0;

  const vcSchedule = [];
  const hasVCSchedule = vcSchedule.length > 0;

  const mngSchedule = [];
  const hasMNGSchedule = mngSchedule.length > 0;

  const offAirEvents = [];
  const hasOffAirEvents = offAirEvents.length > 0;

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#f0f4f8] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[5%] w-72 h-72 rounded-full bg-gradient-to-br from-blue-400/8 to-blue-600/8 blur-3xl animate-float"></div>
        <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/6 to-blue-400/6 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[20%] left-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/7 to-blue-500/7 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] right-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/9 to-blue-600/9 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>

        <div className="absolute top-[15%] right-[20%] w-32 h-32 border-2 border-blue-600/10 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-[25%] right-[18%] w-24 h-24 border-2 border-blue-500/10 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>

        <div className="absolute top-[45%] left-[25%] w-2 h-2 rounded-full bg-blue-600/20 animate-pulse-soft"></div>
        <div className="absolute top-[48%] left-[27%] w-1.5 h-1.5 rounded-full bg-blue-500/20 animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-[40%] right-[30%] w-2 h-2 rounded-full bg-blue-400/20 animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>

        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#458AFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div ref={(el) => (sectionRefs.current[0] = el)} data-section="header" className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Announcements
          </h1>
          <p className="text-lg text-blue-900 max-w-3xl mx-auto leading-relaxed">
            Selamat datang di pusat informasi resmi Grovy! Halaman ini berisi pembaruan seputar jadwal aktivitas Kimmy dan informasi penting lainnya. 
            Pantau terus jadwal di sini agar tidak ketinggalan setiap momen berharga bersama Victoria Kimberly dan Grovy.
          </p>
        </div>

        <div ref={(el) => (sectionRefs.current[1] = el)} data-section="calendar" className={`mb-20 transition-all duration-1000 delay-200 ${visibleSections.has('calendar') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-600/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-4xl font-bold text-blue-600">Kalender Aktivitas Kimmy</h2>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            
            <p className="text-blue-900 mb-8">
              {hasActivities 
                ? 'Kalender ini menampilkan rangkuman jadwal Kimmy dalam satu bulan. Tanggal yang ditandai menunjukkan adanya aktivitas Kimmy. Lihat detail lengkap di bagian bawah halaman ini.'
                : 'Belum ada jadwal aktivitas Kimmy yang diumumkan untuk periode ini. Kalender akan diperbarui setelah jadwal resmi tersedia.'
              }
            </p>

            <div className="flex items-center justify-between mb-6 bg-white rounded-2xl p-4 shadow-md">
              <button onClick={prevMonth} className="p-2 rounded-full hover:bg-blue-600/10 transition-all duration-300 hover:scale-110 cursor-pointer">
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              
              <h3 className="text-2xl font-bold text-blue-600">
                {monthNames[selectedMonth]} {selectedYear}
              </h3>
              
              <button onClick={nextMonth} className="p-2 rounded-full hover:bg-blue-600/10 transition-all duration-300 hover:scale-110 cursor-pointer">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-3">
              {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
                <div key={day} className="text-center font-semibold text-blue-600 py-2">
                  {day}
                </div>
              ))}
              
              {emptyDays.map((_, idx) => (
                <div key={`empty-${idx}`} className="aspect-square"></div>
              ))}
              
              {calendarDays.map((day) => {
                const today = isToday(day);
                const hasEvent = activeDays.includes(day);
                
                return (
                  <div key={day} className={`aspect-square flex items-center justify-center rounded-xl text-lg font-medium transition-all duration-300 cursor-pointer border-2
                      ${today 
                        ? 'border-blue-600 bg-blue-600/10 text-blue-600 shadow-md ring-2 ring-blue-600/30' 
                        : hasEvent
                          ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 border-transparent' 
                          : 'bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 border-blue-600/10'
                      }`}>
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div ref={(el) => (sectionRefs.current[2] = el)} data-section="theater" className={`mb-20 transition-all duration-1000 delay-300 ${visibleSections.has('theater') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-600/10">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Theater Show Line-Up</h2>
            <p className="text-blue-900 mb-8">
              Berikut adalah susunan member yang tampil dalam setiap show theater. 
              Nama Kimmy ditandai secara khusus agar mudah dikenali.
            </p>

            <div className="space-y-6">
              {hasTheaterShows ? (
                <>
                  {theaterShows.map((show, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-500/20">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-blue-600">{show.showName}</h3>
                        <p className="text-blue-500">{show.date}</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {show.members.map((member, mIdx) => (
                          <div key={mIdx} className={`px-4 py-2 rounded-lg text-center transition-all duration-300 cursor-pointer
                              ${member === 'Victoria Kimberly'
                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-soft'
                                : 'bg-blue-50 text-blue-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white hover:scale-105'
                              }`}>
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <p className="text-sm text-blue-500 mt-6 italic">
                    * Line-up ditampilkan berdasarkan informasi yang tersedia dan dapat berubah sewaktu-waktu.
                  </p>
                </>
              ) : (
                <div className="bg-white rounded-2xl p-8 text-center border border-blue-500/20">
                  <p className="text-blue-900 text-lg">
                    Belum ada update line-up theater show minggu ini. Line-up akan ditampilkan setelah jadwal resmi diumumkan oleh pihak terkait.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div ref={(el) => (sectionRefs.current[3] = el)} data-section="vc" className={`mb-20 transition-all duration-1000 delay-400 ${visibleSections.has('vc') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-600/10">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Video Call Schedule</h2>
            <p className="text-blue-900 mb-8">
              Jadwal Video Call Kimmy bersama fans. Jangan lewatkan kesempatan berinteraksi langsung dengan Kimmy!
            </p>

            {hasVCSchedule ? (
              <div className="grid md:grid-cols-2 gap-6">
                {vcSchedule.map((vc, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-blue-400/20 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {vc.date.split(' ')[0]}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-600 mb-1">{vc.activity}</h3>
                        <p className="text-blue-900 mb-2">{vc.date}</p>
                        <p className="text-sm text-blue-500">{vc.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center border border-blue-400/20">
                <p className="text-blue-900 text-lg">
                  Belum ada update jadwal Video Call untuk bulan ini. Informasi akan diperbarui jika jadwal resmi telah diumumkan.
                </p>
              </div>
            )}
          </div>
        </div>

        <div ref={(el) => (sectionRefs.current[4] = el)} data-section="mng" className={`mb-20 transition-all duration-1000 delay-500 ${visibleSections.has('mng') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-600/10">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Meet & Greet & 2-Shot</h2>
            <p className="text-blue-900 mb-8">
              Jadwal interaksi langsung Kimmy dengan fans melalui Meet & Greet dan sesi 2-Shot. 
              Detail lengkap akan diumumkan melalui kanal resmi terkait.
            </p>

            {hasMNGSchedule ? (
              <div className="grid md:grid-cols-2 gap-6">
                {mngSchedule.map((mng, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-blue-400/20 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {mng.date.split(' ')[0]}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-600 mb-1">{mng.activity}</h3>
                        <p className="text-blue-900 mb-2">{mng.date}</p>
                        <p className="text-sm text-blue-500">{mng.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center border border-blue-400/20">
                <p className="text-blue-900 text-lg">
                  Belum ada event Meet & Greet atau 2-Shot yang diselenggarakan saat ini. Event ini hanya tersedia pada waktu dan acara tertentu.
                </p>
              </div>
            )}
          </div>
        </div>

        <div ref={(el) => (sectionRefs.current[5] = el)} data-section="events" className={`mb-20 transition-all duration-1000 delay-600 ${visibleSections.has('events') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-600/10">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Off-Air & Special Events</h2>
            <p className="text-blue-900 mb-8">
              Kegiatan Kimmy di luar jadwal reguler, termasuk event off-air, project khusus, dan penampilan tertentu.
            </p>

            {hasOffAirEvents ? (
              <div className="space-y-4">
                {offAirEvents.map((event, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-blue-400/20 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-600 mb-1">{event.activity}</h3>
                        <p className="text-blue-900">{event.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-500">{event.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center border border-blue-400/20">
                <p className="text-blue-900 text-lg">
                  Belum ada jadwal Off-Air atau Special Event yang diumumkan. Silakan pantau kembali halaman ini untuk update terbaru.
                </p>
              </div>
            )}
          </div>
        </div>

        <div ref={(el) => (sectionRefs.current[6] = el)} data-section="notes" className={`transition-all duration-1000 delay-700 ${visibleSections.has('notes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Catatan Penting</h3>
            <ul className="space-y-2 text-blue-50">
              <li>• Semua jadwal dikelola dan diperbarui secara manual oleh tim Grovy</li>
              <li>• Jadwal dapat berubah sewaktu-waktu sesuai dengan kondisi dan keputusan management</li>
              <li>• Fans disarankan untuk tetap memantau media sosial resmi Grovy dan JKT48 untuk pembaruan terbaru atau perubahan mendadak</li>
              <li>• Untuk informasi lebih detail mengenai tiket dan pendaftaran event, silakan ikuti pengumuman resmi melalui kanal yang ditentukan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default KimmySchedule;