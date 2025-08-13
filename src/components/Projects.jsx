import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import project1 from "../assets/img1.png";
import project2 from "../assets/image.png";
import project3 from "../assets/pokemon.jpg";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const projectData = [
  ,
    {
      title: "Weather App",
      description:
        "Built a modern, responsive landing page for Lumoscale, focusing on clear messaging, conversion-oriented layout, and performance. Implemented semantic HTML, modular CSS, and accessibility best practices",
      image: project2,
      demoLink: "https://lumosscale.vercel.app/",
      codeLink: "https://github.com/ganeshbala-88/lumosscale",
    },
    {
      title: "pokemons",
      description:
        "A fun and interactive Pokémon card project that allows users to explore, filter, and learn about various Pokémon, showcasing my skills in front-end development and API integration",
      image: project3,
      demoLink: "https://pokemonfetch.vercel.app/",
      codeLink: "https://github.com/ganeshbala-88/pokemonfetch",
    },
      {
      title: "car game",
      description:
        "A simple, fun, browser-based racing game where players dodge obstacles and score points. Built for quick entertainment with responsive controls and engaging visuals.",
      image: project1,
      demoLink: "",
      codeLink: "https://github.com/ganeshbala-88/cargame",
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl font-bold text-white mb-12"
          data-aos="fade-down"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg shadow-white/20 rounded-xl overflow-hidden hover:shadow-white/20 hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white text-sm mb-2">{project.description}</p>
                <div className="text-sm text-white italic mb-4">
                  {project.tech}
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded hover:opacity-90"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded hover:bg-indigo-50"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
