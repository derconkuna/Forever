import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, showSearch } = useContext(ProductContext);
  return (
    <div className=" flex items-center justify-between py-6 ">
      <Link to="/">
        <img src={assets.logo} alt="" className=" w-36" />
      </Link>

      <ul className=" hidden sm:flex items-center gap-6">
        <NavLink to="/" className=" flex flex-col gap-1 items-center">
          <p className=" cursor-pointer uppercase">Home</p>
          <hr className="  border-none" />
        </NavLink>

        <NavLink to="/collection" className=" flex flex-col gap-1 items-center">
          <p className=" cursor-pointer uppercase">Collection</p>
          <hr className=" border-none " />
        </NavLink>

        <NavLink to="/about" className=" flex flex-col gap-1 items-center">
          <p className=" cursor-pointer uppercase">about</p>
          <hr className="  border-none" />
        </NavLink>

        <NavLink to="/contact" className=" flex flex-col items-center gap-1">
          <p className=" cursor-pointer uppercase">contact</p>
          <hr className="  border-none" />
        </NavLink>
      </ul>

      <div className=" flex items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className=" w-5 cursor-pointer"
          alt=""
        />
        <div className=" group relative">
          <img src={assets.profile_icon} className=" w-5" alt="" />
          <div className=" group-hover:block hidden absolute right-0 pt-3 dropdown-menu">
            <div className=" flex flex-col gap-2 w-36 bg-slate-100 py-3 px-4 ">
              <p className=" cursor-pointer hover:text-black">My Profile</p>
              <p className=" cursor-pointer hover:text-black">Orders</p>
              <p className=" cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart">
          <div className=" relative ">
            <img src={assets.cart_icon} className=" w-5" alt="" />
            <p className=" absolute right-[-7px] bottom-[-5px]  bg-black leading-4 text-white aspect-square transition-all rounded-full ">
              10
            </p>
          </div>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className=" w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      <div
        className={` absolute  right-0 top-0 pt-2 bottom-0 overflow-hidden bg-white transition-all sm:hidden  ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className=" flex flex-col gap-2">
          <div
            onClick={() => setVisible(false)}
            className=" flex items-center gap-4 pb-4 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className=" w-2 rotate-180"
              alt=""
            />
            <p>Back</p>
          </div>

          <ul className=" flex flex-col gap-1 items-start pl-5 ">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className=" flex flex-col gap-1 items-center"
            >
              <p className=" cursor-pointer uppercase  hover:text-black">
                Home
              </p>
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/collection"
              className=" flex flex-col gap-1 items-center"
            >
              <p className=" cursor-pointer uppercase  hover:text-black">
                Collection
              </p>
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className=" flex flex-col gap-1 items-center"
            >
              <p className=" cursor-pointer uppercase  hover:text-black">
                about
              </p>
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className=" flex flex-col items-center gap-1"
            >
              <p className=" cursor-pointer uppercase hover:text-black">
                contact
              </p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
