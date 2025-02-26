import React from "react";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>Hey there! I'm Brian, a '25 BSCS student at Binghamton University.</p>
        <p>
          Growing up, I've always enjoyed getting my hands on technology, and after testing the waters with the field of law, 
          I decided to pursue the ever-growing computer science world.
        </p>
        <p>
          In my free time, I love to play sports and engage in outdoor activities. I especially enjoy soccer, although most of the time 
          you will see me in despair because I am unfortunately a Tottenham Hotspur fan 🤡. I have a dream to learn and do well in as many sports as possible. 
          Currently, I am enduring the difficulties in tennis haha.
        </p>
        <p>
          I enjoy playing video games, though mostly with friends. The only single-player games you will catch me playing are FIFA and TFT. 
          I play a variety of games, from MOBA to shooters, with the goal of achieving the rank-equivalent of at least Diamond in every competitive game I play. 
          Currently, I have reached Master in TFT and Diamond in League of Legends and Valorant.
        </p>
        <h3>Some additional goals of mine:</h3>
        <ul>
          <li>🎵 Learning to produce music</li>
          <li>🎤 Improving my vocal skills</li>
          <li>🎸 Improving my acoustic guitar skills</li>
          <li>🌌 Seeing the Northern Lights in Iceland</li>
        </ul>
        <p>Below are some projects that I have been working on. Feel free to take a look at them!</p>
      </div>
      <div className="about-image">
        <img src={"src/assets/professional head shot.JPG"} alt="Brian Kim" />
      </div>
    </section>
  );
}

export default About;
