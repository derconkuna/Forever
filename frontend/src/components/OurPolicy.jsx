import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className=" flex flex-col text-center items-center gap-12 justify-around sm:flex-row sm:gap-2 mt-16">
      <div>
        <img
          src={assets.exchange_icon}
          alt=""
          className=" w-12 mb-4 mx-auto "
        />
        <p className=" font-bold">Easy exchange policy</p>
        <p className=" text-gray-700">We offer hussle free exchange policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className=" w-12 mb-4 mx-auto " />
        <p className=" font-bold">7 Days Return Policy</p>
        <p className=" text-gray-700">We 7 days free return policy</p>
      </div>

      <div>
        <img src={assets.support_img} alt="" className=" w-12 mb-4 mx-auto " />
        <p className=" font-bold">Best customer support</p>
        <p className=" text-gray-700">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
