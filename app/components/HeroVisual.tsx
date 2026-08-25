"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const systems = [
  {
    label: "WEB",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "SQL", "APIs"],
  },
  {
    label: "BUILDING",
    items: ["AWS", "DevOps", "DSA"],
  },
];

export default function HeroVisual() {
  const [activeSystem, setActiveSystem] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSystem((current) => (current + 1) % systems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[560px] w-full max-w-[520px]">
      {/* Ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[380px] w-[380px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-blue-500/[0.07]
          blur-[110px]
        "
        aria-hidden="true"
      />

      {/* Orbital rings */}
      <div
        className="
          absolute left-1/2 top-[45%]
          h-[420px] w-[420px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-blue-400/[0.08]
        "
      />

      <div
        className="
          absolute left-1/2 top-[45%]
          h-[330px] w-[330px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-white/[0.05]
        "
      />

      {/* Main profile panel */}
      <div
        className="
          absolute left-1/2 top-[45%]
          w-[390px]
          -translate-x-1/2 -translate-y-1/2
          overflow-hidden
          rounded-[28px]
          border border-white/[0.12]
          bg-[#070a10]/90
          shadow-2xl shadow-black/60
          backdrop-blur-2xl
        "
      >
        {/* Header */}
        <div className="relative z-20 flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              om.system
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] text-white/25">
              {time || "--:--:--"}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

            <span className="font-mono text-[9px] text-green-400/70">
              ONLINE
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className="relative h-[310px] overflow-hidden">
          {/* Photo */}
          <Image
            src="/om-more.jpg"
            alt="Om More"
            fill
            priority
            sizes="390px"
            className="
              object-cover
              object-[center_25%]
              grayscale-[15%]
              contrast-[1.05]
            "
          />

          {/* Dark cinematic gradient */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#070a10]
              via-transparent
              to-black/10
            "
          />

          {/* Blue atmosphere */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_55%_45%,rgba(59,130,246,0.12),transparent_45%)]
            "
          />

          {/* Technical scan line */}
          <div className="absolute left-0 right-0 top-[42%] h-px bg-blue-400/20" />

          {/* Photo metadata */}
          <div className="absolute left-5 top-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/35">
              PROFILE / 001
            </p>

            <p className="mt-1 font-mono text-[9px] text-blue-300/60">
              HUMAN_INTERFACE
            </p>
          </div>

          <div className="absolute bottom-5 left-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              OM MORE
            </p>

            <p className="mt-1 text-xs text-white/60">
              Developer · Technical Lead
            </p>
          </div>

          <div className="absolute bottom-5 right-5 font-mono text-[8px] text-white/25">
            2026
          </div>
        </div>

        {/* System tabs */}
        <div className="grid grid-cols-3 border-y border-white/[0.08]">
          {systems.map((system, index) => (
            <button
              key={system.label}
              type="button"
              onClick={() => setActiveSystem(index)}
              className={`
                px-3 py-3
                font-mono text-[9px]
                uppercase tracking-[0.15em]
                transition-all duration-300
                ${
                  activeSystem === index
                    ? "bg-blue-400/[0.06] text-blue-300"
                    : "text-white/25 hover:bg-white/[0.03] hover:text-white/50"
                }
              `}
            >
              {system.label}
            </button>
          ))}
        </div>

        {/* Active system */}
        <div className="px-5 py-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-blue-400" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
              {systems[activeSystem].label} / STACK
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {systems[activeSystem].items.map((item) => (
              <div
                key={item}
                className="
                  rounded-lg
                  border border-white/[0.06]
                  bg-white/[0.025]
                  px-3 py-2
                "
              >
                <p className="text-[10px] text-white/55">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
            MIT-ADT · IEEE
          </span>

          <span className="font-mono text-[8px] text-white/20">
            BUILD_∞
          </span>
        </div>
      </div>

      {/* Floating technical labels */}
      <div className="absolute left-0 top-[120px]">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
          SYS_01
        </span>
      </div>

      <div className="absolute right-0 top-[175px]">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
          CSE_2026
        </span>
      </div>

      {/* Floating nodes */}
      <span className="absolute left-[35px] top-[220px] h-1 w-1 rounded-full bg-blue-400/60" />

      <span className="absolute right-[35px] bottom-[180px] h-1.5 w-1.5 rounded-full bg-blue-300/70 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />
    </div>
  );
}