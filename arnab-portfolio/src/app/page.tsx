"use client";

import { useState } from "react";
import BootScreen from "@/components/BootScreen";
import Desktop from "@/components/Desktop";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted ? (
        <BootScreen onFinish={() => setBooted(true)} />
      ) : (
        <Desktop />
      )}
    </>
  );
}