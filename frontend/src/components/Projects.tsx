import React, { useState } from "react";

interface Project {
  title: string;
  image: string;
  description: string;
}

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {/* Centered h2 Text */}
          <h2 className="absolute text-3xl font-bold text-center z-10">
            Projects
          </h2>
          {projects.map((project, index) => {
            // Calculate the angle for each card in the circle
            const angle = (360 / projects.length) * index;
            const radius = 200; // Radius of the circle
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute w-48 h-64 transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                }}
                onClick={() => handleCardClick(project)}
              >
                <div className="w-full h-full relative group perspective">
                  {/* Front of the Card */}
                  <div className="absolute w-full h-full bg-base-200 rounded-lg shadow-lg flex items-center justify-center p-4 transition-transform duration-500 transform group-hover:rotate-y-180">
                    <h3 className="text-xl font-bold text-center">
                      {project.title}
                    </h3>
                  </div>
                  {/* Back of the Card */}
                  <div className="absolute w-full h-full bg-base-300 rounded-lg shadow-lg flex items-center justify-center p-4 transition-transform duration-500 transform rotate-y-180 group-hover:rotate-y-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overlay for Selected Project */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeOverlay}
          >
            <div
              className="bg-base-100 rounded-lg shadow-xl max-w-[90vw] max-h-[90vh] overflow-auto p-8 transform transition-transform duration-300 scale-95 hover:scale-100"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the overlay
            >
              <h3 className="text-3xl font-bold mb-6">{selectedProject.title}</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                />
                <p className="w-full md:w-1/2 text-lg whitespace-normal overflow-auto">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;