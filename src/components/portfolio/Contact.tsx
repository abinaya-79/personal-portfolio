import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { FiMail, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring";

  return (
    <Section id="contact" eyebrow="Let's talk" title="Get In Touch">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold">Let's build something together</h3>
          <p className="mt-3 text-muted-foreground">
            I'm always open to discussing new opportunities, collaborations, or just having a chat
            about technology and design.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href="mailto:abinaya7906@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-border p-4 transition hover:border-primary/50 hover:glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)]">
                  <FiMail className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                  <span className="block text-sm font-semibold">abinaya7906@gmail.com</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/abinaya-79"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border p-4 transition hover:border-primary/50 hover:glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)]">
                  <FaGithub className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">GitHub</span>
                  <span className="block text-sm font-semibold">github.com/abinaya-79</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abinaya-a-b87062332"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border p-4 transition hover:border-primary/50 hover:glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)]">
                  <FaLinkedin className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</span>
                  <span className="block text-sm font-semibold">linkedin.com/in/abinaya-a</span>
                </span>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          noValidate
          className="glass rounded-3xl p-8 space-y-5"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your name"
              className={inputCls}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-destructive">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
              className={inputCls}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me about your project..."
              className={inputCls + " resize-none"}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-destructive">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FiSend aria-hidden="true" />
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
