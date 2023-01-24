import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div className="max-w-[1200px] text-white pt-16 mx-auto px-4 md:px-12">
      <div className="bg-[#2e3039] dark:bg-gray-100 py-8 px-4 md:px-8 rounded-xl grid gap-10 md:grid-cols-3 md:py-4">
        <div className="md:py-8">
          <h1 className="py-4 text-xl dark:text-black">Page</h1>
          <Link className="block text-gray-400 dark:text-black" to="/">
            Home
          </Link>
          <Link className="block text-gray-400 dark:text-black" to="/about">
            About
          </Link>
          <a className="block text-gray-400 dark:text-black" href="/project">
            Projects
          </a>
          <a className="block text-gray-400 dark:text-black" href="/contact">
            Contact
          </a>
        </div>
        <div className="md:py-8">
          <h1 className="py-4 text-xl dark:text-black">Contacts</h1>
          <div className="flex gap-2 items-center">
            <span className="dark:text-black">
              {" "}
              <HiOutlineMail size={24} />{" "}
            </span>
            <p className="text-gray-400 dark:text-black">
              ayesorofemi@gmail.com
            </p>
          </div>
          <div className="flex gap-2 mt-4 items-center">
            <span className="dark:text-black">
              <MdPhoneIphone size={24} />
            </span>
            <p className="text-gray-400 dark:text-black">+2349132717758</p>
          </div>
        </div>
        <div className="md:py-8 dark:text-black">
          <h1 className="py-4 text-xl">Tech Stacks</h1>
          <div className="text-gray-400 w-9/12 md:w-full dark:text-black">
            Javascript, Typescript, Redux React js, Remix.js, Vue Tailwindcss,
            Bootstrap, HTML & CSS Python, Java, Spring boot
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-12 py-4 mx-auto pt-4 pb-8 flex flex-wrap justify-between">
        <p className="dark:text-black">Copyright &copy; Femiayesoro 2023</p>
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
            <a
              href="https://github.com/AyesoroFemi"
              target="_blanket"
              className=""
            >
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
      </div>
    </div>
  );
}

export default Footer;
