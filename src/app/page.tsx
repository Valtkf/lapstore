import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import Products from "./components/product-card/Products";

export default async function Home() {
  const products = await client.fetch(groq`*[_type=="product"]`);
  console.log(products);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Products />
    </>
  );
}
