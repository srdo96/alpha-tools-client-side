import React from "react";
import Banner from "./Banner";
import Newslatter from "./Newslatter";
import Reviews from "./Reviews/Reviews";
import Summary from "./Summary";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Summary />
      <Reviews />
      <Newslatter />
    </div>
  );
};

export default Home;
