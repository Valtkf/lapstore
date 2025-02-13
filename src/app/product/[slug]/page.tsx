import { Navbar, ProductDetails } from "@/app/components";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  console.log(product);

  return (
    <>
      <Navbar />
      <ProductDetails product={product} />
    </>
  );
}
