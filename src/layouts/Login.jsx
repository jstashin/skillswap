import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import MyContainer from "../components/MyContainer";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [show, setShow] = useState(false);

  const {
    signInWithEmailAndPassword,
    signInWithEmail, 
    setLoading,
    setUser,
    user,
  } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  
  const from = location.state?.from?.pathname || "/";

  React.useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const emailRef = useRef(null);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

 
  const handleForgetPassword = () => {
    const email = emailRef.current?.value || "";
    navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
     
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Log in to continue. Explore skills, view details, and book sessions.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSignin} className="space-y-5">
              {/* ✅ Title */}
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Login
              </h2>

              {/* ✅ Email */}
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  required
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* ✅ Password + Eye Toggle */}
              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <IoEyeOff /> : <FaEye />}
                </span>
              </div>

              {/* ✅ Forget Password */}
              <button
                className="hover:underline cursor-pointer text-left"
                onClick={handleForgetPassword}
                type="button"
              >
                Forget password?
              </button>

              {/* ✅ Login Button */}
              <button type="submit" className="my-btn w-full">
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* ✅ Google Only */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="/Logo-google.png"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              {/* ✅ Signup Link */}
              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signUp"
                  className="text-pink-300 hover:text-white underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
