const express = require("express")
const app = express()
const router = require("./controllers/index")
const CORS = require("./middleware/CORS")


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(CORS)
app.use(router)


module.exports = app