import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { Section } from "./Section";

const items = [
  {
    title: "B.Tech Information Technology",
    place: "R.M.D Engineering College",
    period: "2024 – 2028",
    detail: "CGPA: 7.9",
  },
  {
    title: "Higher Secondary Education",
    place: "12th Standard",
    period: "Completed",
    detail: "Percentage: 88%",
  },
  {
    title: "SSLC",
    place: "10th Standard",
    period: "Completed",
    detail: "Percentage: 95%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="My journey" title="Education">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--violet)] via-[var(--cyan)] to-transparent" />
        <ul className="space-y-10">
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 ${
                i % 2 === 0 ? "" : "sm:[&>div]:col-start-2"
              }`}
            >
              <span className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] glow">
                <FiBookOpen className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              <div className={`glass rounded-2xl p-6 ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.place}</p>
                <p className="text-xs uppercase tracking-wider text-gradient mt-2 font-semibold">
                  {item.period}
                </p>
                <p className="mt-3 text-sm font-medium">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
