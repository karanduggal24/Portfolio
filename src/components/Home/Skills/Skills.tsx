import { skills, skills2 } from "@/static data/static";

// Bento size pattern for visual rhythm
const BENTO_PATTERN = ["wide", "small", "small", "small", "small", "wide", "small", "small", "wide", "small", "small"];

function getBentoClass(index: number) {
  const pattern = BENTO_PATTERN[index % BENTO_PATTERN.length];
  switch (pattern) {
    case "wide":  return "col-span-2 row-span-1";
    default:      return "col-span-1 row-span-1";
  }
}

function BentoSkillCard({
  skill,
  index,
}: {
  skill: { id: number; name: string; img?: React.ElementType };
  index: number;
}) {
  const IconComp = skill.img;
  const bentoClass = getBentoClass(index);
  const isWide = bentoClass.includes("col-span-2");

  return (
    <div
      className={`
        ${bentoClass}
        group relative flex items-center justify-center overflow-hidden
        rounded-2xl sm:rounded-3xl
        border border-white/10 dark:border-white/10
        bg-white/10 dark:bg-white/5
        backdrop-blur-md
        shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]
        hover:bg-white/20 dark:hover:bg-white/10
        hover:border-secondary/30 dark:hover:border-secondary/30
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        transition-all duration-500 ease-out
        cursor-none
        p-4 sm:p-6
        min-h-[90px] sm:min-h-[110px]
      `}
    >
      {/* Frosted inner glow on hover */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-secondary/10 via-transparent to-transparent dark:from-secondary/15" />

      {/* Subtle top-left shine line */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 rounded-full" />

      <div
        className={`relative z-10 flex ${isWide ? "flex-row gap-5" : "flex-col gap-2"} items-center justify-center`}
      >
        {IconComp && (
          <IconComp
            className={`
              ${isWide ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"}
              text-secondary dark:text-secondary
              drop-shadow-lg
              transition-transform duration-500
              group-hover:scale-110
            `}
          />
        )}
        <span
          className={`
            ${isWide ? "text-sm sm:text-base" : "text-[10px] sm:text-xs"}
            font-bold tracking-widest uppercase
            text-secondary/60 dark:text-secondary/60
            group-hover:text-secondary dark:group-hover:text-secondary
            transition-colors duration-300
            text-center leading-tight
          `}
        >
          {skill.name}
        </span>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5 sm:mb-7">
      <div className="h-px flex-1 bg-secondary/15 dark:bg-secondary/15" />
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-secondary/40 dark:text-secondary/40 whitespace-nowrap px-1">
        {children}
      </span>
      <div className="h-px flex-1 bg-secondary/15 dark:bg-secondary/15" />
    </div>
  );
}

function Skills() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-5xl mx-auto">

      {/* Ambient glow blobs for glass depth */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[120px] -z-10" />

      {/* Heading */}
      <div className="text-center mb-14 sm:mb-20">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-secondary/35 dark:text-secondary/35 mb-3">
          What I work with
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-secondary dark:text-secondary">
          Skills
        </h1>
      </div>

      {/* Front-End */}
      <div className="mb-12 sm:mb-16">
        <SectionLabel>Front-End</SectionLabel>
        <div className="grid grid-cols-3 sm:grid-cols-4 auto-rows-[90px] sm:auto-rows-[110px] gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <BentoSkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>

      {/* Back-End */}
      <div>
        <SectionLabel>Back-End</SectionLabel>
        <div className="grid grid-cols-3 sm:grid-cols-4 auto-rows-[90px] sm:auto-rows-[110px] gap-3 sm:gap-4">
          {skills2.map((skill, i) => (
            <BentoSkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
}

export default Skills;