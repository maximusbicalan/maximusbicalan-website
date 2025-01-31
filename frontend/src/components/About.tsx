import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-12 bg-base-100">
      {/* Divider on Top */}
      <div className="border-t border-base-300 w-full mb-12"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg">
            <img
              src="path_to_profile_picture.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Biography */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-base-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6">
          <p className="text-lg font-semibold">Connect with me on:</p> 
          <a
            href="https://github.com/Max-ims"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-primary transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-primary transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* Add more social links as needed */}
        </div>

        {/* Messaging Feature */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-base-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-base-300 rounded-lg focus:outline-none focus:border-primary"
                rows={4}
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Divider at the Bottom */}
      <div className="border-t border-base-300 w-full mt-12"></div>
    </section>
  );
};

export default About;