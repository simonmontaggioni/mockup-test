import Image from "next/image";
import React from "react";
import styles from "./Advertising.module.css";

const ADVERTISING_ITEMS = [
  {
    icon: "fluent_checkmark-starburst-20-regular",
    description: "30 day satisfaction guarantee",
  },
  {
    icon: "ph_truck-light",
    description: "free delevery on orders over $40.00",
  },
  { icon: "mdi_cards-heart-outline", description: "50.000+ happy customers" },
  {
    icon: "fluent_arrow-sync-checkmark-20-regular",
    description: "100% money back guarantee",
  },
];

export const Advertising = () => {
  return (
    <section className={styles["advertising"]}>
      <div className={styles["left-arrow"]}>
        <Image
          width={25}
          height={25}
          alt={"icon"}
          src={`/icons/left-arrow.svg`}
        ></Image>
      </div>
      {ADVERTISING_ITEMS.map((item) => (
        <div className={styles["advertising-item"]} key={item.description}>
          <Image
            width={25}
            height={25}
            alt={"icon"}
            src={`/icons/${item.icon}.svg`}
          ></Image>
          <span className={styles["advertising-description"]}>
            {item.description}
          </span>
        </div>
      ))}
      <div className={styles["right-arrow"]}>
        <Image
          width={25}
          height={25}
          alt={"icon"}
          src={`/icons/right-arrow.svg`}
        ></Image>
      </div>
    </section>
  );
};
