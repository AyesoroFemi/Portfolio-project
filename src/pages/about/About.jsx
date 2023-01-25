import React, { useEffect } from "react";
import Footer from "../../components/common/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-['Matter'] bg-[#1f2028] dark:bg-white">
      <div className="max-w-[1200px] px-4 md:px-12 pt-32 mx-auto grid gap-10 md:grid-cols-[40%_50%]">
        <div className="">
          <img
            className=""
            src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1674567907/personal/emma_ofmwt4.png"
            alt="personal_picture"
          />
        </div>
        <div className="justify-self-end ">
          <p className="text-base md:text-xl dark:text-white">
            <span className="block py-4 text-white dark:text-black">
              I am a software engineer, primarily started as a frontend engineer
              and I have gained and explored every other aspect of software
              development both on the backend and mobile development.
            </span>
            <span className="block py-4 text-white dark:text-black">
              I enjoy building user interfaces and working on the frontend
              development of the web, I am very open to learning new and
              existing tools, frameworks, and languages and as such, I have
              worked using Javascript, Python, Java, Reactjs, Spring Boot,
              Django, Vuejs and Typescript.{" "}
            </span>
            <span className="block py-4 text-white dark:text-black">
              When I am not coding, I either working on my Youtube channel to
              prepare to record a video where I want to extend my knowledge to
              others and document my learning.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
