export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/[0.07] px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-300/60">
              01 / About
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              More than just
              <br />
              writing code.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-white/55">
              I&apos;m a Computer Science Engineering student at MIT-ADT
              University, currently exploring the intersection of software,
              systems, and real-world problem solving.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/35">
              I enjoy taking an idea from a rough concept to something that
              actually works. From web applications and backend systems to
              IoT-based projects, hackathons, and technical leadership, I&apos;m
              constantly trying to build, learn, and improve.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-20 grid border-y border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">

          <Stat
            value="IEEE"
            label="Web Development"
            description="Technical Lead"
          />

          <Stat
            value="Top 100"
            label="SIH 2025"
            description="Software Category"
          />

          <Stat
            value="3"
            label="Leadership Roles"
            description="PBL · E-Cell · SIH"
          />

          <Stat
            value="4+"
            label="Major Projects"
            description="Software · AI · IoT"
          />

        </div>

        {/* Philosophy */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
              How I work
            </p>

            <p className="mt-5 max-w-3xl text-2xl font-medium leading-relaxed tracking-tight text-white/75 sm:text-3xl">
              Learn aggressively.
              <span className="text-white/30">
                {" "}Build consistently.
                {" "}Lead when necessary.
                {" "}Ship what matters.
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Currently exploring
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Web Development",
                "Backend",
                "AWS",
                "DevOps",
                "DSA",
                "AI",
                "System Design",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-white/45"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/[0.07] px-5 py-7 sm:border-r lg:border-b-0">
      <p className="text-2xl font-semibold tracking-tight text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-white/60">
        {label}
      </p>

      <p className="mt-1 text-[11px] text-white/25">
        {description}
      </p>
    </div>
  );
}