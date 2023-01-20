import { BsArrowRight } from "react-icons/bs";
import S1 from "../assets/s6.png"

function Project() {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="grid md:grid-cols-2 gap-10 max-w-[1200px] mx-auto py-16 md:py-32 px-4 md:px-12">
        <div className="text-white">
          <p className="text-[#A1A1A1]">Portfolio</p>
          <h1 className="w-full md:w-2/3 mt-4 text-3xl">
            All Creative Works, Selected Projects
          </h1>
          <p className="mt-4 text-[#A1A1A1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex mb-8">
            <a
              href="/"
              className="font-semibold px-6 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-[#F9C221]"
            >
              EXPLORE MORE
              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="rounded-md bg-gradient-to-r from-stone-900 via-stone-700 to-neutral-500 min-h-[300px] relative md:min-h-[100px] row-span-2">
          <img className="w-full h-full absolute object-cover mix-blend-overlay" src={S1} alt=""/>
          <div className="flex text-white pl-4 flex-col justify-center h-full w-full">
            <h1 className="text-3xl font-[700]">Invest Credit Site</h1>
            <a href="/" className="text-xl" target="_blanket border-b-2 border-black">Visit</a>

          </div>
        </div>
        <div className="min-h-[300px] border-4 border-white md:min-h-[450px] row-span-2">
          <img src={S1} alt="project_display"/>
        </div>
        <div className="min-h-[300px] border-4 border-white md:min-h-[450px] row-span-2">4</div>
        <div className="min-h-[300px] border-4 border-white md:min-h-[100px] row-span-2">5</div>
        <div className="min-h-[300px] border-4 border-white md:min-h-[450px] row-span-2">6</div>
      </div>
    </div>
  );
}

export default Project;
