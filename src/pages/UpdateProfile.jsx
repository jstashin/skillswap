import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

export default function UpdateProfile() {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully!");
      navigate("/myProfile");
    } catch (err) {
      toast.error(err?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 my-10">
      <div className="card bg-base-100 shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Photo URL</label>
            <input
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
