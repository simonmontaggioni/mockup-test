import React from "react";
import styles from "./MainTitle.module.css";

export const MainTitle = () => {
  return (
    <div className={styles["title-wrapper"]}>
      <p className={styles["title"]}>Wait ! your order in progress.</p>
      <p className={styles["title-caption"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
      </p>
    </div>
  );
};
