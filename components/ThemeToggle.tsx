"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(
        document.documentElement.classList.contains("dark") || prefersDark
      );
    }
  }, []);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}
