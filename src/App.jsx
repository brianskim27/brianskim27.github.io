import React, { useState, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

function App() {
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Initialize OverlayScrollbars without autoHide
    const osInstance = OverlayScrollbars(document.body, {
      className: "os-theme-dark",
      scrollbars: {
        autoHide: "never", // Prevent OverlayScrollbars from instantly hiding
      },
    });

    // Scroll detection for fade-out effect & sticky header
    let scrollTimer;
    const handleScroll = () => {
      setIsScrolling(true);
      document.body.classList.add("scrolling");

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        document.body.classList.remove("scrolling");
      }, 1000); // Delay before fade-out starts

      // Show sticky header when scrolling past hero section
      const heroHeight = document.getElementById("hero").offsetHeight;
      setShowHeader(window.scrollY > heroHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      osInstance.destroy();
    };
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <header className={`sticky-header ${showHeader ? "visible" : ""}`}>
        <h2>Brian Kim</h2>
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
      </header>

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
        {/* Social Media Icons */}
        <div className="social-links">
          <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </section>

      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
