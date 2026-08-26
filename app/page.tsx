
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
        A selection of projects spanning software, AI, computer vision,
        IoT, and real-world problem solving.
      </p>
    </div>

    {/* Featured projects */}
    <div className="mt-16 grid gap-6 md:grid-cols-2">

      {/* DriveSafe */}
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
        {/* Ambient glow */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-24
            h-64 w-64
            rounded-full
            bg-blue-500/[0.06]
            blur-3xl
            transition-all duration-500
            group-hover:bg-blue-500/[0.12]
          "
        />

        <div className="relative p-8 sm:p-10">

          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                <p className="text-xs uppercase tracking-[0.2em] text-blue-300/50">
                  Featured Project
                </p>
              </div>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                DriveSafe
              </h3>
            </div>

            <span className="font-mono text-xs text-white/20">
              01
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 leading-7 text-white/50">
            An IoT-assisted driver safety system designed to detect
            drowsiness through camera-based eye analysis and respond
            through connected hardware.
          </p>

          {/* Tech */}
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
                  bg-black/20
                  px-3 py-1.5
                  text-xs text-white/50
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-xs text-white/25">
              Computer Vision · IoT
            </span>

            <a
              href="https://roaring-torte-d9b0a2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex w-fit items-center
                rounded-full
                border border-blue-400/20
                bg-blue-400/10
                px-5 py-2.5
                text-xs font-medium text-blue-200
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-blue-400/40
                hover:bg-blue-400/15
                hover:text-blue-100
              "
            >
              View project
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </article>


      {/* Journease */}
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
            -right-24 -top-24
            h-64 w-64
            rounded-full
            bg-purple-500/[0.05]
            blur-3xl
            transition-all duration-500
            group-hover:bg-purple-500/[0.10]
          "
        />

        <div className="relative p-8 sm:p-10">

          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />

                <p className="text-xs uppercase tracking-[0.2em] text-purple-300/50">
                  Smart India Hackathon · 2025
                </p>
              </div>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Journease
              </h3>
            </div>

            <span className="font-mono text-xs text-white/20">
              02
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 leading-7 text-white/50">
            A smart travel companion designed to help users manage
            journeys, expenses, routes, analytics, and travel data
            with integrated AI functionality.
          </p>

          {/* Tech */}
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
                  bg-black/20
                  px-3 py-1.5
                  text-xs text-white/50
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-xs text-white/25">
              Hackathon Project
            </span>

            <a
              href="https://journeasesih.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex w-fit items-center
                rounded-full
                border border-purple-400/20
                bg-purple-400/10
                px-5 py-2.5
                text-xs font-medium text-purple-200
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-purple-400/40
                hover:bg-purple-400/15
                hover:text-purple-100
              "
            >
              View project
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </article>


      {/* Sahaay */}
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

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs uppercase tracking-[0.15em] text-white/20">
            Pratibhuti Exhibition
          </span>

          <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-white/50">
            ↗
          </span>
        </div>
      </article>


      {/* ScholarAI */}
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
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />

              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                In Development
              </p>
            </div>

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

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs uppercase tracking-[0.15em] text-white/20">
            Currently building
          </span>

          <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-white/50">
            ↗
          </span>
        </div>
      </article>

    </div>

    {/* Bottom note */}
    <div className="mt-10 flex items-center gap-3 text-xs text-white/20">
      <span className="h-px w-8 bg-white/10" />
      <span>More projects coming as I build.</span>
    </div>

  </div>
</section>
        {/* Achievements */}
<section
  id="achievements"
  className="border-t border-white/10 px-6 py-32"
>
  <div className="mx-auto max-w-6xl">

    <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

      {/* Left */}
      <div className="md:sticky md:top-32 md:self-start">
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Achievements
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Milestones so far.
        </h2>

        <p className="mt-6 max-w-xs text-sm leading-7 text-white/35">
          Competitions, exhibitions, and leadership experiences that
          have shaped how I approach technology, teamwork, and
          problem solving.
        </p>

        <div className="mt-10 hidden items-center gap-3 md:flex">
          <span className="h-px w-10 bg-white/20" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            SELECTED MILESTONES
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="space-y-4">

        {/* ================= SIH ================= */}
        <article
          className="
            group relative overflow-hidden
            rounded-[30px]
            border border-blue-400/10
            bg-gradient-to-br from-blue-500/[0.06] to-white/[0.02]
            p-8
            transition-all duration-500
            hover:-translate-y-1
            hover:border-blue-400/20
            sm:p-10
          "
        >

          {/* Ambient glow */}
          <div
            className="
              pointer-events-none absolute
              -right-32 -top-32
              h-80 w-80
              rounded-full
              bg-blue-500/[0.07]
              blur-[100px]
              transition duration-700
              group-hover:bg-blue-500/[0.12]
            "
          />

          <div className="relative">

            {/* Top metadata */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />

                <p className="text-xs uppercase tracking-[0.2em] text-blue-300/60">
                  Smart India Hackathon · 2025
                </p>
              </div>

              <span className="font-mono text-[10px] text-white/20">
                01
              </span>
            </div>

            {/* Main achievement */}
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/25">
                SOFTWARE CATEGORY
              </p>

              <h3 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Top 100
              </h3>

              <p className="mt-2 text-lg text-white/35">
                among 900+ university teams
              </p>
            </div>

            <p className="mt-7 max-w-2xl leading-7 text-white/45">
              Selected among the top 100 teams with{" "}
              <span className="text-white/75">Journease</span>,
              a smart travel companion focused on travel management,
              analytics, and AI-powered functionality.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Smart India Hackathon",
                "Top 100",
                "Journease",
                "AI",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border border-white/[0.08]
                    bg-black/20
                    px-3 py-1.5
                    text-xs text-white/45
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                HACKATHON · 2025
              </span>

              <span className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300/70">
                ↗
              </span>
            </div>

          </div>
        </article>


        {/* ================= SAHAAY ================= */}
        <article
          className="
            group rounded-[28px]
            border border-white/10
            bg-white/[0.015]
            p-7
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-white/20
            hover:bg-white/[0.03]
            sm:p-8
          "
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-white/25">
                  02
                </span>

                <span className="h-px w-6 bg-white/10" />

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Pratibhuti Exhibition
                </p>
              </div>

              <h3 className="mt-4 text-xl font-medium">
                Sahaay
              </h3>

              <p className="mt-3 leading-7 text-white/40">
                Selected for exhibition with Sahaay, a women&apos;s
                safety application developed through Design Thinking
                and focused on real-world transportation scenarios.
              </p>

            </div>

            <span
              className="
                shrink-0 rounded-full
                border border-white/10
                bg-white/[0.025]
                px-3 py-1.5
                font-mono text-[9px]
                uppercase tracking-[0.15em]
                text-white/25
                transition
                group-hover:border-white/20
                group-hover:text-white/50
              "
            >
              Exhibited
            </span>

          </div>
        </article>


        {/* ================= DRIVESAFE ================= */}
        <article
          className="
            group rounded-[28px]
            border border-white/10
            bg-white/[0.015]
            p-7
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-white/20
            hover:bg-white/[0.03]
            sm:p-8
          "
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-white/25">
                  03
                </span>

                <span className="h-px w-6 bg-white/10" />

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Pratibhuti Exhibition
                </p>
              </div>

              <h3 className="mt-4 text-xl font-medium">
                DriveSafe
              </h3>

              <p className="mt-3 leading-7 text-white/40">
                Selected for exhibition with DriveSafe, an IoT and
                computer-vision based driver safety project designed
                to detect drowsiness through camera-based analysis.
              </p>

            </div>

            <span
              className="
                shrink-0 rounded-full
                border border-white/10
                bg-white/[0.025]
                px-3 py-1.5
                font-mono text-[9px]
                uppercase tracking-[0.15em]
                text-white/25
                transition
                group-hover:border-white/20
                group-hover:text-white/50
              "
            >
              Exhibited
            </span>

          </div>
        </article>


        {/* ================= LEADERSHIP ================= */}
        <article
          className="
            group rounded-[28px]
            border border-white/10
            bg-white/[0.015]
            p-7
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-white/20
            hover:bg-white/[0.03]
            sm:p-8
          "
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-white/25">
                  04
                </span>

                <span className="h-px w-6 bg-white/10" />

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Leadership
                </p>
              </div>

              <h3 className="mt-4 text-xl font-medium">
                Technical &amp; Project Leadership
              </h3>

              <p className="mt-3 leading-7 text-white/40">
                Leading teams across IEEE Web Development, PBL,
                Entrepreneurship, and Smart India Hackathon 2026,
                while working across technical and project-focused
                initiatives.
              </p>

            </div>

            <span
              className="
                shrink-0 rounded-full
                border border-white/10
                bg-white/[0.025]
                px-3 py-1.5
                font-mono text-[9px]
                uppercase tracking-[0.15em]
                text-white/25
                transition
                group-hover:border-white/20
                group-hover:text-white/50
              "
            >
              Lead
            </span>

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

    <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

      {/* Left */}
      <div className="md:sticky md:top-32 md:self-start">
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          What I work with.
        </h2>

        <p className="mt-6 max-w-xs text-sm leading-7 text-white/35">
          Technologies I use to build, experiment, and turn ideas into
          working software.
        </p>

        <div className="mt-10 hidden items-center gap-3 md:flex">
          <span className="h-px w-10 bg-white/20" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            TECH_STACK / 2026
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="grid gap-4 sm:grid-cols-2">

        {/* Languages */}
        <article
          className="
            group rounded-[26px]
            border border-white/10
            bg-white/[0.02]
            p-7
            transition-all duration-300
            hover:border-white/20
            hover:bg-white/[0.035]
          "
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              01 / Languages
            </p>

            <span className="text-xs text-white/15 group-hover:text-white/40">
              →
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "C++",
              "C",
              "Java",
              "SQL",
              "JavaScript",
              "TypeScript",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border border-white/[0.08]
                  bg-white/[0.025]
                  px-3 py-1.5
                  text-sm text-white/55
                  transition
                  group-hover:border-white/10
                  group-hover:text-white/70
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        {/* Web */}
        <article
          className="
            group rounded-[26px]
            border border-white/10
            bg-white/[0.02]
            p-7
            transition-all duration-300
            hover:border-white/20
            hover:bg-white/[0.035]
          "
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              02 / Web
            </p>

            <span className="text-xs text-white/15 group-hover:text-white/40">
              →
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
                  border border-white/[0.08]
                  bg-white/[0.025]
                  px-3 py-1.5
                  text-sm text-white/55
                  transition
                  group-hover:border-white/10
                  group-hover:text-white/70
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        {/* Mobile */}
        <article
          className="
            group rounded-[26px]
            border border-white/10
            bg-white/[0.02]
            p-7
            transition-all duration-300
            hover:border-white/20
            hover:bg-white/[0.035]
          "
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              03 / Mobile
            </p>

            <span className="text-xs text-white/15 group-hover:text-white/40">
              →
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React Native", "Expo"].map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border border-white/[0.08]
                  bg-white/[0.025]
                  px-3 py-1.5
                  text-sm text-white/55
                  transition
                  group-hover:border-white/10
                  group-hover:text-white/70
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        {/* Databases & Tools */}
        <article
          className="
            group rounded-[26px]
            border border-white/10
            bg-white/[0.02]
            p-7
            transition-all duration-300
            hover:border-white/20
            hover:bg-white/[0.035]
          "
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              04 / Tools
            </p>

            <span className="text-xs text-white/15 group-hover:text-white/40">
              →
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
                  border border-white/[0.08]
                  bg-white/[0.025]
                  px-3 py-1.5
                  text-sm text-white/55
                  transition
                  group-hover:border-white/10
                  group-hover:text-white/70
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        {/* Currently Exploring */}
        <article
          className="
            group relative overflow-hidden
            rounded-[26px]
            border border-blue-400/10
            bg-blue-400/[0.025]
            p-7
            transition-all duration-300
            hover:border-blue-400/20
            hover:bg-blue-400/[0.04]
            sm:col-span-2
          "
        >
          {/* Background glow */}
          <div
            className="
              pointer-events-none absolute
              -right-20 -top-24
              h-56 w-56
              rounded-full
              bg-blue-500/[0.06]
              blur-3xl
            "
            aria-hidden="true"
          />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

            <div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                  <span className="relative h-2 w-2 rounded-full bg-blue-400" />
                </span>

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/60">
                  Currently Exploring
                </p>
              </div>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
                Expanding beyond frontend development into backend systems,
                cloud infrastructure, DevOps, and stronger problem-solving
                foundations.
              </p>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              IN PROGRESS
            </span>
          </div>

          <div className="relative mt-7 flex flex-wrap gap-2">
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
                  border border-blue-300/[0.08]
                  bg-black/20
                  px-3 py-1.5
                  text-sm text-white/50
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

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

    {/* Section header */}
    <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

      {/* Left */}
      <div className="md:sticky md:top-32 md:self-start">
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Certifications
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Always learning.
        </h2>

        <p className="mt-6 max-w-xs text-sm leading-7 text-white/35">
          A collection of courses and certifications that reflect the
          technologies and concepts I&apos;ve been exploring.
        </p>

        <div className="mt-10 hidden items-center gap-3 md:flex">
          <span className="h-px w-10 bg-white/20" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            CONTINUOUS LEARNING
          </span>
        </div>
      </div>

      {/* Right */}
      <div>

        {/* Learning status */}
        <div className="mb-8 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            Currently expanding my stack
          </span>
        </div>

        {/* Certification cards */}
        <div className="grid gap-3 sm:grid-cols-2">

          {/* Advanced C++ */}
          <article
            className="
              group relative overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                absolute -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-blue-500/[0.06]
                blur-3xl
                transition
                group-hover:bg-blue-500/[0.1]
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-300/60">
                  C++
                </span>

                <span className="font-mono text-[9px] text-white/20">
                  2026
                </span>
              </div>

              <h3 className="mt-5 text-lg font-medium leading-6">
                Advanced C++ Training
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Spoken Tutorial · IIT Bombay
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                  CERTIFIED
                </span>
              </div>
            </div>
          </article>

          {/* Generative AI Mastermind */}
          <article
            className="
              group relative overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                absolute -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-purple-500/[0.05]
                blur-3xl
                transition
                group-hover:bg-purple-500/[0.09]
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-purple-300/60">
                  AI
                </span>

                <span className="font-mono text-[9px] text-white/20">
                  2026
                </span>
              </div>

              <h3 className="mt-5 text-lg font-medium leading-6">
                Generative AI Mastermind
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Outskill
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                  CERTIFIED
                </span>
              </div>
            </div>
          </article>

          {/* Prompt Engineering */}
          <article
            className="
              group relative overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                absolute -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-blue-500/[0.04]
                blur-3xl
                transition
                group-hover:bg-blue-500/[0.08]
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-300/50">
                  AI / LLM
                </span>

                <span className="font-mono text-[9px] text-white/20">
                  2026
                </span>
              </div>

              <h3 className="mt-5 text-lg font-medium leading-6">
                Introduction to Prompt Engineering for Generative AI
              </h3>

              <p className="mt-3 text-sm text-white/40">
                LinkedIn Learning
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                  CERTIFIED
                </span>
              </div>
            </div>
          </article>

          {/* What Is Generative AI */}
          <article
            className="
              group relative overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                absolute -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-purple-500/[0.04]
                blur-3xl
                transition
                group-hover:bg-purple-500/[0.08]
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-purple-300/50">
                  AI
                </span>

                <span className="font-mono text-[9px] text-white/20">
                  2026
                </span>
              </div>

              <h3 className="mt-5 text-lg font-medium leading-6">
                What Is Generative AI?
              </h3>

              <p className="mt-3 text-sm text-white/40">
                LinkedIn Learning
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                  CERTIFIED
                </span>
              </div>
            </div>
          </article>

          {/* Ethics */}
          <article
            className="
              group relative overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                absolute -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-amber-500/[0.04]
                blur-3xl
                transition
                group-hover:bg-amber-500/[0.08]
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-300/50">
                  ETHICS
                </span>

                <span className="font-mono text-[9px] text-white/20">
                  2025
                </span>
              </div>

              <h3 className="mt-5 text-lg font-medium leading-6">
                Ethics in the Age of Generative AI
              </h3>

              <p className="mt-3 text-sm text-white/40">
                LinkedIn Learning
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                  CERTIFIED
                </span>
              </div>
            </div>
          </article>

          {/* C Training */}
          <article
            className="
              group relative overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                absolute -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-green-500/[0.04]
                blur-3xl
                transition
                group-hover:bg-green-500/[0.08]
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-green-300/50">
                  C
                </span>

                <span className="font-mono text-[9px] text-white/20">
                  2025
                </span>
              </div>

              <h3 className="mt-5 text-lg font-medium leading-6">
                C Training
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Spoken Tutorial · IIT Bombay
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                  CERTIFIED
                </span>
              </div>
            </div>
          </article>

        </div>

        {/* Bottom learning statement */}
        <div className="mt-6 rounded-[24px] border border-dashed border-white/[0.08] px-6 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/35">
              Learning doesn&apos;t stop at certificates.
            </p>

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              BUILD → LEARN → BUILD AGAIN
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>{/* Contact */}
<section
  id="contact"
  className="relative overflow-hidden border-t border-white/10 px-6 py-32"
>
  {/* Background atmosphere */}
  <div
    className="
      pointer-events-none absolute
      left-1/2 top-1/2
      h-[500px] w-[500px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      bg-blue-500/[0.035]
      blur-[120px]
    "
    aria-hidden="true"
  />

  <div className="relative mx-auto max-w-6xl">

    {/* Header */}
    <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

      {/* Left */}
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something.
        </h2>

        <p className="mt-6 max-w-xs text-sm leading-7 text-white/35">
          Have an idea, opportunity, collaboration, or just want to talk
          about technology? My inbox is open.
        </p>
      </div>

      {/* Right */}
      <div>

        {/* Main CTA */}
        <div
          className="
            group relative overflow-hidden
            rounded-[28px]
            border border-white/10
            bg-white/[0.025]
            p-8
            transition-all duration-500
            hover:border-white/20
            hover:bg-white/[0.04]
            sm:p-10
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none absolute
              -right-24 -top-24
              h-64 w-64
              rounded-full
              bg-blue-500/[0.06]
              blur-3xl
              transition duration-500
              group-hover:bg-blue-500/[0.1]
            "
            aria-hidden="true"
          />

          <div className="relative">

            {/* Status */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                Open to opportunities
              </span>
            </div>

            <h3 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Have something in mind?
              <br />
              <span className="text-white/35">
                Let&apos;s talk.
              </span>
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-white/40">
              I&apos;m always interested in interesting projects,
              collaborations, technical opportunities, and ideas worth
              building.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

             <a
  href="mailto:omkailashmore@gmail.com"
  className="
    group/button
    inline-flex items-center justify-center
    rounded-full
    border border-white/15
    bg-white/[0.06]
    px-6 py-3
    text-sm font-medium
    text-white
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-blue-400/30
    hover:bg-blue-400/[0.08]
  "
>
                Send me an email

                <span className="ml-2 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/om-more-72ab85374/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  px-6 py-3
                  text-sm font-medium
                  text-white/70
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-white/20
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                LinkedIn
                <span className="ml-2 text-white/30">↗</span>
              </a>

            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">

          {/* Email */}
          <a
            href="mailto:omkailashmore@gmail.com"
            className="
              group rounded-2xl
              border border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-all duration-300
              hover:border-white/15
              hover:bg-white/[0.03]
            "
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                EMAIL
              </span>

              <span className="text-white/20 transition group-hover:text-white/60">
                ↗
              </span>
            </div>

            <p className="mt-4 text-sm text-white/55">
              omkailashmore@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/omkailasmore"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group rounded-2xl
              border border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-all duration-300
              hover:border-white/15
              hover:bg-white/[0.03]
            "
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                GITHUB
              </span>

              <span className="text-white/20 transition group-hover:text-white/60">
                ↗
              </span>
            </div>

            <p className="mt-4 text-sm text-white/55">
              github.com/omkailasmore
            </p>
          </a>

        </div>

      </div>
    </div>

    {/* Bottom social links */}
    <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">

      <div className="flex flex-wrap gap-6">
        <a
          href="https://github.com/omkailasmore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/30 transition hover:text-white"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/om-more-72ab85374/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/30 transition hover:text-white"
        >
          LinkedIn ↗
        </a>

        <a
          href="mailto:omkailashmore@gmail.com"
          className="text-sm text-white/30 transition hover:text-white"
        >
          Email ↗
        </a>
      </div>

      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
        BUILD SOMETHING WORTH SHIPPING
      </p>

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