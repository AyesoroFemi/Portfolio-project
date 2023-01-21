import Work from "./Work";
import { FcDownload } from "react-icons/fc";

// bg-[#1f2028]
function Experience() {
  return (
    <div className="text-white mr-4 bg-[#1f2028] mx-0 md:mr-10 md:ml-10 text-black max-w-[1440px] mx-auto">
      <div className="bg-[#2e3039] rounded-xl py-32 ml-4 px-8">
        <h1 className="md:text-center text-4xl text-white	font-semibold">My Experience</h1>
        <div className="flex md:justify-center drop-shadow-lg">
          <a
            href="/"
            className="font-semibold px-8 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-white"
          >
            Download CV
            <FcDownload size={24} />
          </a>
        </div>
        <Work
          year="2021-2023"
          company="Decagon"
          role="Frontend / Fullstack"
          profile="Engineer"
        >
          <p className="text-sm">
            Develops scalable, reusable web application for admitting new
            students into the decagon institute(portal). <br />
            Translate UI/UX designs into scalable and responsive web
            applications(Decagon Institute website).
          </p>
        </Work>
        <Work
          year="2021-2023"
          company="Decagon"
          role="Frontend / Fullstack"
          profile="Engineer"
        >
          <p className="text-sm">
            Develops scalable, reusable web application for admitting new
            students into the decagon institute(portal). Translate UI/UX designs
            into scalable and responsive web applications(Decagon Institute
            website)."
          </p>
        </Work>
        <Work
          year="2021-2023"
          company="Decagon"
          role="Frontend / Fullstack"
          profile="Engineer"
        >
          <p className="text-sm">
            Develops scalable, reusable web application for admitting new
            students into the decagon institute(portal). Translate UI/UX designs
            into scalable and responsive web applications(Decagon Institute
            website)."
          </p>
        </Work>
      </div>
    </div>
  );
}

export default Experience;
