import React from 'react'
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="flex gap-8 items-center mt-2">
      <div className="p-1 ring rounded-md ring-offset-[2] bg-white ring-[#F9C221]">
        <a
          href="https://twitter.com/ayesorofemi"
          target="_blanket"
          className=""
        >
          <BsTwitter color="#1DA1F2" size={24} />
        </a>
      </div>
      <div className="p-1 ring rounded-md ring-offset-[5] bg-white ring-[#F9C221]">
        <a href="https://github.com/AyesoroFemi" target="_blanket" className="">
          <FaGithub color="black" size={24} />
        </a>
      </div>
      <div className="p-1 ring rounded-md ring-offset-[5] bg-white ring-[#F9C221]">
        <a
          href="https://www.linkedin.com/in/femi-ayesoro-30837683/"
          target="_blanket"
          className=""
        >
          <FaLinkedinIn color="#0e76a8" size={24} />
        </a>
      </div>
      <div className="p-1 ring rounded-md ring-offset-[5] bg-white ring-[#F9C221]">
        <a
          href="https://www.youtube.com/@femiayesoro"
          target="_blanket"
          className=""
        >
          <FaYoutube color="#FF0000" size={24} />
        </a>
      </div>
    </div>
  );
}

export default SocialIcons