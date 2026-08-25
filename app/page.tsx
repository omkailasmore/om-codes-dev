
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
            text-sm font-medium text-black
            transition-all duration-300
            hover:-translate-y-0.5 hover:bg-white/90
          "
        >
          View my work

          <span className="ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
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
    <div className="hidden lg:flex lg:justify-end">
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
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/30">
                  Experience
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Where I&apos;m building.
                </h2>
              </div>

              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-sm text-white/40">
                      2026 — Present
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      Web Development Technical Lead
                    </h3>

                    <p className="mt-1 text-white/50">
                      MIT-ADT IEEE Student Branch
                    </p>
                  </div>

                  <span className="h-fit w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                    Leadership
                  </span>
                </div>

                <div className="mt-8">
                  <p className="leading-8 text-white/50">
                    Leading the web development technical team at the MIT-ADT
                    IEEE Student Branch, working with the team to build
                    technical skills and contribute to web development
                    initiatives.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Git",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-6xl">
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
                Projects exploring software, hardware, AI, computer vision,
                and real-world problem solving.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {/* DriveSafe */}
              <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Computer Vision · IoT
                </p>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">DriveSafe</h3>
                  <span className="text-white/30 transition group-hover:text-white">
                    ↗
                  </span>
                </div>

                <p className="mt-6 leading-7 text-white/50">
                  An IoT-assisted driver safety system designed to detect
                  drowsiness using camera-based eye analysis and respond
                  through connected hardware.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Computer Vision",
                    "EAR",
                    "ESP32",
                    "IoT",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/40"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>

              {/* Journease */}
              <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Smart India Hackathon 2025
                </p>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">Journease</h3>
                  <span className="text-white/30 transition group-hover:text-white">
                    ↗
                  </span>
                </div>

                <p className="mt-6 leading-7 text-white/50">
                  A smart travel companion designed to help users manage
                  journeys, expenses, routes, analytics, and travel data with
                  integrated AI functionality.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["AI", "Travel", "Analytics", "Web"].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/40"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>

              {/* Sahaay */}
              <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Design Thinking
                </p>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">Sahaay</h3>
                  <span className="text-white/30 transition group-hover:text-white">
                    ↗
                  </span>
                </div>

                <p className="mt-6 leading-7 text-white/50">
                  A women&apos;s safety application designed around real-world
                  situations involving cabs, public transportation, and
                  ride-hailing services.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Safety", "Design Thinking", "Application"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/40"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </article>

              {/* ScholarAI */}
              <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  In Development
                </p>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">ScholarAI</h3>
                  <span className="text-white/30 transition group-hover:text-white">
                    ↗
                  </span>
                </div>

                <p className="mt-6 leading-7 text-white/50">
                  An academic-focused application currently being developed
                  while exploring modern mobile development, TypeScript, and
                  AI-powered functionality.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["React Native", "Expo", "TypeScript", "AI"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/40"
                      >
                        {technology}
                      </span>
                    )
                  )}
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
    <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Achievements
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Milestones so far.
        </h2>
      </div>

      <div className="divide-y divide-white/10">
        {/* Achievement 1 */}
        <article className="py-8 first:pt-0">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Smart India Hackathon · 2025
              </p>

              <h3 className="mt-2 text-xl font-medium">
                Top 100 — Software Category
              </h3>

              <p className="mt-2 leading-7 text-white/40">
                Selected among the top 100 teams from 900+ teams at the
                university with Journease.
              </p>
            </div>

            <span className="text-sm text-white/30">
              01
            </span>
          </div>
        </article>

        {/* Achievement 2 */}
        <article className="py-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Pratibhuti Exhibition
              </p>

              <h3 className="mt-2 text-xl font-medium">
                Sahaay
              </h3>

              <p className="mt-2 leading-7 text-white/40">
                Selected for exhibition with Sahaay, a women's safety
                application developed through Design Thinking.
              </p>
            </div>

            <span className="text-sm text-white/30">
              02
            </span>
          </div>
        </article>

        {/* Achievement 3 */}
        <article className="py-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Pratibhuti Exhibition
              </p>

              <h3 className="mt-2 text-xl font-medium">
                DriveSafe
              </h3>

              <p className="mt-2 leading-7 text-white/40">
                Selected for exhibition with DriveSafe, an IoT and
                computer-vision based driver safety project.
              </p>
            </div>

            <span className="text-sm text-white/30">
              03
            </span>
          </div>
        </article>

        {/* Achievement 4 */}
        <article className="py-8 last:pb-0">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Leadership
              </p>

              <h3 className="mt-2 text-xl font-medium">
                Technical & Project Leadership
              </h3>

              <p className="mt-2 leading-7 text-white/40">
                Leading teams across IEEE Web Development, PBL,
                Entrepreneurship, and Smart India Hackathon 2026.
              </p>
            </div>

            <span className="text-sm text-white/30">
              04
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
    <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          What I work with.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Languages */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
          <p className="text-sm text-white/30">Languages</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["C++", "C", "Java", "SQL", "JavaScript", "TypeScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Web */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
          <p className="text-sm text-white/30">Web Development</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["HTML", "CSS", "React", "Next.js", "Tailwind CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
          <p className="text-sm text-white/30">Mobile</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["React Native", "Expo"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases & Tools */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
          <p className="text-sm text-white/30">Databases & Tools</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["MySQL", "Git", "GitHub", "VS Code"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Exploring */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:col-span-2">
          <p className="text-sm text-white/30">
            Currently Exploring
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
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
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60"
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