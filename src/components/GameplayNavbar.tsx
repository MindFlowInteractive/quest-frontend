import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { clearSession } from "../session/clearSession";

type MenuEntry =
  | { kind: "scroll"; name: string; hash: string }
  | { kind: "route"; name: string; to: string }
  | { kind: "lifeline"; name: string; image: string }
  | { kind: "notifications"; image: string }
  | { kind: "logout"; image: string }
  | { kind: "profile"; image: string };

const menuEntries: MenuEntry[] = [
  { kind: "scroll", name: "How to Play", hash: "how-to-play" },
  { kind: "scroll", name: "About", hash: "about" },
  { kind: "scroll", name: "Contributors", hash: "contributors" },
  { kind: "scroll", name: "FAQs", hash: "faqs" },
  { kind: "route", name: "Setting", to: "/settings" },
  { kind: "lifeline", name: "Coins", image: "/coins.svg" },
  { kind: "lifeline", name: "Call a friend", image: "/call.svg" },
  { kind: "lifeline", name: "50:50", image: "/fiftyfifty.svg" },
  { kind: "lifeline", name: "Audience", image: "/audience.svg" },
  { kind: "notifications", image: "/bell.svg" },
  { kind: "logout", image: "/logout.svg" },
  { kind: "profile", image: "/manfists.png" },
];

const linkFocus =
  "cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]";

const mobileFocus =
  "cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#323336]";

const iconBtn =
  "p-0 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]";

const iconBtnMobile =
  "p-0 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#323336]";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const mobileMenuId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleLogout = () => {
    clearSession();
    navigate("/sign-in", { replace: true });
  };

  const renderEntry = (item: MenuEntry, mobile: boolean) => {
    const f = mobile ? mobileFocus : linkFocus;
    if (item.kind === "scroll") {
      return (
        <ScrollLink
          to={item.hash}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="text-white"
          className={f}
          onClick={mobile ? () => setIsOpen(false) : undefined}
        >
          {item.name}
        </ScrollLink>
      );
    }
    if (item.kind === "route") {
      return (
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `${f} ${isActive ? "text-white font-bold" : ""}`
          }
          onClick={mobile ? () => setIsOpen(false) : undefined}
        >
          {item.name}
        </NavLink>
      );
    }
    if (item.kind === "lifeline") {
      return (
        <span
          className={`flex items-center gap-2 ${mobile ? "text-[#F9BC07]" : "text-[#F9BC07]"}`}
          aria-hidden="true"
        >
          <span>{item.name}</span>
          <img src={item.image} alt="" className={mobile ? "ml-1 object-contain" : "ml-2 object-contain"} />
        </span>
      );
    }
    if (item.kind === "notifications") {
      return (
        <button
          type="button"
          className={mobile ? iconBtnMobile : iconBtn}
          aria-label="Notifications"
        >
          <img src={item.image} alt="" className={mobile ? "ml-1 object-contain" : "ml-2 object-contain"} />
        </button>
      );
    }
    if (item.kind === "logout") {
      return (
        <button
          type="button"
          onClick={() => {
            if (mobile) setIsOpen(false);
            handleLogout();
          }}
          className={mobile ? iconBtnMobile : iconBtn}
          aria-label="Log out"
        >
          <img src={item.image} alt="" className={mobile ? "ml-1 object-contain" : "ml-2 object-contain"} />
        </button>
      );
    }
    return (
      <NavLink
        to="/settings"
        aria-label="Account settings"
        className={mobile ? `${mobileFocus} inline-flex` : `${linkFocus} inline-flex`}
        onClick={mobile ? () => setIsOpen(false) : undefined}
      >
        <img src={item.image} alt="" className={mobile ? "ml-1 object-contain" : "ml-2 object-contain"} />
      </NavLink>
    );
  };

  return (
    <nav className="relative " aria-label="Primary">
      <div className=" px-5 md:px-10 py-5 w-full">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2.5 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]"
          >
            <img src="/logo.svg" alt="" className="object-contain" />
            <h1 className="font-prompt font-bold text-[#CFFDED] text-[31px]">
              <span className="sr-only">LogiQuest home</span>
              <span aria-hidden="true">LogiQuest</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center ">
            <div className="flex justify-center text-base items-center gap-4">
              {menuEntries.map((item, index) => (
                <span key={index} className="inline-flex items-center">
                  {renderEntry(item, false)}
                </span>
              ))}
            </div>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F9BC07] rounded-sm p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]"
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={32} aria-hidden /> : <Menu size={32} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div
          id={mobileMenuId}
          className="xl:hidden bg-[#323336] w-full px-10 pb-10 flex flex-col gap-6 absolute top-full left-0 z-50 border-t border-gray-800 shadow-2xl"
          role="presentation"
        >
          <div className="flex flex-col text-base gap-6 pt-5">
            {menuEntries.map((item, index) => (
              <span key={index} className="inline-flex">
                {renderEntry(item, true)}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
