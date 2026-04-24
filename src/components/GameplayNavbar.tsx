import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative ">
      <div className=" px-5 md:px-10 py-5 w-full">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2.5 cursor-pointer"
          >
            <img src="/logo.svg" alt="LogiQuest" className="object-contain" />
            <h1 className="font-prompt font-bold text-[#CFFDED] text-[31px]">
              LogiQuest
            </h1>
          </Link>

          <div className="hidden xl:flex items-center ">
            <div className="flex justify-center text-base items-center gap-4">
              {dataMenu.map((item, index) => {
                if (item.link?.startsWith("#") && item.link.length > 1) {
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

                return (
                  <Link
                    key={index}
                    to={item.link || "#"}
                    aria-label={item.name ? undefined : item.label}
                    className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {item.image ? (
                      <div className="flex items-center gap-2 cursor-pointer ">
                        {item.name}
                        <img
                          src={item.image}
                          alt={item.name ?? ""}
                          aria-hidden={item.name ? undefined : true}
                          className="ml-2 object-contain"
                        />
                      </div>
                    ) : (
                      item.name
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="text-[#F9BC07] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07]"
            >
              {isOpen ? <X size={32} aria-hidden="true" /> : <Menu size={32} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-[#323336] w-full px-10 pb-10 flex flex-col gap-6 absolute top-full left-0 z-50 border-t border-gray-800 shadow-2xl">
          <div className="flex flex-col text-base gap-6 pt-5">
            {dataMenu.map((item, index) => {
              if (item.link?.startsWith("#") && item.link.length > 1) {
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

              return (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={index}
                  to={item.link || "#"}
                  aria-label={item.name ? undefined : item.label}
                  className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#323336]"
                >
                  {item.image ? (
                    <div className="flex items-center gap-2 cursor-pointer ">
                      {item.name}
                      <img
                        src={item.image}
                        alt={item.name ?? ""}
                        aria-hidden={item.name ? undefined : true}
                        className="ml-1 object-contain"
                      />
                    </div>
                  ) : (
                    item.name
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

const dataMenu = [
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
    name: "Setting",
    link: "/settings",
  },
  {
    name: "Coins",
    link: "#",
    image: "/coins.svg",
  },
  {
    name: "Call a friend",
    link: "#",
    image: "/call.svg",
  },
  {
    name: "50:50",
    link: "#",
    image: "/fiftyfifty.svg",
  },
  {
    name: "Audience",
    link: "#",
    image: "/audience.svg",
  },
  { label: "Notifications", image: "/bell.svg", link: "#" },
  { label: "Log out", image: "/logout.svg", link: "#" },
  { label: "Open profile menu", image: "/manfists.png", link: "#" },
];
