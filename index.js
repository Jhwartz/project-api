const express = require('express')
const dotenv = require('dotenv')
const connectDB =require('./config/connectDB')
const { errorHandler, notFound } = require("./middlewares/error.middleware");

dotenv.config();
connectDB();
const app = express();

const { mentorsRouter } = require("./routes/mentor.routes");
const { usersRoute } = require("./routes/user.routes");
const { bookingRouter } = require("./routes/bookings.routes");

//middleware
app.use(express.json())
app.use("/api/v1/mentors", mentorsRouter);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/bookings", bookingRouter);

app.get('/', (req, res)=> {
    res.send('<h1>Welcome to MentorMe</h1>')
})

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7070;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});