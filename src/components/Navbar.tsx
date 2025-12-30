import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import GrovyLogo from "@/assets/logo-grovy.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Untuk tracking halaman aktif - sesuaikan dengan routing kamu
  const [activePath, setActivePath] = useState(
    window.location.pathname + window.location.hash
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setActivePath(window.location.pathname + window.location.hash);
    };

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#2563eb]/90 border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center glossy-orb shadow-xl">
            <img
              src={GrovyLogo}
              alt="Grovy Logo"
              className="w-11 h-11 object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-100 via-blue-200 to-cyan-100 bg-clip-text text-transparent drop-shadow-sm">
              Grovy
            </h1>
            <p className="text-xs text-blue-100/80 tracking-wide">
              Glimmer Star Of Victory
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavLink href="/" active={activePath === "/"}>
            Home
          </NavLink>

          <Dropdown
            label="Kimmy's Journey"
            active={
              activePath.includes("/about-victoria") ||
              activePath.includes("/milestones") ||
              activePath.includes("#funfacts")
            }
          >
            <DropdownItem
              href="/about-victoria"
              active={activePath === "/about-victoria"}
            >
              About Victoria
            </DropdownItem>
            <DropdownItem
              href="/milestones"
              active={activePath === "/milestones"}
            >
              Milestones
            </DropdownItem>
            {/* <DropdownItem href="#funfacts" active={activePath === '#funfacts'}>Little Things About Kimmy</DropdownItem> */}
          </Dropdown>

          <Dropdown
            label="Grovy Family"
            active={
              activePath.includes("/about-grovy") ||
              activePath.includes("#staff") ||
              activePath.includes("#join") ||
              activePath.includes("#rules")
            }
          >
            <DropdownItem
              href="/about-grovy"
              active={activePath === "/about-grovy"}
            >
              About Us
            </DropdownItem>
            <DropdownItem href="/staff" active={activePath === "/staff"}>
              Grovy Staff
            </DropdownItem>
            <DropdownItem href="/join" active={activePath === "/join"}>
              How to be Grovy
            </DropdownItem>
            <DropdownItem href="/rules" active={activePath === "/rules"}>
              Guidelines
            </DropdownItem>
          </Dropdown>

          <Dropdown
            label="Grovy Projects"
            active={
              activePath.includes("/pinnacle") ||
              activePath.includes("#minievents") ||
              activePath.includes("#fanmeet")
            }
          >
            <DropdownItem href="/pinnacle" active={activePath === "/pinnacle"}>
              #P1nn4clePursuit
            </DropdownItem>
            <DropdownItem href="/saisho" active={activePath === "/saisho"}>
              #SaishoNoRamune
            </DropdownItem>
            <DropdownItem href="/visha" active={activePath === "/visha"}>
              #Vishalarasa
            </DropdownItem>
          </Dropdown>

          <Dropdown
            label="Kimmy Archives"
            active={
              activePath.includes("#photos") || activePath.includes("#videos")
            }
          >
            <DropdownItem href="/photos" active={activePath === "/photos"}>
              Kimmy in Frames
            </DropdownItem>
            <DropdownItem href="/video" active={activePath === "/video"}>
              Kimmy Clips
            </DropdownItem>
          </Dropdown>

          <Dropdown
            label="Merchandise"
            active={
              activePath.includes("#apparel") ||
              activePath.includes("#poster") ||
              activePath.includes("#digital")
            }
          >
            <DropdownItem href="/feedme" active={activePath === "/feedme"}>
              Feed Me
            </DropdownItem>
            <DropdownItem href="/stay" active={activePath === "/stay"}>
              Stay Alive
            </DropdownItem>
          </Dropdown>

          <Dropdown
            label="Announcement"
            active={
              activePath.includes("/schedule") || activePath.includes("#news")
            }
          >
            <DropdownItem href="/schedule" active={activePath === "/schedule"}>
              Kimmy Schedule
            </DropdownItem>
            <DropdownItem href="/news" active={activePath === "/news"}>
              Grovy News
            </DropdownItem>
          </Dropdown>
        </div>

        {/* MOBILE BTN */}
        <button
          className="lg:hidden p-2 text-blue-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[rgba(37,99,235,0.9)] backdrop-blur-xl border-t border-white/10 px-4 py-4 flex flex-col gap-5 animate-slideDown max-h-[calc(100vh-5rem)] overflow-y-auto">
          <MobileLink href="/" active={activePath === "/"}>
            Home
          </MobileLink>

          <MobileGroup title="Announcement">
            <MobileSub href="#schedule" active={activePath === "#schedule"}>
              Kimmy Schedule
            </MobileSub>
            <MobileSub href="#news" active={activePath === "#news"}>
              Grovy News
            </MobileSub>
          </MobileGroup>

          <MobileGroup title="Kimmy's Journey">
            <MobileSub
              href="/about-victoria"
              active={activePath === "/about-victoria"}
            >
              About Victoria
            </MobileSub>
            <MobileSub href="/milestones" active={activePath === "/milestones"}>
              Milestones
            </MobileSub>
          </MobileGroup>

          <MobileGroup title="Grovy Projects">
            <MobileSub href="#birthday" active={activePath === "#birthday"}>
              Birthday Project
            </MobileSub>
            <MobileSub href="#minievents" active={activePath === "#minievents"}>
              Mini Events
            </MobileSub>
            <MobileSub href="#fanmeet" active={activePath === "#fanmeet"}>
              Fanmeet
            </MobileSub>
          </MobileGroup>

          <MobileGroup title="Media">
            <MobileSub href="#photos" active={activePath === "#photos"}>
              Photo Gallery
            </MobileSub>
            <MobileSub href="#videos" active={activePath === "#videos"}>
              Video Archive
            </MobileSub>
          </MobileGroup>

          <MobileGroup title="Grovy Family">
            <MobileSub href="#staff" active={activePath === "#staff"}>
              About Us
            </MobileSub>
            <MobileSub href="/staff" active={activePath === "/staff"}>
              Grovy Staff
            </MobileSub>
            <MobileSub href="#join" active={activePath === "#join"}>
              How to Join
            </MobileSub>
            <MobileSub href="#rules" active={activePath === "#rules"}>
              Rules
            </MobileSub>
          </MobileGroup>

          <MobileGroup title="Merchandise">
            <MobileSub href="#apparel" active={activePath === "#apparel"}>
              Apparel
            </MobileSub>
            <MobileSub href="#poster" active={activePath === "#poster"}>
              Poster
            </MobileSub>
            <MobileSub href="#digital" active={activePath === "#digital"}>
              Digital Goods
            </MobileSub>
          </MobileGroup>
        </div>
      )}
    </nav>
  );
};

