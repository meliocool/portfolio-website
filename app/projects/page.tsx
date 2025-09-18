import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const items = [
    {
      title: "ARKIVE",
      subtitle: "Go, PostgreSQL, Docker",
      description:
        "Decentralized photo‑sharing app with layered architecture and modern DevOps practices.",
      bullets: [
        "Clean Handler–Service–Repository backend in Go, ensuring a modular, and maintainable codebase.",
        "Containerized the application and PostgreSQL database with Docker Compose for seamless deployment on DigitalOcean.",
        "Built secure auth with JWT/bcrypt, added SendGrid email verification, and integrated IPFS for decentralized photo storage.",
      ],
      links: [{ href: "https://github.com/meliocool/arkive", label: "GitHub" }],
    },
    {
      title: "ByteSize",
      subtitle: "Go, PostgreSQL",
      description:
        "Content‑addressable storage with chunk‑level deduplication and concurrent pipelines.",
      bullets: [
        "Goroutines and channels implemented for concurrent upload and retrieval pipelines, improving throughput and responsiveness.",
        "PostgreSQL used as a metadata store to manage file chunks, indexes, and deduplication logic for efficient storage.",
        "Designed a modular Handler–Service–Repository architecture to improve maintainability, and enforces separation of concerns",
      ],
      links: [
        { href: "https://github.com/meliocool/bytesize", label: "GitHub" },
      ],
    },
    {
      title: "Dirgantara Anime",
      subtitle: "Node.js, Express, PostgreSQL, Redis",
      description:
        "Research‑backed API optimized for asynchronous performance over large anime datasets.",
      bullets: [
        "Endpoints for search, genre, studio, and user AnimeLists.",
        "Performance: connection pooling, Redis caching, Promise.all batching.",
        "Findings published at ICCSCI 2025 (Elsevier).",
      ],
      links: [
        {
          href: "https://github.com/meliocool/researchmethodology",
          label: "GitHub",
        },
      ],
    },
    {
      title: "K-Next",
      subtitle: "Express, PostgreSQL",
      description:
        "API for personalized K-Drama recommendations using content similarity.",
      bullets: [
        "Content-based recommendations using synopsis, genre, cast, and tags with confidence scoring.",
        "Results highlights shared attributes like genres and tags.",
        "Fast REST API with Node.js and Express backend.",
      ],
      links: [{ href: "https://github.com/meliocool/k-next", label: "GitHub" }],
    },
    {
      title: "Akarui",
      subtitle: "MERN Stack",
      description:
        "Full-stack event management platform built as a guided course project.",
      bullets: [
        "Frontend with Next.js + Tailwind.",
        "Backend APIs with Express + MongoDB.",
        "Full-fledged functional web app, with admin dashboard",
        "Simulated payment flows and user authentication.",
      ],
      links: [
        {
          href: "https://github.com/meliocool/front-end-akarui",
          label: "Frontend GitHub",
        },
        {
          href: "https://github.com/meliocool/back-end-akarui",
          label: "Backend GitHub",
        },
      ],
    },
    {
      title: "Zuno",
      subtitle: "MERN Stack with Socket.IO",
      description:
        "Full-stack Web App to add friends, and have real time conversation",
      bullets: [
        "Frontend with React (JSX), Tailwind, DaisyUI, Zustand",
        "Backend APIs with Express + Node.js and MongoDB.",
        "User authentication with JWT and real time communication with Socket.IO",
      ],
      links: [
        {
          href: "https://github.com/meliocool/zuno",
          label: "GitHub",
        },
      ],
    },
    {
      title: "SSS-Vision",
      subtitle: "Python with Flask",
      description:
        "Web-based Flask powered Python ML to help new WAVs identify tripleS members and sub-units!",
      bullets: [
        "3rd-Semester Artificial Intelligence Group Project",
        "Frontend: HTML5, CSS3, JavaScript (with AJAX)",
        "Backend: with Python + Flask",
        "Machine Learning: MTCCN, cv2, torch, numpy, inceptionresnetv1, cosine_similarity",
      ],
      links: [
        {
          href: "https://github.com/meliocool/sss-vision",
          label: "GitHub",
        },
      ],
    },
    {
      title: "Alzheimer Detection",
      subtitle: "Python with Flask",
      description:
        "AI-Powered Health Insights: Preliminary Alzheimer's Detection Web App",
      bullets: [
        "4th-Semester Data Analytics Group Project",
        "Frontend: React (JSX) with Tailwind + React Bits",
        "Backend: Flask (Python), RESTful API design",
        "Machine Learning: Scikit-learn (for model training & .pkl export), Pandas (for data preprocessing)",
      ],
      links: [
        {
          href: "https://github.com/meliocool/alzheimerdetection",
          label: "GitHub",
        },
      ],
    },
    {
      title: "Rilo",
      subtitle: "Python",
      description:
        "Phi4-Mini based Locally Run Customized LLM, powered by Ollama and ElevenLabs for Streaming TTS",
      bullets: [
        "Fully customized AI Sidekick with a relaxed helpful tone inpired by Jarvis and Miss Minutes",
        "Can play music on Spotify with a voice command",
        "Uses Ollama (Phi4-Mini) and ElevenLabs for Text-To-Speech",
      ],
      links: [
        {
          href: "https://github.com/meliocool/Rilo",
          label: "GitHub",
        },
      ],
    },
    {
      title: "Pinterest Scraping Tool",
      subtitle: "Python, Selenium, Beautiful Soup",
      description:
        "Web Scraping tool to find and download images (for personal non-commercial use)",
      bullets: [
        "Scrape images from Pinterest based on a specified search query",
        "Selenium for web automation and BeautifulSoup for parsing HTML. The script scrolls through the Pinterest search results and downloads images to a designated folder.",
        "For personal/educational usage only, and commercial use is prohibited :D",
      ],
      links: [
        {
          href: "https://github.com/meliocool/pinterest-scraping",
          label: "GitHub",
        },
      ],
    },
  ];

  return (
    <main className="min-h-dvh text-foreground antialiased">
      <Header />
      <div className="mx-auto max-w-4xl px-4 pb-24">
        <h1 className="mb-8 mt-8 text-2xl font-bold tracking-tight">
          All Projects
        </h1>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              subtitle={p.subtitle}
              description={p.description}
              bullets={p.bullets}
              links={p.links}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
