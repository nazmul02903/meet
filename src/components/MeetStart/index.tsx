import Chat from "./Chat"
import Footer from "./Footer"
import Video from "./Video"

const MeetStart = () => {
    return(
        <div className="container flex flex-col justify-end mx-auto w-full h-screen">
            <div className="flex gap-2">
                <Video/>
                <Chat/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default MeetStart