import React, { useEffect, useState } from "react";
import "../Projects.css";

const projects = [
  {
    name: "Splitsy",
    description: "Full-scale iOS app that simplifies bill splitting.",
    link: "https://github.com/brianskim27/splitsy",
    repo: "brianskim27/Splitsy",
  },
  {
    name: "EPL Data Analytics",
    description: "Data analysis on the 2025-2026 EPL season using SQL, Python, and Power BI.",
    link: "https://github.com/brianskim27/epl_2025_2026_analysis",
    repo: "brianskim27/epl_2025_2026_analysis",
  },
  {
    name: "Personal Website",
    description: "My personal/portfolio website.",
    repo: "brianskim27/brianskim27.github.io",
  },
  {
    name: "Aim Trainer Game",
    description: "A 2D shooter game made using pygame.",
    repo: "brianskim27/Aim-Trainer-Game",
  },
];

function Projects() {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    projects.forEach((project) => {
      if (project.repo) {
        fetch(`https://api.github.com/repos/${project.repo}/languages`)
          .then((res) => res.json())
          .then((data) => {
            const totalBytes = Object.values(data).reduce((a, b) => a + b, 0);
            const langPercentages = Object.entries(data).map(([lang, bytes]) => ({
              language: lang,
              percentage: ((bytes / totalBytes) * 100).toFixed(1),
            }));
            setLanguages((prev) => ({ ...prev, [project.repo]: langPercentages }));
          })
          .catch((error) => console.error("Error fetching GitHub languages:", error));
      }
    });
  }, []);

  return (
    <section id="projects">
      <div className="projects-text">
        <h2>Projects</h2>
        <p>Here are some projects I have worked on. Click on a project to learn more.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <a key={project.name} href={project.link ? project.link : project.repo ? `https://github.com/${project.repo}` : "#"} target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            {/* Language Bar */}
            {languages[project.repo] && (
              <div className="language-section">
              <h4>Languages</h4>
              <div className="language-bar">
                  {languages[project.repo].map((lang) => (
                      <div
                          key={lang.language}
                          className="language-segment"
                          style={{
                              width: `${lang.percentage}%`,
                              backgroundColor: getLanguageColor(lang.language),
                          }}
                      />
                  ))}
              </div>
              <div className="language-labels">
                  {languages[project.repo].map((lang) => (
                      <span key={lang.language} className="language-label">
                          <span className="language-dot" style={{ backgroundColor: getLanguageColor(lang.language) }}></span>
                          <strong>{lang.language}</strong> {lang.percentage}%
                      </span>
                  ))}
              </div>
          </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

// Function to Get Colors for Languages
const getLanguageColor = (language) => {
  const colors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    CSS: "#563d7c",
    HTML: "#e34c26",
    TypeScript: "#3178c6",
    C: "#555555",
    "C++": "#f34b7d",
    Swift: "#ffac45",
    Go: "#00ADD8",
    Rust: "#dea584",
  };
  return colors[language] || "#ccc"; // Default color
};

export default Projects;