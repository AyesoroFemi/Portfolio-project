import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import ResumeVideo from "./ResumeVideo";
import Fem from "../assets/fem.png"
function Hero() {
  const [showCv, setShowCv] = useState(false);

  // const mailtoHref =
  //   "mailto:ayesorofemi@gmail.com?subject=SendMail&body=Description";

  return (
    <div className="z-10">
      <div className="max-w-[1290px] mx-auto grid md:grid-cols-[50%_50%] pl-4 md:pl-16 h-[95%] text-white dark:text-black pt-4">
        <div className="mt-[25%]">
          <div className="">
            <p className="mb-4 text-gray-400 text-lg dark:text-gray-400 font-bold">
              Software Developer
            </p>
            <div className="text-6xl md:text-7xl">
              <p>Hello, </p>
              <p className="">I'm Femi </p>
              <p>Ayesoro.</p>
            </div>
            <div
              onClick={() => setShowCv(true)}
              className="w-[90%] flex drop-shadow-lg"
            >
              {" "}
              <a  target="_blank" href="https://www.youtube.com/@femiayesoro/videos" className="font-semibold px-8 mb-2 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-white dark:bg-black dark:text-white">
                <FaPlay />
                Watch resume
              </a>
            </div>
            <div className="w-[90%] flex drop-shadow-lg">
              {" "}
              <Link
                to="contact"
                // href={mailtoHref}
                className="font-semibold px-14 mb-8 py-4 mt-2 rounded-full cursor-pointer flex items-center gap-3  border-2 border-white dark:border-black"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        {/* {showCv && <ResumeVideo />} */}
        <div className="w-[92%] mt-4 md:max-w-[100%] md:z-50">
          <img
            className=" md:w-[100%] h-[100%]"
            src={Fem}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
