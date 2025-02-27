import React from "react";
import "../Contact.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-text">
        <h2>Contact</h2>
        <p>
          I love meeting new people and am always open to connect!
          <br></br>Feel free to reach out to me via email (brianskim27@gmail.com) or social media.
        </p>
        <div className="contact-icons">
          <a href="https://www.instagram.com/brianskim_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/brungim" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com/in/brianskim27" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/brianskim27" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:brianskim27@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
