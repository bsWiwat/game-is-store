"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  gallery: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ gallery }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={gallery[index]}
          alt={`Product Image ${index}`}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {gallery.map((img, i) => (
          <div
            key={i}
            className={`w-1/4 h-32 relative cursor-pointer ${
              index === i ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
