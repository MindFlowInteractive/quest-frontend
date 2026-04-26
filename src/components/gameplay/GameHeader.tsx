import coinsIcon from '../../assets/images/pngs/coins.png';
import callAFriend from '../../assets/images/pngs/call_a_friend.png';
import fiftyFifty from '../../assets/images/pngs/fifty_fifty.png';
import door from '../../assets/images/pngs/door.png';
import logiQuest from '../../assets/images/pngs/logiquest_logo.png';
import audience from '../../assets/images/pngs/audience.png';
import bell from '../../assets/images/pngs/bell.png';
import avatar from '../../assets/images/pngs/avatar.png';

import { Link, NavLink } from 'react-router-dom';

const navItemClass =
  'hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]';

const GameHeader = () => {
  return (
    <header className="flex items-center justify-between bg-[#0a0a0a] px-8 py-4 text-white border-b border-gray-800">
      <Link
        to="/"
        className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
      >
        <div className="w-10 h-10">
          <img src={logiQuest} alt="" className="w-full h-full" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white group-hover:text-yellow-500 transition-colors">
          <span className="sr-only">LogiQuest home</span>
          <span aria-hidden="true">LogiQuest</span>
        </h1>
      </Link>

      <nav className="flex items-center gap-8 text-[#d4af37] font-medium text-sm" aria-label="Game navigation">
        <NavLink to="/store" className={navItemClass}>
          Store
        </NavLink>
        <NavLink to="/game-mode" className={navItemClass}>
          Game mode
        </NavLink>
        <NavLink to="/settings" className={navItemClass}>
          Setting
        </NavLink>
      </nav>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="text-[#d4af37] text-sm font-medium">Coins</span>
          <img src={coinsIcon} alt="" className="w-10 h-10" />
        </div>

        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="text-[#d4af37] text-sm font-medium whitespace-nowrap">Call a friend</span>
          <img src={callAFriend} alt="" className="w-10 h-10" />
        </div>

        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="text-sm font-medium">50 : 50</span>
          <img src={fiftyFifty} alt="" className="w-10 h-10" />
        </div>

        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="text-[#d4af37] text-sm font-medium">Audience</span>
          <img src={audience} alt="" className="w-10 h-10" />
        </div>

        <div className="flex items-center gap-4 ml-4 border-l border-gray-700 pl-4">
          <button
            type="button"
            className="p-0 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            aria-label="Notifications"
          >
            <img src={bell} alt="" className="w-10 h-10" />
          </button>
          <button
            type="button"
            className="p-0 border-0 bg-transparent cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            aria-label="Exit"
          >
            <img src={door} alt="" className="w-10 h-10" />
          </button>
          <NavLink
            to="/settings"
            aria-label="Account settings"
            className="block w-8 h-8 rounded-full bg-cyan-200 overflow-hidden border border-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            <img src={avatar} alt="" className="w-full h-full object-cover" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
