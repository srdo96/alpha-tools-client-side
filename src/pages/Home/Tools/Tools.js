import React from "react";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  //   console.log(data);
  return (
    <div className=" mt-16">
      <h4 className="upper text-center text-lg text-red-700 font-semibold my-4">
        Quality Tools
      </h4>
      <h2 className="text-4xl text-center font-medium">
        Do Your Work <span className="font-bold">Perfectly & Smoothly</span>
      </h2>
      <ToolsCard />
    </div>
  );
};

export default Tools;
