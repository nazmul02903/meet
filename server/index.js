const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv")
const cors = require("cors");

const app = express();

dotenv.config({path: "server/config/.env"})

app.use(cors({
  origin: "https://3000-nazmul02903-meet-e30xhwixlji.ws-us89.gitpod.io",
  credentials: true
}));


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log(socket.id)
});

httpServer.listen(process.env.PORT, () => console.log(`Server is running at ${process.env.PORT}`));