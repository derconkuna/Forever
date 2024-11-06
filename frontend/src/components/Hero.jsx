import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" border-2 border-gray-300 flex flex-col items-center justify-center sm:flex-row">
      <div className=" flex flex-col items-center gap-3 w-full sm:w-1/2 py-12 sm:py-0">
        <div className=" flex items-center gap-4">
          <p className=" w-12 border-gray-900 border-2"></p>
          <p className=" uppercase">our bestsellers</p>
        </div>
        <div>
          <p className=" text-4xl text-slate-700"> Latest Arrivals</p>
        </div>
        <div className=" flex items-center gap-4">
          <p className=" uppercase">shop now</p>
          <p className=" w-8 border-2 border-gray-700"></p>
        </div>
      </div>

      <img src={assets.hero_img} alt="" className=" w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;
