
import Navbar from "./components/Navbar";
import HeroVisual from "./components/HeroVisual";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
        >
          {/* Hero atmosphere */}
<div
  className="
    pointer-events-none absolute
    left-[55%] top-[35%] -z-10
    h-[700px] w-[700px]
    -translate-x-1/2 -translate-y-1/2
    rounded-full
    bg-blue-400/[0.035]
    blur-[120px]
  "
  aria-hidden="true"
/>

<div
  className="
    pointer-events-none absolute
    right-[8%] top-[28%] -z-10
    h-px w-32
    bg-gradient-to-r from-transparent via-white/10 to-transparent
    rotate-90
  "
  aria-hidden="true"
/>

<div className="mx-auto w-full max-w-6xl">
  <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-8">

    {/* Left side */}
    <div className="max-w-3xl">

      {/* Status */}
      <div className="mb-8 flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
        </span>

        <span className="text-sm text-white/50">
          Web Developer · Technical Lead · Builder
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
        I&apos;m Om More.
        <br />

        <span className="text-white/35">
          I build things
        </span>

        <br />

        that matter.
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
        Computer Science Engineering student at MIT-ADT University,
        Web Development Technical Lead at IEEE, and a builder exploring
        software, AI, IoT, backend systems, and the web.
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
  href="#projects"
  className="
    group inline-flex items-center justify-center
    rounded-full bg-white px-6 py-3
    text-sm font-semibold text-black
    transition-all duration-300
    hover:-translate-y-0.5 hover:bg-white/90
    hover:shadow-lg hover:shadow-white/10
  "
>
  <span className="text-black">View my work</span>

  <span className="ml-2 text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
    ↗
  </span>
</a>

        <a
          href="https://github.com/omkailasmore"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-full border border-white/10
            px-6 py-3
            text-sm font-medium text-white/75
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-white/25
            hover:bg-white/[0.04]
            hover:text-white
          "
        >
          GitHub
          <span className="ml-2 text-white/30">↗</span>
        </a>
      </div>

      {/* Quick facts */}
      <div className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-7 border-t border-white/10 pt-7 sm:grid-cols-4">
        <div>
          <p className="text-xl font-semibold tracking-tight">
            IEEE
          </p>
          <p className="mt-1 text-[11px] text-white/30">
            Web Development
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold tracking-tight">
            SIH
          </p>
          <p className="mt-1 text-[11px] text-white/30">
            Top 100 · 2025
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold tracking-tight">
            CSE
          </p>
          <p className="mt-1 text-[11px] text-white/30">
            MIT-ADT
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold tracking-tight">
            2026
          </p>
          <p className="mt-1 text-[11px] text-white/30">
            Building daily
          </p>
        </div>
      </div>
    </div>

  {/* Right side */}
<div className="flex justify-center lg:justify-end">
  <HeroVisual />
</div>

  </div>
</div>

  {/* Scroll indicator */}
  <a
    href="#about"
    aria-label="Scroll to About section"
    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/25 transition-colors hover:text-white/60 sm:flex"
  >
    <span>Scroll</span>
    <span className="text-base">↓</span>
  </a>
</section>
                {/* About */}
        <section
          id="about"
          className="border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/30">
                  About
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A little about me.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-white/70 sm:text-2xl">
                  I&apos;m Om More, a Computer Science Engineering student,
                  developer, and builder who enjoys turning ideas into useful
                  technology.
                </p>

                <p className="mt-6 leading-8 text-white/40">
                  I&apos;m currently pursuing my B.Tech in Computer Science
                  Engineering at MIT-ADT University, Pune. My focus is on
                  building strong foundations in software development while
                  exploring web development, backend systems, cloud
                  technologies, and problem solving.
                </p>

                <p className="mt-6 leading-8 text-white/40">
                  I learn best by building. From software and IoT projects to
                  hackathons and technical teams, I&apos;m constantly looking
                  for opportunities to turn what I learn into something real.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* Experience */}
<section
  id="experience"
  className="border-t border-white/10 px-6 py-32"
