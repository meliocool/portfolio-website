import { FaInstagram, FaSteam, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-8 border-t py-6 text-center text-sm text-muted-foreground">
      <p className="mb-3 font-medium">Find more about me in:</p>
      <div className="flex justify-center gap-5 text-lg">
        <a
          href="https://instagram.com/dhitandhitan"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaInstagram />
        </a>
        <a
          href="https://steamcommunity.com/id/meliogg/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaSteam />
        </a>
        <a
          href="https://discord.com/users/433609174698688533"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaDiscord />
        </a>
        <a
          href="https://x.com/dhitannnn"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaXTwitter />
        </a>
      </div>
      <p className="mt-4 text-xs">© 2025 Dhitan. All rights reserved.</p>
    </footer>
  );
}
