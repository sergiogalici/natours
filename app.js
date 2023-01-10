const express = require("express")
const morgan = require("morgan")
const tourRoutes = require("./routes/tourRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express()

//MIDDLEWARES

if (process.env.NODE_ENV === "development") {
    console.log("WE ARE IN DEVELOPMENT!!")
    app.use(morgan("dev"))
}

app.use(express.json())

app.use((req, res, next) => {
    console.log("Hello from the middleware")
    req.requestTime = new Date()
    next()
})


// ROUTES MIDDLEWARES

app.use("/api/v1/tours", tourRoutes)
app.use("/api/v1/users", userRoutes)

module.exports = app