>
  <div className="mx-auto max-w-6xl">

    {/* Section heading */}
    <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

      {/* Left */}
      <div className="md:sticky md:top-32 md:self-start">
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Experience
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Where I&apos;m building.
        </h2>

        <p className="mt-6 max-w-xs text-sm leading-7 text-white/35">
          Learning by taking responsibility, working with teams, and
          turning technical ideas into things people can actually use.
        </p>

        <div className="mt-10 hidden items-center gap-3 md:flex">
          <span className="h-px w-10 bg-white/20" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            01 / PRESENT
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="relative">

        {/* Timeline line */}
        <div
          className="
            absolute left-[11px] top-3 hidden h-[calc(100%-24px)]
            w-px bg-gradient-to-b
            from-blue-400/40
            via-white/10
            to-transparent
            sm:block
          "
          aria-hidden="true"
        />

        {/* Experience item */}
        <article className="group relative sm:pl-14">

          {/* Timeline node */}
          <div
            className="
              absolute left-[5px] top-3 hidden
              h-3.5 w-3.5 rounded-full
              border border-blue-400/40
              bg-[#05070d]
              shadow-[0_0_20px_rgba(96,165,250,0.18)]
              sm:block
            "
          >
            <span className="absolute inset-1 rounded-full bg-blue-400/70" />
          </div>

          {/* Card */}
          <div
            className="
              relative overflow-hidden rounded-[28px]
              border border-white/10
              bg-white/[0.02]
              p-7
              transition-all duration-500
              hover:border-white/20
              hover:bg-white/[0.035]
              sm:p-9
            "
          >

            {/* Subtle glow */}
            <div
              className="
                pointer-events-none absolute
                -right-24 -top-24
                h-56 w-56
                rounded-full
                bg-blue-500/[0.045]
                blur-3xl
                transition duration-500
                group-hover:bg-blue-500/[0.08]
              "
              aria-hidden="true"
            />

            {/* Top metadata */}
            <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

              <div>
                <div className="flex items-center gap-3">

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                    01
                  </span>

                  <span className="h-px w-6 bg-white/10" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                    2026 — Present
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Web Development
                  <br className="hidden sm:block" />
                  <span className="text-white/40">
                    Technical Lead
                  </span>
                </h3>

                <p className="mt-3 text-sm text-white/50">
                  MIT-ADT IEEE Student Branch
                </p>
              </div>

              {/* Current role */}
              <div
                className="
                  flex w-fit items-center gap-2
                  rounded-full
                  border border-green-400/10
                  bg-green-400/[0.035]
                  px-3 py-1.5
                "
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-green-400/70">
                  Current Role
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8 h-px bg-white/[0.07]" />

            {/* Description */}
            <div className="relative max-w-2xl">
              <p className="text-base leading-8 text-white/50">
                Leading the web development technical team at the MIT-ADT
                IEEE Student Branch, helping team members build practical
                development skills while contributing to web development
                initiatives.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/30">
                My role combines technical learning, collaboration, project
                development, and leadership — with a focus on creating a
                stronger development culture within the team.
              </p>
            </div>

            {/* Skills */}
            <div className="relative mt-8 flex flex-wrap gap-2">
              {[
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border border-white/[0.07]
                    bg-white/[0.025]
                    px-3 py-1.5
                    text-xs text-white/45
                    transition-colors duration-300
                    group-hover:border-white/10
                    group-hover:text-white/60
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom metadata */}
            <div
              className="
                relative mt-9 flex flex-col
                gap-4 border-t border-white/[0.07]
                pt-5 sm:flex-row sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">
                    Focus
                  </p>

                  <p className="mt-1 text-xs text-white/45">
                    Web & Leadership
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">
                    Organization
                  </p>

                  <p className="mt-1 text-xs text-white/45">
                    IEEE
                  </p>
                </div>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                MIT-ADT · CSE
              </span>
            </div>

          </div>
        </article>

      </div>
    </div>
  </div>
</section> {/* Projects */}
<section
  id="projects"
  className="border-t border-white/10 px-6 py-32"
>
  <div className="mx-auto max-w-6xl">

    {/* Section heading */}
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Selected Work
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I&apos;ve built.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-white/40">
        A selection of projects where I&apos;ve explored software,
        computer vision, IoT, AI, and real-world problem solving.
      </p>
    </div>

    {/* Project grid */}
    <div className="mt-16 grid gap-6 md:grid-cols-2">

      {/* ───────────────── DRIVE SAFE ───────────────── */}
      <article
        className="
          group relative overflow-hidden rounded-3xl
          border border-white/10
          bg-white/[0.02]
          transition-all duration-500
          hover:-translate-y-1
          hover:border-blue-400/20
          hover:bg-white/[0.04]
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none absolute
            -right-20 -top-20
            h-56 w-56
            rounded-full
            bg-blue-500/[0.08]
            blur-3xl
            transition duration-500
            group-hover:bg-blue-500/[0.13]
          "
        />

        <div className="relative p-8 sm:p-10">

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300/50">
                Computer Vision · IoT
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                DriveSafe
              </h3>
            </div>

            <span className="font-mono text-xs text-white/20">
              01
            </span>
          </div>

          <p className="mt-6 max-w-xl leading-7 text-white/50">
            An IoT-assisted driver safety system designed to detect
            drowsiness through camera-based eye analysis and respond
            through connected hardware.
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Computer Vision",
              "EAR",
              "ESP32",
              "IoT",
            ].map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.02]
                  px-3 py-1.5
                  text-xs text-white/45
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-10 flex items-center gap-3">
          <a
  href="https://roaring-torte-d9b0a2.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    border border-white/15
    bg-white/[0.04]
    px-5 py-2.5
    text-xs font-medium text-white/80
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-white/30
    hover:bg-white/[0.08]
    hover:text-white
  "
