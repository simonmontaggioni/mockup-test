import Image from "next/image";
import styles from "./SavePercentage.module.css";

export const SavePercentage = () => {
  return (
    <div className={styles["save-percentage"]}>
      <span className={styles["icon"]}>
        <Image src={"/icons/percentage.svg"} width={32} height={32} alt="" />
      </span>
      <p>
        <span>Save</span>
        <span>&nbsp;</span>
        <span className={styles["highlight"]}>53%</span>
        <span>&nbsp;</span>
        <span>and get</span>
        <span>&nbsp;</span>
        <span className={styles["highlight"]}>6 extra Clarifision</span>
        <span>&nbsp;</span>
        <span>for only</span>
        <span>&nbsp;</span>
        <span className={styles["highlight"]}>$14 Each.</span>
      </p>
    </div>
  );
};
