import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl glass rounded-3xl p-8 text-center">
        <a href="#home" className="text-xl font-display font-bold text-gradient">
          Abinaya.dev
        </a>
        <ul className="mt-5 flex justify-center gap-3">
          {[
            { href: "https://github.com/abinaya-79", Icon: FaGithub, label: "GitHub" },
            {
              href: "https://www.linkedin.com/in/abinaya-a-b87062332",
              Icon: FaLinkedin,
              label: "LinkedIn",
            },
            { href: "mailto:abinaya7906@gmail.com", Icon: FiMail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:glow hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Designed &amp; Developed by{" "}
          <span className="text-gradient font-semibold">Abinaya</span> © 2026
        </p>
      </div>

      <AnimatePresence>
        {show && (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] text-white shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
