import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className=" flex flex-col  justify-between sm:grid grid-cols-[3fr_1fr_1fr]  gap-12 my-10 mt-24  ">
        <div className=" ">
          <img src={assets.logo} className=" w-36 mb-4 " alt="" />
          <p className="w-full  md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam
            explicabo quod. Nesciunt sed hic minus et dolores nisi voluptates
            quos expedita, qui minima accusantium pariatur necessitatibus
            sapiente, inventore voluptatum?
          </p>
        </div>

        <div className=" text-center ">
          <p className=" uppercase font-semibold text-2xl sm:text-left text-center text-slate-900 mb-4">
            company
          </p>

          <ul className=" text-center flex flex-col gap-2 sm:items-start ">
            <Link to='/'>
              <p>Home</p>
            </Link>

            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy pilicy</p>
          </ul>
        </div>

        <div className=" text-center ">
          <p className="uppercase font-semibold text-2xl text-slate-900 mb-4">
            Get in touch
          </p>
          <p>011 289 5871</p>
          <p>info@humaniholdings.co.za</p>
        </div>
      </div>

      <p className=" w-full border-[1px]  border-gray-300"></p>

      <p className=" text-center font-semibold mt-3 py-4">
        Copyright2024@humaniholdings.co.za - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
