require("dotenv").config()
const app = require("./src/app")
const db = require("./src/Database/db")

console.log("MONGO_URI =", process.env.DB_URI)

db()

app.listen(3000, () => {
  console.log("Server Started")
})

