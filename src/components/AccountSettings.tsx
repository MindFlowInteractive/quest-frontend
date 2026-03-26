import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Calendar, Clock } from 'lucide-react';
import arrowLeft from '../assets/arrow-left.svg';
import ProfileForm from './ProfileForm';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setNotificationSchedule } from '../features/preferences/preferencesSlice';
import { DeleteAccountModal } from './modals/DeleteAccountModal';

interface ToggleProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    id: string;
}

const Toggle = ({ label, checked, onChange, id }: ToggleProps) => (
    <div className="flex items-center justify-between py-4">
        <label htmlFor={id} className="text-[#9CA3AF] text-lg cursor-pointer select-none">
            {label}
        </label>
        <button
            id={id}
            role="switch"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className="relative w-12 h-6 bg-[#353536] rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9BC07] focus:ring-offset-2 focus:ring-offset-[#141516]"
        >
            <span
                className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 shadow-sm
          ${checked ? 'translate-x-6 bg-[#F9BC07]' : 'translate-x-0 bg-[#717171]'}
        `}
            />
        </button>
    </div>
);

type ThemeOption = 'dark' | 'light' | 'system';
type TabOption = 'Profile' | 'Account' | 'Game setting';

interface NotificationState {
    schedule: string;
}

interface ReminderState {
    day: string;
    time: string;
}

interface SettingsState {
    theme: ThemeOption;
    notifications: NotificationState;
    reminder: ReminderState;
    volume: number;
}

const AccountSettings = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const notificationSchedule = useAppSelector((s) => s.preferences.notificationSchedule);

    const [state, setState] = useState<SettingsState>(() => {
        const saved = localStorage.getItem('quest_account_settings');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error(e);
            }
        }
        return {
            theme: 'dark',
            notifications: { schedule: 'Daily' },
            reminder: { day: 'Monday', time: '14:30' },
            volume: 37,
        };
    });

    const [activeTab, setActiveTab] = useState<TabOption>('Account');
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('quest_account_settings', JSON.stringify(state));
        if (state.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (state.theme === 'light') {
            document.documentElement.classList.remove('dark');
        }
    }, [state]);

    const handleThemeChange = (newTheme: ThemeOption) => {
        setState((prev) => ({ ...prev, theme: newTheme }));
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, volume: parseInt(e.target.value, 10) }));
    };

    const handleNotificationChange = (val: string) => {
        if (val === 'Daily' || val === 'Weekly' || val === 'Monthly' || val === 'Never') {
            dispatch(setNotificationSchedule(val));
        }

        setState((prev) => ({ ...prev, notifications: { ...prev.notifications, schedule: val } }));
    };

    return (
        <div className="min-h-screen bg-[#141516] text-white font-prompt p-6 md:p-12 lg:px-24">
            <header className="flex flex-col gap-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16">
                        <h1 className="text-3xl md:text-4xl text-[#0A746D]">Setting</h1>

                        <nav className="flex items-center gap-8 text-lg text-[#9CA3AF]">
                            {(['Profile', 'Account', 'Game setting'] as TabOption[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`
                    relative pb-1 transition-colors hover:text-white
                    ${activeTab === tab ? 'text-white font-medium' : ''}
                  `}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F9BC07] rounded-full" />
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <button onClick={() => navigate(-1)} className="hidden md:flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors group">
                        <img src={arrowLeft} alt="arrow-left" className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-lg tracking-wide">BACK</span>
                    </button>
                </div>
            </header>

            <main className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

                {/* PROFILE TAB */}
                {activeTab === 'Profile' && (
                    <section>
                        <h2 className="text-2xl font-medium mb-6 text-[#CFFDED]">Profile Settings</h2>
                        <ProfileForm />
                    </section>
                )}

                {/* GAME SETTING TAB (Placeholder) */}
                {activeTab === 'Game setting' && (
                    <section className="text-center py-20">
                        <h2 className="text-2xl font-medium mb-6 text-[#CFFDED]">Game Settings</h2>
                        <p className="text-[#9CA3AF]">Game specific settings will appear here.</p>
                    </section>
                )}

                {/* ACCOUNT TAB (Existing Content) */}
                {activeTab === 'Account' && (
                    <>
                        <section aria-labelledby="notification-heading">
                            <h2 id="notification-heading" className="text-2xl font-medium mb-6 text-[#CFFDED]">Notification</h2>

                            <div className="space-y-2">
                                <label className="text-[#717171] text-lg block">Notification Schedule</label>
                                <div className="relative group">
                                    <select
                                        value={notificationSchedule}
                                        onChange={(e) => handleNotificationChange(e.target.value)}
                                        className="w-full bg-transparent border-b border-[#353536] text-[#9CA3AF] py-3 pr-10 appearance-none focus:outline-none focus:border-[#F9BC07] cursor-pointer"
                                    >
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Never">Never</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-[#717171] pointer-events-none group-hover:text-[#F9BC07] transition-colors" />
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="reminder-heading">
                            <h2 id="reminder-heading" className="text-2xl font-medium mb-6  text-[#CFFDED]">Reminder Me</h2>
                            <p className="text-[#717171] text-lg mb-4">Notification Schedule</p>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-[#353536] pb-3 hover:border-[#F9BC07] transition-colors group">
                                    <span className="text-[#9CA3AF] text-lg">Day</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#9CA3AF] group-hover:text-white transition-colors">{state.reminder.day}</span>
                                        <Calendar className="w-5 h-5 text-[#717171] group-hover:text-[#F9BC07] transition-colors" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-b border-[#353536] pb-3 hover:border-[#F9BC07] transition-colors group">
                                    <span className="text-[#9CA3AF] text-lg">Time</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#9CA3AF] group-hover:text-white transition-colors">
                                            02 : 30pm GMT +1
                                        </span>
                                        <Clock className="w-5 h-5 text-[#717171] group-hover:text-[#F9BC07] transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="theme-heading">
                            <h2 id="theme-heading" className="text-2xl font-medium mb-2 text-[#CFFDED]">Theme</h2>
                            <p className="text-[#717171] text-lg mb-4">Notification Schedule</p>

                            <div className="space-y-1">
                                <Toggle
                                    id="theme-dark"
                                    label="Dark Mode"
                                    checked={state.theme === 'dark'}
                                    onChange={() => handleThemeChange('dark')}
                                />
                                <Toggle
                                    id="theme-light"
                                    label="Light Mode"
                                    checked={state.theme === 'light'}
                                    onChange={() => handleThemeChange('light')}
                                />
                                <Toggle
                                    id="theme-system"
                                    label="System Mode"
                                    checked={state.theme === 'system'}
                                    onChange={() => handleThemeChange('system')}
                                />
                            </div>
                        </section>

                        <section aria-labelledby="sound-heading">
                            <h2 id="sound-heading" className="text-2xl font-medium mb-8 text-[#CFFDED]">Sound</h2>

                            <div className="flex items-center gap-6 pb-4">
                                <label htmlFor="volume-slider" className="text-[#9CA3AF] text-lg min-w-15">Volume</label>

                                <div className="relative flex-1 h-1.5 bg-[#353536] rounded-full group cursor-pointer">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-[#9CA3AF] rounded-full group-hover:bg-[#F9BC07] transition-colors"
                                        style={{ width: `${state.volume}%` }}
                                    />
                                    <input
                                        id="volume-slider"
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={state.volume}
                                        onChange={handleVolumeChange}
                                        className="absolute w-full h-full opacity-0 cursor-pointer"
                                        aria-label="Volume Control"
                                    />
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 h-4 w-1 bg-[#9CA3AF] group-hover:bg-[#F9BC07] transition-colors pointer-events-none"
                                        style={{ left: `${state.volume}%` }}
                                    />
                                </div>

                                <span className="text-[#9CA3AF] text-lg w-12 text-right tabular-nums">
                                    {state.volume}%
                                </span>
                            </div>
                        </section>
                    </>
                )}
            </main>

            {/* DIVIDER & FOOTER - Only show on Account Tab as per design context, or all tabs? 
                Usually settings footers are global, but the prompt implies "Account Data" which might be specific to Account Tab. 
                However, for now I will keep it visible or hide it based on standard UX. 
                Given the request "Please this page should only be on account", it implies the WHOLE content seen before.
                So I will wrap the footer in the Account check too.
            */}
            {activeTab === 'Account' && (
                <>
                    <hr className="border-[#353536] mb-12" />

                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <section className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-medium">Account Deletion Information</h3>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed">
                                If you are considering deleting your LogiQuest account, please take a moment to read the following important information:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF] text-sm">
                                <li>
                                    <span className="text-white font-medium">Permanent Action:</span> Deleting your account is a permanent action. Once deleted, you will lose access to your account, including all your game progress, scores, and any purchased items or coins.
                                </li>
                                <li>
                                    <span className="text-white font-medium">Data Removal:</span> All personal information associated with your account will be permanently removed. This includes your username, email address, and any related gameplay data.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-medium">Need Help?</h3>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed">
                                If you have any questions or need assistance, feel free to contact our support team at <a href="mailto:support@logiquest.com" className="underline hover:text-[#F9BC07] transition-colors">support@logiquest.com</a>. We value your feedback and are here to help!
                                <br />
                                Thank you for being a part of the LogiQuest community!
                            </p>
                        </section>

                        <button
                            className="bg-[#E94B25] hover:bg-[#D43A15] text-white font-semibold py-3 px-8 rounded-md transition-colors focus:ring-2 focus:ring-[#E94B25] focus:ring-offset-2 focus:ring-offset-[#141516]"
                            onClick={()=> setOpenModal(true)}
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}

            <DeleteAccountModal setCloseModal={setOpenModal} openModal={openModal} />
        </div>
    );
};

export default AccountSettings;
