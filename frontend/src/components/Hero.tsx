import React, { useState, useEffect } from 'react';
import profileMe from '../assets/profile_me.png';
const Hero: React.FC = () => {
  const greetings = ['Visitors!', 'Friends!', 'Everyone!', 'Miss!', 'Sir!'];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => {
        const currentIndex = greetings.indexOf(prev);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 3000); // Change greeting every 3 seconds

    return () => clearInterval(interval);
  }, [greetings]);

  return (
    <section id="hero" className="relative min-h-screen bg-base-200">
      {/* Hero Content */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={profileMe}
            className="max-w-sm h-130 w-200 rounded-lg shadow-2xl"
            alt="Hero"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Hello{' '}
              <span className="inline-block text-primary animate-slide-in">
                {currentGreeting}
              </span>
            </h1>
            <p className="py-6">
              I am Maximus Aurellus J. Bicalan. A passionate software enthusiast who likes to build web applications and learn new technologies in the field of data engineering and software development during my free time. Currently, I am a student at the University of the Philippines Los Baños, taking up BS Computer Science.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for Slide-In Animation */}
      <style>
        {`
          @keyframes slide-in {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-slide-in {
            animation: slide-in 0.5s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;