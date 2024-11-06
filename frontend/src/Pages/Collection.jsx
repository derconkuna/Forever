import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";
import LatestCollection from "../components/LatestCollection";

const Collection = () => {
  const { products, search, setShowSearch } = useContext(ProductContext);
  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
    //const productsCopy = products.slice()

    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const sortProducts = () => {
    let fp = productsList.slice();

    switch (sortType) {
      case "high-low":
        setProductsList(fp.sort((a, b) => b.price - a.price));
        break;
      case "low-high":
        setProductsList(fp.sort((a, b) => a.price - b.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  function toggleSubCategory(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setSubCategory((prev) => [...subCategory, e.target.value]);
    }
  }

  const applyFilters = () => {
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

    setProductsList(productsCopy);
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    applyFilters();
  }, [category, subCategory,setShowSearch]);

  return (
    <div className=" flex flex-col gap-6 sm:flex-row sm:gap-1 py-6">
      <div className={` flex flex-col gap-3 min-w-64 sm:sticky `}>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className=" uppercase text-gray-800 text-2xl cursor-pointer flex items-center mb-7 gap-3"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={` h-4 ${showFilters ? "rotate-90" : ""} sm:hidden`}
            alt=""
          />
        </p>
        <div
          className={`border-2 border-gray-300 px-4 py-2 ${
            showFilters ? " w-full" : "hidden"
          } sm:block `}
        >
          <p className=" uppercase text-gray-800 text-l font-semibold py-2">
            categories
          </p>
          <p>
            <input
              //onClick={applyFilters}
              type="checkbox"
              value={"Men"}
              onChange={toggleCategory}
            />{" "}
            Men
          </p>
          <p>
            <input type="checkbox" value={"Women"} onChange={toggleCategory} />{" "}
            Women
          </p>
          <p>
            <input type="checkbox" value={"Kids"} onChange={toggleCategory} />{" "}
            Kids
          </p>
        </div>

        <div
          className={`border-2 border-gray-300 px-4 py-2 ${
            showFilters ? " w-full" : "hidden"
          } sm:block`}
        >
          <p className=" uppercase text-gray-800 text-l font-semibold py-2">
            type
          </p>
          <p>
            <input
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />{" "}
            Topwear
          </p>
          <p>
            <input
              type="checkbox"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />{" "}
            Bottomwear
          </p>
          <p>
            <input
              type="checkbox"
              value={"Winterwear"}
              onChange={toggleSubCategory}
            />{" "}
            Winterwear
          </p>
        </div>
      </div>

      {/* Display all products */}

      <div className=" flex flex-col gap-3 px-4 ">
        <div className=" flex items-center justify-between pb-5 ">
          <LatestCollection text1={"all"} text2={"collections"} />

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className=" border-2 border-gray-200 py-2 px-4 outline-none"
          >
            <option value="relevant">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {productsList.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
