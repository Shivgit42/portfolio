import { Project } from "@/types/project";
import ProjectCard from "@/app/projects/components/ProjectCard";

const ClientProjects = () => {
  return (
    <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-8 max-sm:mt-4 pb-8">
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
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
    </div>
  );
};

export default ClientProjects;

const data: Project[] = [
  {
    logo: "/bot.png",
    title: "Mailmind - AI Email Assistant",
    description:
      "AI assistant that summarizes, searches, and manages your emails using natural language. Powered by Groq LLM with 15-min Redis caching.",
    techStack: [
      "React",
      "Typescript",
      "Node",
      "Express",
      "Open AI",
      "OpenRouter",
      "Redis",
      "Google apis",
      "Gmail api",
    ],
    link: "https://mailmind.shivamte.me/",
    source: "https://github.com/Shivgit42/Mailmind-Assistant",
  },
  {
    logo: "/event.png",
    title: "Eventsync",
    description:
      "Event Management System helps organize and manage events efficiently with timezone support, update history, and profile-based filtering.",
    techStack: [
      "React",
      "JavaScript",
      "Node",
      "Express",
      "Open AI",
      "MongoDB",
      "Zustand",
    ],
    link: "https://eventsync.shivamte.me/",
    source: "https://github.com/Shivgit42/event-management-app",
  },
  {
    logo: "/report.png",
    title: "dacoid",
    description:
      "An android based mobile app version using JavaScript. This is fitness app where you can set your goals, track progress, schedule workout time, and much more.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://fitnessappbyshivam.netlify.app/",
    source: "https://github.com/Shivgit42/Figma-Dacoid-Assignment",
  },
];
