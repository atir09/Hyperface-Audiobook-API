// ...........Importing NPM Packages............

const express = require("express")
const cors = require("cors")
require("dotenv").config()

// ............Importing Custom Modules And Routers..........

const { connection } = require("./config/database")
const { userRouter } = require('./routes/userRoutes');
const { courseRouter } = require('./routes/courseRoutes');
const { AudioBookRouter } = require('./routes/audiobookRoutes');
const {authenticateUser}=require("./middleware/authMiddleware")

// ............Defining App............

const app = express()

// Midlleware For CORS Policy
app.use(cors())

// Middleware to parse JSON requests
app.use(express.json())

// Defining a default route for API Testing
app.get("/", (req, res) => {
    res.send(`Hyperface Courses/AudioBook API is up and running!`)
})

// Mounting The Routes
app.use('/users', userRouter);

app.use(authenticateUser)
// Protected Routes(requires Authentication)
app.use('/courses', courseRouter);
app.use('/audiobooks', AudioBookRouter);

// Starting the Server
app.listen(process.env.PORT || 3000, async () => {
    try {
        await connection
        console.log(`Successfully Connected to Database`)

    } catch (error) {
        console.log(`There was an error in connecting With the Database, Error:${error}`)
    }
    console.log(`Server is running on Port:${process.env.PORT || 3000}`)

})