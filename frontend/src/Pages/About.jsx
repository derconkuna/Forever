import { assets } from "../assets/assets";
import LatestCollection from "../components/LatestCollection";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div className=" border-t py-10">
      <div className=" grid grid-row gap-4 sm:grid-cols-[3fr_5fr] ">
        <img
          src={assets.about_img}
          alt=""
          className=" w-full py-1 sm:py-14  "
        />

        <div className=" ">
          <div className=" pb-12">
            <LatestCollection text1={"about"} text2={"us"} />
          </div>

          <div className=" flex flex-col w-full gap-5 sm:w-5/6">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>

            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <p className=" text-black font-semibold">Our Mission</p>

            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className=" pt-10 sm:pt-1">
        <LatestCollection text1={"why"} text2={"choose us"} />

        <div className=" grid grid-rows sm:grid-cols-3 mt-5">
          <div className=" flex flex-col items-center border py-7 px-8 sm:py-10 sm:px-14">
            <p className=" text-black font-semibold pb-3">Quality Assurance:</p>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className=" flex flex-col items-center border py-7 px-8 sm:py-10 sm:px-14">
            <p className=" text-black font-semibold pb-3">Convenience:</p>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className=" flex flex-col items-center border py-7 px-8 sm:py-10 sm:px-14">
            <p className=" text-black font-semibold pb-3">
              Exceptional Customer Service:
            </p>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
