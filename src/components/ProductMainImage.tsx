import Image from "next/image";

export const ProductMainImage = () => {
  return (
    <div className="image-container">
      <Image
        width={540}
        height={540}
        src="/images/product.png"
        alt="produc-main-image"
      />
    </div>
  );
};
