import React from "react";
import { Link } from "react-router-dom";

const ToolsCard = ({ tool }) => {
  const { _id, img, name, desc, min_order, available, price_unit } = tool;

  return (
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
          <Link to={`/purchase/${_id}`} class="btn btn-block btn-primary ">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
