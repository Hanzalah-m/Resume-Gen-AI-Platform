const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 465,
  secure: false,
  auth: {
    user: process.env.BREVO_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

async function sendOtpEmail(toEmail, otp) {
  await transporter.sendMail({
    from: `"Resume Gen AI" <${process.env.BREVO_SENDER}>`,
    to: toEmail,
    subject: "Your Verification Code",
    html: `
      <h2>Your OTP is ${otp}</h2>
      <p>This OTP expires in 5 minutes.</p>
    `,
  });

  console.log("Email sent successfully");
}

module.exports = { sendOtpEmail };
