import Image from "next/image";
import styles from "./GuaranteeCard.module.css";

export const GuaranteeCard = () => {
  return (
    <div className={styles["guarantee-card"]}>
      <span className={styles["seal"]}>
        <Image
          src={"/images/satisfaction.png"}
          width={88}
          height={88}
          alt="guarantee seal"
        />
      </span>
      <div className={styles["card-body"]}>
        <p>
          If you are not completely thrilled with your Clarifion - We have a{" "}
          <span className={styles["strong"]}>
            30 day satisfaction guarantee
          </span>
          . Please refer to our return policy at the bottom of the page for more
          details.
        </p>
        <p>Happy Shopping!</p>
      </div>
    </div>
  );
};
