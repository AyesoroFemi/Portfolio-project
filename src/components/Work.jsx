import React from "react";

function Work({ year, company, role, profile, children }) {
  return (
    <div className="grid md:grid-cols-3 pt-24 border-b-[1px] border-gray-400  pb-8">
      <div className="">
        <p className="font-semibold text-gray-400 dark:text-black">{year}</p>
        <h5 className="text-2xl font-semibold my-2 text-white dark:text-black">{company}</h5>
      </div>
      <div>
        <p className="text-lg md:text-xl text-gray-400 font-semibold w-9/12 md:w-6/12 my-2">{role} {profile}</p>
      </div>
      <div className="my-2 text-white">
        {children}
      </div>
    </div>
  );
}

export default Work;
