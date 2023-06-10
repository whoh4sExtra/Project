const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./routes/userRoutes")
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth",Router)
app.use("/api/messages",Router)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database has been connected");
}).catch((err) => {
    console.log(err.message)
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});