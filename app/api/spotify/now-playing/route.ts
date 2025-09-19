/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

async function getAccessToken() {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to refresh Spotify token: ${text}`);
  }
  const data = await res.json();
  return data.access_token as string;
}

type TrackInfo = {
  song: string | null;
  artist: string | null;
  url: string | null;
  albumArt?: string | null;
};

function pickTrackFromItem(item: any): TrackInfo {
  const song = item?.name ?? null;
  const artist = item?.artists?.map((a: any) => a.name).join(", ") ?? null;
  const url = item?.external_urls?.spotify ?? null;
  const albumArt =
    item?.album?.images?.[0]?.url ?? item?.images?.[0]?.url ?? null;
  return { song, artist, url, albumArt };
}

export async function GET() {
  try {
    const token = await getAccessToken();

    // * Curr Playing
    const cur = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing?market=ID",
      { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
    );

    if (cur.ok) {
      if (cur.status === 204) {
      } else {
        const json = await cur.json();
        const isPlaying = Boolean(json?.is_playing);
        if (isPlaying && json?.item) {
          const track = pickTrackFromItem(json.item);
          return NextResponse.json({
            isPlaying: true,
            ...track,
            source: "currently-playing",
          });
        }
      }
    }

    const rec = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
    );

    if (!rec.ok) {
      const text = await rec.text();
      return NextResponse.json({ error: text }, { status: rec.status });
    }

    const recent = await rec.json();
    const last = recent?.items?.[0];
    const playedAt = last?.played_at ?? null;
    const track = pickTrackFromItem(last?.track);

    return NextResponse.json({
      isPlaying: false,
      wasListening: track,
      playedAt,
      source: "recently-played",
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
