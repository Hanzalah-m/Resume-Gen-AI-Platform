const express = require('express')
const authController = require("../controllers/auth.controllers")
const authMiddleware = require("../middlewares/auth.middleware")

const router = express.Router()


router.post('/register', authController.registerUserController)
router.post('/login', authController.loginUserController)
router.post('/logout', authController.logoutUserController)
router.get('/me', authMiddleware.authUser, authController.getUserController)

module.exports = router