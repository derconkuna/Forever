import React from "react";
import CartTotal from "./CartTotal";
import LatestCollection from "./LatestCollection";
import { assets } from "../assets/assets";
import Button from "./Button";

const Checkout = () => {
  return (
    <div className=" grid grid-col gap-8 sm:grid-cols-2 border-t pt-8">
      <div className=" flex flex-col gap-3 items-start w-full sm:w-4/5  ">
        <LatestCollection text1={"delivery"} text2={"information"} />

        <div className=" w-full">
          <div className=" flex flex-col gap-2 w-full sm:flex-row sm:gap-3">
            <input
              required
              type="text"
              placeholder="First name"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
            <input
              type="text"
              placeholder="Last name"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
          </div>

          <div className=" flex flex-col gap-3 py-3">
            <input
              type="email"
              placeholder="Email address"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
            <input
              type="text"
              placeholder=" Street"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
          </div>

          <div className=" flex flex-col gap-2 w-full sm:flex-row sm:gap-3 py-3">
            <input
              type="text"
              placeholder="Province"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
            <input
              type="text"
              placeholder="City"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
          </div>

          <div className=" flex flex-col gap-2 w-full sm:flex-row sm:gap-3 py-3">
            <input
              type="text"
              placeholder="Postal code"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
            <input
              type="text"
              placeholder="Country"
              className=" border-2 border-gray-200 outline-none px-8 py-1"
            />
          </div>

          <input
            type="text"
            placeholder="Phone number"
            className=" w-full border-2 border-gray-200 outline-none px-8 py-1"
          />
        </div>
      </div>

      <div>
        <CartTotal />

        <div className=" mb-5">
          <LatestCollection text1={"payment"} text2={"method"} />
          <div className=" w-full grid grid-cols-3 gap-3 sm:grid-cols-3 py-3">
            <img
              src={assets.stripe_logo}
              className=" h-8 border w-full sm:px-16  "
            />
            <img
              src={assets.razorpay_logo}
              className=" h-8 border w-full sm:px-16 "
            />
            <p className=" text-xs py-[5px] px-2px sm:text-base text-center uppercase border sm:px-6 sm:py-[1px]">
              Cash on delivery
            </p>
          </div>
        </div>

        <Button>Place order</Button>
      </div>
    </div>
  );
};

export default Checkout;
