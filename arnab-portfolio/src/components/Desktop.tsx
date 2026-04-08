"use client";

import Window from "./Window";

export default function Desktop() {
  return (
    <div className="h-screen w-screen bg-[#050505] relative overflow-hidden">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* Windows */}
      <Window title="About.txt" defaultPosition={{ x: 80, y: 100 }}>
        I build systems, not just apps.
      </Window>

      <Window title="Projects.exe" defaultPosition={{ x: 300, y: 200 }}>
        CHETNA — AI Browser  
        TrustBridge — Web3 Lending  
        ZenCue — Neurodivergent AI
      </Window>

      <Window title="Terminal" defaultPosition={{ x: 200, y: 350 }}>
        $ initializing...
      </Window>
    </div>
  );
}