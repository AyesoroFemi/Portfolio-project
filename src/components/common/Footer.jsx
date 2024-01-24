import React from "react";
import { Link } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import SocialIcons from "./SocialIcons";

function Footer() {
  // const mailtoHref =
  //   "mailto:ayesorofemi@gmail.com?subject=SendMail&body=Description";
  return (
    <div className="max-w-[1200px] text-white pt-16 mx-auto px-4 md:px-12">
      <div className="bg-[#2e3039] dark:bg-gray-100 py-8 px-4 md:px-8 rounded-xl grid gap-10 md:grid-cols-3 md:py-4">
        <div className="md:py-8">
          <h1 className="py-4 text-xl dark:text-black">Page</h1>
          <Link className="block text-gray-400 dark:text-black" to="/">
            Home
          </Link>
          <Link className="block text-gray-400 dark:text-black" to="about">
            About
          </Link>
          <a className="block text-gray-400 dark:text-black" href="/">
            Projects
          </a>
          <Link to="contact" className="block text-gray-400 dark:text-black">
            Contact
          </Link>
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
      <div className="px-4 py-4 mx-auto pt-4 pb-8 flex items-center flex-wrap justify-between">
        <p className="dark:text-black">Copyright &copy; Femiayesoro 2023</p>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Footer;
