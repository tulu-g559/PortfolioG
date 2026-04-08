"use client";

import Draggable from "react-draggable";
import { useState } from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
}

export default function Window({
  title,
  children,
  defaultPosition = { x: 100, y: 100 },
}: WindowProps) {
  const [zIndex, setZIndex] = useState(1);

  const bringToFront = () => {
    setZIndex(Date.now()); // simple stacking trick
  };

  return (
    <Draggable handle=".window-header" defaultPosition={defaultPosition}>
      <div
        onMouseDown={bringToFront}
        style={{ zIndex }}
        className="absolute w-100px bg-[#0a0a0a] border border-white/10 backdrop-blur-md shadow-xl"
      >
        {/* Header */}
        <div className="window-header cursor-move px-4 py-2 border-b border-white/10 flex justify-between items-center">
          <span className="text-sm text-white/70">{title}</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-white/80 text-sm">{children}</div>
      </div>
    </Draggable>
  );
}