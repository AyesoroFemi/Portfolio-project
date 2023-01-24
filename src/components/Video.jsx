import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

function Video() {
  return (
    <div className="">
      <div className="max-w-[1200px] pt-12 md:py-4 mx-auto px-4 md:px-12">
        <p className="border-t-[.5px] border-slate-400 pt-[100px]"></p>
        <div className="flex justify-between pb-10 flex-wrap items-center">
          <h1 className="text-2xl text-white dark:text-black">Latest videos</h1>
          <div className="flex gap-2">
            <a className="text-white dark:text-black" href="">
              Browse more videos
            </a>
            <span className="-translate-y-2 text-white dark:text-black">
              <FiArrowUpRight size={24} />
            </span>
          </div>
        </div>
        <div className="grid gap-10 w-full md:grid-cols-3 ">
          <div>
            <div className="relative h-[250px]">
              <iframe
                className="h-[250px] w-full absolute rounded-xl"
                src="https://www.youtube.com/embed/i6A6lE5Zxp0"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </div>
            <h1 className="text-white text-base md:text-xl mt-4 dark:text-black">
              CSS RESPONSIVE WEB DESIGN
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2 text-white dark:text-black">
                <p className="dark:text-black">
                  <BiTimeFive size={24} />
                </p>
                <p className="dark:text-black">120 MIN</p>
              </div>
              <div className="text-white dark:text-black">
                <BsDashLg size={24} />
              </div>
              <div className="flex item-center gap-2 dark:text-black">
                <p className="text-white dark:text-black">
                  <IoCalendarClearOutline size={24} />
                </p>
                <span className="text-white dark:text-black">10/29/2023</span>
              </div>
            </div>
          </div>
          <div className="hidden md:relative h-[250px] md:block">
            <div className="relative h-[250px]">
              <iframe
                className="h-[250px] w-full absolute rounded-xl"
                src="https://www.youtube.com/embed/i6A6lE5Zxp0"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </div>
            <h1 className="text-white text-xl mt-4 dark:text-black">
              CSS RESPONSIVE WEB DESIGN
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2 text-white dark:text-black">
                <p className="dark:text-black">
                  <BiTimeFive size={24} />
                </p>
                <p className="dark:text-black">120 MIN</p>
              </div>
              <div className="text-white dark:text-black">
                <BsDashLg size={24} />
              </div>
              <div className="flex item-center gap-2 dark:text-black">
                <p className="text-white dark:text-black">
                  <IoCalendarClearOutline size={24} />
                </p>
                <span className="text-white dark:text-black">10/29/2023</span>
              </div>
            </div>
          </div>

          <div className="hidden md:relative h-[250px] md:block">
            <div className="relative h-[250px]">
              <iframe
                className="h-[250px] w-full absolute rounded-xl"
                src="https://www.youtube.com/embed/i6A6lE5Zxp0"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </div>
            <h1 className="text-white text-xl mt-4 dark:text-black">
              CSS RESPONSIVE WEB DESIGN
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2 text-white dark:text-black">
                <p className="dark:text-black">
                  <BiTimeFive size={24} />
                </p>
                <p className="dark:text-black">120 MIN</p>
              </div>
              <div className="text-white dark:text-black">
                <BsDashLg size={24} />
              </div>
              <div className="flex item-center gap-2 dark:text-black">
                <p className="text-white dark:text-black">
                  <IoCalendarClearOutline size={24} />
                </p>
                <span className="text-white dark:text-black">10/29/2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
