import React from "react";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" pt-12 ">
      <p className=" text-gray-900 text-lg font-semibold text-center">
        Subscribe now & get 20% off
      </p>
      <p className=" text-center py-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illum
        accusantium.
      </p>

      <form
        onClick={handleSubmit}
        className=" w-full sm:w-1/2 flex items-center gap-1 mx-auto border pl-3 my-6"
      >
        <input
          className=" w-full sm:flex-1 outline-none bg-white"
          type="email"
          placeholder=" Enter your email"
          required
        />

        <button
          type="submit"
          className=" bg-black text-white px-10 py-3 text-sm"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
