import Work from "./Work";

function Experience() {
  return (
    <div className="text-black">
      <div className="py-16 md:py-32 px-4 md:px-12 text-black max-w-[1440px] mx-auto">
        <h1 className="md:text-center text-4xl	font-semibold">My Experience</h1>
        <div className="flex md:justify-center">
          <a
            href="/"
            className="font-semibold px-6 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-[#F9C221]"
          >
            DOWNLOAD CV
          </a>
        </div>
        <Work
          year="2021-2023"
          company="Decagon"
          role="Frontend / Fullstack"
          profile="Engineer"
        >
          <p className="text-sm	">
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
