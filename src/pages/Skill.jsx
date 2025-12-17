import React from 'react';
import { Link } from 'react-router';

const Skill = ({skill}) => {
    const {image,skillName,rating,price}=skill;
    return (
        <div>
     <div className="card items-center bg-base-100 shadow-sm hover:scale-110 transition ease-in-out p-3 rounded">
        <img src={skill.image} alt="" className="w-60 h-36 object-cover rounded" />
        <h3 className="mt-2 font-semibold">{skill.skillName}</h3>
        <p className="text-sm text-gray-500">{skill.rating}</p>
       
    
      </div>
       <Link to={`/skills/${skill.skillId}`} className="btn btn-sm mt-3">
        View Details
      </Link>
      </div>




            
        
    );
};

export default Skill;