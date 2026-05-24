import { motion } from "framer-motion";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8 sm:p-10 text-base sm:text-lg leading-relaxed text-muted-foreground"
      >
        <p>
          I am a <span className="text-foreground font-semibold">B.Tech Information Technology</span>{" "}
          student at R.M.D Engineering College with a strong interest in frontend development and
          modern web technologies. I enjoy building responsive and user-friendly applications while
          continuously improving my problem-solving and development skills.
        </p>
        <p className="mt-4">
          My goal is to create impactful digital experiences through{" "}
          <span className="text-gradient font-semibold">clean UI design</span>, accessibility, and
          innovative solutions.
        </p>
      </motion.div>
    </Section>
  );
}
