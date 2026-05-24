import { useEffect, useState } from "react";

export function TypingText({ words, className }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] -mb-1 bg-current animate-pulse" />
    </span>
  );
}
