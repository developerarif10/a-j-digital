"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function InteractiveGridBackground({ className }) {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateGrid = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const size = 50; // Grid cell size in pixels
      const cols = Math.ceil(clientWidth / size);
      const rws = Math.ceil(clientHeight / size);
      setColumns(cols);
      setRows(rws);
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, i) => (
          <GridCell key={i} />
        ))}
      </div>
    </div>
  );
}

function GridCell() {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      opacity: 1,
      transition: { duration: 0 },
    }).then(() => {
      controls.start({
        opacity: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="relative border-[0.5px] border-neutral-200 dark:border-neutral-800/50"
    >
      <motion.div
        animate={controls}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-primary/20 dark:bg-primary/30"
      />
    </div>
  );
}
