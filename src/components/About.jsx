import React from "react";
import "../About.css";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>Hey there! I'm Brian, a Binghamton University graduate with a B.S. in Computer Science (Class of '25).</p>
        <p>
          Growing up, I've always loved working with technology. After briefly exploring the field of law, I decided to
          fully pursue the ever-growing world of computer science. Recently, I released a passion project of mine - 
          Splitsy, an iOS bill-splitting app designed to simplify group payments. It's available on Apple's TestFlight for beta testing and has
          reduced manual bill-calculation time by 90% for users. As I continue to make improvements to the app, I've also expanded my skill set
          in data analysis and have recently completed a full-scale data analysis project on the ongoing 2025-2026 English Premier League season.
        </p>
        <p>
          Outside of work, I'm passionate about sports and the outdoors. Soccer is my first love (lifelong Tottenham
          Hotspur fan, thrilled by their recent trophy win!), and I'm currently working on my basketball skills while aiming to become an all-rounder
          across many sports. I also enjoy gaming, where competitively I've achieved high ranks in multiple titles (Master in TFT,
          Diamond in League of Legends and Valorant). For me, gaming is a fun way to challenge myself, sharpen strategic thinking, and build adaptability
          - with a personal goal of reaching at least Diamond in every competitive game I play. What I love about both sports and gaming is that, whether
          I'm outside or at home, they give me a chance to have fun and connect with friends.
        </p>
        <p>
          Music is another big part of my life. I mainly play the drums and bass guitar, but I've also picked up acoustic
          guitar, and I previously played clarinet and saxophone — even winning a NYSSMA Gold medal with my band.
          My playlists span Korean, American, and Christian music, and I'm always excited to discover new sounds and draw inspiration from them.
        </p>
        <h3>Some additional goals of mine:</h3>
        <p>
          🎵 Learn to produce music<br></br>
          🎤 Improve my vocal skills<br></br>
          🌌 See the Northern Lights (in Iceland)<br></br>
          🤖 Learn more about machine learning and AI applications<br></br>
        </p>
      </div>
      <div className="about-image">
        <img src={"/professional head shot.JPG"} alt="Brian Kim" />
      </div>
    </section>
  );
}

export default About;
