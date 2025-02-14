"use client";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Product {
  name: string;
  description: string;
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
      <div className="flex flex-col gap-y-4 w-2/5 mr-10">
        <div className="text-xl font-bold">{product.name}</div>
        <div className="text-md font-medium">{product.description}</div>
        <div className="text-xl font-bold">{product.price} €</div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex flex-col md:flex-row max-w-[400px] mx-auto gap-4 justify-center items-center border border-black py-2 px-4">
            <h3 className="text-lg md:text-xl">Quantity</h3>
            <p className="flex items-center gap-2">
              <span className="text-xl">
                <FaMinus />
              </span>
              <span className="text-lg md:text-xl">1</span>
              <span className="text-xl">
                <FaPlus />
              </span>
            </p>
          </div>
          <Button className="w-full md:w-[300px] mt-4">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
