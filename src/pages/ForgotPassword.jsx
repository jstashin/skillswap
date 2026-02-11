import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const ForgotPassword =()=> {
  const { resetPassword } = useAuth();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const e = params.get("email") || "";
    setEmail(e);
  }, [params]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    try {
      await resetPassword(email); 
      toast.success("Password reset email sent! Redirecting to Gmail...");
      
       window.open("https://mail.google.com", "_blank");

      
    } catch (err) {
      toast.error(err?.message || "Reset failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 my-10 bg-base-100 shadow rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Forgot password</h2>

      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="input input-bordered w-full"
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Reset Password
        </button>

        <button className="btn btn-ghost w-full" type="button" onClick={() => navigate("/login")}>
          Back to Login
        </button>
      </form>
    </div>
  );
}
 export default ForgotPassword;