import React from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { BsDashLg } from 'react-icons/bs';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';


function Video() {
  return (
    <div className="">
        <p className="border-t-[.5px] border-slate-400 pt-[100px]"></p>
        <div className="max-w-[1440px] pt-12 pt-5 md:py-4 mx-auto px-4 md:px-12">
            <div className="flex justify-between pb-10 flex-wrap items-center">
                <h1 className="text-2xl text-white">Latest videos</h1>
                <div className="flex gap-2">
                    <a className="text-white" href="">Browse more videos</a>
                    <span className="-translate-y-2"><FiArrowUpRight size={24} color="#fff" /></span>
                </div>
            </div>
        <div className="grid gap-10 w-full md:grid-cols-3">
           <div>
             <div className="relative h-[300px]">
                <iframe
                        className="h-[300px] w-full absolute rounded-xl"
                        src="https://www.youtube.com/embed/i6A6lE5Zxp0"
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowfullscreen
                    ></iframe>
            </div>
            <h1 className="text-white text-2xl mt-4">CSS RESPONSIVE WEB DESIGN</h1>
            <div className="flex gap-4">
                <div className="flex gap-2 text-white">
                <p>< BiTimeFive size={24} color="#fff"/></p>
                    <p>120 MIN</p>
                </div>
                <div><BsDashLg size={24} color="#fff"/></div>
                <div className="flex item-center gap-2">
                    <p><IoCalendarClearOutline size={24} color="#fff" /></p>
                    <span className="text-white">10/29/2023</span>
                </div> 
            </div>
           </div>
            <div className="hidden md:relative h-[300px] md:block">
                <div className="relative h-[300px]">
               <iframe
                        className="h-[300px] w-full absolute rounded-xl"
                        src="https://www.youtube.com/embed/i6A6lE5Zxp0"
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowfullscreen
                    ></iframe>
            </div>
                    <h1 className="text-white text-2xl mt-4">CSS RESPONSIVE WEB DESIGN</h1>
                    <div className="flex gap-4">
                <div className="flex gap-2 text-white">
                <p>< BiTimeFive size={24} color="#fff"/></p>
                    <p>120 MIN</p>
                </div>
                <div><BsDashLg size={24} color="#fff"/></div>
                <div className="flex item-center gap-2">
                    <p><IoCalendarClearOutline size={24} color="#fff" /></p>
                    <span className="text-white">10/29/2023</span>
                </div> 
            </div>
            </div>
            
            <div className="hidden md:relative h-[300px] md:block">
                <div className="relative h-[300px]">
               <iframe
                        className="h-[300px] w-full absolute rounded-xl"
                        src="https://www.youtube.com/embed/i6A6lE5Zxp0"
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowfullscreen
                    ></iframe>
            </div>
                        <h1 className="text-white text-2xl mt-4">CSS RESPONSIVE WEB DESIGN</h1>
                        <div className="flex gap-4">
                <div className="flex gap-2 text-white">
                <p>< BiTimeFive size={24} color="#fff"/></p>
                    <p>120 MIN</p>
                </div>
                <div><BsDashLg size={24} color="#fff"/></div>
                <div className="flex item-center gap-2">
                    <p><IoCalendarClearOutline size={24} color="#fff" /></p>
                    <span className="text-white">10/29/2023</span>
                </div> 
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Video

