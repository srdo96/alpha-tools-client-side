import React from "react";

const ToolsCard = ({ tool }) => {
  const { img, name, desc, min_order, available, price_unit } = tool;
  return (
    <div className="grid grid-cols-3 justify-items-center mt-16 ">
      <div class="card card-compact w-96 bg-white shadow-xl ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{desc.slice(0, 150)}...</p>
          <p>
            <span className="font-bold">Minimum Order:</span> {min_order}
          </p>
          <p>
            <span className="font-bold">Abailable:</span> {available}
          </p>
          <p>
            <span className="font-bold">Price/unit:</span> ${price_unit}
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-block btn-primary ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
