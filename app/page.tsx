import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import Certifications from "@/components/Certifications";
import ChatBox from "@/components/ChatBox";

export default function Page() {
  return (
    <main className="min-h-dvh text-foreground antialiased">
      <Header />
      <div className="mx-auto max-w-4xl px-4 pb-24">
        <Hero />
        <Separator className="my-8" />
        <TechStack />
        <Separator className="my-8" />
        <Projects />
        <Separator className="my-8" />
        <Certifications />
        <Separator className="my-8" />
        <ChatBox />
        <Footer />
      </div>
    </main>
  );
}
