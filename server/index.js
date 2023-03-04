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
    const other_user = userConnect.filter(
      (user) => user.meetingId == data.meetingId
    );
    userConnect.push({
      connectionId: socket.id,
      userId: data.userId,
      meetingId: data.meetingId,
    });
    console.log(userConnect, other_user);
    other_user.forEach((user)=> {
      socket.to(user.connectionId).emit("inform_others_me", {
        other_user: data.userId,
        socketId: socket.id
      })
    })
  });
});

httpServer.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}`)
);
