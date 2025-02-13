"use client";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Product {
  name: string;
  price: number;
  images: SanityImage[];
  slug: {
    current: string;
  };
}

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="w-[300px]">
      {product.images &&
        product.images.map((image: SanityImage, index: number) => (
          <Image
            key={index}
            src={urlForImage(image).url()}
            width={200}
            height={200}
            alt={product.slug.current}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ))}
      <div>{product.name}</div>
      <div>{product.price} €</div>
    </div>
  );
}
