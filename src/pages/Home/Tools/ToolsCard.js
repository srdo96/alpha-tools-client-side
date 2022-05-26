import React from "react";
import { Link } from "react-router-dom";

const ToolsCard = ({ tool }) => {
  const { _id, img, name, desc, min_order, available, price_unit } = tool;

  return (
    <div className="card card-compact w-96 bg-white shadow-xl ">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc.slice(0, 150)}...</p>
        <p>
          <span className="font-bold">Minimum Order:</span> {min_order}
        </p>
        <p>
          <span className="font-bold">Available:</span> {available}
        </p>
        <p>
          <span className="font-bold">Price/unit:</span> ${price_unit}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/purchase/${_id}`} className="btn btn-block btn-primary ">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
