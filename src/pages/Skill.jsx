import React from "react";
import { Link } from "react-router";

const Skill = ({ skill }) => {
  const { image, skillName, rating, price, skillId, category } = skill;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden hover:-translate-y-1 ">
      <div className="relative">
        <img
          src={image}
          alt={skillName}
          className="w-full h-44 object-cover "
       
        />

        <div className="absolute top-3 left-3 badge badge-secondary badge-sm">
          {category || "Skill"}
        </div>

        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold">
          ${price}
        </div>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-bold leading-tight">{skillName}</h3>

        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600">{rating}</span>
        </div>

        <Link
          to={`/skills/${skillId}`}
          className="btn btn-primary btn-sm w-full mt-4 rounded-xl"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Skill;
