import { assets } from "../assets/assets";
import LattestCollection from "../components/LatestCollection";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div className="  border-t">
      <div className=" w-full sm:w-2/3 sm:mx-auto">
        <div className=" w-full place-items-center py-8">
          <LattestCollection text1={"contact"} text2={"us"} />
        </div>

        <div className=" w-full grid grid-rows  sm:grid-cols-2 sm:gap-5 ">
          <img src={assets.contact_img} alt="" />
          <div>
            <p className=" font-semibold text-slate-700 text-2xl pt-5 sm:pt-1">
              Our Store
            </p>

            <div className=" py-6">
              <p>Clayville Extensions</p>
              <p>OlifantsFontein</p>
            </div>

            <div>
              <p>Phone: 073 derco</p>
              <p>Email: derconkuna021@gmail.com</p>
            </div>
          </div>
        </div>

        <NewsLetter />
      </div>
    </div>
  );
};

export default Contact;
