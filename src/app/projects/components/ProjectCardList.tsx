"use client";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge } from "@radix-ui/themes";
import { bricolage_grotesque } from "@/utils/fonts";

const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8">
      <Title title="Proof of Work" />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge
          color="gray"
          variant="solid"
          highContrast
          onClick={loadMoreProjects}
          className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}
        >
          <span>Load More</span>
          <span className="!ml-[-3px] mt-[1px]">
            <ChevronDownIcon className="h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200" />
          </span>
        </Badge>
      )}
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/clario.png",
    title: "Clario",
    description:
      "Clario is a modern bookmark manager to save websites, notes, images, and more - organized with folders, tags, smart previews, fast search, and a powerful browser extension.",
    techStack: [
      "Next.js",
      "Vite",
      "React",
      "Tailwind CSS",
      "Zustand",
      "Better Auth",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://clario.shivamte.me",
    source: "https://github.com/Shivgit42/Clario",
  },
  {
    logo: "/flowdraw-logo.png",
    title: "FlowDraw",
    description:
      "FlowDraw is a collaborative drawing tool for real-time creativity. Create and share canvases solo or with teammates, with smooth, low-latency interactions and persistent storage for your work.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Socket.IO",
      "Express",
      "PostgreSQL",
      "Zustand",
    ],
    link: "https://flowdraw.shivamte.me",
    source: "https://github.com/Shivgit42/FlowDraw",
  },
  {
    logo: "/chat-logo.png",
    title: "LoopRoom",
    description:
      "A lightweight, real-time chat application with temporary rooms that automatically expire when all users leave. Designed for quick, ephemeral conversations - no clutter, no permanent history.",
    techStack: ["React", "Vite", "TypeScript", "WebSocket", "Tailwind CSS"],
    link: "https://looproom.shivamte.me",
    source: "https://github.com/Shivgit42/LoopRoom",
  },
  {
    logo: "/rebrain-logo.png",
    title: "Rebrain",
    description:
      "ReBrain is your personal second brain - save, tag, and organize links, tweets, videos, documents, and notes in one place, with easy filtering, previewing, and sharing.",
    techStack: [
      "React",
      "Vite",
      "Typescript",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    link: "https://rebrain.shivamte.me",
    source: "https://github.com/Shivgit42/Rebrain",
  },
  {
    logo: "/wallet-5.svg",
    title: "RandomRich - Wallet App",
    description:
      "A fun and interactive wallet application where users are assigned a random balance upon sign-in, can transfer and receive money, and track all transactions in a transaction history.",
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://randomrich.shivamte.me",
    source: "https://github.com/Shivgit42/RandomRich",
  },
  {
    logo: "/sumz.svg",
    title: "SumZ - Article Summarizer",
    description:
      "SumZ is an article summarizer that quickly generates concise summaries of lengthy articles, helping users capture key points efficiently. With a user-friendly interface, it’s designed for speed, accuracy, and effortless reading.",
    techStack: ["React", "Redux", "Open AI", "Tailwind CSS"],
    link: "https://sumz.shivamte.me/",
    source: "https://github.com/Shivgit42/ai_summarizer",
  },
];
