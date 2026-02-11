import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleSignin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current?.value || "";
    navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 px-4">
      <div className="w-full max-w-md bg-white/10 border border-white/20 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form onSubmit={handleSignin} className="space-y-5">
          <div>
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              required
              className="input input-bordered w-full bg-white/20 text-white"
            />
          </div>

          <div className="relative">
            <label>Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              required
              className="input input-bordered w-full bg-white/20 text-white pr-10"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-10 cursor-pointer"
            >
              {show ? <IoEyeOff /> : <FaEye />}
            </span>
          </div>

          <button
            type="button"
            onClick={handleForgetPassword}
            className="text-sm underline text-left"
          >
            Forget Password?
          </button>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn w-full bg-white text-gray-800 flex items-center justify-center gap-2"
          >
            <img src="/Logo-google.png" className="w-5 h-5" />
            Continue with Google
          </button>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/signUp" className="underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
