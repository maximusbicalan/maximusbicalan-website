import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Copyright Text */}
          <p className="text-base-content text-sm">
            &copy; 2025 Maximus Bicalan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Max-ims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://www.kaggle.com/spharsarmiento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors"
            >
              <i className="fab fa-kaggle text-2xl"></i>
            </a>
            <a
              href="https://medium.com/@yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors"
            >
              <i className="fab fa-medium text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;