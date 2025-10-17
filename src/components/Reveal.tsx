"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type BaseProps<T extends keyof React.JSX.IntrinsicElements> = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const duration = 1.5; // 1.5s as requested

type Direction = "up" | "down" | "left" | "right" | "none";

function getOffset(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: 24 };
    case "down":
      return { y: -24 };
    case "left":
      return { x: 24 };
    case "right":
      return { x: -24 };
    default:
      return {};
  }
}

export default function Reveal<T extends keyof React.JSX.IntrinsicElements = "div">({
  children,
  className,
  delay = 0,
  direction = "up",
  as,
  ...rest
}: BaseProps<T>) {
  const Tag = (motion as any)[(as || "div") as keyof typeof motion] as any;
  const initialOffset = getOffset(direction);

  const variants: Variants = {
    hidden: { opacity: 0, ...initialOffset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
