//import React, { useState } from "react";
//import { api } from "../services/axiosInstance";
//import { useAuth } from "../services/AuthContext"; // Import AuthContext
//import AdminDashboard from "./AdminDashboard"; // Import the Admin Dashboard component
import cropped_profile from "../assets/cropped_profile.png";
const About: React.FC = () => {
  //const { user } = useAuth(); // Get the logged-in user from AuthContext
  //const [email, setEmail] = useState("");
  //const [message, setMessage] = useState("");
  //const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const response = await api.post("/messages", {
  //       email_field: email,
  //       message_content: message,
  //     });
  //     console.log(response.data);
  //     alert("Message sent successfully!");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error) {
  //     alert("Failed to send message.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section id="about" className="py-12 bg-base-100">
      <div className="border-t border-base-300 w-full mb-12"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-60 rounded-lg overflow-hidden shadow-lg">
            <img
              src={cropped_profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-base-content text-justify">
            I'm super into data and how it works under the hood, which is pretty much why I aspire to become a data engineer someday. Lately, I've been diving into books
              like "Fundamentals of Data Engineering", "Kimbal's Data Warehouse Toolkit", to expand my knowledge and skills in this field. I also tend to immerse myself in learning
              some of the technologies found in a <a href="https://dataengineering.ph/study-roadmap.html" className="text-primary">data engineering roadmap</a>.
            
            Right now that I'm at my third year at University of the Philippines Los Baños, I am on the lookout for internship opportunities where I can actually experience how professionals
            utilize these technologies in real-world scenarios. I'm all about getting my hands dirty because I really want to learn more about this field. It's going to be a tough journey
            but I know myself I can do it. I am so passionate on data as it's the new oil of the 21st century. Many modern industries rely on data for growth and development.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <p className="text-lg font-semibold">Connect with me on:</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('maxbicalan@gmail.com'); // Replace with your email
              alert('Email text successfully copied!');
            }}
            className="text-3xl hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://github.com/Max-ims"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-primary transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/max-bicalan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-primary transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Conditional Rendering Based on Role */}
        {/* <div className="mt-12">
          {user?.is_admin ? (
            <AdminDashboard /> // Show the admin dashboard if user is an admin
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-base-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-base-300 rounded-lg focus:outline-none focus:border-primary"
                    rows={4}
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-primary text-white py-2 px-4 rounded-lg transition-colors ${
                    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div> */}
      </div>
      <div className="border-t border-base-300 w-full mt-12"></div>
    </section>
  );
};

export default About;
