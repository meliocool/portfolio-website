import { useEffect, useState } from "react";

export function LocalTime() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  return <span>{time} local</span>;
}
