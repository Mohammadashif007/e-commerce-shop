const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// ! create a database connection
// ! It is also fine to create database connection separate file
mongoose
    .connect(
        "mongodb+srv://mohammadashif2024:mohammadashif2024@cluster0.kltck.mongodb.net/"
    )
    .then(() => console.log("mongoDB connected"))
    .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is now running port ${PORT}`);
})
