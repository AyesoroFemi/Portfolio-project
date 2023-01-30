import React, { useEffect } from "react";

import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import SocialIcons from "../../components/common/SocialIcons";
import Input from "../../components/common/Input";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-['Matter'] bg-[#1f2028] dark:bg-white pt-24">
      <div className="h-full grid md:grid-cols-2 max-w-[1440px] px-4 md:px-12 mx-auto pb-20">
        <div className="ml-2 lg:p-32 md:mt-32 lg:mt-0">
          <p className="dark:text-black text-3xl lg:text-5xl mb-4 text-white">
            Get in touch
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 dark:text-black">
                {" "}
                <HiOutlineMail size={32} />{" "}
              </span>
              <p className="text-gray-400 text-xl dark:text-black">
                ayesorofemi@gmail.com
              </p>
            </div>
            <div className="flex gap-2 mt-4 items-center">
              <span className="text-gray-400 dark:text-black">
                <MdPhoneIphone size={32} />
              </span>
              <p className="text-gray-400 text-xl dark:text-black">
                +2349132717758
              </p>
            </div>
          </div>
          <SocialIcons />
        </div>
        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          className="px-2 md:p-8 lg:p-12"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div className="grid lg:grid-cols-2 gap-4 mt-10">
            <div className="">
              <Input
                className=""
                type="text"
                name="fullName"
                placeholder="Full Name"
              />
            </div>
            <div className="">
              <Input type="email" name="email" placeholder="Email Address" />
            </div>
          </div>

          <div className="mt-4">
            <Input type="text" name="subject" placeholder="Subject" />
          </div>
          <textarea
            className="w-full bg-[#2e3039] mt-4 py-4 px-3 dark:bg-gray-100"
            name=""
            id=""
            cols="30"
            placeholder="Please enter your message"
            rows="5"
          ></textarea>
          <div className="flex drop-shadow-lg">
            <button
              type="submit"
              className="font-semibold px-8 py-4 mt-2 rounded-full cursor-pointer flex items-center gap-3 text-black bg-white dark:bg-black dark:text-white"
            >
              Send Message
              {/* <FiDownload size={24} /> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
