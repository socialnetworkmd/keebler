"use client";

import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function SectionReveal({ children, delay = 0, className }: SectionRevealProps) {
  return (
    <div
      className={className}
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transition: `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
