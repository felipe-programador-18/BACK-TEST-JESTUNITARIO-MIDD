const express = require('express')
const api = express()
const port  = process.env.Port || 3000
const path = require('path')
const caughtRouter = require('./routes/index')



// get and using css in folder views
api.use(express.static(path.join(__dirname, 'views')))

api.set('views', path.join(__dirname, 'views'))
api.set('view engine','ejs')




// make this to use router !!
api.use('/', caughtRouter)

api.listen(port, () => console.log('listening port: ' + 3000))