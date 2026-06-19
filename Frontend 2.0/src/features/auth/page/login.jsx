import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'


const Login = () => {
  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()
  // const [formData, setFormData] = useState({ email: '', password: '' })

  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setFormData((prev) => ({ ...prev, [name]: value }))
  // }

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   await handleLogin(email, password);
  //   navigate('/dashboard')
  // }

const [identifier, setIdentifier] = useState("");
const [password, setPassword] = useState("");

const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    password
  };

  if (isEmail(identifier)) {
    payload.email = identifier;
  } else {
    payload.username = identifier;
  }

  await handleLogin(payload.username, payload.email, payload.password);
  navigate('/dashboard')
};



  if (loading) { 
    return (
      <div className="flex h-[50%] items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#408A71]"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-8 shadow-[0_30px_80px_rgba(14,47,40,0.35)] backdrop-blur-xl">
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
            name="text"
            id="text"
            // value={formData.login}
            // onChange={handleChange}
            // 
            onChange={(e) => setIdentifier(e.target.value)}
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
            id="password"
            // value={formData.password}
            // onChange={handleChange}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-2 w-full rounded-3xl border border-[#408A71] bg-[#091413] px-4 py-3 text-[#E8F6ED] placeholder:text-[#B0E4CC]/50 focus:border-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71]/40"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-3xl bg-linear-to-r from-[#285A48] to-[#408A71] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#285A48]/30 transition hover:-translate-y-0.5 hover:shadow-[#408A71]/30"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
