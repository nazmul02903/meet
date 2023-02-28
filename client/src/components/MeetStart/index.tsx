import Chat from "./Chat";
import Footer from "./Footer";
import Video from "./Video";
import { io } from "socket.io-client";

const MeetStart = () => {
  const socket = io(
    "https://3001-nazmul02903-meet-e30xhwixlji.ws-us88.gitpod.io"
  );
  socket.on("connect", () => {
    console.log("from client side", socket.id);
  });
  return (
    <div className="container flex flex-col justify-end mx-auto w-full h-screen">
      <div className="flex gap-2">
        <Video />
        <Chat />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MeetStart;
