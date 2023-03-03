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

let userConnect = [];
io.on("connection", (socket) => {
  socket.on("userconnection", (data) => {
    userConnect.push({
      sockedId: socket.id,
      userId: data.userId,
      meetingId: data.meetingId,
    });
    const other_user = userConnect.filter((user) => user.meetingId !== data.meetingId)
    console.log(userConnect, other_user);
  });
});

httpServer.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}`)
);
