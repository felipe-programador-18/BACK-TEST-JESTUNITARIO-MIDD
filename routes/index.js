const express = require('express')
const router = express.Router()
const IndexControllers =  require('../controllers/index')

router.get('/', IndexControllers.Home )


module.exports = router