import React from 'react';
import styles from "./Portfolio.module.css";
import CardsData from "../../CardsData";
import Cards from './Cards/Cards';
import Reveal from "../Reveal/Reveal"
const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <Reveal>
        <div className="container">
          <div className={styles.title}>
            <h2>
              Selected <span>Works</span>
            </h2>
            <hr />
          </div>
          <div>
            <ul className={styles.cards}>
              {CardsData.map((item) => (
                <Cards key={item.id} image={item.img} title={item.title} />
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Portfolio