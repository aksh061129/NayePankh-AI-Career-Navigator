import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-2xl text-blue-600">
          NayePankh Career Navigator
        </h1>

        <div className="flex gap-8 font-medium text-slate-700">

          <Link className="hover:text-blue-600" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-600" to="/register">
            Register
          </Link>

          <Link className="hover:text-blue-600" to="/mentor">
            Guidance
          </Link>

          <Link className="hover:text-blue-600" to="/roadmap">
            Roadmap
          </Link>

          <Link className="hover:text-blue-600" to="/dashboard">
            Dashboard
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;