import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { getNavItems } from '../config/routes';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = getNavItems('main');

  return (
    <nav className="relative " aria-label="Primary">
      <div className=" px-5 md:px-10 py-5 w-full">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-3 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]"
          >
            <img
              src="/logo.svg"
              alt=""
              className="h-16 w-auto object-contain"
            />
            <span className="font-prompt font-bold text-[#CFFDED] text-[31px]">
              <span className="sr-only">LogiQuest home</span>
              <span aria-hidden="true">
                <span>Logi</span>
                <span>Quest</span>
              </span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center ">
            <div className="flex justify-center text-base text-[#F9BC07] items-center gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "cursor-pointer hover:text-white transition-colors"
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <span className="flex items-center gap-2" aria-hidden="true">
                <span>Coins</span>
                <img src="/coins.svg" alt="" className="h-6 w-auto" />
              </span>

              <span className="flex items-center gap-2" aria-hidden="true">
                <span>Call a friend</span>
                <img src="/call.svg" alt="" className="h-6 w-auto" />
              </span>

              <span className="flex items-center gap-2" aria-hidden="true">
                <span>50:50</span>
                <img src="/fiftyfifty.svg" alt="" className="h-6 w-auto" />
              </span>

              <span className="flex items-center gap-2" aria-hidden="true">
                <span>Audience</span>
                <img
                  src="/audience.svg"
                  alt=""
                  className="h-6 w-auto"
                />
              </span>

              <button
                type="button"
                className="p-0 mx-2 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]"
                aria-label="Notifications"
              >
                <img src="/bell.svg" alt="" className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="p-0 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]"
                aria-label="Log out"
              >
                <img src="/logout.svg" alt="" className="h-7" />
              </button>
              <NavLink
                to="/settings"
                aria-label="Account settings"
                className="ml-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]"
              >
                <img
                  src="/manfists.png"
                  alt=""
                  className="w-11 h-11 object-cover"
                />
              </NavLink>
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
          <div className="flex flex-col text-base text-[#F9BC07] gap-6 pt-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex flex-col gap-6" aria-hidden="true">
              <div className="flex items-center gap-2">
                <p>Coins</p>
                <img src="/coins.png" className="h-6 w-auto" alt="" />
              </div>
              <div className="flex items-center gap-2">
                <p>Call</p>
                <img src="/call.png" className="h-6 w-auto" alt="" />
              </div>
              <div className="flex items-center gap-2">
                <p>50:50</p>
                <img src="/5050.png" className="h-6 w-auto" alt="" />
              </div>
              <div className="flex items-center gap-2">
                <p>Audience</p>
                <img src="/audience.png" className="h-6 w-auto" alt="" />
              </div>
            </div>

            <div className="flex items-center gap-6 mt-2">
              <button
                type="button"
                className="p-0 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#323336]"
                aria-label="Notifications"
              >
                <img src="/bell.png" className="h-8 w-auto" alt="" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="p-0 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#323336]"
                aria-label="Log out"
              >
                <img src="/logout.png" className="h-8 w-auto" alt="" />
              </button>
              <NavLink
                to="/settings"
                onClick={() => setIsOpen(false)}
                aria-label="Account settings"
                className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#323336]"
              >
                <img
                  src="/manfists.png"
                  className="w-10 h-10 object-cover rounded-full border border-[#F9BC07]"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
