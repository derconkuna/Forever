import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const Search = () => {
  const location = useLocation();
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ProductContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className=" bg-gray-100 flex justify-center gap-3 items-center py-3">
      <div className=" inline-flex items-center justify-between px-5  py-2 border-2 border-gray-300 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className=" bg-inherit text-base outline-none "
        />
        <img src={assets.search_icon} className=" w-4 " alt="" />
      </div>

      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className=" w-4 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default Search;
