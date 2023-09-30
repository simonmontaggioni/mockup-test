import Image from "next/image";
import styles from "./ShippingCards.module.css";

export const ShippingCards = () => {
  const paymentMethods = [
    { name: "visa" },
    { name: "shop-pay" },
    { name: "paypal" },
    { name: "mastercard" },
    { name: "gpay" },
    { name: "apple-pay" },
    { name: "amex" },
  ];

  return (
    <div className={styles["shipping-cards"]}>
      <div className={styles["container-1"]}>
        <span className={styles["shipping"]}>Free Shipping</span>
        <span className={styles["horizontal-separator-1"]}></span>
        <span className={styles["secure"]}>
          <Image
            src={`/icons/lock.svg`}
            width={12}
            height={12}
            alt=""
            className={styles["icon"]}
          />
          Secure 256-bit SSL Encryption.
        </span>
        <span className={styles["horizontal-separator-2"]}></span>
      </div>
      <div className={styles["container-2"]}>
        {paymentMethods.map((method) => (
          <span key={method.name}>
            <Image
              src={`/icons/${method.name}.svg`}
              width={24}
              height={14}
              alt={method.name}
              className={styles["payment-method"]}
            />
          </span>
        ))}
      </div>
    </div>
  );
};
