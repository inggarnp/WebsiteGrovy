import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  ChevronDown,
  Music,
} from "lucide-react";

// ✨ SCROLL REVEAL HOOK
const useScrollReveal = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-reveal-id");
          if (!id) return;

          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-50px",
      }
    );

    const elements = document.querySelectorAll("[data-reveal-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};

// 📅 SCHEDULE CALENDAR COMPONENT
const ScheduleCalendar = ({
  visibleElements,
}: {
  visibleElements: Set<string>;
}) => {
  // ⚠️ EDIT DI SINI UNTUK UPDATE JADWAL
  const scheduleData = [
    {
      id: 1,
      title: "Theater Show",
      date: "2024-12-15",
      time: "19:00",
      type: "theater",
    },
    {
      id: 2,
      title: "Instagram Live",
      date: "2024-12-10",
      time: "20:00",
      type: "event",
    },
    {
      id: 3,
      title: "Birthday Celebration",
      date: "2025-03-08",
      time: "All Day",
      type: "birthday",
    },
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof scheduleData)[0] | null
  >(null);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(
      currentMonth.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return scheduleData.filter((event) => event.date === dateStr);
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "theater":
        return "bg-blue-500/80 hover:bg-blue-600/90";
      case "birthday":
        return "bg-cyan-500/80 hover:bg-cyan-600/90";
      default:
        return "bg-blue-400/80 hover:bg-blue-500/90";
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Card
        className="glass-card p-6 md:p-8 transition-all duration-700"
        data-reveal-id="calendar"
        style={{
          opacity: visibleElements.has("calendar") ? 1 : 0,
          transform: visibleElements.has("calendar")
            ? "translateY(0)"
            : "translateY(30px)",
        }}
      >
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
          </button>

          <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>

          <button
            onClick={nextMonth}
            className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
          >
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
        </div>

        {/* Day Names */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-muted-foreground py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Actual days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const events = getEventsForDate(day);
            const isToday =
              day === new Date().getDate() &&
              currentMonth.getMonth() === new Date().getMonth() &&
              currentMonth.getFullYear() === new Date().getFullYear();

            return (
              <div
                key={day}
                className={`aspect-square border-2 rounded-xl p-2 transition-all duration-300 hover:border-primary/40 ${
                  isToday
                    ? "border-primary/60 bg-blue-500/5"
                    : "border-primary/20 bg-grovy-beige/30"
                }`}
              >
                <div
                  className={`text-sm font-semibold mb-1 ${
                    isToday ? "text-primary" : "text-foreground"
                  }`}
                >
                  {day}
                </div>

                <div className="space-y-1">
                  {events.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`w-full text-left px-1.5 py-1 rounded text-xs text-white font-medium transition-all ${getEventColor(
                        event.type
                      )}`}
                    >
                      <div className="truncate">{event.time}</div>
                      <div className="truncate font-semibold">
                        {event.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t-2 border-primary/20">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500" />
            <span className="text-sm text-muted-foreground">Theater</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-cyan-500" />
            <span className="text-sm text-muted-foreground">Birthday</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-400" />
            <span className="text-sm text-muted-foreground">Other Events</span>
          </div>
        </div>
      </Card>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <Card className="glass-card p-6 mt-6 animate-slide-up">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-xl font-bold gradient-text">
              {selectedEvent.title}
            </h4>
            <button
              onClick={() => setSelectedEvent(null)}
              className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(selectedEvent.date).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              {selectedEvent.time}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

// MAIN COMPONENT
const HeroSchedule = () => {
  const visibleElements = useScrollReveal();

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          data-reveal-id="schedule-header"
          style={{
            opacity: visibleElements.has("schedule-header") ? 1 : 0,
            transform: visibleElements.has("schedule-header")
              ? "translateY(0)"
              : "translateY(30px)",
          }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
              Kimmy's Schedule
            </h2>
            <Calendar className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-muted-foreground">
            Jangan sampai ketinggalan moment bersama Kimmy! ✨
          </p>
        </div>

        <ScheduleCalendar visibleElements={visibleElements} />
      </div>
    </section>
  );
};

export default HeroSchedule;