>
  Live Project
  <span className="ml-1.5 text-white/40">↗</span>
</a>

            <span className="text-xs text-white/20">
              Project Showcase
            </span>
          </div>
        </div>
      </article>


      {/* ───────────────── JOURNEASE ───────────────── */}
      <article
        className="
          group relative overflow-hidden rounded-3xl
          border border-white/10
          bg-white/[0.02]
          transition-all duration-500
          hover:-translate-y-1
          hover:border-purple-400/20
          hover:bg-white/[0.04]
        "
      >
        <div
          className="
            pointer-events-none absolute
            -right-20 -top-20
            h-56 w-56
            rounded-full
            bg-purple-500/[0.07]
            blur-3xl
            transition duration-500
            group-hover:bg-purple-500/[0.12]
          "
        />

        <div className="relative p-8 sm:p-10">

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300/50">
                Smart India Hackathon · 2025
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Journease
              </h3>
            </div>

            <span className="font-mono text-xs text-white/20">
              02
            </span>
          </div>

          <p className="mt-6 max-w-xl leading-7 text-white/50">
            A smart travel companion designed to help users manage
            journeys, expenses, routes, analytics, and travel data
            with integrated AI functionality.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "AI",
              "Web",
              "Travel",
              "Analytics",
            ].map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.02]
                  px-3 py-1.5
                  text-xs text-white/45
                "
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
           <a
  href="https://journeasesih.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    border border-white/15
    bg-white/[0.04]
    px-5 py-2.5
    text-xs font-medium text-white/80
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-white/30
    hover:bg-white/[0.08]
    hover:text-white
  "
>
  Live Project
  <span className="ml-1.5 text-white/40">↗</span>
