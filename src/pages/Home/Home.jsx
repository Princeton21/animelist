import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>ANIME LIST CURATOR</h1>
        <Form />
        <Link to="/compare">
          <button className={styles.btn}>Start Comparing</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
