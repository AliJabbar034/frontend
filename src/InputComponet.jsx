import React from "react";

function InputComponet({ labelFor, label, placeholder, value, setValue }) {
  return (
    <div className=" flex flex-col space-y-2 ">
      <div className=" flex flex-row">
        <label className=" font-semibold text-[#2B3674]" htmlFor={labelFor}>
          {label}
        </label>
        <p className="text-[#E92928]">*</p>
      </div>

      <div className=" flex flex-col relative">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className=" border border-[#A3AED0] rounded-lg focus:outline-none px-2 py-2 text-[#A3AED0] placeholder:text-[#A3AED0] "
          style={{ fontFamily: "DM Sans" }}
        />
      </div>
    </div>
  );
}

export default InputComponet;
