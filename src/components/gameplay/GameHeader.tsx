import coinsIcon from '../../assets/images/pngs/coins.png';
import callAFriend from '../../assets/images/pngs/call_a_friend.png';
import fiftyFifty from '../../assets/images/pngs/fifty_fifty.png';
import door from '../../assets/images/pngs/door.png';
import logiQuest from '../../assets/images/pngs/logiquest_logo.png';
import audience from '../../assets/images/pngs/audience.png';
import bell from '../../assets/images/pngs/bell.png';
import avatar from '../../assets/images/pngs/avatar.png';

import { Link } from 'react-router-dom';

const GameHeader = () => {
  return (
    <header className="flex items-center justify-between bg-[#0a0a0a] px-8 py-4 text-white border-b border-gray-800">
      <Link 
        to="/" 
        className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group"
      >
        <div className="w-10 h-10">
          <img src={logiQuest} alt="LogiQuest Logo" className="w-full h-full" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white group-hover:text-yellow-500 transition-colors">
          LogiQuest
        </h1>
      </Link>

      {/* Center Section: Navigation Links */}
      <nav className="flex items-center gap-8 text-[#d4af37] font-medium text-sm">
        <button className="hover:text-white transition-colors">Store</button>
        <button className="hover:text-white transition-colors">Game mode</button>
        <button className="hover:text-white transition-colors">Setting</button>
      </nav>

      {/* Right Section: Stats & Icons */}
      <div className="flex items-center gap-6">
        {/* Coins Stat */}
        <div className="flex items-center gap-2">
          <span className="text-[#d4af37] text-sm font-medium">Coins</span>
          <img src={coinsIcon} alt="Coins" className="w-10 h-10" />
        </div>

        {/* Call a Friend */}
        <div className="flex items-center gap-2">
          <span className="text-[#d4af37] text-sm font-medium whitespace-nowrap">Call a friend</span>
          <img src={callAFriend} alt="Call friend" className="w-10 h-10" />
        </div>

        {/* 50:50 Lifeline */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">50 : 50</span>
          <img src={fiftyFifty} alt="Lifeline" className="w-10 h-10" />
        </div>

        {/* Audience Lifeline */}
        <div className="flex items-center gap-2">
          <span className="text-[#d4af37] text-sm font-medium">Audience</span>
          <img src={audience} alt="Audience" className="w-10 h-10" />
        </div>

        {/* Utility Icons (Bell, Door, Avatar) */}
        <div className="flex items-center gap-4 ml-4 border-l border-gray-700 pl-4">
          <button><img src={bell} alt="Alert" className="w-10 h-10" /></button>
          <button><img src={door} alt="Exit" className="w-10 h-10" /></button>
          <div className="w-8 h-8 rounded-full bg-cyan-200 overflow-hidden border border-gray-600">
             <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
