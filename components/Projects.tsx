import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="mb-4 text-lg font-semibold tracking-tight"
      >
        Projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          title="ARKIVE"
          subtitle="Go, PostgreSQL, Docker"
          description="Decentralized photo‑sharing app with layered architecture and modern DevOps practices."
          bullets={[
            "Clean Handler–Service–Repository backend in Go, ensuring a modular, and maintainable codebase.",
            "Containerized the application and PostgreSQL database with Docker Compose for seamless deployment on DigitalOcean.",
            "Built secure auth with JWT/bcrypt, added SendGrid email verification, and integrated IPFS for decentralized photo storage.",
          ]}
          links={[
            {
              href: "https://github.com/meliocool/arkive",
              label: "GitHub",
            },
          ]}
        />
        <ProjectCard
          title="ByteSize"
          subtitle="Go, PostgreSQL"
          description="Content‑addressable storage with chunk‑level deduplication and concurrent pipelines."
          bullets={[
            "Goroutines and channels implemented for concurrent upload and retrieval pipelines, improving throughput and responsiveness.",
            "PostgreSQL used as a metadata store to manage file chunks, indexes, and deduplication logic for efficient storage.",
            "Designed a modular Handler–Service–Repository architecture to improve maintainability, and enforces separation of concerns",
          ]}
          links={[
            {
              href: "https://github.com/meliocool/bytesize",
              label: "GitHub",
            },
          ]}
        />
        <ProjectCard
          title="Dirgantara Anime"
          subtitle="Node.js, Express, PostgreSQL, Redis"
          description="Research‑backed API optimized for asynchronous performance over large anime datasets."
          bullets={[
            "Endpoints for search, genre, studio, and user AnimeLists.",
            "Performance: connection pooling, Redis caching, Promise.all batching.",
            "Findings published at ICCSCI 2025 (Elsevier).",
          ]}
          links={[
            {
              href: "https://github.com/meliocool/researchmethodology",
              label: "GitHub",
            },
          ]}
        />
        <ProjectCard
          title="K-Next"
          subtitle="Node.js, Express, Python"
          description="API for personalized K-Drama recommendations using content similarity across synopsis, genres, and tags."
          bullets={[
            "Content-based recommendations using synopsis, genre, cast, and tags with confidence scoring.",
            "Results highlights shared attributes like genres and tags.",
            "Fast REST API with Node.js and Express backend.",
          ]}
          links={[
            {
              href: "https://github.com/meliocool/k-next",
              label: "GitHub",
            },
          ]}
        />
      </div>
      <div className="mt-6 text-right">
        <a
          href="/projects"
          className="text-sm font-medium text-primary hover:underline"
        >
          More projects →
        </a>
      </div>
    </section>
  );
}
