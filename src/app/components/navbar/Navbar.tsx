import React from "react";
import { LucideShoppingBasket } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-[100px]">
      <div className="fixed w-full flex justify-around items-center p-4 z-10 bg-white shadow-sm">
        <h1 className="text-xl font-semibold">Logo</h1>
        <button>
          <LucideShoppingBasket />
        </button>
      </div>
    </div>
  );
}
