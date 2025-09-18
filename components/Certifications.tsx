import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Certifications() {
  const items = [
    {
      title: "Research Publication",
      subtitle: "ICCSCI 2025 (Elsevier)",
      description:
        "Published a paper titled Optimizing Asynchronous Performance in Node.js with Express and PostgreSQL.",
      image: "/ICCSCI.jpg",
      link: "https://drive.google.com/file/d/1G56kZzpQfstmA3phWrMeTE5LQFpcQJVy/view?usp=sharing",
    },
    {
      title: "SQL (Intermediate)",
      subtitle: "HackerRank, 2025",
      description:
        "Certified intermediate proficiency in SQL queries, joins, subqueries, and optimization.",
      image: "/hackerrank.png",
      link: "https://www.hackerrank.com/certificates/iframe/055c14b731a3",
    },
  ];

  return (
    <section id="certifications" aria-labelledby="certs-heading">
      <h2
        id="certs-heading"
        className="mb-4 text-lg font-semibold tracking-tight"
      >
        Certifications & Publications
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Card className="h-full border-muted hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  <span>{item.title}</span>
                  <div className="text-xs font-medium text-muted-foreground">
                    {item.subtitle}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="mb-3 w-full rounded-md"
                />
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
