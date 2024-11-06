import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Product = () => {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if ((item._id == productId)) {
        setProductData(item);
        console.log(item);
        return;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return (
    <div>
      
    </div>
  );
};

export default Product;
