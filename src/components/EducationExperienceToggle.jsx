import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function EducationExperienceToggle() {
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const educationData = [
    {
      degree: "B.Tech - CSE(Artificial Intelligence and Machine Learning)",
      institution: "St Anns's College of Engineering and Technology",
      duration: "2021 - 2025",
      grade: "8.2 CGPA",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      duration: "2019 - 2021",
      grade: "906 / 1000",
    },
    {
      degree: "SSC",
      institution: "Z.P.High school,vetepalem",
      duration: "2017-2019",
      grade: "8.0 CGPA",
    },
  ];

  const experienceData = [
    {
      role: "Fullstack Developer Intern",
      company: "NUllclass",
      duration: "Sep 2023 - Nov 2023",
      description: [
        "Built UI using React and Tailwind CSS.",
        "Integrated Telegram bots for internal use.",
      ],
    },
    {
      role: "Machine Learning Internship",
      company: "Indian Servers Pvt. Ltd",
      duration: "Jun 2024 - Aug 2024",
      description: [
        "Developed a Telegram bot integrated with the Hugging Face API to identify the animal breed based on previous data processing.",
      ],
    },
  ];

  return (
    <section
      id="Education"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              activeTab === "education"
                ? "bg-indigo-600 text-white"
                : "bg-white border border-indigo-600 text-indigo-600"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              activeTab === "experience"
                ? "bg-indigo-600 text-white"
                : "bg-white border border-indigo-600 text-indigo-600"
            }`}
          >
            Experience
          </button>
        </div>

        {/* Content Rendering */}
        {activeTab === "education" ? (
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow p-6 rounded-xl border-l-4 border-indigo-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-indigo-300">{edu.institution}</p>
                <p className="text-sm text-white">{edu.duration}</p>
                <p className="text-gray-200 font-medium mt-1">{edu.grade}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow p-6 rounded-xl border-l-4 border-indigo-500"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
                <p className="text-indigo-300">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default EducationExperienceToggle;
