import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillCircle({ skill, value, color, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start >= value) clearInterval(interval);
      }, 15);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="w-32 h-32 flex flex-col items-center"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: "#fff",
          trailColor: "#eee",
          textSize: "18px",
        })}
      />
      <p className="mt-2 font-semibold text-white">{skill}</p>
    </div>
  );
}

export default SkillCircle;
