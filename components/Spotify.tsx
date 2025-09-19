"use client";
import { timeAgo } from "@/helper/utils";
import { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";

type SpotifyData = {
  isPlaying: boolean;
  song?: string;
  artist?: string;
  url?: string;
  playedAt?: string | null;
  wasListening?: {
    song: string;
    artist: string;
    url?: string;
  } | null;
};

export default function Spotify() {
  const [data, setData] = useState<SpotifyData | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const res = await fetch("/api/spotify/now-playing", {
        cache: "no-store",
      });
      const json = await res.json();
      if (mounted) setData(json);
    }
    load();
    const id = setInterval(load, 30_000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  if (!data) return null;

  return (
    <a
      href={data.url ?? data.wasListening?.url ?? "#"}
      className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
      target="_blank"
      rel="noreferrer"
    >
      <span className="inline-block">
        <FaMusic />
      </span>

      {data.isPlaying ? (
        <span>
          Listening to <b>{data.song}</b> by {data.artist} on Spotify
        </span>
      ) : data.wasListening ? (
        <span>
          Was listening to <b>{data.wasListening.song}</b> by{" "}
          {data.wasListening.artist} on Spotify
          {data.playedAt && (
            <span className="ml-1 text-neutral-400">
              • {timeAgo(data.playedAt)}
            </span>
          )}
        </span>
      ) : null}
    </a>
  );
}
