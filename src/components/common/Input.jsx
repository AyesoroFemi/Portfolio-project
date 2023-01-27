import React from "react";

function Input({ placeholder, type, name, onChange, value, required }) {
  return (
    <input
      className="w-full py-4 px-3 bg-[#2e3039] dark:bg-gray-100"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default Input;
