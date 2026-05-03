"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ImageAsset } from "@/lib/images";

interface ParallaxImageWrapperProps {
  image: ImageAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ParallaxImageWrapper({
  image,
  className,
  imageClassName,
  priority = false
}: ParallaxImageWrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden w-full h-full rounded-lg bg-muted", className)}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%] w-full h-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn("object-cover", imageClassName)}
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