</a>
            <span className="text-xs text-white/20">
              Smart India Hackathon
            </span>
          </div>
        </div>
      </article>


      {/* ───────────────── SAHAAY ───────────────── */}
      <article
        className="
          group rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-8
          transition-all duration-500
          hover:-translate-y-1
          hover:border-white/20
          hover:bg-white/[0.04]
          sm:p-10
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Design Thinking
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Sahaay
            </h3>
          </div>

          <span className="font-mono text-xs text-white/20">
            03
          </span>
        </div>

        <p className="mt-6 leading-7 text-white/45">
          A women&apos;s safety application designed around real-world
          situations involving cabs, public transportation, and
          ride-hailing services.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Safety",
            "Design Thinking",
            "Application",
          ].map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-white/10
                px-3 py-1.5
                text-xs text-white/40
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <span className="text-xs uppercase tracking-[0.15em] text-white/20">
            Pratibhuti Exhibition
          </span>
        </div>
      </article>


      {/* ───────────────── SCHOLAR AI ───────────────── */}
      <article
        className="
          group rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-8
          transition-all duration-500
          hover:-translate-y-1
          hover:border-white/20
          hover:bg-white/[0.04]
          sm:p-10
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              In Development
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              ScholarAI
            </h3>
          </div>

          <span className="font-mono text-xs text-white/20">
            04
          </span>
        </div>

        <p className="mt-6 leading-7 text-white/45">
          An academic-focused application exploring modern mobile
          development, TypeScript, and AI-powered functionality.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "React Native",
            "Expo",
            "TypeScript",
            "AI",
          ].map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-white/10
                px-3 py-1.5
                text-xs text-white/40
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <span className="text-xs uppercase tracking-[0.15em] text-white/20">
            Currently building
          </span>
        </div>
      </article>

    </div>
  </div>
</section>
        {/* Achievements */}
<section
  id="achievements"
  className="border-t border-white/10 px-6 py-32"
