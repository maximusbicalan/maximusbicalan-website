import React from "react";

// Predefined lists of skills
const hardSkills = [
  { title: "Python", icon: "🐍" },
  { title: "JavaScript", icon: "📜" },
  { title: "React", icon: "⚛️" },
  { title: "TypeScript", icon: "🟦" },
  { title: "AWS", icon: "☁️" },
  { title: "Azure", icon: "🔷" },
  { title: "Databricks", icon: "🛠️" },
  { title: "Tableau", icon: "📊" },
];

const softSkills = [
  { title: "Communication" },
  { title: "Teamwork" },
  { title: "Problem Solving" },
  { title: "Leadership" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="p-8 bg-base-200">
      <h2 className="text-3xl font-bold text-center mt-20 mb-12">Skills</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Hard Skills Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Hard Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hardSkills.map((skill, index) => (
              <Tile key={index} title={skill.title} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <Tile key={index} title={skill.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Tile Component
const Tile: React.FC<{ title: string; icon?: string }> = ({ title, icon }) => {
  return (
    <div className="tile bg-base-100 rounded-lg shadow-lg p-4 cursor-pointer transform transition-transform duration-500 hover:scale-105">
      <div className="flex flex-col items-center justify-center">
        {icon && <span className="text-2xl">{icon}</span>}
        <p className="mt-2 text-center">{title}</p>
      </div>
    </div>
  );
};

export default Skills;