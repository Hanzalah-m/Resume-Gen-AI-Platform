// utils/sendEmail.js
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Gmail App Password, not your real password
  }
})

async function sendOtpEmail(toEmail, otp) {
  await transporter.sendMail({
    from: `"Resume Gen AI" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Your verification code",
    html: `
      <p>Your OTP for account verification is:</p>
      <h2>${otp}</h2>
      <p>This code expires in 5 minutes. If you didn't request this, ignore this email.</p>
    `
  })
}

module.exports = { sendOtpEmail }