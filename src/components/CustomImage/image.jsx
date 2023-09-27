import Image from "next/image";
import { useState } from "react";
import "./image.scss";
const CustomImage = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={`http://207.154.221.44:4002/${product?.image}`}
          alt={product.name}
          layout="fill" // Use layout="fill" for filling the container
          className={`customImage ${isLoading ? "loaded" : "loading"}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={`http://207.154.221.44:4002/${product?.image}`}
          alt={product.name}
          width={190}
          height={190}
          className={`customImage ${isLoading ? "loaded" : "loading"}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      )}
    </>
  );
};

export default CustomImage;
