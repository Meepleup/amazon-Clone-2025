import React from "react";
import styles from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";

function Results() {
  const { category } = useParams();

  return (
    <LayOut>
      <div className={styles.results}>
        <h2>Results for: {category}</h2>
      </div>
    </LayOut>
  );
}

export default Results;
