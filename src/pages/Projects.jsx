import React from "react";

function Projects() {
  const projects = [
    {
      title: "FitFusion",
      description:
        "Een responsive web applicatie gebouwd met React. In deze web applicatie kun je ook een fitness schema laten genereren",
      image: "",
      link: "https://velvety-syrniki-43b0a2.netlify.app",
      technologies: ["React", "Typescript", "JavaScript"],
    },
    {
      title: "Nova",
      description: "Een bedrijf's fictieve webshop pagina.",
      image: "/src/images/Logo Ignyte_transparentbg.png",
      link: "https://rad-yeot-72804e.netlify.app",
      technologies: ["React", "Typescript", "Javascript", "CSS"],
    },
    {
      title: "Travel Ease",
      description:
        "Een responsive web applicatie gebouwd met React en Tailwind CSS.",
      image: "/src/images/Screenshot 2025-03-20 at 12.47.05.png",
      link: "https://spectacular-begonia-6fc226.netlify.app/",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "IGNYTE",
      description:
        "Een bedrijf's website gebouwd met React en UI/UX principes.",
      image: "/src/images/Logo Ignyte_transparentbg.png",
      link: "https://ignyte.online/",
      technologies: ["React", "Javascript", "CSS"],
    },

    {
      title: "Front Page",
      description: "Een simpele front page gebouwd met html/css.",
      image: "/src/images/Screenshot 2025-03-20 at 12.57.31.png",
      link: "https://super-gelato-8d5b85.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mijn Projecten</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Bekijk Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
