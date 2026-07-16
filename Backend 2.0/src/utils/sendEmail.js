async function sendOtpEmail(toEmail, otp) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "Resume Gen AI",
        email: process.env.BREVO_SENDER,
      },
      to: [
        {
          email: toEmail,
        },
      ],
      subject: "Your Verification Code",
      htmlContent: `
        <h2>Your OTP is ${otp}</h2>
        <p>This OTP expires in 5 minutes.</p>
      `,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data.message || "Failed to send email");
  }

  console.log("Email sent successfully");
  console.log(data);
}

module.exports = { sendOtpEmail };