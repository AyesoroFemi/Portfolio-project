import React, { useEffect } from "react";
import S1 from "../../assets/para.png";
import P1 from "../../assets/invest.png";
import S2 from "../../assets/marriage.png";
import S3 from "../../assets/screen.png";
import S4 from "../../assets/pep.png";
import S5 from "../../assets/femia.png";
import Footer from "../../components/common/Footer";

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-['Matter'] pt-20  bg-[#1f2028] dark:bg-white">
      <div className="grid max-w-[1440px] px-4 md:px-12 mx-auto  md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div className="h-[85%] bg-[#2e3039] dark:bg-gray-100 md:min-h-[100px] px-2 py-2 md:h-[470px] row-span-2 mb-24">
          <img src={P1} alt="project_display" />
          <p className="text-white mt-4 px-4 text-sm dark:text-black">
            Invest-Trust Limited is a timely provider of investment products and
            services that incorporates global best practices and modern
            technology in delivering absolute quality.
          </p>
          <div className="flex px-4 pt-4 text-white justify-between items-center">
            <h1 className="text-sm md:text-xl font-[600] dark:text-black">
              Invest Trust Limited
            </h1>
            <div className="border-b-[.5px] pb-1 border-white dark:border-black dark:text-black">
              <a
                href="https://investtrustcredit.com/"
                className="text-sm md:text-base"
                target="_blanket"
              >
                Show more
              </a>
            </div>
          </div>
          <div className="py-4 text-white dark:text-black text-sm flex flex-wrap gap-4">
            <span className="rounded-xl p-1 ml-3 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              React js
            </span>
            <span className="rounded-xl p-1 ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Styled components
            </span>
            <span className="rounded-xl p-1 ml-3 md:ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              HTML&CSS
            </span>
          </div>
        </div>
        <div className="h-[85%] bg-[#2e3039] dark:bg-gray-100 md:min-h-[100px] px-2 py-2 md:h-[470px] row-span-2 mb-24">
          <img src={S5} alt="project_display" />
          <p className="text-white mt-4 px-4 text-sm dark:text-black">
            I enjoy building user interfaces and working on the frontend
            development of the web, I am very open to learning new and existing
            tools, frameworks, and languages
          </p>
          <div className="flex px-4 pt-4 text-white justify-between items-center">
            <h1 className="text-sm md:text-xl font-[600] dark:text-black">
              Portfolio
            </h1>
            <div className="border-b-[.5px] pb-1 border-white dark:border-black dark:text-black">
              <a
                href="https://femiayesoro.com/"
                className="text-sm md:text-base"
                target="_blanket"
              >
                Show more
              </a>
            </div>
          </div>
          <div className="py-4 text-white dark:text-black text-sm flex flex-wrap gap-4">
            <span className="rounded-xl p-1 ml-3 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              React js
            </span>
            <span className="rounded-xl p-1 ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Remix.js
            </span>
            <span className="rounded-xl p-1 ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              TailwindCss
            </span>
            <span className="rounded-xl p-1 ml-3 md:ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              HTML&CSS
            </span>
          </div>
        </div>
        <div className="h-[85%] bg-[#2e3039] dark:bg-gray-100 md:min-h-[100px] px-2 py-2 md:h-[480px] row-span-2 mb-24">
          <img src={S4} alt="project_display" />
          <p className="text-white mt-4 px-4 text-sm dark:text-black">
            We’re an award-winning full-service design agency that build
            unforgettable products for brands with innovative ideas.
          </p>
          <div className="flex px-4 pt-4 text-white justify-between items-center">
            <h1 className="text-sm md:text-xl font-[600] dark:text-black">
              Pepcoders
            </h1>
            <div className="border-b-[.5px] pb-1 border-white dark:border-black dark:text-black">
              <a
                href="https://pepcoders.com/"
                className="text-sm md:text-base"
                target="_blanket"
              >
                Show more
              </a>
            </div>
          </div>
          <div className="py-4 text-white dark:text-black text-sm flex flex-wrap gap-4">
            <span className="rounded-xl p-1 ml-3 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              React js
            </span>
            <span className="rounded-xl p-1 ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Styled components
            </span>
            <span className="rounded-xl p-1 ml-3 md:ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              HTML&CSS
            </span>
          </div>
        </div>
        <div className="h-[85%] bg-[#2e3039] dark:bg-gray-100 md:min-h-[100px] px-2 py-2 md:h-[430px] row-span-2 mb-24">
          <img src={S2} alt="project_display" />
          <p className="text-white mt-4 px-4 text-sm dark:text-black">
            Marriage in Christ Ministry for Women is a group of Christian women
            from all nationalities and ethnicities from all over the world.
          </p>
          <div className="flex px-4 pt-4 text-white justify-between items-center">
            <h1 className="text-sm md:text-xl font-[600] dark:text-black">
              Marriage in Christ
            </h1>
            <div className="border-b-[.5px] pb-1 border-white dark:border-black dark:text-black">
              <a
                href="https://marriageinchristministry.com/"
                className="text-sm md:text-base"
                target="_blanket"
              >
                Show more
              </a>
            </div>
          </div>
          <div className="py-4 text-white dark:text-black text-sm flex flex-wrap gap-4">
            <span className="rounded-xl p-1 ml-3 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Javascript
            </span>
            <span className="rounded-xl p-1 ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              TailwindCss
            </span>
            <span className="rounded-xl p-1 ml-3 md:ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              HTML&CSS
            </span>
          </div>
        </div>
        <div className="h-[85%] bg-[#2e3039] dark:bg-gray-100 md:min-h-[100px] px-2 py-2 md:h-[450px] row-span-2 mb-24">
          <img src={S1} alt="project_display" />
          <p className="text-white mt-4 px-4 text-sm dark:text-black">
            We are committed understanding the challenges and in our projects by
            understanding the challenges and solutions in each project.
          </p>
          <div className="flex px-4 pt-4 text-white justify-between items-center">
            <h1 className="text-sm md:text-xl font-[600] dark:text-black">
              Paragon
            </h1>
            <div className="border-b-[.5px] pb-1 border-white dark:border-black dark:text-black">
              <a
                href="https://paragon-project.netlify.app/"
                className="text-sm md:text-base"
                target="_blanket"
              >
                Show more
              </a>
            </div>
          </div>
          <div className="py-4 text-white dark:text-black text-sm flex flex-wrap gap-4">
            <span className="rounded-xl p-1 ml-3 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              React js
            </span>
            <span className="rounded-xl p-1 ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Styled components
            </span>
            <span className="rounded-xl p-1 ml-3 md:ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Swiper
            </span>
            <span className="rounded-xl p-1 ml-3 md:ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              HTML&CSS
            </span>
          </div>
        </div>
        <div className="h-[85%] bg-[#2e3039] dark:bg-gray-100 md:min-h-[100px] px-2 py-2 md:h-[450px] row-span-2 mb-24">
          <img src={S3} alt="project_display" />
          <p className="text-white mt-4 px-4 text-sm dark:text-black">
            Showing greater respect to older adults can be done in several ways,
            acknowledging and putting to use the talents and skills of older
            adults;
          </p>
          <div className="flex px-4 pt-4 text-white justify-between items-center">
            <h1 className="text-sm md:text-xl font-[600] dark:text-black">
              INTERVENTION
            </h1>
            <div className="border-b-[.5px] pb-1 border-white dark:border-black dark:text-black">
              <a
                href="https://intervention-website.netlify.app/"
                className="text-sm md:text-base"
                target="_blanket"
              >
                Show more
              </a>
            </div>
          </div>
          <div className="py-4 text-white dark:text-black text-sm flex flex-wrap gap-4">
            <span className="rounded-xl p-1 ml-3 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Javascript
            </span>
            <span className="rounded-xl p-1 ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              Bootstrap CSS
            </span>
            <span className="rounded-xl p-1 ml-3 md:ml-1 mr-1 px-2 text-black bg-white dark:bg-black dark:text-white">
              HTML&CSS
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
