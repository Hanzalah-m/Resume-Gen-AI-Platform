const userModel = require("../models/user.models")
const jwt = require('jsonwebtoken')

async function registerUserController(req, res) {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Required"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            username,
            email
        ]
    })

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "user already exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_SECRET, expiresIn = '1d')

    res.cookie = ('token', token)

    res.status(201).json({
        message: 'user registerd successfully',
        user: {
            _id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

async function loginUserController(req, res) {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Required"
        })
        const user = await userModel.findOne({
            $or: [
                username,
                email
            ]
        })

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "invalid credentials"
            })

        }

        const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_SECRET, expiresIn = '1d')
        res.cookie = ('token', token)

        res.status(200).json({
            message: 'user logged in successfully',
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        })
    }
}

async function logoutUserController(req, res) {
   const token = req.cookies.token

   if (token) {
    await tokenblacklistModel.create({ token })
    } 
 res.clearCookie("token")

    res.status(200).json({
        message: "User logged out successfully"
    })
}

async function getUserController(req, res) {
    const user = await userModel.findById(req.user._id)

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        })
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
    registerUserController,
    loginUserController,
    logoutUserController,
    getUserController
}