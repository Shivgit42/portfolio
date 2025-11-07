import { Project } from "@/types/project";
import ProjectCard from "@/app/projects/components/ProjectCard";

const ChromeExtensions = () => {
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

export default ChromeExtensions;

const data: Project[] = [
  {
    logo: "/clario.png",
    title: "Clario",
    description:
      "A tool to save and organize bookmarks instantly. You can add pages via a popup or floating button, group them into folders, tag for quick search, and access everything from your Clario dashboard.",
    techStack: ["React", "Typescript", "Better Auth"],
    link: "https://chromewebstore.google.com/detail/clario/ponmpddnllnnbagafncnlofljhmnhdgd",
    source: "https://github.com/Shivgit42/Clario",
  },
  {
    logo: "/cat.png",
    title: "Linkedin Profile Changer",
    description:
      "This Chrome extension humorously replaces every image on LinkedIn including profile pictures, post images, and banners with cat images. It’s a fun way to browse LinkedIn with a lighthearted twist.",
    techStack: ["Javascript"],
    source:
      "https://github.com/Shivgit42/Chrome-Extension-Linkedin-Profile-Changer",
  },
];
