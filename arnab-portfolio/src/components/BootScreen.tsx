"use client";

import { useEffect, useState } from "react";

export default function BootScreen({ onFinish }: { onFinish: () => void }) {
  const [text, setText] = useState("Initializing ArnabOS...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Loading Modules...");
    }, 1500);

    const finish = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className="h-screen w-screen bg-black text-green-400 flex items-center justify-center font-mono text-xl">
      {text}
    </div>
  );
}