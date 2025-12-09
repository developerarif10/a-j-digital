"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export default function InteractiveGridBackground({ className }) {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [isVisible, setIsVisible] = useState(false);

  // Grid cell size in pixels - matches the bg-[size:24px_24px] utility
  const cellSize = 24;

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate snapped coordinates
    const snappedX = Math.floor(x / cellSize) * cellSize;
    const snappedY = Math.floor(y / cellSize) * cellSize;

    setMousePosition({ x: snappedX, y: snappedY });
  };

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static Grid Lines (CSS Based - Matches CTA Section) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"></div>

      {/* Snapping Highlight Square */}
      {isVisible && mousePosition.x !== null && (
        <div
          className="absolute bg-primary/20 dark:bg-primary/30 pointer-events-none transition-all duration-150 ease-out"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: cellSize,
            height: cellSize,
          }}
        />
      )}
    </div>
  );
}
