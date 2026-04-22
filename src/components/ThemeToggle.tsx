import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const nextLabel = isDark ? "Modo Leitor" : "Modo Café";
  const ariaLabel = isDark ? "Ativar Modo Leitor (claro)" : "Ativar Modo Café (escuro)";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      title={nextLabel}
      className={`group relative inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-2.5 text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground sm:px-3 ${className}`}
    >
      <span className="relative inline-flex h-5 w-5 items-center justify-center">
        <Sun
          strokeWidth={1.25}
          className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
            isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <Moon
          strokeWidth={1.25}
          className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
          }`}
        />
      </span>
      <span className="hidden font-mono text-[10.5px] tracking-[0.18em] uppercase sm:inline">
        {isDark ? "Café" : "Leitor"}
      </span>
    </button>
  );
}
