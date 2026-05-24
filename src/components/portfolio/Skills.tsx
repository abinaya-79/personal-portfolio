import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiMysql } from "react-icons/si";
import { FiCode, FiCpu, FiLayers } from "react-icons/fi";

const groups = [
  {
    title: "Frontend Development",
    icon: FiLayers,
    items: [
      { label: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
      { label: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
      { label: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
      { label: "React.js", Icon: FaReact, color: "text-cyan-400" },
    ],
  },
  {
    title: "Programming Languages",
    icon: FiCode,
    items: [
      { label: "Java", Icon: FaJava, color: "text-orange-500" },
      { label: "C++", Icon: SiCplusplus, color: "text-blue-500" },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    items: [
      { label: "SQL", Icon: FaDatabase, color: "text-emerald-400" },
      { label: "MySQL", Icon: SiMysql, color: "text-blue-400" },
    ],
  },
  {
    title: "Core Concepts",
    icon: FiCpu,
    items: [
      { label: "OOP", Icon: FiCpu, color: "text-violet-400" },
      { label: "DBMS", Icon: FaDatabase, color: "text-cyan-400" },
      { label: "Data Structures", Icon: FiLayers, color: "text-pink-400" },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="My toolkit" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-3xl p-6 sm:p-8 transition hover:glow"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)]">
                <g.icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-3">
              {g.items.map(({ label, Icon, color }) => (
                <li
                  key={label}
                  className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-3 py-2 text-sm font-medium transition hover:scale-105 hover:border-primary/50"
                >
                  <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
