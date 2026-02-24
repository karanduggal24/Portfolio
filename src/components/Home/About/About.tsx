import { motion } from "motion/react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { aboutData } from "@/static data/static";

const iconMap = {
  GraduationCap,
  Briefcase,
};

function About() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-16 sm:py-24 overflow-hidden">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-60 -left-60 w-[500px] h-[500px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -bottom-60 -right-60 w-[500px] h-[500px] rounded-full bg-secondary/5 dark:bg-secondary/8 blur-[120px] -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 sm:mb-20 relative z-10"
      >
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-secondary/35 dark:text-secondary/35 mb-3">
          My journey
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-secondary dark:text-secondary">
          Education & Experience
        </h1>
        <div className="w-16 h-[3px] bg-secondary/30 dark:bg-secondary/30 mx-auto rounded-full mt-4" />
      </motion.div>

      {/* Bento Grid - Consistent Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 relative z-10">
        {aboutData.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <BentoCard key={item.id} item={item} Icon={Icon} index={index} />
          );
        })}
      </div>
    </section>
  );
}

function BentoCard({
  item,
  Icon,
  index,
}: {
  item: { title: string; place: string; duration: string; mode?: string; gradient: string };
  Icon: React.ElementType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:bg-white/20 dark:hover:bg-white/10 hover:border-secondary/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-500 p-6 sm:p-8"
    >
      {/* Top shine */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 rounded-full" />
      
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-secondary/10 via-transparent to-transparent dark:from-secondary/15" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        
        {/* Icon & Title Row */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/15 dark:bg-secondary/15 border border-secondary/20 dark:border-secondary/20 group-hover:bg-secondary/25 transition-colors duration-300">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary dark:text-secondary" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary dark:text-secondary leading-snug mb-2">
              {item.title}
            </h3>
            
            {item.mode && (
              <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full bg-secondary/10 dark:bg-secondary/10 border border-secondary/20 dark:border-secondary/20 text-secondary/70 dark:text-secondary/70">
                {item.mode}
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2.5 pl-16 sm:pl-[72px]">
          <div className="flex items-center gap-2.5 text-secondary/70 dark:text-secondary/70">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-secondary/10 dark:bg-secondary/10 border border-secondary/15">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            </div>
            <span className="text-xs sm:text-sm font-medium truncate">{item.place}</span>
          </div>
          
          <div className="flex items-center gap-2.5 text-secondary/70 dark:text-secondary/70">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-secondary/10 dark:bg-secondary/10 border border-secondary/15">
              <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            </div>
            <span className="text-xs sm:text-sm font-medium">{item.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
