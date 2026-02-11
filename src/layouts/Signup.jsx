import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const Signup = () => {
  const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const validatePassword = (pass) => {
    if (pass.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(pass)) return "Password must have an uppercase letter.";
    if (!/[a-z]/.test(pass)) return "Password must have a lowercase letter.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errMsg = validatePassword(password);
    if (errMsg) return toast.error(errMsg);

    createUser(email, password)
      .then(() => updateUserProfile(name, photoURL))
      .then(() => {
        toast.success("Signup successful!");
        navigate("/", { replace: true });
      })
      .catch((err) => toast.error(err?.message || "Signup failed"));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Google signup successful!");
        navigate("/", { replace: true });
      })
      .catch((err) => toast.error(err?.message || "Google signup failed"));
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-600 to-purple-600 px-4">
   <div className="w-full max-w-md bg-white/10 border border-white/20 rounded-2xl p-8 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Photo URL</label>
          <input
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="input input-bordered w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <div className="relative">
            <input
              className="input input-bordered w-full pr-10"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Min 6, upper & lower case"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Register
        </button>

        <button
          className="btn btn-outline bg-white text-gray-800 w-full flex items-center justify-center gap-3"
          type="button"
          onClick={handleGoogle}
        >
          <img src="/Logo-google.png" alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link className="link link-primary" to="/login">
          Login
        </Link>
      </p>
    </div></div>
  );
};

export default Signup;
