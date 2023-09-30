import Image from "next/image";
import React from "react";
import styles from "./Stepper.module.css";

const STEPS = [
  { name: "cart review", completed: true, current: false },
  { name: "checkout", completed: true, current: false },
  { name: "special offer", completed: false, current: true },
  { name: "confirmation", completed: false, current: false },
];

export const Stepper = () => {
  return (
    <div className={styles["stepper"]}>
      {STEPS.map((step, index) => (
        <div className={styles["step"]} key={step.name}>
          {step.completed ? (
            <span className={styles["step-icon-completed"]}>
              <Image
                width={24}
                height={24}
                src={"/icons/tick-circle.svg"}
                alt="tick"
              />
            </span>
          ) : (
            <span
              className={
                styles[step.current ? "step-icon-current" : "step-icon"]
              }
            >
              {index + 1}
            </span>
          )}
          <span
            className={styles[step.current ? "step-text-current" : "step-text"]}
          >
            <span className={styles["step-number"]}>{`Step ${
              index + 1
            } :`}</span>
            <span className={styles["step-name"]}>{`${step.name}`}</span>
          </span>
        </div>
      ))}
    </div>
  );
};
