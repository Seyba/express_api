const express = require("express");
require('dotenv').config()
const databaseConnection = require('./config/database')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const colorRouter = require('./routes/colorRoutes')
const enquiryRouter = require('./routes/enqRoutes')
const app = express();
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => res.send("Express on Vercel"));
//app.get("/api/user", (req, res) => res.send({"name":"Moussa"}))

app.use(express.json());
app.use(logger('dev'))
app.use(cookieParser())
app.use(cors())

app.use('/api/color', colorRouter)
app.use('/api/enq', enquiryRouter)
//app.use('/api/user', authRouter)

//* connect to the database
databaseConnection()

app.listen(PORT, () => console.log("Server ready on port 3000."));

module.exports = app;