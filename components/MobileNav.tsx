"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Menu, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[80%] p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
        </SheetHeader>
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col">
          <Link
            href="/projects"
            className="flex items-center gap-3 px-4 py-3 text-base hover:bg-accent"
          >
            <span className="font-medium">Projects</span>
          </Link>

          <div className="my-1 border-t" />
          <button
            type="button"
            className="flex items-center gap-3 px-4 py-3 text-base hover:bg-accent"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <Sun className="size-5" />
            <span>Toggle Theme</span>
          </button>

          <div className="my-1 border-t" />

          <a
            href="https://github.com/meliocool"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-base hover:bg-accent"
          >
            <FaGithub className="size-5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dhitan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-base hover:bg-accent"
          >
            <FaLinkedin className="size-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:dhitanimam05@gmail.com"
            className="flex items-center gap-3 px-4 py-3 text-base hover:bg-accent"
          >
            <Mail className="size-5" />
            <span>Contact</span>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
