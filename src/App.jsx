import React, { useState, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

function App() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
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

      // Adjust when the sticky header appears
      const heroHeight = document.getElementById("hero").offsetHeight;
      setShowHeader(window.scrollY >= heroHeight * 0.8); // Show just before hero ends
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
      <h2 onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })} className="header-title">Brian Kim</h2>
        <nav>
          <ul>
            <li onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</li>
            <li onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</li>
            <li onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</li>
            <li>
              <a href="/Brian Kim Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
            <li>
              <button className="theme-toggle-icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
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
          <a href="https://www.instagram.com/brianskim_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/brungim" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/brianskim27/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/brianskim27" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>}
        </button>
      </section>

      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
