import { MdVideoCall } from "react-icons/md";
import { BsKeyboardFill } from "react-icons/bs";

const LeftArea = () => {
    return(
        <div className="flex flex-col gap-7">
        <h2 className="text-[40px] font-semibold">
          Premium video Meetings <br /> Now Free for Everyone.
        </h2>
        <p>
          We re-engineered the service we built for secure business <br />{" "}
          meetings, Google Meet, to make it free and available for all
        </p>
        <div className="flex gap-5 items-stretch pb-10 mt-7 border-b">
          <div className="flex gap-2 items-center px-3 text-white bg-blue-500 rounded-md">
            <MdVideoCall size={25} />
            <span>New Meeting</span>
          </div>
          <div className="flex gap-2 items-stretch">
            <div className="flex gap-2 items-center p-2 rounded-sm border border-gray-400">
              <BsKeyboardFill size={25} />
              <input
                className="bg-transparent border-none outline-none"
                type="text"
                placeholder="Enter the code"
              />
            </div>
            <button className="px-4 rounded-md transition-all duration-300 hover:bg-gray-200">
              Join
            </button>
          </div>
        </div>
      </div>
    )
}

export default LeftArea