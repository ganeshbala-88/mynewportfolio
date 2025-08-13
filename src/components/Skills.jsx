import SkillCircle from "./SkillCircle";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-l from-gray-900 via-gray-800 to-black px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <SkillCircle skill="HTML" value={90} color="#f97316" />
          <SkillCircle skill="CSS" value={85} color="#3b82f6" />
          <SkillCircle skill="JavaScript" value={80} color="#facc15" />
          <SkillCircle skill="React" value={75} color="#38bdf8" />
          <SkillCircle skill="Tailwind" value={70} color="#06b6d4" />
          <SkillCircle skill="Node.js" value={65} color="#10b981" />
          <SkillCircle skill="ML" value={60} color="#9929EA" />
          <SkillCircle skill="NLP" value={60} color="#30dec3" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
