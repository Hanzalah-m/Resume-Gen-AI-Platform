import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { loading, handleRegister } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setError('')
    const success = await handleRegister(username, email, password)
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <div className="w-full max-w-xl rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-8 shadow-[0_30px_80px_rgba(14,47,40,0.35)] backdrop-blur-xl">
      <div className="mb-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B0E4CC]">Create an account</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Register</h1>
        <p className="mt-3 text-sm text-[#B0E4CC]/80">Enter your username, email, and password to join.</p>
      </div>

      <form className="space-y-2" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-[#B0E4CC]">Username</span>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (error) setError('')
            }}
            placeholder="Create a password"
            className="mt-2 w-full rounded-3xl border border-[#408A71] bg-[#091413] px-4 py-3 text-[#E8F6ED] placeholder:text-[#B0E4CC]/50 focus:border-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71]/40"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#B0E4CC]">Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              if (error) setError('')
            }}
            placeholder="Re-enter your password"
            className="mt-2 w-full rounded-3xl border border-[#408A71] bg-[#091413] px-4 py-3 text-[#E8F6ED] placeholder:text-[#B0E4CC]/50 focus:border-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71]/40"
            required
          />
        </label>

        {error && (
          <p className="text-sm font-medium text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || (confirmPassword.length > 0 && password !== confirmPassword)}
          className="w-full rounded-3xl bg-linear-to-r from-[#285A48] to-[#408A71] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#285A48]/30 transition hover:-translate-y-0.5 hover:shadow-[#408A71]/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
