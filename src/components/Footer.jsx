import React from 'react'
// import { a } from "react-router-dom"
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


function Footer() {
  return (
    <div className="bg-[#1C1C1C] text-white pt-32">
        <div className="max-w-[1440px] px-4 md:px-12 mx-auto">
            <p className="border-t-[.5px] border-slate-400 pt-[50px]"></p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 py-8 md:py-4 px-4 md:px-12 max-w-[1440px] mx-auto">
            <div>
                <h1 className="py-4 text-xl">Page</h1>
                <a className="block font-[200]" href="#">
                    Home
                </a>
                <a className="block font-[200]" href="/about">
                    About
                </a>
                <a className="block  font-[200]" href="/project">
                    Projects
                </a>
                <a className="block  font-[200]" href="/contact">
                    Contact
                </a>
            </div>
            <div>
                <h1 className="py-4 text-xl">Contacts</h1>
                <div className="flex gap-2 items-center">
                    <span> <HiOutlineMail size={24} color="#F9C221" /> </span>
                    <p className="font-[200]">ayesorofemi@gmail.com</p>
                </div>
               <div className="flex gap-2 mt-4 items-center">
                <span><MdPhoneIphone size={24} color="#F9C221" /></span>
                 <p className="font-[200]">+2349132717758</p>
               </div>
            </div>
            <div>
                 <h1 className="py-4 text-xl">Tech Stacks</h1>
                 <div className="font-[200]">
                    <p>Javascript,  Typescript</p>
                  <p>React js,  Remix.js, Vue</p>
                 <p>Tailwindcss,  Bootstrap, HTML & CSS</p>
                 <p>Python, Java, Spring boot</p>
                 </div>
            </div>
        </div>
         <div className="max-w-[1440px] px-4 md:px-12 mx-auto py-2">
            <p className="border-t-[.5px] border-slate-400"></p>
        </div>
        <div className="max-w-[1440px] px-4 md:px-12 py-4 mx-auto pt-4 pb-8 flex flex-wrap justify-between">
            <p>Copyright  &copy; Femiayesoro.com 2023</p>
            <div className="flex gap-8 items-center mt-2">
                 <div className="p-1 ring rounded-md ring-offset-[2] bg-white ring-[#F9C221]">
                    <a href="https://twitter.com/ayesorofemi" target="_blanket" className="">
                        <BsTwitter color="#1DA1F2" size={24}/>
                    </a>
                 </div>
                <div className="p-1 ring rounded-md ring-offset-[5] bg-white ring-[#F9C221]">
                    <a href="https://github.com/AyesoroFemi" target="_blanket" className="" >
                    <FaGithub color="black" size={24}/>
                </a>
                </div>
                <div className="p-1 ring rounded-md ring-offset-[5] bg-white ring-[#F9C221]">
                    <a href="https://www.linkedin.com/in/femi-ayesoro-30837683/" target="_blanket" className="">
                    <FaLinkedinIn color="#0e76a8" size={24}/>
                </a>
                </div>
                <div className="p-1 ring rounded-md ring-offset-[5] bg-white ring-[#F9C221]">
                    <a href="https://www.youtube.com/@femiayesoro" target="_blanket" className="" >
                      <FaYoutube color="#FF0000" size={24}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer