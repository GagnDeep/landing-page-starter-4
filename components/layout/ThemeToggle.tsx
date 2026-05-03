"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn("w-9 h-9 rounded-full flex items-center justify-center border border-border bg-background hover:bg-muted transition-colors", className)}
        aria-label="Toggle theme placeholder"
      />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center border border-border bg-background hover:bg-muted transition-colors overflow-hidden group",
        className
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <HugeiconsIcon
        icon={Sun03Icon}
        size={18}
        className="absolute text-foreground transition-all duration-500 ease-out dark:translate-y-8 dark:opacity-0"
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        size={18}
        className="absolute text-foreground transition-all duration-500 ease-out -translate-y-8 opacity-0 dark:translate-y-0 dark:opacity-100"
      />
    </button>
  );
}
