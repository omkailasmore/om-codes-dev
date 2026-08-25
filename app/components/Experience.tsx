const experiences = [
  {
    period: "2026 — Present",
    role: "Web Development Technical Lead",
    organization: "IEEE · MIT-ADT Student Branch",
    description:
      "Leading the web development technical team, contributing to the technical direction of projects and helping build a stronger development culture within the student branch.",
    tags: ["Web Development", "Technical Leadership", "Team Lead"],
  },
  {
    period: "2026 — Present",
    role: "Project Lead",
    organization: "PBL · Team Atlantis",
    description:
      "Leading a project-based learning team through planning, development, problem solving, and delivery of technical projects.",
    tags: ["Project Management", "Development", "Leadership"],
  },
  {
    period: "2026 — Present",
    role: "Team Lead",
    organization: "Entrepreneurship · Team Genesis",
    description:
      "Leading Team Genesis while working on turning ideas into structured solutions through research, planning, product thinking, and execution.",
    tags: ["Entrepreneurship", "Product Thinking", "Strategy"],
  },
  {
    period: "2026 — Present",
    role: "Team Lead",
    organization: "Smart India Hackathon 2026",
    description:
      "Leading the team for the 2026 edition of Smart India Hackathon, coordinating technical development, problem solving, and project execution.",
    tags: ["Hackathon", "Leadership", "Innovation"],
  },
  {
    period: "2025",
    role: "Team Member",
    organization: "Smart India Hackathon 2025 · Journease",
    description:
      "Built Journease, a travel expense management application with an integrated AI feature. The team was selected among the Top 100 software-category teams from more than 900 teams at the university.",
    tags: ["AI", "Web App", "SIH 2025"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/[0.07] px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-300/60">
              02 / Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where I&apos;ve been
              <br />
              <span className="text-white/30">
                building and leading.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
            Most of my experience so far has come from building projects,
            leading teams, participating in competitions, and taking
            responsibility for turning ideas into working solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.organization}-${experience.role}`}
              className="group grid gap-6 border-t border-white/[0.07] py-10 lg:grid-cols-[180px_1fr] lg:gap-12"
            >
              {/* Period */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                  {experience.period}
                </p>
              </div>

              {/* Content */}
              <div className="relative">

                {/* Number */}
                <span className="absolute -left-7 top-1 hidden font-mono text-[9px] text-white/10 lg:block">
                  0{index + 1}
                </span>

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-white/85 sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-blue-300/60">
                      {experience.organization}
                    </p>
                  </div>

                  <span className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-300 group-hover:border-blue-400/30 group-hover:text-blue-300 sm:flex">
                    ↗
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[10px] uppercase tracking-wide text-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-white/[0.07] pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
            Current focus
          </p>

          <p className="mt-4 max-w-3xl text-xl leading-relaxed tracking-tight text-white/55 sm:text-2xl">
            Building stronger technical foundations while learning how to
            lead people, projects, and products.
          </p>
        </div>

      </div>
    </section>
  );
}