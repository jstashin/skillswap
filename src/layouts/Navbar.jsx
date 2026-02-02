import logo from "/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      navigate("/");
    } catch (e) {
      toast.error(e?.message || "Logout failed");
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-fuchsia-600 font-bold" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) => (isActive ? "text-fuchsia-600 font-bold" : "")}
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
            {!user && (
              <>
                <li><NavLink to="/signUp">Signup</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </>
            )}
          </ul>
        </div>

        <Link to="/" className="flex items-center">
          <img className="w-10 ml-3 mr-1" src={logo} alt="logo" />
          <span className="text-xl text-fuchsia-700 font-bold hover:text-fuchsia-900 transition-colors">
            SkillSwap
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {!user ? (
          <>
            <Link to="/signUp" className="btn btn-ghost">Signup</Link>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </>
        ) : (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
              <img
                className="w-10 h-10 rounded-full object-cover border"
                src={user?.photoURL || "https://i.ibb.co/2n7Z7Yf/user.png"}
                alt="avatar"
              />
            </div>
            <button onClick={handleLogout} className="btn btn-outline">
              Logout
            </button>
          </>
        )}

       
      </div>
    </div>
  );
}
export default Navbar;
