import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gradient">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-title`} className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[image:var(--gradient-brand)]" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
