import React from "react";
import { LucideShoppingBasket } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-[100px]">
      <div className="fixed w-full flex justify-around items-center p-4 z-10 bg-white shadow-sm">
        <Link href={`/`} className="text-xl font-semibold">
          Logo
        </Link>
        <button>
          <LucideShoppingBasket />
        </button>
      </div>
    </div>
  );
}
