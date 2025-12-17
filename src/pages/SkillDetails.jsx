import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const SkillDetails = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Session booked successfully!");
    setFormData({ name: user?.displayName || "", email: user?.email || "" });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Book a Session</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <button type="submit" className="w-full btn btn-primary">
          Book Session
        </button>
      </form>
    </div>
  );
}
export default SkillDetails;