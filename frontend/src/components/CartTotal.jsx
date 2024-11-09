import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import LatestCollection from "../components/LatestCollection";
import { Link } from "react-router-dom";
import Button from "./Button";

const CartTotal = () => {
  const { currency, shippingCost, getCartTotalAmount } =
    useContext(ProductContext);

  return (
    <div className=" w-full">
      <div className=" text-2xl">
        <LatestCollection text1={"cart"} text2={"totals"} />
      </div>

      <div className=" flex justify-between items-center py-3 font-semibold">
        <p className="  text-black">SubTotal</p>
        <p className="  text-black">
          {currency} {getCartTotalAmount()}.00
        </p>
      </div>
      <hr />

      <div className=" flex justify-between items-center py-3 font-semibold">
        <p className="  text-black">Shipping Fee</p>
        <p className="  text-black">
          {currency}
          {shippingCost}.00
        </p>
      </div>
      <hr />

      <div className=" flex justify-between items-center py-3 font-semibold">
        <p className="  text-black">Total</p>
        <p className="  text-black">
          {currency}
          {getCartTotalAmount() + shippingCost}.00
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
