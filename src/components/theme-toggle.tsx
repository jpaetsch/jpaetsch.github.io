import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full
        border border-white/10 bg-white/10 shadow-lg backdrop-blur-md
        backdrop-saturate-150 hover:opacity-80"
      aria-label="Toggle Theme"
      type="button"
    >
      {/* Track */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center
          justify-between px-2"
      >
        <Sun className="text-muted h-4 w-4" />
        <Moon className="text-muted h-4 w-4" />
      </div>
      {/* Bubble */}
      <motion.div
        animate={{
          x: theme === "dark" ? 34 : 4,
          transition: { type: "spring", stiffness: 700, damping: 30 },
        }}
        className="absolute top-[calc(50%-0.75rem)] z-10 flex h-6 w-6
          items-center justify-center rounded-full bg-orange-500 shadow"
      >
        {theme === "dark" ? (
          <Moon className="text-background h-4 w-4" />
        ) : (
          <Sun className="text-background h-4 w-4" />
        )}
      </motion.div>
    </button>
  );
};
