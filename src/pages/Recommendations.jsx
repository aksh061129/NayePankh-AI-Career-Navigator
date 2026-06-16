import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";

function Recommendations() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/internships")
      .then((res) => {
        setInternships(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <h2 className="text-2xl font-semibold">
            Loading Recommendations...
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Internship Recommendations
          </h1>

          <p className="text-slate-500 mt-2">
            Personalized opportunities based on student interests and skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {internships.map((item, index) => (

            <div
              key={index}
              className="card p-6"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="font-bold text-xl">
                  {item.Role}
                </h2>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Match 90%
                </span>

              </div>

              <p className="text-slate-500 mb-2">
                Company
              </p>

              <p className="font-medium mb-4">
                {item.Company}
              </p>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Domain
                  </span>

                  <span>
                    {item.Domain}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Duration
                  </span>

                  <span>
                    {item.Duration}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Mode
                  </span>

                  <span>
                    {item.Mode}
                  </span>
                </div>

              </div>

              <button
                className="
                w-full
                mt-6
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-xl
                "
              >
                Apply Now
              </button>

            </div>

          ))}

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

export default Recommendations;