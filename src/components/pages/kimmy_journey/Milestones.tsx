import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BirthdayCountdown from "@/components/pages/kimmy_journey/milestones/BirthdayCuntdown";
import SetlistGrid from "@/components/pages/kimmy_journey/milestones/SetlistSection";
import TimelineSection from "@/components/pages/kimmy_journey/milestones/TimelineSection";

export default function KimmyMilestones() {

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(210 30% 95%) 0%, hsl(210 35% 95%) 30%, hsl(215 100% 64% / 0.15) 60%, hsl(215 100% 70% / 0.1) 100%)",
      }}
    >
      <Navbar />

      {/* Decorative wave patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
        >
          <path
            fill="hsl(215 100% 64% / 0.05)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div
          className="absolute top-40 right-10 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(215 100% 64% / 0.08) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(215 100% 70% / 0.08) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* Birthday Countdown */}
      <BirthdayCountdown />

      {/* Setlist Grid */}
      <SetlistGrid />

      {/* Timeline Milestones */}
      <TimelineSection />

      <Footer />
    </div>
  );
}