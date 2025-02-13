"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Title from "../../../../public/LAPSTORE.png";
import Laptop from "../../../../public/hero-section-image.webp";
import Image from "next/image";
import styles from "./HeroImages.module.css";

export default function HeroImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const images = [
    {
      src: Title,
      parallax: 0,
    },
    {
      src: Laptop,
      parallax: sm,
    },
  ];
  return (
    <div className={styles.images}>
      {images.map(({ src, parallax }, i) => {
        return (
          <motion.div
            style={{ y: parallax }}
            key={`i_${i}`}
            className={styles.imageContainer}
          >
            <Image
              src={src}
              width={600}
              height={500}
              alt="Hero section title laptop image"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
