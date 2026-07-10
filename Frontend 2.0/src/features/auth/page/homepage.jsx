import { useState } from 'react'
import Login from './login.jsx'
import Register from './Register.jsx'

function homepage() {
    const [activePage, setActivePage] = useState('login')
    const isLogin = activePage === 'login'


    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 min-h-screen px-4 py-8 sm:px-6 sm:py-10 lg:px-10'>
                <div className="relative flex flex-col items-center justify-center px-0 py-0 w-full max-w-4xl">

                    <div className="mb-6 md:mb-8 px-4 flex w-full flex-col gap-3 md:gap-4 rounded-2xl md:rounded-4xl border border-[#285A48]/50 bg-[#091413]/40 py-4 md:py-3 text-center shadow-lg shadow-[#081312]/50 backdrop-blur-xl sm:justify-between sm:text-left">
                        <h1 className='ml-0 sm:ml-2 text-2xl md:text-4xl font-bold text-[#B0E4CC]'>
                            CVForge
                        </h1>
                        <h2 className="ml-0 sm:ml-2 text-xs md:text-sm text-[#D3EEE2]/90 leading-6 md:leading-7">
                            CVForge is an AI-powered platform that helps users create professional, ATS-optimized resumes tailored to specific job roles. By leveraging generative AI, it transforms basic user information into recruiter-friendly resume content, provides intelligent improvement suggestions, and streamlines the resume-building process.
                        </h2>
                    </div>

                    <div className="grid w-full gap-3 md:gap-4 px-4 grid-cols-1 sm:grid-cols-2">
                        <div className="rounded-2xl md:rounded-4xl border border-[#285A48]/50 bg-[#0C1E1A]/80 p-4 md:p-6 shadow-lg shadow-[#0B1B18]/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#55B88B]/70">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.45em] text-[#B0E4CC]/60">AI Resume Generation</p>
                            <h3 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-white">Generate complete resumes from simple prompts.</h3>
                            <p className="mt-2 md:mt-3 text-xs md:text-sm leading-5 md:leading-6 text-[#C2E4D0]/90">
                                Just tell CVForge your desired role and experience level, and get a polished resume instantly.
                            </p>
                        </div>

                        <div className="rounded-2xl md:rounded-4xl border border-[#285A48]/50 bg-[#0C1E1A]/80 p-4 md:p-6 shadow-lg shadow-[#0B1B18]/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#55B88B]/70">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.45em] text-[#B0E4CC]/60">ATS Optimization</p>
                            <h3 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-white">Improve compatibility with applicant tracking systems.</h3>
                            <p className="mt-2 md:mt-3 text-xs md:text-sm leading-5 md:leading-6 text-[#C2E4D0]/90">
                                Optimize your resume text and structure to pass recruiter filters and land more interviews.
                            </p>
                        </div>

                        <div className="rounded-2xl md:rounded-4xl border border-[#285A48]/50 bg-[#0C1E1A]/80 p-4 md:p-6 shadow-lg shadow-[#0B1B18]/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#55B88B]/70">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.45em] text-[#B0E4CC]/60">Export Options</p>
                            <h3 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-white">Download as PDF.</h3>
                            <p className="mt-2 md:mt-3 text-xs md:text-sm leading-5 md:leading-6 text-[#C2E4D0]/90">
                                Export your finished resume in a clean, print-ready format that recruiters can open instantly.
                            </p>
                        </div>

                        <div className="rounded-2xl md:rounded-4xl border border-[#285A48]/50 bg-[#0C1E1A]/80 p-4 md:p-6 shadow-lg shadow-[#0B1B18]/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#55B88B]/70">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.45em] text-[#B0E4CC]/60">Skill Enhancement</p>
                            <h3 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-white">AI suggests missing skills based on job roles.</h3>
                            <p className="mt-2 md:mt-3 text-xs md:text-sm leading-5 md:leading-6 text-[#C2E4D0]/90">
                                Fill gaps with relevant skills and improve your resume's match rate for target positions.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="mb-6 md:mb-8 justify-center flex flex-col gap-3 md:gap-4 rounded-2xl md:rounded-4xl border border-[#285A48]/50 bg-[#091413]/40 px-4 py-4 md:py-3 text-center shadow-lg shadow-[#081312]/50 backdrop-blur-xl w-full max-w-md lg:max-w-sm">
                    <div>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.45em] text-[#B0E4CC]/70">Resume AI</p>
                        <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-white lg:text-4xl">{isLogin ? 'Welcome Back' : 'Get started for Free'}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2 md:gap-3">
                        <button
                            type="button"
                            onClick={() => setActivePage('login')}
                            className={`rounded-full px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm font-semibold transition ${isLogin ? 'bg-[#408A71] text-white shadow-lg shadow-[#408A71]/20' : 'border border-[#408A71] bg-[#091413]/80 text-[#B0E4CC]/80 hover:bg-[#10221B]'}`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => setActivePage('register')}
                            className={`rounded-full px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm font-semibold transition ${!isLogin ? 'bg-[#408A71] text-white shadow-lg shadow-[#408A71]/20' : 'border border-[#408A71] bg-[#091413]/80 text-[#B0E4CC]/80 hover:bg-[#10221B]'}`}
                        >
                            Register
                        </button>



                    </div>{isLogin ? <Login /> : <Register />}
                </div>
            </div>
        </div>
    )
}

export default homepage