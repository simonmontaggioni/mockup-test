import React from "react";
import styles from "./TestimonialCard.module.css";
import Image from "next/image";

export const TestimonialCard = () => {
  return (
    <div className={styles["testimonial-card"]}>
      <div className={styles["testimonial-header"]}>
        <span>
          <Image width={48} height={48} src={"/images/avatar.png"} alt="" />
        </span>
        <div className={styles["header-details"]}>
          <div className={styles["stars"]}>
            <Image width={78} height={11} src={"/icons/stars.svg"} alt="" />
          </div>
          <p className={styles["user-details"]}>
            <span className={styles["name"]}>Ken T.</span>
            <span className={styles["verified-icon"]}>
              <Image
                width={16}
                height={16}
                src={"/icons/verify_1.svg"}
                alt=""
              />
            </span>
            <span className={styles["verified-text"]}>Verified Customer</span>
          </p>
        </div>
      </div>
      <div className={styles["testimonial-body"]}>
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </div>
    </div>
  );
};
