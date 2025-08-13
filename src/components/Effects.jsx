import React, { useMemo } from "react";
import "../index.css";

const BUBBLE_COUNT = 30; // tweak for more/less bubbles

const Effects = () => {
  // generate bubble props once per mount
  const bubbles = useMemo(() => {
    return Array.from({ length: BUBBLE_COUNT }).map(() => {
      const size = Math.round(20 + Math.random() * 12); // px
      const left = Math.random() * 100; // %
      const delay = +(Math.random() *1).toFixed(2); // s
      const duration = +(10 + Math.random() * 25).toFixed(2); // s
      const opacity = +(0.05 + Math.random() * 0.4).toFixed(2);
      const blur = Math.round(Math.random() * 10); // px
      return { size, left, delay, duration, opacity, blur };
    });
  }, []);

  return (
    <div className="bubbles-container" aria-hidden="true">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            filter: `blur(${b.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default Effects;
