import { useTheme } from "@/hooks/use-theme";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition hover:glow hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {theme === "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}
