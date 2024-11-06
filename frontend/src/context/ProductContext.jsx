import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const currency = "$";
  const shippingCost = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    currency,
    shippingCost,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
