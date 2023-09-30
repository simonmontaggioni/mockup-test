import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <span className={styles["site-icon"]}>
        <Image
          width={192}
          height={36}
          alt="clarifion-icon"
          src={"/icons/Clarifion_Logo_1.png"}
        />
      </span>
      <span className={styles["separator"]}></span>
      <span className={styles["certificates"]}>
        <span className={styles["mcafee"]}>
          <Image
            width={88}
            height={32}
            alt="macafee"
            src={"/icons/mcafee-antivirus.svg"}
          />
        </span>
        <span className={styles["certificates-separator"]}></span>
        <span className={styles["norton"]}>
          <Image
            width={82}
            height={32}
            alt="macafee"
            src={"/icons/norton-antivirus-logo_1.svg"}
          />
        </span>
      </span>
    </nav>
  );
};
