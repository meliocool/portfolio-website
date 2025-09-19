"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { LocalTime } from "@/helper/utils";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import { PiReadCvLogo } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="mt-10">
      <Card className="overflow-hidden border-muted">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar className="h-17 w-16">
              <Image
                src="/profile.jpg"
                width={200}
                height={200}
                alt="Dhitan"
                className="rounded-full"
              />
            </Avatar>
            <div>
              <h1 className="text-2xl font-semibold leading-tight">
                Hey, I’m Dhitan :D
              </h1>
              <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="size-4" /> Jakarta, ID • <LocalTime />
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge className="gap-1" variant="secondary">
              <span className="size-2 rounded-full bg-emerald-500" /> Available
              for internships
            </Badge>
            <Badge variant="outline">Backend Developer</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="max-w-3xl text-sm text-muted-foreground text-justify">
            5th-semester Computer Science student at BINUS University, expected
            to graduate in 2027. Hands-on experience building backend systems
            and APIs with Go, Node.js, MongoDB, and PostgreSQL. Skilled in
            database design, optimization, and deploying applications with
            Docker. Passionate about solving real-world problems through
            efficient backend architectures and eager to apply technical
            knowledge in an internship setting
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild size="sm">
              <a
                href="https://drive.google.com/file/d/12Nbz3_NCz0R9i3oAS4xb_RAMyPtRpb9Q/preview"
                target="_blank"
                rel="noreferrer"
              >
                <PiReadCvLogo className="h-4 w-4" />
                View CV
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a
                href="https://drive.google.com/uc?export=download&id=12Nbz3_NCz0R9i3oAS4xb_RAMyPtRpb9Q"
                target="_blank"
                rel="noreferrer"
              >
                <FaFileDownload className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
