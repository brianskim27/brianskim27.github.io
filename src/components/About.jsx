import React from "react";
import "../About.css";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>Hey there! I'm Brian, a '25 BSCS student at Binghamton University.</p>
        <p>
          Growing up, I've always enjoyed getting my hands on technology, and after initially testing the waters with the field of law, 
          I decided to pursue the ever-growing computer  world.
        </p>
        <p>
          As the youngest in the family, I always strive to work hard and be unique, aiming to pave my own path rather than following my siblings' steps.
          Ultimately, I want to be a difference to my environment and support the people around me, especially my loved ones.
        </p>
        <p>
          In my free time, I love to be outside and play sports, especially soccer. Most of the time, though, 
          you will see me in despair because I am unfortunately a Tottenham Hotspur fan... I have a dream to learn as many sports as possible. 
          Right now, I am enduring the difficulties in tennis haha.
        </p>
        <p>
          I enjoy playing a variety of video games, though mostly with friends.
          I have the goal of achieving the rank-equivalent of at least Diamond in every competitive game I play. 
          Currently, I have reached Master in TFT and Diamond in League of Legends and Valorant.
        </p>
        <p>
          I also love music. I listen to Korean, American, and Christian music and am always looking to expand my music taste.
          Additionally, I enjoy playing instruments. I mainly play the drums and self-taught the bass guitar a year ago, but I also have experience in the acoustic guitar.
          I used to play the clarinet (first chair) and saxophone in middle school, winning NYSSMA Gold with my band.
        </p>
        <h3>Some additional goals of mine:</h3>
        <p>
          🎵 Learn to produce music<br></br>
          🎤 Improve my vocal skills<br></br>
          🌌 See the Northern Lights (in Iceland)<br></br>
          ⚽️ Watch a live soccer game in person<br></br>
        </p>
      </div>
      <div className="about-image">
        <img src={"/professional head shot.JPG"} alt="Brian Kim" />
      </div>
    </section>
  );
}

export default About;