>
  <div className="mx-auto max-w-6xl">

    {/* Header */}
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Achievements
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Milestones so far.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-white/40">
        A few moments that shaped the way I build, lead, and approach
        engineering.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-16">

      {/* Timeline line */}
      <div
        className="
          absolute bottom-0 left-[11px] top-0
          w-px bg-white/10
          sm:left-[15px]
        "
      />

      <div className="space-y-12">

        {/* ───────────── 01 ───────────── */}
        <article className="relative pl-10 sm:pl-12">

          {/* Timeline dot */}
          <span
            className="
              absolute left-[7px] top-1.5
              h-[9px] w-[9px]
              rounded-full
              border border-white/30
              bg-[#05070d]
              shadow-[0_0_15px_rgba(255,255,255,0.15)]
              sm:left-[11px]
            "
          />

          <div
            className="
              group rounded-3xl
              border border-white/10
              bg-white/[0.02]
              p-7
              transition-all duration-300
              hover:border-white/20
              hover:bg-white/[0.04]
              sm:p-8
            "
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Smart India Hackathon · 2025
                </p>

                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  Top 100 — Software Category
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-white/40">
                  Selected among the top 100 software teams from 900+
                  teams at the university with Journease.
                </p>
              </div>

              <span className="shrink-0 font-mono text-xs text-white/20">
                01
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Hackathon
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Top 100
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Journease
              </span>
            </div>
          </div>
        </article>


        {/* ───────────── 02 ───────────── */}
        <article className="relative pl-10 sm:pl-12">

          <span
            className="
              absolute left-[7px] top-1.5
              h-[9px] w-[9px]
              rounded-full
              border border-white/30
              bg-[#05070d]
              sm:left-[11px]
            "
          />

          <div
            className="
              group rounded-3xl
              border border-white/10
              bg-white/[0.02]
              p-7
              transition-all duration-300
              hover:border-white/20
              hover:bg-white/[0.04]
              sm:p-8
            "
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Pratibhuti Exhibition
                </p>

                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  Sahaay
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-white/40">
                  Selected for exhibition with Sahaay, a women&apos;s
                  safety application developed through Design Thinking.
                </p>
              </div>

              <span className="shrink-0 font-mono text-xs text-white/20">
                02
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Design Thinking
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Sahaay
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Exhibition
              </span>
            </div>
          </div>
        </article>


        {/* ───────────── 03 ───────────── */}
        <article className="relative pl-10 sm:pl-12">

          <span
            className="
              absolute left-[7px] top-1.5
              h-[9px] w-[9px]
              rounded-full
              border border-white/30
              bg-[#05070d]
              sm:left-[11px]
            "
          />

          <div
            className="
              group rounded-3xl
              border border-white/10
              bg-white/[0.02]
              p-7
              transition-all duration-300
              hover:border-white/20
              hover:bg-white/[0.04]
              sm:p-8
            "
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Pratibhuti Exhibition
                </p>

                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  DriveSafe
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-white/40">
                  Selected for exhibition with DriveSafe, an IoT and
                  computer-vision based driver safety project.
                </p>
              </div>

              <span className="shrink-0 font-mono text-xs text-white/20">
                03
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                IoT
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Computer Vision
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                Exhibition
              </span>
            </div>
          </div>
        </article>


        {/* ───────────── 04 ───────────── */}
        <article className="relative pl-10 sm:pl-12">

          <span
            className="
              absolute left-[7px] top-1.5
              h-[9px] w-[9px]
              rounded-full
              border border-blue-400/40
              bg-[#05070d]
              shadow-[0_0_15px_rgba(96,165,250,0.2)]
              sm:left-[11px]
            "
          />

          <div
            className="
              group rounded-3xl
              border border-blue-400/10
              bg-blue-400/[0.02]
              p-7
              transition-all duration-300
              hover:border-blue-400/20
              hover:bg-blue-400/[0.04]
              sm:p-8
            "
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/40">
                  Leadership · 2026
                </p>

                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  Technical &amp; Project Leadership
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-white/40">
                  Leading teams across IEEE Web Development, PBL,
                  Entrepreneurship, and Smart India Hackathon 2026.
                </p>
              </div>

              <span className="shrink-0 font-mono text-xs text-blue-300/30">
                NOW
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-blue-400/10 px-3 py-1.5 text-xs text-blue-300/50">
                IEEE
              </span>

              <span className="rounded-full border border-blue-400/10 px-3 py-1.5 text-xs text-blue-300/50">
                Leadership
              </span>

              <span className="rounded-full border border-blue-400/10 px-3 py-1.5 text-xs text-blue-300/50">
                Team Building
              </span>
            </div>
          </div>
        </article>

      </div>
    </div>
  </div>
</section>{/* Skills */}
<section
  id="skills"
  className="border-t border-white/10 px-6 py-32"
>
  <div className="mx-auto max-w-6xl">

    {/* Header */}
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Tools I build with.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-white/40">
        A growing technical foundation across programming, web development,
        databases, and software engineering.
      </p>
    </div>

    {/* Skills grid */}
    <div className="mt-16 grid gap-4 sm:grid-cols-2">

      {/* Programming */}
      <div
        className="
          group rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-7
          transition-all duration-300
          hover:border-white/20
          hover:bg-white/[0.04]
        "
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/40">
            01 · Programming
          </p>

          <span className="font-mono text-[10px] text-white/20">
            CORE
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "C++",
            "C",
            "Java",
            "JavaScript",
            "TypeScript",
            "SQL",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.02]
                px-3 py-1.5
                text-sm text-white/60
                transition
                group-hover:border-white/15
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>


      {/* Web Development */}
      <div
        className="
          group rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-7
          transition-all duration-300
          hover:border-white/20
          hover:bg-white/[0.04]
        "
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/40">
            02 · Web Development
          </p>

          <span className="font-mono text-[10px] text-white/20">
            BUILD
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "React",
            "Next.js",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.02]
                px-3 py-1.5
                text-sm text-white/60
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>


      {/* Databases & Tools */}
      <div
        className="
          group rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-7
          transition-all duration-300
          hover:border-white/20
          hover:bg-white/[0.04]
        "
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/40">
            03 · Databases &amp; Tools
          </p>

          <span className="font-mono text-[10px] text-white/20">
            SYSTEMS
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "MySQL",
            "Git",
            "GitHub",
            "VS Code",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.02]
                px-3 py-1.5
                text-sm text-white/60
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>


      {/* Engineering */}
      <div
        className="
          group rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-7
          transition-all duration-300
          hover:border-white/20
          hover:bg-white/[0.04]
        "
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/40">
            04 · Engineering
          </p>

          <span className="font-mono text-[10px] text-white/20">
            FUNDAMENTALS
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Data Structures",
            "Algorithms",
            "OOP",
            "Problem Solving",
            "Git Workflow",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.02]
                px-3 py-1.5
                text-sm text-white/60
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>


      {/* Currently Exploring */}
      <div
        className="
          group relative overflow-hidden
          rounded-3xl
          border border-blue-400/10
          bg-blue-400/[0.02]
          p-7
          transition-all duration-300
          hover:border-blue-400/20
          hover:bg-blue-400/[0.04]
          sm:col-span-2
        "
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none absolute
            -right-20 -top-20
            h-48 w-48
            rounded-full
            bg-blue-500/[0.08]
            blur-3xl
          "
        />

        <div className="relative">
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-300/50">
              05 · Currently Exploring
            </p>

            <span className="flex items-center gap-2 font-mono text-[10px] text-green-400/60">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              IN PROGRESS
            </span>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/35">
            Expanding beyond the frontend into backend systems, cloud
            infrastructure, DevOps, and deeper computer science fundamentals.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Node.js",
              "Backend Development",
              "AWS",
              "Docker",
              "DevOps",
              "Cloud",
              "DSA",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border border-blue-400/10
                  bg-blue-400/[0.03]
                  px-3 py-1.5
                  text-sm text-blue-200/50
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Certifications */}
<section
  id="certifications"
  className="border-t border-white/10 px-6 py-32"
