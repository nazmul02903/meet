const express = require("express");
const dotenv = require("dotenv")

const app = express();

dotenv.config({path: "server/config/.env"})




app.listen(process.env.PORT, () => {
    console.log(`Server is running on the port ${process.env.PORT}`)
})