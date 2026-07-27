import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, Store, Gamepad2, Settings, Phone, Users, Divide, Coins } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useLifeline } from '../../features/game/gameSlice'; // Adjust import path to match your slice
import { showToast } from '../../features/toast/toastSlice';   // Adjust import path to match your slice

export const GameHeader: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // Redux selectors for lifelines and user state
    const lifelines = useAppSelector((state) => state.game.lifelines) || {
        phoneAFriend: 1,
        fiftyFifty: 1,
        askAudience: 1,
    };
    const coins = useAppSelector((state) => state.game.coins) ?? 0;

    const handleUseLifeline = (type: 'phoneAFriend' | 'fiftyFifty' | 'askAudience', name: string) => {
        if (lifelines[type] <= 0) {
            dispatch(showToast({ message: `${name} lifeline is no longer available!`, type: 'warning' }));
            return;
        }

        dispatch(useLifeline({ type }));
        dispatch(showToast({ message: `Used ${name} lifeline!`, type: 'info' }));
    };

    const handleLogout = () => {
        // Handle logout / exit session logic
        navigate('/login');
    };

    return (
        <header className="w-full bg-[#141516] border-b border-[#353536] px-4 py-3 flex items-center justify-between font-prompt">
            {/* Left Nav Cluster */}
            <nav className="flex items-center gap-4 md:gap-6" aria-label="Game navigation">
                <button
                    type="button"
                    onClick={() => navigate('/store')}
                    className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#F9BC07] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9BC07] rounded-md px-2 py-1 text-sm md:text-base font-medium"
                    aria-label="Open Store"
                >
                    <Store className="w-5 h-5" aria-hidden="true" />
                    <span className="hidden sm:inline">Store</span>
                </button>

                <button
                    type="button"
                    onClick={() => navigate('/game-mode')}
                    className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#F9BC07] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9BC07] rounded-md px-2 py-1 text-sm md:text-base font-medium"
                    aria-label="Select Game Mode"
                >
                    <Gamepad2 className="w-5 h-5" aria-hidden="true" />
                    <span className="hidden sm:inline">Game Mode</span>
                </button>

                <button
                    type="button"
                    onClick={() => navigate('/settings')}
                    className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#F9BC07] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9BC07] rounded-md px-2 py-1 text-sm md:text-base font-medium"
                    aria-label="Open Settings"
                >
                    <Settings className="w-5 h-5" aria-hidden="true" />
                    <span className="hidden sm:inline">Settings</span>
                </button>
            </nav>

            {/* Middle Lifelines & Coins Counter (Desktop/Tablet) */}
            <div className="hidden md:flex items-center gap-4">
                {/* Coins Badge */}
                <div 
                    className="flex items-center gap-1.5 bg-[#1F2022] border border-[#353536] px-3 py-1.5 rounded-full text-[#F9BC07] text-sm font-semibold"
                    aria-label={`${coins} coins available`}
                >
                    <Coins className="w-4 h-4" aria-hidden="true" />
                    <span>{coins}</span>
                </div>

                {/* Lifeline: Phone a Friend */}
                <button
                    type="button"
                    onClick={() => handleUseLifeline('phoneAFriend', 'Call a Friend')}
                    disabled={lifelines.phoneAFriend <= 0}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#F9BC07] ${
                        lifelines.phoneAFriend > 0
                            ? 'bg-[#1F2022] border-[#353536] text-white hover:border-[#F9BC07]'
                            : 'bg-[#141516] border-[#262626] text-[#525252] cursor-not-allowed'
                    }`}
                    aria-label={`Use Call a Friend lifeline (${lifelines.phoneAFriend} remaining)`}
                >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call ({lifelines.phoneAFriend})</span>
                </button>

                {/* Lifeline: 50:50 */}
                <button
                    type="button"
                    onClick={() => handleUseLifeline('fiftyFifty', '50:50')}
                    disabled={lifelines.fiftyFifty <= 0}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#F9BC07] ${
                        lifelines.fiftyFifty > 0
                            ? 'bg-[#1F2022] border-[#353536] text-white hover:border-[#F9BC07]'
                            : 'bg-[#141516] border-[#262626] text-[#525252] cursor-not-allowed'
                    }`}
                    aria-label={`Use 50:50 lifeline (${lifelines.fiftyFifty} remaining)`}
                >
                    <Divide className="w-4 h-4" aria-hidden="true" />
                    <span>50:50 ({lifelines.fiftyFifty})</span>
                </button>

                {/* Lifeline: Ask the Audience */}
                <button
                    type="button"
                    onClick={() => handleUseLifeline('askAudience', 'Ask Audience')}
                    disabled={lifelines.askAudience <= 0}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#F9BC07] ${
                        lifelines.askAudience > 0
                            ? 'bg-[#1F2022] border-[#353536] text-white hover:border-[#F9BC07]'
                            : 'bg-[#141516] border-[#262626] text-[#525252] cursor-not-allowed'
                    }`}
                    aria-label={`Use Ask Audience lifeline (${lifelines.askAudience} remaining)`}
                >
                    <Users className="w-4 h-4" aria-hidden="true" />
                    <span>Audience ({lifelines.askAudience})</span>
                </button>
            </div>

            {/* Right Utility Cluster */}
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => navigate('/notifications')}
                    className="p-2 text-[#9CA3AF] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9BC07] rounded-full"
                    aria-label="View notifications"
                >
                    <Bell className="w-5 h-5" aria-hidden="true" />
                </button>

                <button
                    type="button"
                    onClick={() => navigate('/profile')}
                    className="w-8 h-8 rounded-full overflow-hidden border border-[#353536] hover:border-[#F9BC07] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9BC07]"
                    aria-label="View profile"
                >
                    <img src="/avatar-placeholder.png" alt="" className="w-full h-full object-cover" />
                </button>

                <button
                    type="button"
                    onClick={handleLogout}
                    className="p-2 text-[#9CA3AF] hover:text-[#E94B25] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E94B25] rounded-full"
                    aria-label="Exit game session"
                >
                    <LogOut className="w-5 h-5" aria-hidden="true" />
                </button>
            </div>
        </header>
    );
};

export default GameHeader;