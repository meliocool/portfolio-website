"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DiRedis } from "react-icons/di";
import {
  FaGolang,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
} from "react-icons/fa6";
import {
  SiPostgresql,
  SiOpenapiinitiative,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

export default function TechStack() {
  const items = [
    { label: "Go", icon: FaGolang },
    { label: "Node.js", icon: FaNodeJs },
    { label: "TypeScript", icon: SiTypescript },
    { label: "Python", icon: FaPython },
    { label: "PostgreSQL", icon: SiPostgresql },
    { label: "Redis", icon: DiRedis },
    { label: "Docker", icon: FaDocker },
    { label: "OpenAPI", icon: SiOpenapiinitiative },
    { label: "Git/GitHub", icon: FaGitAlt },
    { label: "MongoDB", icon: SiMongodb },
  ];

  return (
    <section aria-labelledby="stack">
      <h2 id="stack" className="mb-4 text-lg font-semibold tracking-tight">
        Tech Stack
      </h2>
      <TooltipProvider>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
          {items.map((t) => {
            const Icon = t.icon;
            const extraSize = t.label === "Go" ? "h-20 w-20" : "h-16 w-16";
            return (
              <Tooltip key={t.label}>
                <TooltipTrigger asChild>
                  <div className="flex h-32 w-32 items-center justify-center rounded-md border hover:bg-accent cursor-pointer">
                    <Icon className={extraSize} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{t.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </section>
  );
}
