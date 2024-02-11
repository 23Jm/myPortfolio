import React from 'react'
import styles from "./Footer.module.css"
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    const today=new Date();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flex}>
          <div>
            <p>
              &copy; {today.getFullYear()} by Jannath Marha. All rights reserved
            </p>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className={styles.icon}>
            <a href="https://github.com/23Jm">
              <BsGithub size={30} />
            </a>
            <a href="/#">
              <BsLinkedin size={30} />
            </a>
            <a href="/#">
              <BsInstagram size={30} />
            </a>
            <a href="/#">
              <BsTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer