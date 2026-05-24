import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TypingText } from "./TypingText";
import avatar from "@/assets/avatar.png";

const floatIcons = [
  { Icon: FaReact, top: "8%", left: "6%", color: "text-cyan-400", delay: 0 },
  { Icon: SiJavascript, top: "18%", right: "8%", color: "text-yellow-400", delay: 0.4 },
  { Icon: FaJava, bottom: "12%", left: "4%", color: "text-orange-500", delay: 0.8 },
  { Icon: FaHtml5, bottom: "20%", right: "6%", color: "text-orange-400", delay: 1.2 },
  { Icon: FaCss3Alt, top: "45%", left: "-2%", color: "text-blue-400", delay: 1.6 },
  { Icon: SiTypescript, top: "55%", right: "-2%", color: "text-blue-500", delay: 2 },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-dvh flex items-center pt-28 pb-16 px-4"
    >
      <div className="mx-auto grid max-w-6xl w-full items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Abinaya</span>{" "}
            <span className="inline-block animate-bounce">👋</span>
          </h1>
          <div className="text-xl sm:text-2xl font-display font-medium text-muted-foreground">
            I'm a{" "}
            <TypingText
              className="text-foreground"
              words={[
                "Full Stack Developer",
                "React Enthusiast",
                "Java Programmer",
                "UI Explorer",
              ]}
            />
          </div>
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            A passionate B.Tech Information Technology student focused on building modern,
            accessible, and user-friendly web experiences with clean UI and innovative solutions.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/resume.pdf"
              download="Abinaya-A-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FiDownload aria-hidden="true" /> Download Resume
            </a>
            <a
              href="https://github.com/abinaya-79"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:glow hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abinaya-a-b87062332"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:glow hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="mailto:abinaya7906@gmail.com"
              className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:glow hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FiMail aria-hidden="true" /> Connect With Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-full bg-[image:var(--gradient-brand)] opacity-30 blur-3xl" />
          <div className="glass relative h-full w-full overflow-hidden rounded-[2.5rem] glow">
            <img
              src={avatar}
              alt="Illustrated portrait of Abinaya, a developer working on a laptop"
              width={768}
              height={768}
              className="h-full w-full object-cover"
              decoding="async"
            />
          </div>

          {floatIcons.map(({ Icon, color, delay, ...pos }, i) => (
            <motion.div
              key={i}
              aria-hidden="true"
              className={`glass absolute flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
              style={pos as React.CSSProperties}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
