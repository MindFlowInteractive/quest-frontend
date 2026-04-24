import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/sign-in");
  };

  const UtilityIcon = ({ 
    src, 
    alt, 
    label, 
    onClick, 
    disabled = false, 
    className = "" 
  }: { 
    src?: string; 
    alt: string; 
    label: string; 
    onClick?: () => void; 
    disabled?: boolean; 
    className?: string;
  }) => {
    return (
      <button
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
        title={label}
        aria-label={label}
        className={`flex items-center gap-2 transition-all duration-200 outline-none
          ${disabled ? "opacity-40 cursor-not-allowed grayscale" : "cursor-pointer hover:scale-110 active:scale-95 hover:brightness-125 focus-visible:ring-2 focus-visible:ring-[#F9BC07]"}
          ${className}`}
      >
        <p className="hidden md:block">{label}</p>
        {src ? (
          <img src={src} alt={alt} className="h-6 w-auto object-contain" />
        ) : (
          <span className="h-6 w-6 flex items-center justify-center">{alt}</span>
        )}
      </button>
    );
  };


  return (
    <nav className="relative ">
      <div className=" px-5 md:px-10 py-5 w-full">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="shrink-0 flex items-center gap-3 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] rounded-md px-1"
            aria-label="LogiQuest Home"
          >
            <img
              src="/logo.svg"
              alt="LogiQuest Logo"
              className="h-16 w-auto object-contain"
            />
            <span className="font-prompt font-bold text-[#CFFDED] text-[31px]">
              <span className="text-[#F9BC07]">Logi</span>
              <span>Quest</span>
            </span>
          </Link>

          {/* DESKTOP */}
          <div className="hidden xl:flex items-center ">
            <div className="flex justify-center text-base text-[#F9BC07] items-center gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "cursor-pointer hover:text-white transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "cursor-pointer hover:text-white transition-colors"
                }
              >
                Store
              </NavLink>

              <NavLink
                to="/game-mode"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "cursor-pointer hover:text-white transition-colors"
                }
              >
                Game mode
              </NavLink>

              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "cursor-pointer hover:text-white transition-colors"
                }
              >
                Settings
              </NavLink>

              <UtilityIcon
                label="Coins"
                src="/coins.svg"
                alt="Coins"
                onClick={() => navigate("/store")}
              />

              <UtilityIcon
                label="Call a friend"
                src="/call.svg"
                alt="Call"
                disabled
              />

              <UtilityIcon
                label="50:50"
                src="/fiftyfifty.svg"
                alt="50:50"
                disabled
              />

              <UtilityIcon
                label="Audience"
                src="/audience.svg"
                alt="Audience"
                disabled
              />

              <button
                onClick={() => {}}
                title="Notifications"
                aria-label="Notifications"
                className="mx-2 transition-all hover:scale-110 hover:brightness-125 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F9BC07] outline-none"
              >
                <img src="/bell.svg" alt="Notifications" className="h-7 w-7" />
              </button>

              <button
                onClick={handleLogout}
                title="Logout"
                aria-label="Logout"
                className="transition-all hover:scale-110 hover:brightness-125 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F9BC07] outline-none"
              >
                <img src="/logout.svg" alt="Logout" className="h-7" />
              </button>

              <button
                onClick={() => navigate("/settings")}
                title="Profile"
                aria-label="Profile"
                className="ml-2 transition-all hover:scale-105 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] rounded-full overflow-hidden"
              >
                <img
                  src="/manfists.png"
                  alt="Profile"
                  className="w-11 h-11 object-cover"
                />
              </button>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F9BC07]"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="xl:hidden bg-[#323336] w-full px-10 pb-10 flex flex-col gap-6 absolute top-full left-0 z-50 border-t border-gray-800 shadow-2xl">
          <div className="flex flex-col text-base text-[#F9BC07] gap-6 pt-5">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/store" onClick={() => setIsOpen(false)}>
              Store
            </NavLink>

            <NavLink to="/game-mode" onClick={() => setIsOpen(false)}>
              Game mode
            </NavLink>

            <NavLink to="/settings" onClick={() => setIsOpen(false)}>
              Settings
            </NavLink>

            <div className="flex flex-col gap-6">
              <UtilityIcon
                label="Coins"
                src="/coins.png"
                alt="Coins"
                className="!flex !flex-row"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/store");
                }}
              />
              <UtilityIcon
                label="Call"
                src="/call.png"
                alt="Call"
                className="!flex !flex-row"
                disabled
              />
              <UtilityIcon
                label="50:50"
                src="/5050.png"
                alt="50:50"
                className="!flex !flex-row"
                disabled
              />
              <UtilityIcon
                label="Audience"
                src="/audience.png"
                alt="Audience"
                className="!flex !flex-row"
                disabled
              />
            </div>

            <div className="flex items-center gap-6 mt-2">
              <button
                onClick={() => {}}
                title="Notifications"
                aria-label="Notifications"
                className="transition-all hover:scale-110"
              >
                <img src="/bell.png" className="h-8 w-auto" alt="Notifications" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                title="Logout"
                aria-label="Logout"
                className="transition-all hover:scale-110"
              >
                <img src="/logout.png" className="h-8 w-auto" alt="Logout" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/settings");
                }}
                title="Profile"
                aria-label="Profile"
                className="transition-all hover:scale-110 rounded-full overflow-hidden border border-[#F9BC07]"
              >
                <img
                  src="/manfists.png"
                  className="w-10 h-10 object-cover"
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
