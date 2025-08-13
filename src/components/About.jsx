import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import AOS from "aos";
import "aos/dist/aos.css";

import photo from "../assets/photo.jpg";
import resume from "../assets/resume.pdf";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen px-4 py-20 bg-gradient-to-t from-gray-900 via-gray-800 to-black flex items-center justify-center"
    >
      {/* Glass container */}
      <div 
        className="max-w-4xl mx-auto text-center backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20"
        data-aos="fade-up"
      >
        
        {/* Profile Image */}
        <div className="flex justify-center mb-6" data-aos="fade-down">
          <img
            src={photo}
            alt="Profile"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-68 md:h-68 rounded-full object-cover shadow-lg border-4 border-white/20"
          />
        </div>

        {/* Name */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Pinjala Bala Naga Ganesh
        </h2>

        {/* Typing Animation */}
        <div data-aos="zoom-in" data-aos-delay="300">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'React.js Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-base sm:text-lg md:text-xl text-cyan-300 font-semibold"
          />
        </div>

        {/* Description */}
        <p 
          className="text-sm sm:text-base md:text-lg text-gray-300 mt-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I'm a passionate developer with experience in building responsive and accessible websites using
          <strong> React, Tailwind CSS, JavaScript</strong>, and modern web technologies. I love solving UI/UX problems,
          writing clean code, and constantly learning new tools.
        </p>
        
        {/* Download Button */}
        <a
          href={resume}
          download
          className="inline-block mt-6 px-5 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition duration-300"
          data-aos="flip-up"
          data-aos-delay="500"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;
