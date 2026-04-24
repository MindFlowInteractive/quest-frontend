import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { getNavItems } from '../config/routes';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = getNavItems('landing');

  // Scroll anchors remain separate (they're not routes)
  const scrollMenu = [
    { name: "How to Play", link: "#how-to-play" },
    { name: "About", link: "#about" },
    { name: "Contributors", link: "#contributors" },
    { name: "FAQs", link: "#faqs" },
  ];

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
              {scrollMenu.map((item) => (
                <ScrollLink
                  key={item.link}
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
              ))}

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07]"
                >
                  {item.label}
                </Link>
              ))}

              {/* Game-specific items */}
              <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <p>Coins</p>
                <img src="/coins.svg" alt="Coins" className="h-6 w-auto" />
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <p>Call a friend</p>
                <img src="/call.svg" alt="Call" className="h-6 w-auto" />
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <p>50:50</p>
                <img src="/fiftyfifty.svg" alt="50:50" className="h-6 w-auto" />
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <p>Audience</p>
                <img src="/audience.svg" alt="Audience" className="h-6 w-auto" />
              </div>
              <img src="/bell.svg" alt="Bell" className="h-7 w-7 mx-2 cursor-pointer" />
              <img src="/logout.svg" alt="Logout" className="h-7 cursor-pointer" />
              <img src="/manfists.png" alt="Profile" className="w-11 h-11 ml-2 object-cover" />
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
            {scrollMenu.map((item) => (
              <ScrollLink
                onClick={() => setIsOpen(false)}
                key={item.link}
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
            ))}

            {navItems.map((item) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={item.path}
                to={item.path}
                className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07]"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <p>Coins</p>
                <img src="/coins.png" className="h-6 w-auto" />
              </div>
              <div className="flex items-center gap-2">
                <p>Call</p>
                <img src="/call.png" className="h-6 w-auto" />
              </div>
              <div className="flex items-center gap-2">
                <p>50:50</p>
                <img src="/5050.png" className="h-6 w-auto" />
              </div>
              <div className="flex items-center gap-2">
                <p>Audience</p>
                <img src="/audience.png" className="h-6 w-auto" />
              </div>
            </div>

            <div className="flex items-center gap-6 mt-2">
              <img src="/bell.png" className="h-8 w-auto" />
              <img src="/logout.png" className="h-8 w-auto" />
              <img
                src="/manfists.png"
                className="w-10 h-10 object-cover rounded-full border border-[#F9BC07]"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
