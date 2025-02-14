"use client";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";

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
  const [index, setIndex] = useState(0);
  return (
    <div className="flex justify-center gap-4">
      <div className="flex justify-center flex-col w-[150px] ml-10 gap-y-4">
        {product.images &&
          product.images.map((image: SanityImage, index: number) => (
            <Image
              loader={() => urlForImage(product.images[index]).url()}
              key={index}
              src={urlForImage(product.images[index]).url()}
              width={100}
              height={100}
              alt={product.slug.current}
              style={{ objectFit: "cover" }}
              className="cursor-pointer shadow-lg rounded-xl p-2"
              onClick={() => setIndex(index)}
            />
          ))}
      </div>
      <div className="w-[450px]">
        <Image
          loader={() => urlForImage(product.images[index]).url()}
          src={urlForImage(product.images[index]).url()}
          alt={product.slug.current}
          width={350}
          height={350}
          className="object-cover mx-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-y-4 w-2/5">
        <div className="text-xl font-bold">{product.name}</div>
        <div className="text-xl font-bold">{product.price} €</div>
      </div>
    </div>
  );
}
