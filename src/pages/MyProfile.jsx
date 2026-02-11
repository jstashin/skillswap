import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function MyProfile() {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto p-6 my-10">
      <div className="card bg-base-100 shadow p-6">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        <div className="flex items-center gap-4">
          {user?.photoURL && (
            <img
              className="w-20 h-20 rounded-full object-cover border"
              src={user.photoURL}
              alt="user"
            />
          )}
          <div>
            <p className="font-semibold">{user?.displayName}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/updateProfile" className="btn btn-primary">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
