import React from "react";
import Hero from "../components/Hero";
import LatestProducts from "../components/LatestProducts";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";

const Home = ({ text1, text2 }) => {
  return (
    <div>
      <Hero />
      <LatestProducts />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
