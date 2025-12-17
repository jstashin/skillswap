import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

export default function MyProfile() {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated!");
    } catch (err) {
      toast.error(err?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-10">
      <div className="card bg-base-100 shadow p-6">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full object-cover border"
            src={user?.photoURL || "https://i.ibb.co/2n7Z7Yf/user.png"}
            alt="user"
          />
          <div>
            <p className="font-semibold">{user?.displayName || "No name"}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        <hr className="my-6" />

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Update Name</label>
            <input className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium">Update Photo URL</label>
            <input className="input input-bordered w-full" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
          </div>

          <button className="btn btn-primary" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
