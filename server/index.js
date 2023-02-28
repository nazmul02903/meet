const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv")

const app = express();

dotenv.config({path: "server/config/.env"})


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log(socket.id)
});

httpServer.listen(process.env.PORT, () => console.log(`Server is running at ${process.env.PORT}`));