/* COMPONENTS */
const NavLink = ({ href, children, active }) => (
  <a
    href={href}
    className={`font-medium tracking-wide drop-shadow hover:drop-shadow-lg transition duration-200 ${
      active ? "text-white font-bold" : "text-blue-50/90 hover:text-white"
    }`}
  >
    {children}
  </a>
);

const Dropdown = ({ label, children, active }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const checkPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const dropdownWidth = 256;
        const willOverflow = rect.left + dropdownWidth > window.innerWidth;
        setIsFlipped(willOverflow);
      }
    };

    checkPosition();
    window.addEventListener("resize", checkPosition);
    return () => window.removeEventListener("resize", checkPosition);
  }, []);

  return (
    <div className="relative group">
      <button
        ref={buttonRef}
        className={`flex items-center gap-1 font-medium transition ${
          active ? "text-white font-bold" : "text-blue-50/90 hover:text-white"
        }`}
      >
        {label}
        <ChevronDown size={16} className="group-hover:rotate-180 transition" />
      </button>

      {/* Invisible hover bridge */}
      <div className="absolute top-full left-0 w-full h-3 group-hover:block hidden"></div>

      {/* POP-UP BUBBLE STYLE */}
      <div
        ref={dropdownRef}
        className={`
          absolute mt-3 w-64
          bg-white/95
          border border-black/10
          rounded-2xl shadow-lg
          backdrop-blur-xl

          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          group-hover:pointer-events-auto pointer-events-none
          transition-all duration-200 ease-out
          
          max-h-[70vh] overflow-y-auto
          ${isFlipped ? "right-0" : "left-0"}
        `}
      >
        {/* Little bubble arrow (segitiga) */}
        <div
          className={`
            absolute -top-2 
            w-4 h-4 
            bg-white/95 border-l border-t border-black/10 
            rotate-45
            backdrop-blur-xl
            ${isFlipped ? "right-6" : "left-6"}
          `}
        ></div>

        <div className="flex flex-col py-3">{children}</div>
      </div>
    </div>
  );
};

const DropdownItem = ({ href, children, active }) => (
  <a
    href={href}
    className={`
      px-4 py-2
      text-sm
      transition rounded-lg
      ${
        active
          ? "text-black font-semibold bg-blue-100/60"
          : "text-black/70 hover:text-black hover:bg-black/5"
      }
    `}
  >
    {children}
  </a>
);

/* MOBILE COMPONENTS */
const MobileLink = ({ href, children, active }) => (
  <a
    href={href}
    className={`text-lg font-medium ${
      active ? "text-white font-bold" : "text-blue-100"
    }`}
  >
    {children}
  </a>
);

const MobileGroup = ({ title, children }) => (
  <div>
    <p className="text-blue-200 font-semibold mb-1">{title}</p>
    <div className="pl-4 flex flex-col gap-2">{children}</div>
  </div>
);

const MobileSub = ({ href, children, active }) => (
  <a
    href={href}
    className={`text-sm transition ${
      active ? "text-white font-semibold" : "text-blue-100/70 hover:text-white"
    }`}
  >
    {children}
  </a>
);

export default Navbar;
