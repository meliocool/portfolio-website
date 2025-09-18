"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("@/components/MobileNav"), {
  ssr: false,
});

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <div className="text-xl font-bold tracking-tight">
          <Link href="/">DHITAN</Link>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <Link href="/projects" className="hover:underline font-bold">
            Projects
          </Link>
          <ThemeToggle />
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a
              href="https://github.com/meliocool"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a
              href="https://www.linkedin.com/in/dhitan"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="size-5" />
            </a>
          </Button>
          <Button asChild variant="default" className="ml-1">
            <a href="mailto:dhitanimam05@gmail.com">
              <Mail className="size-4" />
              Contact
            </a>
          </Button>
        </div>
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
