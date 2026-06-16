import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import API from "../services/api";

function Home() {
  // const [stats, setStats] = useState({
  //   students: 20,
  //   internships: 0,
  //   roadmaps: 0,
  //   volunteers: 0,
  // });

  // useEffect(() => {
  //   API.get("/stats")
  //     .then((res) => {
  //       setStats(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
const stats = {
  students: 20,
  internships: 9,
  roadmaps: 15,
  volunteers: 8,
};
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        {/* Hero Section */}

        <section className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="text-6xl font-bold text-slate-800 mb-6">
            Empowering Students Through
            <span className="text-blue-600"> Career Intelligence</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Discover internships, personalized learning roadmaps,
            volunteer opportunities and career guidance through
            one unified platform.
          </p>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Get Started
          </Link>

        </section>

        {/* Services */}

        <section className="max-w-7xl mx-auto px-6 pb-10">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="card p-8">
              <h3 className="font-bold text-xl mb-3">
                Internship Matching
              </h3>

              <p className="text-slate-600">
                Discover opportunities aligned with your skills and interests.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-xl mb-3">
                Career Guidance
              </h3>

              <p className="text-slate-600">
                Get recommendations for future career paths.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-xl mb-3">
                Learning Roadmaps
              </h3>

              <p className="text-slate-600">
                Structured plans to achieve your career goals.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-xl mb-3">
                Volunteer Programs
              </h3>

              <p className="text-slate-600">
                Engage in impactful social initiatives.
              </p>
            </div>

          </div>

        </section>

        {/* Dynamic Statistics */}

        <section className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Platform Statistics
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="card p-6 text-center">
              <h2 className="text-5xl font-bold text-blue-600">
                {stats.students}
              </h2>

              <p className="mt-3 text-slate-600">
                Registered Students
              </p>
            </div>

            <div className="card p-6 text-center">
              <h2 className="text-5xl font-bold text-green-600">
                {stats.internships}
              </h2>

              <p className="mt-3 text-slate-600">
                Internship Matches
              </p>
            </div>

            <div className="card p-6 text-center">
              <h2 className="text-5xl font-bold text-purple-600">
                {stats.roadmaps}
              </h2>

              <p className="mt-3 text-slate-600">
                Roadmaps Generated
              </p>
            </div>

            <div className="card p-6 text-center">
              <h2 className="text-5xl font-bold text-orange-500">
                {stats.volunteers}
              </h2>

              <p className="mt-3 text-slate-600">
                Volunteer Applications
              </p>
            </div>

          </div>

        </section>
<footer className="bg-white border-t mt-20">
  <div className="max-w-7xl mx-auto px-6 py-6 text-center text-slate-500">
    © 2026 NayePankh Career Navigator |
    Empowering Students Through Career Intelligence
  </div>
</footer>
      </div>
    </>
  );
}

export default Home;
