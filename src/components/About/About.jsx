import React from 'react';
import styles from "./About.module.css";
import Reveal from '../Reveal/Reveal';

const About = () => {
  return (
    <section id="about" className={styles.about}>
        <Reveal>
      <div className="container">
        <div className={styles.title}>
          <h2>
            About <span>Me</span>
          </h2>
          <hr />
        </div>
        <div className="grid">
          <div className={styles["about-img"]}>
            <img src="./images/profile.jpg" alt="Marha" />
          </div>
          <div className={styles["about-content"]}>
            <h3 className={styles.border}>Hi There!</h3>
            <p>
              I'm  <span className={styles.name}>Jannath Marha</span>. Passionate web developer with expertise in HTML, CSS,
              JS, React, Bootstrap,SASS and jQuery. Actively engaged in hands-on
              projects, I aspire to contribute my skills and enthusiasm to an IT
              company. Eagerly seeking opportunities to collaborate and grow in
              the dynamic world of web development.
            </p>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

export default About