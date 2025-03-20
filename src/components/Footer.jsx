import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Portfolio. Alle rechten voorbehouden.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/eseh1894"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eseh-osagie-b9480a2b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="/src/images/EsehOsagieCV2025-2.pdf"
              download
              className="text-gray-300 hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
