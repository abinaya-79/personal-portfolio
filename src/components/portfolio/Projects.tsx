import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Section } from "./Section";
import cineImg from "@/assets/project-cine-ai.png";
import detoxImg from "@/assets/project-detox.png";
import bankImg from "@/assets/project-banking.png";

const projects = [
  {
    title: "Cine AI",
    image: cineImg,
    description:
      "An AI-powered movie recommendation platform designed to provide intelligent movie suggestions based on user interests, trends, and viewing preferences.",
    stack: ["React.js", "JavaScript", "CSS", "AI APIs"],
  },
  {
    title: "Digital Detox Planner",
    image: detoxImg,
    description:
      "A productivity and wellness-focused web application that helps users monitor screen time, organize detox activities, and build healthier digital habits.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Corporate Banking Portal",
    image: bankImg,
    description:
      "A modern banking interface for managing transactions, account services, and corporate banking operations with a secure and professional user experience.",
    stack: ["React.js", "JavaScript", "SQL", "CSS"],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass group flex flex-col overflow-hidden rounded-3xl transition hover:glow"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} project preview`}
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3 pt-4 border-t border-border">
                <a
                  href="https://github.com/abinaya-79"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} GitHub repository`}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium transition hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <FaGithub aria-hidden="true" /> Code
                </a>
                <a
                  href="#"
                  aria-label={`${p.title} live demo`}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <FiExternalLink aria-hidden="true" /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
