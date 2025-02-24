import React, { useState, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  // Check if the user has a preferred theme in local storage
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Detect Scrolling & Toggle Scrollbar Visibility
  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.add("scrolling");

      // Remove the "scrolling" class after 1 second of inactivity
      clearTimeout(window.scrollTimer);
      window.scrollTimer = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full-Screen Hero Navigation */}
      <section id="hero">
        <h1>Brian Kim</h1>
        <nav>
          <ul>
            <li onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</li>
            <li onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</li>
            <li onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</li>
            <li>
              <a href="/Brian Kim Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </nav>
        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </section>

      {/* Sections */}
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
