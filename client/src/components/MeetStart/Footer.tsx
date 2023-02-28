import { HiOutlineMicrophone } from "react-icons/hi";
import { BiVideo } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex justify-between py-3">
      <div>Meeting details</div>
      <div className="flex gap-4 items-center">
        <span className="icon_hover">
          <HiOutlineMicrophone size={25} />
        </span>
        <span className="icon_hover">
          <BiVideo size={25} />
        </span>
      </div>
      <div className="flex gap-4">
        <span className="icon_hover">
          <FaUserFriends size={25} />
        </span>
        <span className="icon_hover">
          <MdOutlineMessage size={25} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
