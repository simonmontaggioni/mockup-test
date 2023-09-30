import Image from "next/image";
import styles from "./ClaimDiscount.module.css";

export const ClaimDiscount = () => {
  return (
    <button className={styles["claim-discount"]}>
      <span>Yes-claim my discount</span>
      <Image src={"/icons/arrow-right.svg"} width={16} height={16} alt="" />
    </button>
  );
};
