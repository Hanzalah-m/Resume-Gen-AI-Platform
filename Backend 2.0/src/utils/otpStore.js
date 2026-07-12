// utils/otpStore.js
const otpStore = new Map()
const OTP_EXPIRY_MS = 5 * 60 * 1000 // 5 minutes

function saveOtp(email, otp, pendingUserData) {
  otpStore.set(email, {
    otp,
    pendingUserData,
    expiresAt: Date.now() + OTP_EXPIRY_MS
  })
}

function getOtpEntry(email) {
  const entry = otpStore.get(email)
  if (!entry) return null
  if (Date.now() > entry.expiresAt) {
    otpStore.delete(email)
    return null
  }
  return entry
}

function clearOtp(email) {
  otpStore.delete(email)
}

module.exports = { saveOtp, getOtpEntry, clearOtp }