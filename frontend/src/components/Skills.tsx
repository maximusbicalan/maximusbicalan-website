import React, { useState } from "react";

// Predefined lists of skills
const hardSkillsCatalog = [
  { title: "Python", icon: "🐍" },
  { title: "JavaScript", icon: "📜" },
  { title: "React", icon: "⚛️" },
  { title: "TypeScript", icon: "🟦" },
  { title: "AWS", icon: "☁️" },
  { title: "Azure", icon: "🔷" },
  { title: "Databricks", icon: "🛠️" },
  { title: "Tableau", icon: "📊" },
];

const softSkillsCatalog = [
  { title: "Communication" },
  { title: "Teamwork" },
  { title: "Problem Solving" },
  { title: "Leadership" },
];

const Skills: React.FC = () => {
  const [hardSkills, setHardSkills] = useState<{ title: string; icon: string }[]>([]);
  const [softSkills, setSoftSkills] = useState<{ title: string }[]>([]);
  const [showHardSkillsCatalog, setShowHardSkillsCatalog] = useState(false);
  const [showSoftSkillsCatalog, setShowSoftSkillsCatalog] = useState(false);

  const addHardSkill = (skill: { title: string; icon: string }) => {
    setHardSkills([...hardSkills, skill]);
    setShowHardSkillsCatalog(false);
  };

  const addSoftSkill = (skill: { title: string }) => {
    setSoftSkills([...softSkills, skill]);
    setShowSoftSkillsCatalog(false);
  };

  const removeHardSkill = (index: number) => {
    setHardSkills(hardSkills.filter((_, i) => i !== index));
  };

  const removeSoftSkill = (index: number) => {
    setSoftSkills(softSkills.filter((_, i) => i !== index));
  };

  return (
    <section className="p-8 bg-base-200">
      <h2 className="text-3xl font-bold text-center mt-20 mb-12">Skills</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Hard Skills Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Hard Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hardSkills.map((skill, index) => (
              <Tile
                key={index}
                title={skill.title}
                icon={skill.icon}
                onRemove={() => removeHardSkill(index)}
              />
            ))}
            <button
              className="tile bg-base-100 flex items-center justify-center text-2xl font-bold hover:bg-base-300 transition-colors"
              onClick={() => setShowHardSkillsCatalog(true)}
            >
              +
            </button>
          </div>
          {showHardSkillsCatalog && (
            <div className="mt-4 p-4 bg-base-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Add Hard Skill</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hardSkillsCatalog.map((skill, index) => (
                  <div
                    key={index}
                    className="p-2 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-colors"
                    onClick={() => addHardSkill(skill)}
                  >
                    <div className="text-center">
                      <span className="text-2xl">{skill.icon}</span>
                      <p className="mt-2">{skill.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Soft Skills Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <Tile
                key={index}
                title={skill.title}
                onRemove={() => removeSoftSkill(index)}
              />
            ))}
            <button
              className="tile bg-base-100 flex items-center justify-center text-2xl font-bold hover:bg-base-300 transition-colors"
              onClick={() => setShowSoftSkillsCatalog(true)}
            >
              +
            </button>
          </div>
          {showSoftSkillsCatalog && (
            <div className="mt-4 p-4 bg-base-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Add Soft Skill</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {softSkillsCatalog.map((skill, index) => (
                  <div
                    key={index}
                    className="p-2 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-colors"
                    onClick={() => addSoftSkill(skill)}
                  >
                    <p className="text-center">{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Tile Component
const Tile: React.FC<{
  title: string;
  icon?: string;
  onRemove: () => void;
}> = ({ title, icon, onRemove }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="tile bg-base-100 rounded-lg shadow-lg p-4 cursor-pointer transform transition-transform duration-500 hover:scale-105 relative"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <button
        className="absolute top-1 right-1 text-red-500 hover:text-red-700"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        X
      </button>
      <div className={`tile-content ${isFlipped ? "rotate-y-180" : ""}`}>
        <div className="tile-front flex flex-col items-center justify-center">
          {icon && <span className="text-2xl">{icon}</span>}
          <p className="mt-2 text-center">{title}</p>
        </div>
        <div className="tile-back flex items-center justify-center">
          <p>More details about {title}...</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;