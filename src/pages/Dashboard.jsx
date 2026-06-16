import Navbar from "../components/Navbar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#14b8a6",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444",
];

const chartData = [
  { name: "Artificial Intelligence", value: 6 },
  { name: "Web Development", value: 5 },
  { name: "Python Development", value: 4 },
  { name: "Data Analytics", value: 3 },
  { name: "Java Development", value: 2 },
];

function Dashboard() {
  const totalStudents = 20;
  const internshipMatches = 9;
  const roadmapsGenerated = 15;
  const volunteers = 8;

  const roadmapPercentage = 75;
  const internshipPercentage = 45;
  const volunteerPercentage = 40;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              Student Analytics Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
              Career insights and student engagement overview
            </p>
          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-4 gap-6">

            <div className="card p-6">
              <p className="text-slate-500">
                Students Registered
              </p>

              <h2 className="text-4xl font-bold text-blue-600 mt-3">
                {totalStudents}
              </h2>
            </div>

            <div className="card p-6">
              <p className="text-slate-500">
                Internship Matches
              </p>

              <h2 className="text-4xl font-bold text-green-600 mt-3">
                {internshipMatches}
              </h2>
            </div>

            <div className="card p-6">
              <p className="text-slate-500">
                Roadmaps Generated
              </p>

              <h2 className="text-4xl font-bold text-purple-600 mt-3">
                {roadmapsGenerated}
              </h2>
            </div>

            <div className="card p-6">
              <p className="text-slate-500">
                Volunteer Applications
              </p>

              <h2 className="text-4xl font-bold text-orange-500 mt-3">
                {volunteers}
              </h2>
            </div>

          </div>

          {/* Pie Chart */}

          <div className="card p-8 mt-10">

            <h2 className="text-2xl font-bold mb-2">
              Student Career Interests
            </h2>

            <p className="text-slate-500 mb-6">
              Domain-wise distribution of students
            </p>

            <ResponsiveContainer width="100%" height={400}>
              <PieChart>

                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  dataKey="value"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />

              </PieChart>
            </ResponsiveContainer>

          </div>

          {/* Progress */}

          <div className="card p-8 mt-10">

            <h2 className="text-2xl font-bold mb-6">
              Student Progress Overview
            </h2>

            <div className="space-y-8">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Roadmaps Generated</span>
                  <span>{roadmapPercentage}%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${roadmapPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Internship Matches</span>
                  <span>{internshipPercentage}%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${internshipPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Volunteer Applications</span>
                  <span>{volunteerPercentage}%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{ width: `${volunteerPercentage}%` }}
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Recent Activity */}

          <div className="card p-8 mt-10">

            <h2 className="text-2xl font-bold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="border-b pb-3">
                🎯 9 students matched with internships
              </div>

              <div className="border-b pb-3">
                📚 15 personalized roadmaps generated
              </div>

              <div className="border-b pb-3">
                🤝 8 volunteer applications submitted
              </div>

              <div>
                🚀 Career analytics dashboard updated
              </div>

            </div>

          </div>

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

export default Dashboard;