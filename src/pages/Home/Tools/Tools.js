import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  const { data } = useQuery("allTools", () =>
    axios.get("http://localhost:5000/tools")
  );

  return (
    <div className=" mt-16">
      <h4 className="upper text-center text-lg text-red-700 font-semibold my-4">
        Quality Tools
      </h4>
      <h2 className="text-4xl text-center font-medium">
        Do Your Work <span className="font-bold">Perfectly & Smoothly</span>
      </h2>
      <div className="grid grid-cols-3 justify-items-center mt-16 ">
        {tools.map((tool) => (
          <ToolsCard key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
