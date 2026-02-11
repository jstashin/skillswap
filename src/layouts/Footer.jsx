import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/logo.png"
              alt="SkillSwap Logo"
              className="w-15 h-15"
            />
            <h2 className="text-xl font-bold">SkillSwap</h2>
          </div>
          <p className="text-sm text-gray-500">
            A local skill exchange platform to learn, teach, and grow together.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/myProfile" className="hover:underline">My Profile</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/signUp" className="hover:underline">Signup</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 border-t py-4">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
