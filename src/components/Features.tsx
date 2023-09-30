import Image from "next/image";
import styles from "./Features.module.css";

export const Features = () => {
  return (
    <div className={styles["features-wrapper"]}>
      <ul className={styles["features-list"]}>
        <li className={styles["feature-item"]}>
          <p>
            <span className={styles["icon"]}>
              <Image
                src={"/icons/tick-circle-blue.svg"}
                width={22}
                height={22}
                alt=""
              />
            </span>
            <span>Negative ion Technology may </span>
            <span className="space">&nbsp;</span>
            <span className={styles["important"]}>help with allergens</span>
          </p>
        </li>
        <li className={styles["feature-item"]}>
          <p>
            <span className={styles["icon"]}>
              <Image
                src={"/icons/tick-circle-blue.svg"}
                width={22}
                height={22}
                alt=""
              />
            </span>
            <span>Designed for</span>
            <span className="space">&nbsp;</span>
            <span className={styles["important"]}> air rejuvenation</span>
          </p>
        </li>
        <li className={styles["feature-item"]}>
          <p>
            <span className={styles["icon"]}>
              <Image
                src={"/icons/tick-circle-blue.svg"}
                width={22}
                height={22}
                alt=""
              />
            </span>
            <span className={styles["important"]}>Perfect for every room</span>
            <span className="space">&nbsp;</span>
            <span>in all types of places.</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
