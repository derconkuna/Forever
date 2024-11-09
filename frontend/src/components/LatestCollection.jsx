import React from "react";

const LatestCollection = ({ text1, text2 }) => {
  return (
    <div className=" uppercase text-2xl pt-1 flex items-center  gap-2  mx-auto text-center">
      <p className=" text-slate-600 ">
        {text1} <span className=" text-slate-800">{text2}</span>
      </p>
     <p className=" border-gray-900 border-2 w-10"></p>
    </div>
  );
};

export default LatestCollection;
