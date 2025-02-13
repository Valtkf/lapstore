import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Product {
  _type: string;
  images: SanityImageSource[];
  slug: {
    current: string;
  };
  name: string;
  price: number;
  description: string;
}

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
    <Link href={`/product/${product.slug.current}`}>
      <div className="flex flex-col h-[350px] rounded-lg shadow-lg bg-white overflow-hidden p-4">
        <div className="relative flex-grow w-full">
          <Image
            src={
              product.images && product.images[0]
                ? urlForImage(product.images[0]).url()
                : "/placeholder.svg"
            }
            alt={product.slug.current}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="flex flex-col justify-between p-4 flex-grow">
          <div className="flex-grow h-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-2xl font-bold text-gray-900">{product.price}€</p>
          </div>
          <Button className="w-full mt-4">Add to Cart</Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
