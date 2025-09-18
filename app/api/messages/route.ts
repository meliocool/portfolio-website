import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseServer } from "@/lib/supabaseServer";

const InsertSchema = z.object({
  displayName: z.string().trim().max(40).optional(),
  body: z.string().trim().min(1).max(300),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = Math.min(Number(searchParams.get("limit") ?? "50"), 100);

  const { data, error } = await supabaseServer
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    data?.map((m) => ({
      id: m.id,
      displayName: m.display_name,
      body: m.body,
      createdAt: m.created_at,
    })) ?? []
  );
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = InsertSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { displayName, body } = parsed.data;

  const { data, error } = await supabaseServer
    .from("messages")
    .insert({
      display_name: displayName && displayName.trim() ? displayName : "Guest",
      body,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({
    id: data.id,
    displayName: data.display_name,
    body: data.body,
    createdAt: data.created_at,
  });
}
