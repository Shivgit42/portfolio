import { Project } from "@/types/project";
import ProjectCard from "@/app/projects/components/ProjectCard";

const LearningProjects = () => {
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

export default LearningProjects;

const data: Project[] = [
  {
    logo: "/hoistspace.png",
    title: "HoistSpace",
    description:
      "Master JavaScript hoisting through interactive practice. 150+ questions with AI-powered explanations to help you understand var, let, const, and function hoisting behavior.",
    techStack: ["React", "Typescript", "Tailwind CSS", "Supabase", "OpenAI"],
    link: "https://hoistspace.shivamte.me/",
    source: "https://github.com/Shivgit42/Hoisting-Playground",
  },
];
