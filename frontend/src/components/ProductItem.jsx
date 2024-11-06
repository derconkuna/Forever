import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, price, name }) => {
  const { currency } = useContext(ProductContext);
  return (
    <Link to={`/product/${id}`} className=" text-gray-800 cursor-pointer">
      <div className=" overflow-hidden">
        <img
          src={image[0]}
          className="  hover:scale-110 transition ease-in-out"
          alt=""
        />
      </div>
      <p className=" text-sm ">{name}</p>
      <p className=" font-semibold text-gray-900">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
