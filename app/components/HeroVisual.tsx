"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const systems = [
  {
    label: "WEB",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    label: "BUILD",
    items: ["C++", "Git", "Problem Solving"],
  },
  {
    label: "EXPLORE",
    items: ["Node.js", "AWS", "AI / IoT"],
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[480px] w-full max-w-[420px] sm:h-[520px] sm:max-w-[480px] lg:h-[560px] lg:max-w-[520px]">

      {/* Ambient atmosphere */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[460px] w-[min(390px,calc(100vw-3rem))]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-blue-500/[0.055]
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* Outer orbital ring */}
      <div
        className="
          absolute left-1/2 top-[46%]
          h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-white/[0.035]
        "
        aria-hidden="true"
      />

      {/* Small orbital accent */}
      <div
        className="
          absolute left-1/2 top-[46%]
          h-[430px] w-[430px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-blue-400/[0.055]
        "
        aria-hidden="true"
      />

      {/* Floating top label */}
      <div className="absolute right-4 top-[55px] hidden sm:block">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
            PERSONAL_SYSTEM
          </span>
        </div>
      </div>

      {/* Main card */}
      <div
        className="
          absolute left-1/2 top-[46%]
          w-[430px]
          max-w-[calc(100%-24px)]
          -translate-x-1/2 -translate-y-1/2
          overflow-hidden
          rounded-[30px]
          border border-white/[0.11]
          bg-[#07090f]/95
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          backdrop-blur-2xl
          transition-transform
          duration-500
          hover:-translate-y-[calc(50%+4px)]
        "
      >

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              om.codes.dev
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] text-white/20">
              {time || "--:--:--"}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />

            <span className="font-mono text-[8px] uppercase tracking-wider text-green-400/60">
              Online
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className="relative h-[340px] overflow-hidden">

          <Image
            src="/om-more.jpg"
            alt="Om More"
            fill
            priority
            sizes="430px"
            className="
              object-cover
              object-[center_22%]
              grayscale-[8%]
              contrast-[1.04]
              transition-transform
              duration-700
              hover:scale-[1.025]
            "
          />

          {/* Cinematic gradient */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#07090f]
              via-transparent
              to-black/5
            "
          />

          {/* Subtle blue tint */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.10),transparent_45%)]
            "
          />

          {/* Scan line */}
          <div className="absolute left-0 right-0 top-[40%] h-px bg-white/[0.07]" />

          {/* Profile identifier */}
          <div className="absolute left-5 top-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/35">
              PROFILE / 001
            </p>

            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-blue-300/50">
              CSE · BUILDER
            </p>
          </div>

          {/* Bottom identity */}
          <div className="absolute bottom-5 left-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
              OM MORE
            </p>

            <p className="mt-1 text-sm text-white/65">
              Developer · Technical Lead
            </p>
          </div>

          <div className="absolute bottom-5 right-5 font-mono text-[8px] text-white/25">
            2026
          </div>
        </div>

        {/* System navigation */}
        <div className="grid grid-cols-3 border-y border-white/[0.07]">

          {systems.map((system, index) => (
            <button
              key={system.label}
              type="button"
              onClick={() => setActiveSystem(index)}
              className={`
                relative px-3 py-3
                font-mono text-[8px]
                uppercase tracking-[0.2em]
                transition-all duration-300
                ${
                  activeSystem === index
                    ? "bg-blue-400/[0.045] text-blue-300/80"
                    : "text-white/25 hover:bg-white/[0.025] hover:text-white/50"
                }
              `}
            >
              {system.label}

              {activeSystem === index && (
                <span className="absolute bottom-0 left-1/2 h-px w-8 -translate-x-1/2 bg-blue-400/70" />
              )}
            </button>
          ))}

        </div>

        {/* Active system */}
        <div className="px-5 py-5">

          <div className="mb-4 flex items-center justify-between">

            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-blue-400" />

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                {systems[activeSystem].label} / STACK
              </span>
            </div>

            <span className="font-mono text-[8px] text-white/15">
              0{activeSystem + 1}
            </span>

          </div>

          <div className="grid grid-cols-3 gap-2">

            {systems[activeSystem].items.map((item) => (
              <div
                key={item}
                className="
                  rounded-xl
                  border border-white/[0.06]
                  bg-white/[0.02]
                  px-3 py-2.5
                  transition
                  hover:border-white/[0.12]
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-[10px] text-white/50">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-3">

          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
            MIT-ADT · IEEE
          </span>

          <span className="font-mono text-[8px] text-white/15">
            BUILD_∞
          </span>

        </div>

      </div>

      {/* Left technical label */}
      <div className="absolute left-0 top-[175px] hidden sm:block">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/15">
          SYS_01
        </span>
      </div>

      {/* Right technical label */}
      <div className="absolute right-0 top-[240px] hidden sm:block">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/15">
          CSE_2026
        </span>
      </div>

      {/* Floating nodes */}
      <span className="absolute left-[28px] top-[275px] h-1 w-1 rounded-full bg-blue-400/60" />

      <span
        className="
          absolute right-[22px] bottom-[175px]
          h-1.5 w-1.5
          rounded-full
          bg-blue-300/70
          shadow-[0_0_14px_rgba(96,165,250,0.7)]
        "
      />

      {/* Tiny coordinate marker */}
      <div className="absolute bottom-[55px] left-[25px] hidden sm:block">
        <span className="font-mono text-[8px] text-white/10">
          18.5204° N · 73.8567° E
        </span>
      </div>

    </div>
  );
}