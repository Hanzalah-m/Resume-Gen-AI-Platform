const app = require("./src/app")
const db = require("./src/Database/db")

db()


app.listen("3000",()=>{
    console.log("Server Started")
})