>
  <div className="mx-auto max-w-6xl">
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Learning
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Always learning.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-white/40">
        Building fundamentals today while expanding toward backend,
        cloud, and DevOps.
      </p>
    </div>

    <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
      {[
        {
          name: "Advanced C++ Training",
          issuer: "Spoken Tutorial · IIT Bombay",
          date: "2026",
        },
        {
          name: "Generative AI Mastermind",
          issuer: "Outskill",
          date: "2026",
        },
        {
          name: "Introduction to Prompt Engineering for Generative AI",
          issuer: "LinkedIn Learning",
          date: "2026",
        },
        {
          name: "What Is Generative AI?",
          issuer: "LinkedIn Learning",
          date: "2026",
        },
        {
          name: "Ethics in the Age of Generative AI",
          issuer: "LinkedIn Learning",
          date: "2025",
        },
        {
          name: "C Training",
          issuer: "Spoken Tutorial · IIT Bombay",
          date: "2025",
        },
      ].map((certification) => (
        <article
          key={certification.name}
          className="bg-black p-6 transition hover:bg-white/[0.03]"
        >
          <div className="flex justify-between gap-4">
            <div>
              <h3 className="font-medium">
                {certification.name}
              </h3>

              <p className="mt-2 text-sm text-white/40">
                {certification.issuer}
              </p>
            </div>

            <span className="shrink-0 text-xs text-white/30">
              {certification.date}
            </span>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>{/* Contact */}
<section
  id="contact"
  className="border-t border-white/10 px-6 py-32"
>
  <div className="mx-auto max-w-6xl">
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.25em] text-white/30">
        Contact
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Let&apos;s build something.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/40">
        Have an idea, opportunity, collaboration, or just want to talk
        about technology? I&apos;d be happy to hear from you.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="mailto:omkailashmore@gmail.com"
          className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:bg-white/90"
        >
          Email me ↗
        </a>

        <a
          href="tel:+919172460997"
          className="rounded-full border border-white/15 px-6 py-3 text-center text-sm text-white transition hover:border-white/30 hover:bg-white/5"
        >
          Call me ↗
        </a>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 text-sm">
        <a
          href="https://github.com/omkailasmore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 transition hover:text-white"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/om-more-72ab85374/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 transition hover:text-white"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  </div>
</section>{/* Footer */}
<footer className="border-t border-white/10 px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/30 sm:flex-row">
    <p>© {new Date().getFullYear()} Om More. All rights reserved.</p>

    <p>Built with Next.js · TypeScript · Tailwind CSS</p>
  </div>
</footer>
      </main>
    </>
  );
}