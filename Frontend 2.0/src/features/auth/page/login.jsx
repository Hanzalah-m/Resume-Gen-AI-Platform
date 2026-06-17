import { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({ login: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Login submitted', formData)
  }

  return (
    <div className="w-full max-w-xl rounded-[32px] border border-[#285A48] bg-[#10221B]/95 p-8 shadow-[0_30px_80px_rgba(14,47,40,0.35)] backdrop-blur-xl">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B0E4CC]">Welcome back</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Sign in to your account</h1>
        <p className="mt-3 text-sm text-[#B0E4CC]/80">Use your username or email and password to continue.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-[#B0E4CC]">Username or email</span>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="johndoe or john@example.com"
            className="mt-2 w-full rounded-3xl border border-[#408A71] bg-[#091413] px-4 py-3 text-[#E8F6ED] placeholder:text-[#B0E4CC]/50 focus:border-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71]/40"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#B0E4CC]">Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-2 w-full rounded-3xl border border-[#408A71] bg-[#091413] px-4 py-3 text-[#E8F6ED] placeholder:text-[#B0E4CC]/50 focus:border-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71]/40"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-3xl bg-gradient-to-r from-[#285A48] to-[#408A71] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#285A48]/30 transition hover:-translate-y-0.5 hover:shadow-[#408A71]/30"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
