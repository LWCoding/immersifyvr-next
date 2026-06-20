"use client";

import { useLayoutEffect, useRef } from "react";

const MOBILE_QUERY = "(max-width: 768px)";

export default function PillarsGrid({ className, children }) {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const getCards = () => grid.querySelectorAll("[data-pillar-card]");

    const equalize = () => {
      const cards = getCards();
      cards.forEach((card) => {
        card.style.minHeight = "";
      });

      if (window.matchMedia(MOBILE_QUERY).matches) {
        return;
      }

      let maxHeight = 0;
      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.getBoundingClientRect().height);
      });

      cards.forEach((card) => {
        card.style.minHeight = `${maxHeight}px`;
      });
    };

    equalize();

    const observer = new ResizeObserver(equalize);
    observer.observe(grid);
    getCards().forEach((card) => observer.observe(card));

    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    mobileQuery.addEventListener("change", equalize);
    window.addEventListener("resize", equalize);

    return () => {
      observer.disconnect();
      mobileQuery.removeEventListener("change", equalize);
      window.removeEventListener("resize", equalize);
    };
  }, []);

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
}
