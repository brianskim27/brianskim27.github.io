import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Brian Kim</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="/resume.pdf" target="_blank">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;