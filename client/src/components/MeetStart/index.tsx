import Chat from "./Chat";
import Footer from "./Footer";
import Video from "./Video";
import { io } from "socket.io-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MeetStart = () => {
  const history = useRouter();
  const meeting_id = history.query.id;
  console.log(meeting_id);

  useEffect(() => {
    if (meeting_id) {
      const socket = io(`${process.env.NEXT_PUBLIC_BACKEND}`);
      socket.on("connect", () => {
        console.log("connected inf rontend");
      });
        console.log("connected")
        socket.emit("userconnection");
    }
  }, [meeting_id]);

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
