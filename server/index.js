const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config({ path: "server/config/.env" });

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("socket connected", socket.id)
  socket.on("userconnection", () => {
    console.log("data")
  })
});

httpServer.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}`)
);
