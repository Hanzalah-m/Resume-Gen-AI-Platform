const express = require('express')


const router = express()


router.get('/Register')
router.get('/login')
router.post('/logout')

module.exports = router