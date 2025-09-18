"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Avatar } from "./ui/avatar";
import Swal from "sweetalert2";

type Msg = {
  id: string;
  displayName: string | null;
  body: string;
  createdAt: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const listRef = useRef<HTMLDivElement | null>(null);

  async function load() {
    const res = await fetch("/api/messages?limit=50", { cache: "no-store" });
    const data: Msg[] = await res.json();
    setMessages(data.reverse());
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [messages]);

  async function send() {
    const body = input.trim();
    if (!body) return;
    setInput("");

    const displayName = name.trim() || "Guest";

    const temp: Msg = {
      id: `temp_${Date.now()}`,
      displayName,
      body,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, temp]);

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ displayName, body }),
    });

    if (!res.ok) {
      setMessages((prev) => prev.filter((m) => m.id !== temp.id));
      Swal.fire({
        title: "Error!",
        text: "Failed to send message!",
        icon: "error",
      });
      return;
    }

    const saved = (await res.json()) as Msg;
    setMessages((prev) => prev.map((m) => (m.id === temp.id ? saved : m)));
  }

  return (
    <section id="chat" className="mx-auto max-w-4xl">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        Leave a Message (every visitor can see) :D
      </h2>
      <div className="flex h-[500px] flex-col overflow-hidden rounded-lg border shadow bg-background">
        <div className="flex items-center gap-2 border-b p-3">
          <Avatar className="h-17 w-17">
            <Image
              src="/okarun.png"
              width={64}
              height={64}
              alt="Dhitan"
              className="rounded-full"
            />
          </Avatar>
          <div className="text-lg font-medium">Dhitan</div>
          <span className="ml-1 h-2 w-2 rounded-full bg-emerald-500" />
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
          {messages.map((m) => (
            <div key={m.id} className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl bg-primary px-3 py-2 text-primary-foreground">
                <span className="mr-1 font-medium">
                  {m.displayName || "Guest"}:
                </span>
                {m.body}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t p-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (default: Guest)"
            className="w-28 flex-shrink-0 rounded-md border px-2 py-1 text-xs sm:w-40"
          />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message…"
            className="flex-1 min-w-[120px] rounded-md border px-2 py-1 text-sm"
            maxLength={300}
          />
          <button
            onClick={send}
            className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground sm:px-4 sm:py-2"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
