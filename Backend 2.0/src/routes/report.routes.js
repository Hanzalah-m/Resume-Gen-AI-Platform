const express = require("express")
const Controller = require("../controllers/report.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const upload = require("../middlewares/file.middleware")

const Router = express.Router()



Router.post("/", authMiddleware.authUser, upload.single("resume"), Controller.generateReportController)

Router.get("/report/:Id", authMiddleware.authUser, Controller.getReportByIdController)

Router.get("/", authMiddleware.authUser, Controller.getAllReportsController)




module.exports = Router