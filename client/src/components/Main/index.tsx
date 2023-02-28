import { MdVideoCall } from "react-icons/md";
import { BsKeyboardFill } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArea from "./Slider";
import LeftArea from "./LeftArea";

const MainBody = () => {
  return (
    <div className="container flex lg:gap-[350px] items-center mx-auto">
      <LeftArea/>
      <div className="w-[350px] ">
        <SliderArea />
      </div>
    </div>
  );
};

export default MainBody;
