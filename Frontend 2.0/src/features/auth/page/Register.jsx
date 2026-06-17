import { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Register submitted', formData)
  }

  return (
    <div className="w-full max-w-xl rounded-[32px] border border-[#285A48] bg-[#10221B]/95 p-8 shadow-[0_30px_80px_rgba(14,47,40,0.35)] backdrop-blur-xl">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B0E4CC]">Create an account</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Register and get started</h1>
        <p className="mt-3 text-sm text-[#B0E4CC]/80">Enter your username, email, and password to join.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-[#B0E4CC]">Username</span>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Create a username"
            className="mt-2 w-full rounded-3xl border border-[#408A71] bg-[#091413] px-4 py-3 text-[#E8F6ED] placeholder:text-[#B0E4CC]/50 focus:border-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71]/40"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#B0E4CC]">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
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
            placeholder="Create a password"
            className="mt-2 w-full rounded-3xl border border-[#408A71] bg-[#091413] px-4 py-3 text-[#E8F6ED] placeholder:text-[#B0E4CC]/50 focus:border-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71]/40"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-3xl bg-gradient-to-r from-[#285A48] to-[#408A71] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#285A48]/30 transition hover:-translate-y-0.5 hover:shadow-[#408A71]/30"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
