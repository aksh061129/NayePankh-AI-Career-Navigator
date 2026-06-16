import Navbar from "../components/Navbar";
import { useState } from "react";

function Roadmap() {

  const [selectedRoadmap, setSelectedRoadmap] =
    useState("AI Engineer");

  const roadmaps = {

    "AI Engineer": [
      "Python Fundamentals",
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "AI Projects",
      "Internship Preparation"
    ],

    "Data Scientist": [
      "Python",
      "Statistics",
      "Pandas & NumPy",
      "Data Visualization",
      "Machine Learning",
      "Portfolio Projects"
    ],

    "Full Stack Developer": [
      "HTML & CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "MongoDB",
      "Deployment & Projects"
    ],

    "Software Engineer": [
      "Programming Fundamentals",
      "OOP Concepts",
      "Data Structures",
      "Algorithms",
      "System Design",
      "Interview Preparation"
    ]

  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Career Roadmaps
          </h1>

          <p className="text-slate-500 mt-2">
            Explore step-by-step learning paths for different careers.
          </p>

        </div>

        {/* Roadmap Selector */}

        <div className="flex flex-wrap gap-4 mb-10">

          {Object.keys(roadmaps).map((career) => (

            <button
              key={career}
              onClick={() => setSelectedRoadmap(career)}
              className={`
                px-5 py-3 rounded-xl shadow-md transition
                ${
                  selectedRoadmap === career
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-slate-100"
                }
              `}
            >
              {career}
            </button>

          ))}

        </div>

        {/* Timeline */}

        <div className="space-y-6">

          {roadmaps[selectedRoadmap].map((step, index) => (

            <div
              key={index}
              className="card p-6 flex gap-5 items-center"
            >

              <div
                className="
                bg-blue-600
                text-white
                h-12
                w-12
                rounded-full
                flex
                items-center
                justify-center
                font-bold
                "
              >
                {index + 1}
              </div>

              <div>

                <h2 className="font-bold text-lg">
                  {step}
                </h2>

                <p className="text-slate-500">
                  Complete this stage before moving ahead.
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Completion Card */}

        <div className="card p-8 mt-10 text-center">

          <h2 className="text-2xl font-bold">
            Career Goal
          </h2>

          <p className="mt-3 text-lg">
            Become a {selectedRoadmap}
          </p>

          <button
            className="
            mt-6
            bg-blue-600
            text-white
            px-8
            py-3
            rounded-xl
            hover:bg-blue-700
            "
          >
            Download Roadmap
          </button>

        </div>
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

export default Roadmap;