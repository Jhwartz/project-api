const express= require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const userRoute = require('./routes/userRoute');
const mentorRoute = require('./routes/mentorRoute')
const morgan = require('morgan');


const app = express();
dotenv.config();
connectDB();

//middleware
app.use(express.json())
app.use('/api/v1/users', userRoute)
//app.use('/api/mentor', schoolRoute)
app.use("/api/v1/mentors", mentorRoute);
//app.use("/api/v1/bookings", bookingRouter);
app.use(morgan('dev'))

//route
app.get("/", (req, res) =>{
    res.send("<h1>Welcome To MentorMe</h1>")
})

const PORT = process.env.PORT || 7474;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})