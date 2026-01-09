"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: offset }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [offset]);

  return (
    <div
      ref={ref}
      className={
        "relative transition-all duration-700 " +
        (isVisible ? "animate-slideUpCubiBezier" : "opacity-0")
      }
    >
      {children}
    </div>
  );
}
