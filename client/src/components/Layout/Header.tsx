import Image from "next/image";

const Header = () => {
  return (
    <div className="flex gap-3 py-3 px-4 text-[#5f6368] text-2xl items-center ">
        <Image
          src={
            "https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
          }
          height={40}
          width={124}
          alt="logo"
        />
        <h3>Meet</h3>
    </div>
  );
};

export default Header;
