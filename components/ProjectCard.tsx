import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  subtitle,
  description,
  bullets,
  links,
}: {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  links?: { href: string; label: string }[];
}) {
  return (
    <Card className="h-full border-muted">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span>{title}</span>
          <div className="text-xs font-medium text-muted-foreground text-justify">
            {subtitle}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="mb-3 text-sm text-muted-foreground">{description}</p>
        <ul className="mb-4 space-y-2 text-sm">
          {bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">
              • {b}
            </li>
          ))}
        </ul>
        {links && (
          <div className="flex flex-wrap gap-2">
            {links.map((l) => (
              <Button key={l.href} asChild variant="outline" size="sm">
                <a href={l.href} target="_blank" rel="noreferrer">
                  <FaGithub className="size-5" />
                  {l.label}
                  <ExternalLink className="ml-1 size-3" />
                </a>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
