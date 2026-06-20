import { memo } from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';

const Navbar = () => {
    const { user, loading, handleLogout } = useAuth()


    return (
        <div className="w-full py-4 px-6 flex items-center justify-between bg-[#10221B]/95 border-b border-[#285A48]">
            <div className="text-xl font-bold text-[#B0E4CC] flex items-center gap-2 h-7 ">
                <img className="h-full" src="src/assets/logo.png" alt="Logo" />
                GenAI Resume Generator
            </div>
            <div className={` ${user ? 'space-x-4' : 'hidden'}`}>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-full border border-[#285A48] bg-[#335748]/80 text-sm text-[#B0E4CC] hover:bg-[#335748]/60 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default memo(Navbar);