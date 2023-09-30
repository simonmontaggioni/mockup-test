import styles from "./Footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container-left"]}>
        <div className={styles["copy"]}>Copyright (C) 2023</div>
        <div className={styles["separator"]}></div>
        <div className={styles["contact"]}>Clarifionsupport@clarifion.com</div>
      </div>
      <div className="container-right">
        <span className={styles["ssl"]}>
          <Image
            src={`/icons/lock2.svg`}
            width={12}
            height={12}
            alt=""
            className={styles["icon"]}
          />
          Secure 256-bit SSL Encryption.
        </span>
      </div>
    </footer>
  );
};
