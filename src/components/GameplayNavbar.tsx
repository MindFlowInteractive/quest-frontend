import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
              {dataMenu.map((item, index) => (
                <Link
                  key={index}
                  to={item.link || "#"}
                  className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07]"
                >
                  {item.image ? (
                    <div className="flex items-center gap-2 cursor-pointer ">
                      {item.name}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="ml-2 object-contain"
                      />
                    </div>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}
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
            {dataMenu.map((item, index) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={index}
                to={item.link || "#"}
                className="cursor-pointer hover:text-white hover:transition-colors text-[#F9BC07]"
              >
                {item.image ? (
                  <div className="flex items-center gap-2 cursor-pointer ">
                    {item.name}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="ml-1 object-contain"
                    />
                  </div>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

const dataMenu = [
  {
    name: "Store",
    link: "#",
  },
  {
    name: "Game mode",
    link: "#",
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
  { image: "/bell.svg" },
  { image: "/logout.svg" },
  { image: "/manfists.png" },
];
