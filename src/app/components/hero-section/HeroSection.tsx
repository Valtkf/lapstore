import React from "react";
import HeroImages from "./HeroImages";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col mt-52 p-4">
      <HeroImages />
      <h2 className="text-4xl font-medium">The best of technology</h2>
      <p className="text-lg text-center p-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
        consequatur? Ab voluptate odio facilis sunt, laborum iusto earum.
        Reprehenderit eveniet laudantium necessitatibus laborum quo veritatis
        dolores ipsa nobis? Fugit, cumque!
      </p>
    </div>
  );
}
