import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/recommendations");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-12 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Left Section */}

          <div className="bg-blue-600 text-white rounded-3xl p-10 flex flex-col justify-center">

            <h1 className="text-4xl font-bold mb-6">
              Start Your Career Journey
            </h1>

            <p className="mb-8 text-lg">
              Register to receive personalized career guidance,
              internship recommendations and learning roadmaps.
            </p>

            <div className="space-y-4">

              <div className="bg-white/20 p-4 rounded-xl">
                ✓ Personalized Internship Matching
              </div>

              <div className="bg-white/20 p-4 rounded-xl">
                ✓ Career Guidance
              </div>

              <div className="bg-white/20 p-4 rounded-xl">
                ✓ Learning Roadmaps
              </div>

              <div className="bg-white/20 p-4 rounded-xl">
                ✓ Volunteer Opportunities
              </div>

            </div>

          </div>

          {/* Right Section */}

          <div className="card p-10">

            <h2 className="text-3xl font-bold mb-8">
              Student Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Branch / Department"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Year of Study"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="3"
                placeholder="Skills"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="3"
                placeholder="Interests"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Career Goal"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Generate Recommendations
              </button>

            </form>

          </div>

        </div>

      </div>
      <footer className="bg-white border-t mt-20">
  <div className="max-w-7xl mx-auto px-6 py-6 text-center text-slate-500">
    © 2026 NayePankh Career Navigator |
    Empowering Students Through Career Intelligence
  </div>
</footer>
    </>
  );
}

export default Register;