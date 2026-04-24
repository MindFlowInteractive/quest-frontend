import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AuthService } from "../services/AuthService";

interface MenuItem {
  name: string;
  link?: string;
  image?: string;
  disabled?: boolean;
  onClick?: (navigate: any, logout: () => void) => void;
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/sign-in");
  };

  return (
    <nav className="relative ">
      <div className=" px-5 md:px-10 py-5 w-full">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2.5 cursor-pointer"
          >
            <img src="/logo.svg" alt="LogiQuest Logo" className="object-contain" />
            <h1 className="font-prompt font-bold text-[#CFFDED] text-[31px]">
              <span className="text-[#F9BC07]">Logi</span>
              <span>Quest</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center ">
            <div className="flex justify-center text-base items-center gap-4">
              {dataMenu.map((item, index) => {
                if (item.link && item.link.startsWith("#") && item.link.length > 1) {
                  return (
                    <ScrollLink
                      key={index}
                      to={item.link.substring(1)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      activeClass="text-white"
                      className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07]"
                    >
                      {item.name}
                    </ScrollLink>
                  );
                }

                if (item.disabled) {
                  return (
                    <div
                      key={index}
                      title={`${item.name} (Disabled)`}
                      className="flex items-center gap-2 opacity-40 cursor-not-allowed grayscale text-[#F9BC07]"
                    >
                      {item.name}
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="ml-2 object-contain h-6 w-auto"
                        />
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (item.onClick) {
                        item.onClick(navigate, handleLogout);
                      } else if (item.link && item.link !== "#") {
                        navigate(item.link);
                      }
                    }}
                    title={item.name}
                    aria-label={item.name}
                    className="flex items-center gap-2 cursor-pointer hover:text-white hover:scale-105 transition-all text-[#F9BC07] outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] rounded px-1"
                  >
                    {item.name}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`object-contain h-6 w-auto ${item.name === "Profile" ? "rounded-full" : ""}`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

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

      {isOpen && (
        <div className="xl:hidden bg-[#323336] w-full px-10 pb-10 flex flex-col gap-6 absolute top-full left-0 z-50 border-t border-gray-800 shadow-2xl">
          <div className="flex flex-col text-base gap-6 pt-5">
            {dataMenu.map((item, index) => {
              if (item.link && item.link.startsWith("#") && item.link.length > 1) {
                return (
                  <ScrollLink
                    onClick={() => setIsOpen(false)}
                    key={index}
                    to={item.link.substring(1)}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-white"
                    className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07]"
                  >
                    {item.name}
                  </ScrollLink>
                );
              }

              if (item.disabled) {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 opacity-40 cursor-not-allowed grayscale text-[#F9BC07]"
                  >
                    {item.name}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="ml-2 object-contain h-6 w-auto"
                      />
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => {
                    setIsOpen(false);
                    if (item.onClick) {
                      item.onClick(navigate, handleLogout);
                    } else if (item.link && item.link !== "#") {
                      navigate(item.link);
                    }
                  }}
                  className="flex items-center justify-start gap-2 cursor-pointer hover:text-white transition-colors text-[#F9BC07] outline-none text-left"
                >
                  {item.name}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`object-contain h-6 w-auto ${item.name === "Profile" ? "rounded-full" : ""}`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

const dataMenu: MenuItem[] = [
  {
    name: "How to Play",
    link: "#how-to-play",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contributors",
    link: "#contributors",
  },
  {
    name: "FAQs",
    link: "#faqs",
  },
  {
    name: "Settings",
    link: "/settings",
  },
  {
    name: "Coins",
    link: "/store",
    image: "/coins.svg",
  },
  {
    name: "Call a friend",
    image: "/call.svg",
    disabled: true,
  },
  {
    name: "50:50",
    image: "/fiftyfifty.svg",
    disabled: true,
  },
  {
    name: "Audience",
    image: "/audience.svg",
    disabled: true,
  },
  { 
    name: "Notifications",
    image: "/bell.svg", 
    onClick: () => {} 
  },
  { 
    name: "Logout",
    image: "/logout.svg", 
    onClick: (_nav: any, logout: any) => logout() 
  },
  { 
    name: "Profile",
    image: "/manfists.png", 
    link: "/settings" 
  },
];
