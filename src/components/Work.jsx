import React from "react";

function Work({ year, company, role, profile, children }) {
  return (
    <div className="grid md:grid-cols-3 pt-24 border-b-[1px] border-[#1C1C1C] text-black border-gray-100 pb-8">
      <div className="">
        <p className="font-semibold">{year}</p>
        <h5 className="text-2xl font-semibold my-2 text-[#F9C221]">{company}</h5>
      </div>
      <div>
        <p className="text-2xl font-semibold w-9/12 md:w-6/12 my-2">{role} {profile}</p>
      </div>
      <div className="my-2">
        {children}
      </div>
    </div>
  );
}

export default Work;
