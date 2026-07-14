const userModel = require("../models/user.models")
const tokenBlacklistModel = require("../models/blacklist.model")
const jwt = require('jsonwebtoken')
const authMiddleware = require("../middlewares/auth.middleware")
const upload = require("../middlewares/file.middleware")
const { generateOtp } = require("../utils/generateOtp")
const { sendOtpEmail } = require("../utils/sendEmail")
const { saveOtp, getOtpEntry, clearOtp } = require("../utils/otpStore")

async function registerUserController(req, res) {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Required" })
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })

  if (isUserAlreadyExists) {
    return res.status(409).json({ message: "user already exists" })
  }

  const user = await userModel.create({ username, email, password })

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  res.cookie("token", token, {
  httpOnly: true,
  secure: true,        // required for HTTPS (Render)
  sameSite: "none",    // required for cross-site cookies (Vercel → Render)
});

  res.status(201).json({
    message: 'user registered successfully',
    user: {
      _id: user._id,
      username: user.username,
      email: user.email
    }
  })
}

// STEP 1: replaces old registerUserController — sends OTP, does NOT create user yet
async function sendOtpController(req, res) {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Required" })
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })

  if (isUserAlreadyExists) {
    return res.status(409).json({ message: "user already exists" })
  }

  const otp = generateOtp()

  saveOtp(email, otp, { username, email, password })

  try {
    await sendOtpEmail(email, otp)
  } catch (err) {
    console.error("Failed to send OTP email:", err)
    return res.status(500).json({ message: "Failed to send OTP email" })
  }

  res.status(200).json({ message: "OTP sent to email" })
}

// STEP 2: verifies OTP, then creates the user and logs them in (same as old register logic)
async function verifyOtpController(req, res) {
  const { email, otp } = req.body

  if (!email || !otp) {
    return res.status(400).json({ message: "Required" })
  }

  const entry = getOtpEntry(email)

  if (!entry) {
    return res.status(400).json({ message: "OTP expired or not found. Please request a new one." })
  }

  if (entry.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" })
  }

  // double-check in case someone else registered the same username/email while OTP was pending
  const isUserAlreadyExists = await userModel.findOne({
    $or: [
      { username: entry.pendingUserData.username },
      { email }
    ]
  })

  if (isUserAlreadyExists) {
    clearOtp(email)
    return res.status(409).json({ message: "user already exists" })
  }

  const { username, password } = entry.pendingUserData
  const user = await userModel.create({ username, email, password })

  clearOtp(email)

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,        // required for HTTPS (Render)
    sameSite: "none",    // required for cross-site cookies (Vercel → Render)
  })

  res.status(201).json({
    message: 'user registered successfully',
    user: {
      _id: user._id,
      username: user.username,
      email: user.email
    }
  })
}

async function loginUserController(req, res) {
  const { username, email, password } = req.body

  if (!(username || email) || !password) {
    return res.status(400).json({ message: "Required" })
  }

  const user = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })

  if (!user) {
    return res.status(404).json({ message: "user not found" })
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "invalid credentials" })
  }

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,        // required for HTTPS
    sameSite: "none",    // required for cross-site cookies
  })

  res.status(200).json({
    message: 'user logged in successfully',
    user: {
      _id: user._id,
      username: user.username,
      email: user.email
    }
  })
}

async function logoutUserController(req, res) {
  const token = req.cookies?.token

  if (token) {
    await tokenBlacklistModel.create({ token })
  }

  res.clearCookie("token")

  res.status(200).json({ message: "User logged out successfully" })
}

async function getUserController(req, res) {
  const user = await userModel.findById(req.user._id)

  if (!user) {
    return res.status(404).json({ message: "user not found" })
  }

  res.status(200).json({
    message: "user fetched successfully",
    user: {
      _id: user._id,
      username: user.username,
      email: user.email
    }
  })
}

module.exports = {
  sendOtpController,
  verifyOtpController,
  loginUserController,
  logoutUserController,
  getUserController
}