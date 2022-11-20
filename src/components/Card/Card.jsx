import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <>
      <div className={styles.card_container}>
        {/* <div className={styles.rank}>{props.rank}</div> */}
        <div className={styles.card_body}>
          <div className={styles.card_img}>
            <img src={props.img} alt="naruto image" />
          </div>
          <div className={styles.card_title}>
            <h3>{props.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
