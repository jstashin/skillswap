import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login =()=> {
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Login failed");
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Google login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 my-10 bg-base-100 shadow rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="input input-bordered w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email"
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
              placeholder="Enter password"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mt-2 text-right">
            <Link
              to={`/forgot-password?email=${encodeURIComponent(email)}`}
              className="link link-primary text-sm"
            >
              Forget Password?
            </Link>
          </div>
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Login
        </button>

        <button className="btn btn-outline w-full" type="button" onClick={handleGoogle}>
          Continue with Google
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        New here? <Link className="link link-primary" to="/signUp">Create an account</Link>
      </p>
    </div>
  );
}
export default Login;