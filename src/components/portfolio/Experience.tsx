import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { Section } from "./Section";

const items = [
  {
    company: "InternPe",
    role: "Java Programming Intern",
    period: "May 2025 – June 2025",
    description:
      "Worked on Java-based applications and strengthened programming fundamentals and problem-solving skills through practical development tasks.",
  },
  {
    company: "Thiranex",
    role: "Web Development Intern",
    period: "May 2026 – June 2026",
    description:
      "Gained practical experience in frontend web development and responsive interface design while working on real-world web technologies.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:glow"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-brand)] opacity-20 blur-2xl transition group-hover:opacity-40" />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[image:var(--gradient-brand)] glow">
              <FiBriefcase className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold">{e.role}</h3>
            <p className="text-gradient font-semibold mt-1">{e.company}</p>
            <p className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <FiCalendar aria-hidden="true" /> {e.period}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
