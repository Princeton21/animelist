import React from "react";
import styles from "./Compare.module.css";
import Card from "../../components/Card/Card";
import { cardData } from "../../assets/Data";
import {Link } from "react-router-dom";

const Compare = () => {
  return (
    <>
      <div className={styles.flex_container}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Here is your curated list of top Anime
          </h1>
          <div className={styles.grid_container}>
            {cardData.map((anime) => {
              return (
                <>
                  <Card rank={anime.rank} img={anime.img} title={anime.title} />
                </>
              );
            })}
          </div>
        </div>
        <div className={styles.btn_container}>
          <Link to="/">
            <button className={styles.back}>Go back</button>
          </Link>
          <Link to="/rank">
            <button className={styles.rank}>Check your list</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Compare;
