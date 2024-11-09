import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import LatestCollection from "../components/LatestCollection";
import { ProductContext } from "../context/ProductContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, setShowSearch } = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  function toggleSubCategory(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  }

  const applyFilters = async () => {
    let productsCopy = products.slice();

    if (search && setShowSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProductsPrice = () => {
    let fp = filterProducts.slice();

    switch (sortType) {
      case "Low-High":
        setFilterProducts(fp.sort((a, b) => a.price - b.price));
        break;

      case "High-Low":
        setFilterProducts(fp.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    sortProductsPrice();
  }, [sortType]);

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, setShowSearch, search]);

  return (
    <div className=" flex flex-col gap-6 sm:flex-row sm:gap-1 py-6 border-t">
      <div className=" flex flex-col gap-5 min-w-64 ">
        <p
          onClick={() => setVisible(!visible)}
          className={`uppercase flex items-center gap-3 font-semibold text-gray-800 text-xl mb-3 cursor-pointer`}
        >
          filters
          <img
            src={assets.dropdown_icon}
            className={` h-4 ${visible ? " rotate-90" : ""}  sm:hidden`}
            alt=""
          />
        </p>

        <div
          className={`border-2 border-gray-200 px-3 flex flex-col gap-2 sm:leading-7 pb-2 ${
            visible ? " w-full" : " hidden"
          } sm:block`}
        >
          <p className=" font-semibold text-gray-700 text uppercase">
            Categories
          </p>
          <p>
            <input
              onClick={toggleCategory}
              value={"Men"}
              type="checkbox"
              className=" cursor-pointer"
            />{" "}
            Men
          </p>
          <p>
            <input
              onClick={toggleCategory}
              value={"Women"}
              type="checkbox"
              className=" cursor-pointer"
            />{" "}
            Women
          </p>
          <p>
            <input
              onClick={toggleCategory}
              value={"Kids"}
              type="checkbox"
              className=" cursor-pointer"
            />{" "}
            Kids
          </p>
        </div>

        <div
          className={`border-2 border-gray-200 px-3 flex flex-col sm:leading-7 gap-2 pb-2 ${
            visible ? " w-full" : " hidden"
          } sm:block`}
        >
          <p className=" font-semibold text-gray-700 text uppercase">types</p>
          <p>
            <input
              onClick={toggleSubCategory}
              value={"Topwear"}
              type="checkbox"
              className=" cursor-pointer"
            />{" "}
            Topwear
          </p>
          <p>
            <input
              onClick={toggleSubCategory}
              value={"Bottomwear"}
              type="checkbox"
              className=" cursor-pointer"
            />{" "}
            Bottomwear
          </p>
          <p>
            <input
              onClick={toggleSubCategory}
              value={"Winterwear"}
              type="checkbox"
              className=" cursor-pointer"
            />{" "}
            Winterwear
          </p>
        </div>
      </div>

      {/* Display Products */}

      <div className=" flex-1">
        <div className=" flex items-center justify-between  mb-3">
          <LatestCollection text1={"all"} text2={"collections"} />

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className=" outline-none border-2 border-gray-200 px-6 py-3"
          >
            <option value="Relevent">Sort by: Relevent</option>
            <option value="Low-High">Sort by: Low-High</option>
            <option value="High-Low">Sort by: High-Low</option>
          </select>
        </div>

        <div className=" grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
          {filterProducts.map((item, i) => (
            <ProductItem
              key={i}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
