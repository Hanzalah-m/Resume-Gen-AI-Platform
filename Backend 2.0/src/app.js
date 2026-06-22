const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRouter = require("./routes/auth.routes")
const ReportRouter = require("./routes/report.routes")

app.use(express.json())
app.use(cookieParser())
app.use(cors({
     origin: [
    "http://localhost:5173",
    "https://airesumegen-ebon.vercel.app"
  ],
    credentials: true
}))

app.use("/api/auth", authRouter)
app.use("/api/report", ReportRouter)


module.exports = app