import Image from "next/image";
import styles from "./ProductCard.module.css";

export const ProductCard = () => {
  const product = {
    name: "clarifion air ionizer",
    price: 180,
    discount: 84,
    stars: 5,
    stock: 12,
    caption:
      "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.",
    imageUrl: "product_image1.png",
  };
  return (
    <div className={styles["product-card"]}>
      <div className={styles["card-image"]}>
        <Image
          src={`/images/${product.imageUrl}`}
          width={134}
          height={134}
          alt={product.name}
        />
      </div>
      <div className={styles["card-body"]}>
        <div className={styles["description"]}>
          <span className={styles["name"]}>{product.name}</span>
          <span className={styles["cost"]}>
            <span className={styles["price"]}>${product.price}</span>
            <span className={styles["discount"]}>${product.discount}</span>
          </span>
        </div>
        <div className={styles["stars"]}>
          {[...new Array(product.stars)].map((_, index) => (
            <Image
              key={index}
              src={"/icons/ant-design_star-filled.svg"}
              width={18}
              height={18}
              alt="star"
            />
          ))}
        </div>
        <div className={styles["stock"]}>
          <span className={styles["stock-icon"]}>
            <Image src={"/icons/group.svg"} width={16} height={16} alt="" />
          </span>
          <span className={styles["stock-value"]}>
            {product.stock} left in Stock
          </span>
        </div>
      </div>
      <div className={styles["caption"]}>
        <span>{product.caption}</span>
      </div>
    </div>
  );
};
