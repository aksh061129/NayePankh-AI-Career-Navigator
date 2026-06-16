import Navbar from "../components/Navbar";
import { useState } from "react";

function CareerMentor() {
  const [career, setCareer] = useState("");
  const [guidance, setGuidance] = useState(null);

  const careerData = {
    "AI Engineer": {
      description:
        "AI Engineers build intelligent systems using Machine Learning and Deep Learning technologies.",
      skills: ["Python", "Machine Learning", "Deep Learning"],
      roadmap: "Python → ML → Deep Learning → AI Projects",
      duration: "4 - 6 Months",
      certification: "IBM AI Certification",
      salary: "₹6 - ₹12 LPA",
      resources: [
        "Python Programming",
        "Machine Learning Basics",
        "Deep Learning Projects",
      ],
    },

    "Data Scientist": {
      description:
        "Data Scientists analyze large datasets and derive insights for decision making.",
      skills: ["Python", "Statistics", "Data Analytics"],
      roadmap: "Python → Pandas → Visualization → ML",
      duration: "3 - 5 Months",
      certification: "Google Data Analytics",
      salary: "₹5 - ₹10 LPA",
      resources: [
        "Statistics Fundamentals",
        "Pandas & NumPy",
        "Data Visualization",
      ],
    },

    "Full Stack Developer": {
      description:
        "Full Stack Developers build complete web applications from frontend to backend.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      roadmap: "Frontend → Backend → Database → Projects",
      duration: "4 - 6 Months",
      certification: "Meta Full Stack Certification",
      salary: "₹4 - ₹9 LPA",
      resources: [
        "HTML & CSS",
        "JavaScript",
        "React Development",
      ],
    },

    "Software Engineer": {
      description:
        "Software Engineers design, develop and maintain software systems.",
      skills: ["DSA", "OOP", "System Design"],
      roadmap: "Programming → DSA → Projects → Interviews",
      duration: "5 - 7 Months",
      certification: "Java Programming Professional",
      salary: "₹5 - ₹11 LPA",
      resources: [
        "Data Structures",
        "Object Oriented Programming",
        "System Design Basics",
      ],
    },
  };

  const handleCareer = (selectedCareer) => {
    setCareer(selectedCareer);
    setGuidance(careerData[selectedCareer]);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-10 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="mb-10">

            <h1 className="text-4xl font-bold">
              Career Mentor
            </h1>

            <p className="text-slate-500 mt-2">
              Explore career paths and receive personalized guidance.
            </p>

          </div>

          {/* Career Buttons */}

          <div className="flex gap-4 flex-wrap mb-10">

            {Object.keys(careerData).map((item) => (
              <button
                key={item}
                onClick={() => handleCareer(item)}
                className="
                px-5 py-3
                rounded-xl
                bg-white
                shadow-md
                hover:bg-blue-600
                hover:text-white
                transition
                "
              >
                {item}
              </button>
            ))}

          </div>

          {/* Guidance Section */}

          {guidance && (

            <div className="card p-8">

              <h2 className="text-3xl font-bold">
                {career}
              </h2>

              <p className="text-slate-500 mt-3 mb-8">
                {guidance.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">

                <div>

                  <h3 className="font-semibold text-lg mb-4">
                    Required Skills
                  </h3>

                  <ul className="space-y-3">

                    {guidance.skills.map((skill, index) => (
                      <li key={index}>
                        ✅ {skill}
                      </li>
                    ))}

                  </ul>

                </div>

                <div>

                  <h3 className="font-semibold text-lg mb-4">
                    Recommended Roadmap
                  </h3>

                  <p>
                    {guidance.roadmap}
                  </p>

                </div>

              </div>

              {/* Stats Cards */}

              <div className="grid md:grid-cols-3 gap-6 mt-10">

                <div className="bg-slate-100 p-5 rounded-xl">

                  <h3 className="font-semibold">
                    Preparation Time
                  </h3>

                  <p className="mt-2">
                    {guidance.duration}
                  </p>

                </div>

                <div className="bg-slate-100 p-5 rounded-xl">

                  <h3 className="font-semibold">
                    Certification
                  </h3>

                  <p className="mt-2">
                    {guidance.certification}
                  </p>

                </div>

                <div className="bg-slate-100 p-5 rounded-xl">

                  <h3 className="font-semibold">
                    Average Salary
                  </h3>

                  <p className="mt-2">
                    {guidance.salary}
                  </p>

                </div>

              </div>

              {/* Learning Resources */}

              <div className="mt-10">

                <h3 className="font-semibold text-lg mb-4">
                  Learning Resources
                </h3>

                <ul className="space-y-2">

                  {guidance.resources.map((resource, index) => (
                    <li key={index}>
                      📘 {resource}
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          )}

        </div>

        {/* Footer */}

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

export default CareerMentor;