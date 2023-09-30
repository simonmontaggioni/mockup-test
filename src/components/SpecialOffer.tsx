import React from "react";
import styles from "./SpecialOffer.module.css";

export const SpecialOffer = () => {
  return (
    <div className={styles["special-offer"]}>
      <p>
        <span className={styles["highlight"]}>one time only </span>
        <span>special price for 6 extra clarifion for only </span>
        <span className={styles["highlight"]}>$14 each </span>
        <span>($84.00 total!)</span>
      </p>
    </div>
  );
};
