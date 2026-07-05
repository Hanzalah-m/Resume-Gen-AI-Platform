import { memo } from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';
import logo from '../assets/logo.png'

const Navbar = () => {
    const { user, loading, handleLogout } = useAuth()

    return (
        <div className="w-full py-3 px-4 md:py-4 md:px-6 flex items-center justify-between bg-[#10221B]/95 border-b border-[#285A48]">
            <div className="text-base md:text-xl font-bold text-[#B0E4CC] flex items-center gap-2 h-6 md:h-7 min-w-0">
                <img className="h-full flex-shrink-0" src={logo} alt="Logo" />
                <span className="truncate">
                    <span className="hidden sm:inline">GenAI Resume Generator</span>
                    <span className="sm:hidden">GenAI Resume</span>
                </span>
            </div>
            <div className={`flex-shrink-0 ${user ? 'space-x-4' : 'hidden'}`}>
                <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#285A48] bg-[#335748]/80 text-xs md:text-sm text-[#B0E4CC] hover:bg-[#335748]/60 transition whitespace-nowrap"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default memo(Navbar);