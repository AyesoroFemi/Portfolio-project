import { FaPlay } from "react-icons/fa";
import Logo from "../assets/fms.png";

function Hero() {
  return (
    // #1C1C1C
    // [#18191F]
    <div className="bg-[#1C1C1C] z-10">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-[50%_50%] pl-4 md:pl-16 h-[95%] text-white  pt-4">
        <div className="mt-[25%]">
          <div className="">
            <p className="mb-4 text-[#A1A1A1] text-lg">Frontend Developer</p>
            <div className="text-6xl md:text-7xl">
              <p>Hello, </p>
              <p className="">I'm Femi </p>
              <p>Ayesoro.</p>
            </div>
            <div className="w-[90%] flex ">
              {" "}
              <a
                href="/"
                className="font-semibold px-8 mb-8 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-[#F9C221] hover:bg-[#F99A21]"
              >
                <FaPlay />
                WATCH RESUME
              </a>
            </div>
          </div>
        </div>
        <div className="w-[95%] mt-4 md:max-w-[100%] md:z-50">
          <img className=" md:w-[100%] h-[100%]" src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
