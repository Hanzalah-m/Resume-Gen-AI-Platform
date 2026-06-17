import { useState } from 'react'
import Login from './features/auth/page/login.jsx'
import Register from './features/auth/page/Register.jsx'

function App() {
  const [activePage, setActivePage] = useState('login')
  const isLogin = activePage === 'login'

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#091413] text-[#B0E4CC]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-5rem] top-16 h-56 w-56 rounded-full bg-[#408A71]/20 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-24 h-72 w-72 rounded-full bg-[#B0E4CC]/15 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-10 sm:px-10">
        <div className="mb-8 flex w-full max-w-4xl flex-col gap-4 rounded-full border border-[#285A48]/50 bg-[#091413]/40 px-4 py-3 text-center shadow-lg shadow-[#081312]/50 backdrop-blur-xl sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0E4CC]/70">Resume AI</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Secure access with a calm green glow.</h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActivePage('login')}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${isLogin ? 'bg-[#408A71] text-white shadow-lg shadow-[#408A71]/20' : 'border border-[#408A71] bg-[#091413]/80 text-[#B0E4CC]/80 hover:bg-[#10221B]'}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setActivePage('register')}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${!isLogin ? 'bg-[#408A71] text-white shadow-lg shadow-[#408A71]/20' : 'border border-[#408A71] bg-[#091413]/80 text-[#B0E4CC]/80 hover:bg-[#10221B]'}`}
            >
              Register
            </button>
          </div>
        </div>

        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  )
}

export default App
