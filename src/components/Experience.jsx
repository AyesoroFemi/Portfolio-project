import Work from "./Work";
import { FiDownload } from "react-icons/fi";

function Experience() {
  return (
    <div className="ml-4 dark:text-white mr-4 mx-0 md:mr-10 md:ml-10 text-black">
      <div className="max-w-[1200px] mx-auto bg-[#2e3039] rounded-xl py-32  px-4 md:px-8 dark:bg-gray-100 ">
        <h1 className="md:text-center text-4xl text-white	font-semibold dark:text-black">
          My Experience
        </h1>
        <div className="flex md:justify-center drop-shadow-lg">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1kmekeIaUlhr2jr9zOq1sE71TEhsl3M4P/preview"
            className="font-semibold px-8 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-white dark:bg-black dark:text-white"
          >
            Download CV
            <FiDownload size={24} />
          </a>
        </div>
        <Work
          year="Jul 2021 - Present"
          company="Decagon"
          role="Software Engineer"
          profile=""
        >
          <p className="text-sm dark:text-black">
            Develops scalable, reusable web application for admitting new
            students into the decagon institute(portal). <br />
            Translate UI/UX designs into scalable and responsive web
            applications(Decagon Institute website).
          </p>
        </Work>
        <Work
          year="Dec 2021 - Mar 2022"
          company="GeoCloud (USA)"
          role="Frontend Engineer"
          profile=""
        >
          <p className="text-sm dark:text-black">
            Translate UI/UX designs into scalable and responsive web
            applications. <br /> Build uGeo web application that allows users to
            engage with the community around them
          </p>
        </Work>
        <Work
          year="Jul 2020 - Jan 2022"
          company="Pepcoders"
          role="Fullstack Engineer"
          profile=""
        >
          <p className="text-sm dark:text-black">
            Developing scalable and testable applications using backend and
            frontend technologies including ReactJs, NodeJs, ExpressJs, and
            MongoDB. <br /> Knowledge of Git practices via GitHub, GitLab, and
            git bash
          </p>
        </Work>
      </div>
    </div>
  );
}

export default Experience;



