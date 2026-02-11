import { useLoaderData, useParams } from "react-router";
import SkillDetails from "./SkillDetails";
import { FaStar } from "react-icons/fa6";
const SkillDetailsPage = ()=> {
  const skills = useLoaderData();
  const { id } = useParams();

  const skill = skills.find((s) => String(s.skillId) === String(id));
  if (!skill) return <div className="p-10 text-center">Skill not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="card bg-base-100 shadow-md p-6">
        <img className="w-full max-h-[350px] object-cover rounded-xl" src={skill.image} alt="" />
        <h2 className="text-3xl font-bold mt-4">{skill.skillName}</h2>
        <p className="mt-2 text-gray-600">{skill.description}</p>

        <div className="grid md:grid-cols-2 gap-3 mt-4">
          <p><b>Provider:</b> {skill.providerName}</p>
          <p><b>Email:</b> {skill.providerEmail}</p>
          <p><b>Category:</b> {skill.category}</p>
          <p><b>Price:</b> ${skill.price}</p>
          <p><b>Rating:</b> <FaStar /> {skill.rating}</p>
          <p><b>Slots:</b> {skill.slotsAvailable}</p>
        </div>
      </div>

      <SkillDetails />
    </div>
  );
}
export default SkillDetailsPage;