import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Card from "./Card";

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

const Products = async () => {
  const products = await client.fetch<Product[]>(groq`*[_type=="product"]`);
  return (
    <div className="flex justify-center flex-col items-center mt-10 mb-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <Card key={product.slug.current} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
